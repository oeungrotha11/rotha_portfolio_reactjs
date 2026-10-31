import { motion } from "motion/react";
import profile from "../../assets/photo_2026-01-05_00-08-44.jpg";
import Arrow from "../ui/Arrow.jsx";
import { section, eyebrow, muted, ease } from "../../constants/tailwind.js";

export default function HeroSection() {
  return (
<section id="home" className={`${section} grid min-h-[calc(100vh-86px)] grid-cols-[1.08fr_.92fr] items-center gap-[70px] pt-[75px] max-[800px]:grid-cols-1 max-[800px]:gap-[50px] max-[800px]:pt-[50px]`}>
        <motion.div className="max-[800px]:order-1" initial={{ opacity: 0, x: -35 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease }}>
          <p className={eyebrow}>FULL STACK WEB DEVELOPER</p>
          <h1 className="mb-7 max-w-[720px] text-[clamp(54px,7vw,92px)] font-bold leading-[.94] tracking-[-5px] max-[800px]:text-[clamp(49px,13vw,75px)] max-[800px]:tracking-[-3px]">Building digital<br /><em className="font-serif text-[var(--accent-soft)]">experiences</em> that work.</h1>
          <p className={`max-w-[560px] text-[17px] leading-[1.8] ${muted}`}>Hi, I'm <strong className="text-[var(--text)]">Oeung Rotha</strong>. I create modern web applications and APIs with a focus on clean UI, solid backend architecture and real-world problem solving.</p>
          <div className="my-[35px] mb-[27px] flex gap-3 max-[480px]:flex-col">
            <a className="inline-flex items-center justify-center gap-[14px] rounded-[4px] bg-[var(--accent)] px-[22px] py-[15px] text-sm font-semibold text-white transition hover:-translate-y-[3px] hover:bg-[var(--accent-soft)]" href="#projects">View my work <Arrow /></a>
            <a className="inline-flex items-center justify-center rounded-[4px] border border-[var(--button-border)] px-[22px] py-[15px] text-sm font-semibold text-[var(--text)] transition hover:-translate-y-[3px] hover:border-[var(--accent)]" href="#contact">Contact me</a>
          </div>
          <div className="flex items-center gap-3 text-xs text-[var(--muted)] max-[480px]:flex-wrap">
            <span>Based in Cambodia</span><span className="h-1 w-1 rounded-full bg-[var(--accent)]" /><span>Open to internship opportunities</span>
          </div>
        </motion.div>

        <motion.div className="relative w-full max-w-[490px] justify-self-end max-[800px]:order-0 max-[800px]:justify-self-center max-[800px]:max-w-[460px]" initial={{ opacity: 0, scale: .94, x: 35 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .9, delay: .15, ease }}>
          <div className="absolute inset-[12%_-10%_-5%_5%] bg-[var(--accent)] opacity-25 blur-[75px]" />
          <motion.img className="relative block aspect-[4/5] w-full rounded-[2px] object-cover object-top shadow-[0_25px_70px_rgba(30,25,20,.14)]" src={profile} alt="Oeung Ratha" whileHover={{ scale: 1.025 }} transition={{ duration: .5 }} />
          <div className="absolute bottom-[18px] left-[-30px] right-[18px] flex justify-between border-l-2 border-[var(--accent)] bg-[var(--photo-label)] px-4 py-[13px] text-[10px] uppercase tracking-[1.5px] text-[var(--photo-label-text)] backdrop-blur-[10px] max-[480px]:bottom-[10px] max-[480px]:left-[10px]">
            <span>01</span><span>Developer / Creator</span>
          </div>
        </motion.div>
      </section>
  );
}
