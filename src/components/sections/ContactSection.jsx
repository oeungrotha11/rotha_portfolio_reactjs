import Reveal from "../motion/Reveal.jsx";
import Arrow from "../ui/Arrow.jsx";
import React from "react";
import { section, eyebrow, muted } from "../../constants/tailwind.js";

export default function ContactSection() {
  return (
<section id="contact" className={`${section} border-t border-[var(--line)] text-center`}>
        <Reveal><p className={`${eyebrow} mb-[35px]`}>04 — CONTACT</p><h2 className="mb-[30px] text-[clamp(58px,9vw,115px)] leading-[.88] tracking-[-6px] max-[480px]:tracking-[-4px]">Have a project<br /><em className="font-serif text-[var(--accent-soft)]">in mind?</em></h2>
          <p className={`mx-auto mb-[30px] max-w-[500px] leading-[1.7] ${muted}`}>I'm always interested in learning, building and connecting with people working on interesting products.</p>
          <a className="inline-block border-b border-[var(--accent)] pb-[9px] text-[clamp(22px,3vw,32px)] transition hover:-translate-y-0.5 hover:text-[var(--accent-soft)]" href="mailto:your@email.com">your@email.com <Arrow /></a>
          <div className="mt-[65px] flex justify-center gap-7 max-[480px]:mt-10"><a className="text-xs uppercase tracking-[1.5px] text-[var(--social)] transition hover:-translate-y-0.5 hover:text-[var(--accent)]" href="#" aria-label="GitHub">GitHub</a><a className="text-xs uppercase tracking-[1.5px] text-[var(--social)] transition hover:-translate-y-0.5 hover:text-[var(--accent)]" href="#" aria-label="LinkedIn">LinkedIn</a><a className="text-xs uppercase tracking-[1.5px] text-[var(--social)] transition hover:-translate-y-0.5 hover:text-[var(--accent)]" href="#" aria-label="Facebook">Facebook</a></div>
        </Reveal>
      </section>
  );
}
