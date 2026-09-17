const fs = require('node:fs/promises');
const path = require('node:path');
const { createHash } = require('node:crypto');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..');
const output = path.join(root, 'public/images/optimized');

async function optimizeImages() {
  await fs.mkdir(output, { recursive: true });
  const sources = ['logo.png', 'logo_icon.png', 'rga-map.png', 'audiostuffs.png'];
  for (const directory of ['logos', 'projects', 'services']) {
    const files = await fs.readdir(path.join(root, 'public/images', directory));
    sources.push(...files.filter(file => /\.(png|jpe?g)$/i.test(file)).map(file => `${directory}/${file}`));
  }
  const manifest = {};
  let originalBytes = 0;
  let largestVariantBytes = 0;
  for (const source of sources.sort()) {
    const input = await fs.readFile(path.join(root, 'public/images', source));
    const metadata = await sharp(input).metadata();
    const widths = source === 'audiostuffs.png' ? [640, 960, 1600, 2400]
      : source === 'logo.png' ? [320, 640, 800]
      : source === 'logo_icon.png' ? [64, 128, 192]
      : source.startsWith('logos/') ? [96, 128, 160, 240, 320, 480]
      : [96, 128, 160, 240, 320, 480, 640, 960, 1280];
    const variants = [];
    for (const width of [...new Set(widths.map(size => Math.min(size, metadata.width)))]) {
      const { data, info } = await sharp(input).rotate().resize({ width, withoutEnlargement: true })
        .webp({ quality: source.includes('logo') ? 90 : 82, effort: 6 }).toBuffer({ resolveWithObject: true });
      const hash = createHash('sha256').update(data).digest('hex').slice(0, 12);
      const name = `${source.replace(/\.[^.]+$/, '').replaceAll('/', '-')}-${info.width}-${hash}.webp`;
      await fs.writeFile(path.join(output, name), data);
      variants.push({ src: `/images/optimized/${name}`, width: info.width, height: info.height, bytes: data.length });
    }
    manifest[`/images/${source}`] = variants;
    originalBytes += input.length;
    largestVariantBytes += variants[variants.length - 1].bytes;
  }
  const groups = { shared: {}, vendors: {}, projects: {}, services: {}, contacts: {} };
  for (const [source, variants] of Object.entries(manifest)) {
    const group = source.includes('/logos/') ? 'vendors'
      : source.includes('/projects/') ? 'projects'
      : source.includes('/services/') || source.endsWith('/audiostuffs.png') ? 'services'
      : source.endsWith('/rga-map.png') ? 'contacts' : 'shared';
    const fallback = variants.find(image => image.width >= 640) || variants[variants.length - 1];
    groups[group][source] = {
      src: fallback.src,
      srcSet: variants.map(image => `${image.src} ${image.width}w`).join(', '),
      width: fallback.width,
      height: fallback.height,
    };
  }
  await fs.mkdir(path.join(root, 'src/data/images'), { recursive: true });
  for (const [group, images] of Object.entries(groups)) {
    await fs.writeFile(path.join(root, `src/data/images/${group}.json`), `${JSON.stringify(images, null, 2)}\n`);
  }
  console.log(`Optimized ${sources.length} images: ${originalBytes} original bytes -> ${largestVariantBytes} bytes for largest WebP variants.`);
}

optimizeImages().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
