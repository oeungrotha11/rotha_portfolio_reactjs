import { motion } from "motion/react";
import Reveal from "../motion/Reveal.jsx";
import Stagger from "../motion/Stagger.jsx";
import SkillIcon from "../skills/SkillIcon.jsx";
import { skills, skillIcons } from "../../data/portfolio.js";
import { section, eyebrow, heading, muted, itemVariants } from "../../constants/tailwind.js";
import React from "react";
export default function SkillsSection() {
  return (
    <section id="skills" className={`${section} grid grid-cols-[.8fr_1.2fr] gap-[100px] border-t border-[var(--line)] max-[800px]:grid-cols-1 max-[800px]:gap-[45px]`}>
      <Reveal><p className={eyebrow}>02 — SKILLS</p><h2 className={heading}>Tools I use to<br /><span className="text-[var(--accent-soft)]">build things.</span></h2></Reveal>
      <Stagger className="grid grid-cols-2 border-t border-[var(--line)] max-[480px]:grid-cols-1">
        {skills.map(([name, type]) => <motion.div key={name} variants={itemVariants} whileHover={{ x: 5 }} className="relative grid min-h-[105px] grid-cols-[42px_1fr] items-center gap-4 border-b border-[var(--line)] px-[25px] py-[22px] pr-12 odd:border-r odd:border-[var(--line)] max-[480px]:odd:border-r-0">
          <span className="grid h-[42px] w-[42px] place-items-center rounded-[10px] border border-[var(--line)] bg-[var(--panel)]" style={{ color: `#${skillIcons[name]?.hex ?? "ff9900"}` }}><SkillIcon name={name} /></span>
          <span className="flex flex-col justify-center"><span className="text-[10px] uppercase tracking-[1.5px] text-[var(--muted)]">{type}</span><span className="mt-[7px] text-xl font-semibold">{name}</span></span>
          <span className="absolute right-5 top-5 text-[var(--accent)] opacity-0 transition group-hover:opacity-100">↗</span>
        </motion.div>)}
      </Stagger>
    </section>
  );
}
