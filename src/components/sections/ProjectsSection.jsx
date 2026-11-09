import { motion } from "motion/react";
import Reveal from "../motion/Reveal.jsx";
import Stagger from "../motion/Stagger.jsx";
import Arrow from "../ui/Arrow.jsx";
import { projects } from "../../data/portfolio.js";
import { section, eyebrow, heading, muted, itemVariants } from "../../constants/tailwind.js";
import { Link } from "react-router-dom";
import React from "react";
export default function ProjectsSection() {
  return (
    <section id="projects" className={`${section} border-t border-[var(--line)]`}>
      <div className="mb-[65px] grid grid-cols-2 items-end gap-[70px] max-[800px]:grid-cols-1 max-[800px]:gap-[35px]">
        <Reveal><p className={eyebrow}>03 — SELECTED WORK</p><h2 className={heading}>Projects I've<br /><span className="text-[var(--accent-soft)]">worked on.</span></h2></Reveal>
        <Reveal className={`mb-1 max-w-[430px] justify-self-end leading-[1.8] ${muted} max-[800px]:justify-self-start`} delay={.12}>A selection of projects across web, backend, mobile and API development.</Reveal>
      </div>
      <Stagger>
        {projects.map(project => <motion.article key={project.number} variants={itemVariants} whileHover={{ x: 8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }} className="grid grid-cols-[70px_1fr_auto] items-start gap-[30px] border-t border-[var(--line)] py-[38px] transition-colors duration-300 hover:border-[var(--accent)] max-[800px]:grid-cols-[45px_1fr_auto] max-[800px]:gap-3 max-[480px]:grid-cols-[32px_1fr]">
          <div className=" text-xl text-[var(--accent)] max-[480px]:mb-[-5px]">{project.number}</div>
          <div><h3 className="mb-3 text-[27px] font-semibold max-[800px]:text-[23px]">{project.title}</h3><p className={`max-w-[720px] leading-[1.7] ${muted}`}>{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="border border-[var(--tag-border)] px-[10px] py-1.5 text-[10px] uppercase tracking-[1px] text-[var(--tag-text)]">{tag}</span>)}</div></div>
          <div className="max-[480px]:col-start-2 max-[480px]:mt-2">
            <Link className="inline-flex items-center gap-2 text-sm text-[var(--accent-soft)] transition hover:text-[var(--text)]" to={`/projects/${project.slug}`}>
              View project <Arrow />
            </Link>
          </div>
        </motion.article>)}
      </Stagger>
    </section>
  );
}
