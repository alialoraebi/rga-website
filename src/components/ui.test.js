import { act, render, screen } from "@testing-library/react";
import { Reveal } from "./ui";

test("reveal content stays visible and does not animate when reduced motion is requested", () => {
  const originalObserver = window.IntersectionObserver;
  const originalAnimate = HTMLElement.prototype.animate;
  let intersect;
  const animate = jest.fn();
  HTMLElement.prototype.animate = animate;
  window.matchMedia = jest.fn(() => ({
    matches: true,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  window.IntersectionObserver = jest.fn((callback) => {
    intersect = callback;
    return { observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn() };
  });
  try {
    const { unmount } = render(<Reveal>Always available content</Reveal>);
    expect(screen.getByText("Always available content")).toBeVisible();
    act(() => intersect([{ isIntersecting: true }]));
    expect(animate).not.toHaveBeenCalled();
    unmount();
  } finally {
    window.IntersectionObserver = originalObserver;
    HTMLElement.prototype.animate = originalAnimate;
  }
});

test("enabling reduced motion cancels an active reveal and unmount removes its listener", () => {
  const originalObserver = window.IntersectionObserver;
  const originalAnimate = HTMLElement.prototype.animate;
  let intersect;
  let preferenceChanged;
  const cancel = jest.fn();
  const preference = {
    matches: false,
    addEventListener: jest.fn((event, callback) => {
      preferenceChanged = callback;
    }),
    removeEventListener: jest.fn(),
  };
  const animate = jest.fn(() => ({ cancel }));
  HTMLElement.prototype.animate = animate;
  window.matchMedia = jest.fn(() => preference);
  const observer = {
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  };
  window.IntersectionObserver = jest.fn((callback) => {
    intersect = callback;
    return observer;
  });
  try {
    const { unmount } = render(<Reveal>Animated content</Reveal>);
    act(() => intersect([{ isIntersecting: true }]));
    expect(animate).toHaveBeenCalledTimes(1);
    expect(animate).toHaveBeenCalledWith(
      [
        { transform: "translate3d(0, 14px, 0)", opacity: 0.92 },
        { transform: "translate3d(0, 0, 0)", opacity: 1 },
      ],
      expect.objectContaining({
        duration: 450,
        fill: "backwards",
      }),
    );
    expect(observer.unobserve).toHaveBeenCalledTimes(1);
    preference.matches = true;
    act(() => preferenceChanged());
    expect(cancel).toHaveBeenCalled();
    expect(screen.getByText("Animated content")).toBeVisible();
    unmount();
    expect(observer.disconnect).toHaveBeenCalled();
    expect(preference.removeEventListener).toHaveBeenCalledWith(
      "change",
      preferenceChanged,
    );
  } finally {
    window.IntersectionObserver = originalObserver;
    HTMLElement.prototype.animate = originalAnimate;
  }
});

test("fade reveals avoid transforms that can jitter raster images", () => {
  const originalObserver = window.IntersectionObserver;
  const originalAnimate = HTMLElement.prototype.animate;
  let intersect;
  const animate = jest.fn(() => ({ cancel: jest.fn() }));
  HTMLElement.prototype.animate = animate;
  window.matchMedia = jest.fn(() => ({
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  window.IntersectionObserver = jest.fn((callback) => {
    intersect = callback;
    return { observe: jest.fn(), unobserve: jest.fn(), disconnect: jest.fn() };
  });
  try {
    const { unmount } = render(
      <Reveal variant="fade" delay={60}>
        Stable image card
      </Reveal>,
    );
    act(() => intersect([{ isIntersecting: true }]));
    expect(animate).toHaveBeenCalledWith(
      [{ opacity: 0.72 }, { opacity: 1 }],
      expect.objectContaining({ duration: 320, delay: 60, fill: "backwards" }),
    );
    unmount();
  } finally {
    window.IntersectionObserver = originalObserver;
    HTMLElement.prototype.animate = originalAnimate;
  }
});
