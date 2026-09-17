const fs = require("node:fs/promises");
const path = require("node:path");
const assert = require("node:assert/strict");
const { build } = require("esbuild");
const { JSDOM } = require("jsdom");

const root = path.resolve(__dirname, "..");
const routes = [
  ["/", "home", "Home"],
  ["/about", "about", "About Us"],
  ["/services", "services", "Our Services"],
  ["/vendors", "vendors", "Our Vendors"],
  ["/projects", "projects", "Our Projects"],
  ["/contacts", "contacts", "Contact Us"],
  ["/careers", "careers", "Careers"],
  ["/privacy", "privacy", "Privacy Policy"],
  ["/terms", "terms", "Terms of Use"],
];

async function prerender() {
  process.env.NODE_ENV = "production";
  const renderer = path.join(root, "node_modules/.cache/rga/render-pages.cjs");
  await build({
    absWorkingDir: root,
    entryPoints: ["scripts/render-pages.jsx"],
    outfile: renderer,
    bundle: true,
    platform: "node",
    packages: "external",
    format: "cjs",
    loader: { ".js": "jsx" },
    define: { "process.env.NODE_ENV": '"production"' },
  });
  const { renderPage } = require(renderer);
  const template = await fs.readFile(
    path.join(root, "build/index.html"),
    "utf8",
  );
  const assets = JSON.parse(
    await fs.readFile(path.join(root, "build/asset-manifest.json"), "utf8"),
  );
  for (const [pathname, chunk, title] of routes) {
    const dom = new JSDOM(template);
    const { document } = dom.window;
    document.getElementById("root").innerHTML = renderPage(pathname);
    document.title = `${title} | RGA Qatar - Robert Guild Associates`;
    const chunkUrl = Object.values(assets.files).find(
      (url) => url.includes(`/js/${chunk}.`) && url.endsWith(".js"),
    );
    assert.ok(chunkUrl, `Missing route chunk for ${pathname}`);
    const preload = document.createElement("link");
    preload.rel = "preload";
    preload.setAttribute("as", "script");
    preload.href = chunkUrl;
    document.head.append(preload);
    assert.equal(preload.getAttribute("as"), "script");
    assert.equal(
      document.querySelectorAll("main h1").length,
      1,
      `Missing initial content for ${pathname}`,
    );
    assert.equal(document.querySelectorAll("main").length, 1);
    for (const image of document.querySelectorAll("img[src]")) {
      assert.ok(image.getAttribute("src").startsWith("/images/optimized/"));
      assert.ok(image.hasAttribute("srcset"));
      await fs.access(path.join(root, "build", image.getAttribute("src")));
    }
    if (pathname === "/services") {
      assert.equal(
        document.querySelector("main img").getAttribute("loading"),
        "eager",
      );
      assert.equal(
        document.querySelector("main img").getAttribute("fetchpriority"),
        "high",
      );
      assert.equal(
        document.querySelectorAll(".service-panel img[src]").length,
        0,
      );
    }
    if (pathname === "/") {
      const hero = document.querySelector(".hero-video");
      assert.equal(hero.getAttribute("src"), "/video/hero-df568505855b.mp4");
      assert.ok(hero.hasAttribute("muted"));
      assert.ok(hero.hasAttribute("loop"));
      assert.ok(
        !hero.hasAttribute("autoplay"),
        "Autoplay must respect reduced motion after hydration",
      );
      await fs.access(path.join(root, "build", hero.getAttribute("poster")));
      const video = await fs.stat(
        path.join(root, "build", hero.getAttribute("src")),
      );
      assert.ok(video.size < 1500000, "Hero video exceeds its transfer budget");
      assert.equal(
        document.querySelector('.hero-bottom, button[aria-controls="hero-video"]'),
        null,
        "The removed hero footer must not appear in prerendered content",
      );
    }
    const filename = pathname === "/" ? "index.html" : `${chunk}.html`;
    await fs.writeFile(path.join(root, "build", filename), dom.serialize());
    dom.window.close();
    console.log(
      `Generated and verified ${pathname}: initial content, responsive images, and ${chunk} chunk preload.`,
    );
  }
}

prerender().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
