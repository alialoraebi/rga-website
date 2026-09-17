import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { lazy } from "react";
import { MemoryRouter } from "react-router-dom";
import App, { AppContent } from "./App";
import { vendors } from "./pages/Vendors";
import Services from "./pages/Services";
import Vendors from "./pages/Vendors";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

beforeEach(() => {
  window.history.replaceState({}, "", "/");
  window.scrollTo = jest.fn();
  window.matchMedia = jest.fn().mockImplementation(() => ({
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  jest
    .spyOn(HTMLMediaElement.prototype, "play")
    .mockImplementation(function () {
      this.dispatchEvent(new Event("play"));
      return Promise.resolve();
    });
  jest
    .spyOn(HTMLMediaElement.prototype, "pause")
    .mockImplementation(function () {
      this.dispatchEvent(new Event("pause"));
    });
});

afterEach(() => jest.restoreAllMocks());

test("pending routes show a centered spinner with an accessible loading status", () => {
  const PendingPage = lazy(() => new Promise(() => {}));
  const pages = Object.fromEntries(
    [
      "Home",
      "About",
      "Services",
      "Vendors",
      "Projects",
      "Contact",
      "Careers",
      "Privacy",
      "Terms",
    ].map(
      (name) => [name, PendingPage],
    ),
  );
  render(
    <MemoryRouter>
      <AppContent pages={pages} />
    </MemoryRouter>,
  );
  const status = screen.getByRole("status");
  expect(status).toHaveClass("grid", "place-items-center");
  expect(within(status).getByText("Loading...")).toHaveClass("sr-only");
  expect(status.querySelector('[aria-hidden="true"]')).toHaveClass(
    "animate-spin",
    "motion-reduce:animate-none",
  );
});

test("provides one main landmark separate from site navigation and footer", async () => {
  render(<App />);
  await screen.findByRole("heading", { level: 1 });
  const main = screen.getByRole("main");
  expect(main).toContainElement(screen.getByRole("heading", { level: 1 }));
  expect(main).not.toContainElement(screen.getByRole("navigation"));
  expect(main).not.toContainElement(screen.getByRole("contentinfo"));
  expect(
    screen.getByRole("link", { name: "Skip to main content" }),
  ).toHaveAttribute("href", `#${main.id}`);
});

test("mobile navigation hides closed links and supports Escape with focus return", () => {
  render(<App />);
  const toggle = screen.getByRole("button", { name: "Open navigation" });
  const panel = document.getElementById(toggle.getAttribute("aria-controls"));
  expect(toggle).toHaveAttribute("aria-expanded", "false");
  expect(within(panel).queryByRole("link")).not.toBeInTheDocument();
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute("aria-expanded", "true");
  const homeLink = within(panel).getByRole("link", { name: "Home" });
  expect(homeLink).toHaveAttribute("aria-current", "page");
  homeLink.focus();
  fireEvent.keyDown(homeLink, { key: "Escape" });
  expect(panel).not.toBeVisible();
  expect(toggle).toHaveFocus();
});

test("each vendor is represented once and decorative graphics are hidden", async () => {
  const { container } = render(<App />);
  await screen.findByRole("heading", { level: 1 });
  vendors.forEach((vendor) => {
    expect(screen.getAllByRole("img", { name: vendor.name })).toHaveLength(1);
  });
  container.querySelectorAll("svg").forEach((icon) => {
    expect(icon).toHaveAttribute("aria-hidden", "true");
    expect(icon).toHaveAttribute("focusable", "false");
  });
});

test("hero plays the original muted video without the bottom strip", async () => {
  const { container } = render(<App />);
  await screen.findByRole("heading", { level: 1 });
  const video = container.querySelector("video");
  expect(video).toHaveAttribute("src", "/video/hero-df568505855b.mp4");
  expect(video).toHaveAttribute(
    "poster",
    "/video/hero-df568505855b-poster.webp",
  );
  expect(video).toHaveAttribute("loop");
  expect(video).toHaveAttribute("playsinline");
  expect(video.muted).toBe(true);
  expect(video).not.toHaveAttribute("autoplay");
  expect(HTMLMediaElement.prototype.play).toHaveBeenCalled();
  expect(container.querySelector(".hero-bottom")).not.toBeInTheDocument();
  expect(
    screen.queryByText("PRECISION IN EVERY CONNECTION."),
  ).not.toBeInTheDocument();
  expect(screen.queryByText("AUDIO / VIDEO / CONTROL")).not.toBeInTheDocument();
  expect(
    screen.queryByRole("button", { name: /background video/i }),
  ).not.toBeInTheDocument();
});

test("reduced motion keeps the hero video still", async () => {
  window.matchMedia.mockImplementation((query) => ({
    matches: query === "(prefers-reduced-motion: reduce)",
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  render(<App />);
  await screen.findByRole("heading", { level: 1 });
  expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();
  expect(HTMLMediaElement.prototype.pause).toHaveBeenCalled();
});

test("service buttons expose only expanded content", () => {
  render(
    <MemoryRouter>
      <Services />
    </MemoryRouter>,
  );
  const trigger = screen.getByRole("button", { name: "Consulting" });
  const panel = document.getElementById(trigger.getAttribute("aria-controls"));
  expect(panel).toHaveAttribute("aria-hidden", "true");
  expect(panel).toHaveAttribute("inert");
  expect(within(panel).queryByRole("img")).not.toBeInTheDocument();
  expect(panel.querySelector("img")).not.toHaveAttribute("src");
  fireEvent.click(trigger);
  expect(trigger).toHaveAttribute("aria-expanded", "true");
  expect(panel).toHaveClass("service-panel-open");
  expect(panel).toHaveAttribute("aria-hidden", "false");
  expect(panel).not.toHaveAttribute("inert");
  expect(within(panel).getByRole("img")).toBeInTheDocument();
  const loadedSource = panel.querySelector("img").getAttribute("src");
  expect(loadedSource).toMatch(/\/images\/optimized\/.*\.webp$/);
  fireEvent.click(trigger);
  expect(trigger).toHaveAttribute("aria-expanded", "false");
  expect(panel).not.toHaveClass("service-panel-open");
  expect(panel).toHaveAttribute("aria-hidden", "true");
  expect(panel).toHaveAttribute("inert");
  expect(within(panel).queryByRole("img")).not.toBeInTheDocument();
  expect(panel.querySelector("img")).toHaveAttribute("src", loadedSource);
});

test.each([
  [Vendors, "Vendor category", "Control Systems", "2 vendors"],
  [Projects, "Project category", "Airports", "3 projects"],
])(
  "category selection updates results and announces their count",
  (Component, label, category, count) => {
    render(
      <MemoryRouter>
        <Component />
      </MemoryRouter>,
    );
    fireEvent.change(screen.getByRole("combobox", { name: label }), {
      target: { value: category },
    });
    expect(screen.getByRole("status")).toHaveTextContent(count);
    expect(screen.getByRole("button", { name: category })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  },
);

test("career applications collect Qatar eligibility details and a résumé", () => {
  window.history.replaceState({}, "", "/careers");
  const { container } = render(<Careers />);
  const form = container.querySelector("form");
  expect(form).toHaveAttribute(
    "action",
    "https://formsubmit.co/careers@rgaqatar.com",
  );
  expect(form).toHaveAttribute("method", "POST");
  expect(form).toHaveAttribute("enctype", "multipart/form-data");
  expect(
    screen.getByRole("combobox", { name: "Are you currently based in Qatar? *" }),
  ).toBeRequired();
  expect(
    screen.getByRole("combobox", {
      name: "Qatar residency and work-authorization status *",
    }),
  ).toBeRequired();
  expect(
    screen.getByRole("combobox", { name: "Are you willing to relocate to Qatar? *" }),
  ).toBeRequired();
  const resume = screen.getByLabelText("Upload your résumé *");
  expect(resume).toBeRequired();
  expect(resume).toHaveAttribute("name", "attachment");
  const coverLetter = screen.getByLabelText("Upload a cover letter (optional)");
  expect(coverLetter).not.toBeRequired();
  expect(coverLetter).toHaveAttribute("name", "Cover letter");
  expect(coverLetter).toHaveAttribute("type", "file");
  expect(screen.getByRole("checkbox")).toBeRequired();
});

test("career application enforces FormSubmit's combined attachment limit", () => {
  window.history.replaceState({}, "", "/careers");
  render(<Careers />);
  const resume = screen.getByLabelText("Upload your résumé *");
  const coverLetter = screen.getByLabelText("Upload a cover letter (optional)");
  fireEvent.change(resume, {
    target: { files: [{ size: 6 * 1024 * 1024 }] },
  });
  fireEvent.change(coverLetter, {
    target: { files: [{ size: 5 * 1024 * 1024 }] },
  });
  expect(screen.getByRole("alert")).toHaveTextContent(
    "Your résumé and cover letter must be 10 MB or smaller in total.",
  );
  expect(resume.checkValidity()).toBe(false);
  expect(coverLetter.checkValidity()).toBe(false);
});

test("career application confirms a completed FormSubmit redirect", async () => {
  window.history.replaceState({}, "", "/careers?submitted=true");
  render(<Careers />);
  const confirmation = await screen.findByRole("status");
  expect(confirmation).toHaveTextContent(
    "Your details and résumé have been sent successfully.",
  );
  expect(confirmation).toHaveFocus();
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Thank you for your application.",
    }),
  ).toBeInTheDocument();
  expect(screen.queryByText("APPLICATION RECEIVED / RGA QATAR")).not.toBeInTheDocument();
  expect(screen.queryByRole("form")).not.toBeInTheDocument();
});

test("project buttons open a named native dialog and close it", () => {
  HTMLDialogElement.prototype.showModal = jest.fn(function () {
    this.setAttribute("open", "");
  });
  HTMLDialogElement.prototype.close = jest.fn(function () {
    this.removeAttribute("open");
  });
  render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>,
  );
  fireEvent.click(
    screen.getByRole("button", { name: "Beirut International Airport" }),
  );
  const dialog = screen.getByRole("dialog", {
    name: "Beirut International Airport",
  });
  expect(dialog).toHaveAccessibleDescription(/Located in Beirut/);
  fireEvent.click(within(dialog).getByRole("button", { name: "Back" }));
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Beirut International Airport" }),
  ).toHaveFocus();
  fireEvent.click(
    screen.getByRole("button", { name: "Beirut International Airport" }),
  );
  fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape" });
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Beirut International Airport" }),
  ).toHaveFocus();
});

test("client-side navigation updates the title and focuses main content", async () => {
  render(<App />);
  fireEvent.click(
    within(screen.getByRole("navigation", { name: "Primary" })).getByRole(
      "link",
      { name: "About" },
    ),
  );
  expect(document.title).toBe("About Us | RGA Qatar - Robert Guild Associates");
  expect(screen.getByRole("main")).toHaveFocus();
  expect(
    await screen.findByRole("heading", { level: 1, name: "About Us" }),
  ).toBeInTheDocument();
  expect(screen.getByRole("main")).toHaveFocus();
});

test.each([
  [true, "true", "status", "Message sent successfully!", undefined],
  [true, true, "status", "Message sent successfully!", undefined],
  [false, "true", "alert", "Failed to send message. Please try again later.", undefined],
  [true, "false", "alert", "Failed to send message. Please try again later.", undefined],
  [true, false, "alert", "Failed to send message. Please try again later.", undefined],
  [true, undefined, "alert", "Failed to send message. Please try again later.", undefined],
  [
    false,
    "false",
    "alert",
    "Unable to send your message: Please activate your form.",
    "Please activate your form.",
  ],
  [
    true,
    "false",
    "alert",
    "Unable to send your message: Please activate your form.",
    "Please activate your form.",
  ],
  [
    false,
    "false",
    "alert",
    "Failed to send message. Please try again later.",
    { unexpected: "non-text error" },
  ],
])(
  "contact announces FormSubmit outcome (HTTP ok: %s, success: %s)",
  async (ok, success, role, message, serviceMessage) => {
    const originalFetch = global.fetch;
    global.fetch = jest.fn().mockResolvedValue({
      ok,
      json: async () => ({ success, message: serviceMessage }),
    });
    try {
      window.history.replaceState({}, "", "/contacts?test=1#form");
      render(<Contact />);
      const fields = {
        "First Name": "Test",
        "Last Name": "User",
        Email: "test@example.com",
        "Phone Number (optional)": "+97400000000",
        Subject: "Accessibility test",
        Message: "Test message",
      };
      Object.entries(fields).forEach(([label, value]) => {
        const input = screen.getByRole("textbox", { name: label });
        if (label.endsWith("(optional)")) expect(input).not.toBeRequired();
        else expect(input).toBeRequired();
        fireEvent.change(input, { target: { value } });
      });
      fireEvent.click(screen.getByRole("button", { name: "Send Message" }));
      await waitFor(() =>
        expect(screen.getByRole(role)).toHaveTextContent(message),
      );
      expect(global.fetch).toHaveBeenCalledTimes(1);
      const [url, request] = global.fetch.mock.calls[0];
      expect(url).toBe("https://formsubmit.co/ajax/info@rgaqatar.com");
      expect(request.method).toBe("POST");
      expect(request.headers).toEqual({
        "Content-Type": "application/json",
        Accept: "application/json",
      });
      expect(JSON.parse(request.body)).toEqual({
        firstName: "Test",
        lastName: "User",
        name: "Test User",
        email: fields.Email,
        phone: fields["Phone Number (optional)"],
        subject: fields.Subject,
        message: fields.Message,
        _subject: "RGA website enquiry: Accessibility test",
        _template: "table",
        _url: `${window.location.origin}/contacts`,
        _honey: "",
      });
      expect(screen.getByRole("button", { name: "Send Message" })).toBeEnabled();
      expect(screen.getByRole("textbox", { name: "Message" })).toHaveValue(
        role === "status" ? "" : fields.Message,
      );
    } finally {
      global.fetch = originalFetch;
    }
  },
);
