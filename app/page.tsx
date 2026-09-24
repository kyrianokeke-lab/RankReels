"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const assetUrl = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

export default function Home() {
  const pageRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      gsap.from(".closure-reveal", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08
      });

    },
    { scope: pageRef }
  );

  return (
    <main ref={pageRef} className="closure-page">
      <div className="closure-grid" aria-hidden="true" />
      <div className="closure-glow closure-glow-one" aria-hidden="true" />
      <div className="closure-glow closure-glow-two" aria-hidden="true" />

      <header className="closure-header closure-reveal">
        <a className="closure-brand" href="https://rankreels.ai" aria-label="RankReels home">
          <img src={assetUrl("/rankreels-assets/rankreels-logo.svg")} alt="" />
          <span>RankReels</span>
        </a>
      </header>

      <section className="closure-hero" aria-labelledby="closure-title">
        <div className="closure-copy-column">
          <p className="closure-eyebrow closure-reveal">The window has closed</p>
          <h1 id="closure-title" className="closure-reveal">
            Oops! You’re Late…
            <span>The Deal Has Ended.</span>
          </h1>
          <p className="closure-lede closure-reveal">
            The RankReels Founders’ Deal has officially ended, and the special founders’ price
            is no longer available.
          </p>
          <p className="closure-thanks closure-reveal">
            A big thank you to everyone who joined us during the launch. We’re excited to have
            you with us!
          </p>
          <div className="closure-divider closure-reveal" aria-hidden="true" />
          <p className="closure-support closure-reveal">
            Have questions or need help with your purchase? Contact us on{" "}
            <a href="mailto:support@marketingblocks.ai">support@marketingblocks.ai</a>
          </p>
        </div>

      </section>

      <footer className="closure-footer closure-reveal">
        <span>© 2026 RankReels</span>
        <nav className="closure-legal-links" aria-label="Legal links">
          <a href="https://rankreels.ai/privacy">Privacy</a>
          <a href="https://rankreels.ai/terms">Terms</a>
        </nav>
      </footer>
    </main>
  );
}
