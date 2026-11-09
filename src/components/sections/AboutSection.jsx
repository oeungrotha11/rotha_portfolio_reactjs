import Reveal from "../motion/Reveal.jsx";
import Arrow from "../ui/Arrow.jsx";
import React from "react";
import { section, eyebrow, heading, muted } from "../../constants/tailwind.js";

export default function AboutSection() {
  return (
<section id="about" className={`${section} grid grid-cols-[.8fr_1.2fr] gap-[100px] border-t border-[var(--line)] max-[800px]:grid-cols-1 max-[800px]:gap-[45px]`}>
        <Reveal><p className={eyebrow}>01 — ABOUT ME</p><em className={heading}>From Web Apps<br /><span className=" text-[var(--accent-soft)]">to Mobile Apps.</span></em></Reveal>
        <Reveal className="max-w-[650px] pt-2" delay={.12}>
          <p className="mb-[30px] text-[23px] leading-[1.55] text-[var(--lead)]">I'm an MIS (Management Information Systems) student at <strong className="text-[var(--text)]">SETEC Institute</strong> who enjoys building software across both web and mobile platforms.</p>
          <p className={`text-base leading-[1.85] ${muted}`}>On the web, I work with React and JavaScript on the frontend, and technologies such as Laravel, Spring Boot and Django for backend development and REST APIs. For mobile, I use Flutter and Dart to build cross-platform applications and connect them to backend services. I also enjoy working with databases, Firebase and deployment tools to understand how a complete product comes together.</p>
          <a className="mt-[18px] inline-block border-b border-[var(--accent)] pb-2 text-sm transition hover:text-[var(--accent)]" href="#contact">Let's work together <Arrow /></a>
        </Reveal>
      </section>
  );
}
