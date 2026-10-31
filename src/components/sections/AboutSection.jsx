import Reveal from "../motion/Reveal.jsx";
import Arrow from "../ui/Arrow.jsx";
import { section, eyebrow, heading, muted } from "../../constants/tailwind.js";

export default function AboutSection() {
  return (
<section id="about" className={`${section} grid grid-cols-[.8fr_1.2fr] gap-[100px] border-t border-[var(--line)] max-[800px]:grid-cols-1 max-[800px]:gap-[45px]`}>
        <Reveal><p className={eyebrow}>01 — ABOUT ME</p><h2 className={heading}>Curious by nature.<br /><span className="font-serif text-[var(--accent-soft)]">Developer by choice.</span></h2></Reveal>
        <Reveal className="max-w-[650px] pt-2" delay={.12}>
          <p className="mb-[30px] text-[23px] leading-[1.55] text-[var(--lead)]">I'm an MIS(Management Information System) student at <strong className="text-[var(--text)]">SETEC Institute</strong>, passionate about building useful software and continuously improving my development skills.</p>
          <p className={`text-base leading-[1.85] ${muted}`}>My main interests are full-stack web development, REST APIs, mobile development and deployment. I enjoy turning ideas into working products and learning how frontend, backend, databases and servers fit together.</p>
          <a className="mt-[18px] inline-block border-b border-[var(--accent)] pb-2 text-sm transition hover:text-[var(--accent)]" href="#contact">Let's work together <Arrow /></a>
        </Reveal>
      </section>
  );
}
