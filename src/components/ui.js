import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
export function Arrow({ diagonal = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      focusable="false"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}
// Visible before hydration and without JavaScript; motion is only an enhancement.
export function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!window.IntersectionObserver || !element.animate) return;
    let animation;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (!preference.matches)
          animation = element.animate(
            [
              { transform: "translateY(24px)" },
              { transform: "translateY(0)" },
            ],
            { duration: 650, delay, easing: "cubic-bezier(.2,.65,.3,1)" },
          );
        observer.unobserve(element);
      },
      { threshold: 0.08 },
    );
    const stop = () => {
      if (preference.matches) animation?.cancel();
    };
    observer.observe(element);
    preference.addEventListener("change", stop);
    return () => {
      observer.disconnect();
      animation?.cancel();
      preference.removeEventListener("change", stop);
    };
  }, [delay]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
export function PageIntro({ eyebrow, title, children }) {
  return (
    <section className="page-intro">
      <div className="site-container">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="intro-copy">{children}</p>
      </div>
    </section>
  );
}
export function ProjectCTA() {
  return (
    <section className="project-cta">
      <div className="site-container">
        <Reveal className="cta-layout">
          <div>
            <p className="eyebrow">LET’S BUILD SOMETHING EXCEPTIONAL</p>
            <h2>
              Your vision.
              <br />
              Our expertise.
            </h2>
          </div>
          <div>
            <p>
              From the first conversation to the final connection, we’re ready
              to bring your project to life.
            </p>
            <Link to="/contacts" className="button button-primary">
              Start a conversation <Arrow />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
