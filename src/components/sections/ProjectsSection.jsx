import { motion } from "motion/react";
import Reveal from "../motion/Reveal.jsx";
import Stagger from "../motion/Stagger.jsx";
import Arrow from "../ui/Arrow.jsx";
import { projects } from "../../data/portfolio.js";
import { section, eyebrow, heading, muted, itemVariants } from "../../constants/tailwind.js";
import React from "react";
export default function ProjectsSection() {
  return (
<section id="projects" className={`${section} border-t border-[var(--line)]`}>
        <div className="mb-[65px] grid grid-cols-2 items-end gap-[70px] max-[800px]:grid-cols-1 max-[800px]:gap-[35px]">
          <Reveal><p className={eyebrow}>03 — SELECTED WORK</p><h2 className={heading}>Projects I've<br /><span className="font-serif text-[var(--accent-soft)]">worked on.</span></h2></Reveal>
          <Reveal className={`mb-1 max-w-[430px] justify-self-end leading-[1.8] ${muted} max-[800px]:justify-self-start`} delay={.12}>A selection of projects across web, backend, mobile and API development.</Reveal>
        </div>
        <Stagger>
          {projects.map(project => <motion.article key={project.number} variants={itemVariants} className="grid grid-cols-[100px_1fr_70px] items-start gap-[30px] border-t border-[var(--line)] py-[38px] transition hover:pl-[10px] max-[800px]:grid-cols-[45px_1fr_45px] max-[800px]:gap-3 max-[480px]:grid-cols-1">
            <div className="font-serif text-xl text-[var(--accent)] max-[480px]:mb-[-5px]">{project.number}</div>
            <div><h3 className="mb-3 text-[27px] font-semibold max-[800px]:text-[23px]">{project.title}</h3><p className={`max-w-[720px] leading-[1.7] ${muted}`}>{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="border border-[var(--tag-border)] px-[10px] py-1.5 text-[10px] uppercase tracking-[1px] text-[var(--tag-text)]">{tag}</span>)}</div></div>
            <motion.a className="grid h-12 w-12 justify-self-end place-items-center rounded-full border border-[var(--button-border)] text-[var(--accent-soft)] transition hover:bg-[var(--accent)] hover:text-white max-[480px]:hidden" href={project.link} aria-label={`View ${project.title}`} whileHover={{ rotate: 8, scale: 1.08 }} whileTap={{ scale: .94 }}><Arrow /></motion.a>
          </motion.article>)}
        </Stagger>
      </section>
  );
}
