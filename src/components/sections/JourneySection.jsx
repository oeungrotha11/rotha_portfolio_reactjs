import Reveal from "../motion/Reveal.jsx";
import { section, eyebrow, muted } from "../../constants/tailwind.js";
import React from "react";
export default function JourneySection() {
  return (
<section className={`${section} pt-[30px]`}>
        <Reveal className="grid grid-cols-2 gap-20 border border-[var(--line)] bg-[var(--panel)] p-[70px] max-[800px]:grid-cols-1 max-[800px]:gap-[35px] max-[800px]:p-[40px_28px]">
          <div><p className={eyebrow}>CURRENTLY</p><h2 className="m-0 text-[clamp(48px,6vw,75px)] leading-[.94] tracking-[-4px]">Learning.<br />Building.<br /><span className="font-serif text-[var(--accent-soft)]">Improving.</span></h2></div>
          <div className="self-end"><p className={`text-base leading-[1.8] ${muted}`}>I'm looking for an internship or junior opportunity in web and mobile development where I can contribute with React, backend API development and Flutter, learn from an experienced team, and grow by building real products.</p>
            <div className="mt-[45px] flex gap-[45px] max-[800px]:gap-[25px]"><div className="flex flex-col gap-1.5"><strong className="text-xl">IT</strong><span className="text-[10px] uppercase tracking-[1.5px] text-[var(--muted)]">Student</span></div><div className="flex flex-col gap-1.5"><strong className="text-xl">SETEC</strong><span className="text-[10px] uppercase tracking-[1.5px] text-[var(--muted)]">Institute</span></div><div className="flex flex-col gap-1.5"><strong className="text-xl">2026</strong><span className="text-[10px] uppercase tracking-[1.5px] text-[var(--muted)]">Building</span></div></div>
          </div>
        </Reveal>
      </section>
  );
}
