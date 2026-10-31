import { motion } from "motion/react";
import {
  siDocker, siDjango, siFlutter, siGithub, siJavascript, siLaravel,
  siMysql, siNginx, siOpenapiinitiative, siReact, siSpringboot
} from "simple-icons";
import profile from "../assets/photo_2026-01-05_00-08-44.jpg";
import SkillIcon from "../components/skills/SkillIcon.jsx";
import Arrow from "../components/ui/Arrow.jsx";
import Reveal from "../components/motion/Reveal.jsx";
import Stagger from "../components/motion/Stagger.jsx";
import SiteHeader from "../components/layout/SiteHeader.jsx";
import SiteFooter from "../components/layout/SiteFooter.jsx";
import { projects, skills, skillIcons } from "../data/portfolio.js";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("ratha-theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem("ratha-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const section = "mx-auto w-[min(1180px,calc(100%-48px))] py-[120px] max-[800px]:w-[min(1180px,calc(100%-30px))] max-[800px]:py-[85px]";
  const eyebrow = "mb-[25px] text-[11px] font-bold tracking-[2.5px] text-[var(--accent-soft)]";
  const heading = "m-0 text-[clamp(43px,5vw,68px)] leading-none tracking-[-3px] max-[800px]:text-[clamp(40px,10vw,60px)]";
  const muted = "text-[var(--muted)]";

  return <div className="site min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
    <SiteHeader darkMode={darkMode} onToggleTheme={() => setDarkMode(value => !value)} />

    <main>
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

      <section id="about" className={`${section} grid grid-cols-[.8fr_1.2fr] gap-[100px] border-t border-[var(--line)] max-[800px]:grid-cols-1 max-[800px]:gap-[45px]`}>
        <Reveal><p className={eyebrow}>01 — ABOUT ME</p><h2 className={heading}>Curious by nature.<br /><span className="font-serif text-[var(--accent-soft)]">Developer by choice.</span></h2></Reveal>
        <Reveal className="max-w-[650px] pt-2" delay={.12}>
          <p className="mb-[30px] text-[23px] leading-[1.55] text-[var(--lead)]">I'm an MIS(Management Information System) student at <strong className="text-[var(--text)]">SETEC Institute</strong>, passionate about building useful software and continuously improving my development skills.</p>
          <p className={`text-base leading-[1.85] ${muted}`}>My main interests are full-stack web development, REST APIs, mobile development and deployment. I enjoy turning ideas into working products and learning how frontend, backend, databases and servers fit together.</p>
          <a className="mt-[18px] inline-block border-b border-[var(--accent)] pb-2 text-sm transition hover:text-[var(--accent)]" href="#contact">Let's work together <Arrow /></a>
        </Reveal>
      </section>

      <section id="skills" className={`${section} grid grid-cols-[.8fr_1.2fr] gap-[100px] border-t border-[var(--line)] max-[800px]:grid-cols-1 max-[800px]:gap-[45px]`}>
        <Reveal><p className={eyebrow}>02 — SKILLS</p><h2 className={heading}>Tools I use to<br /><span className="font-serif text-[var(--accent-soft)]">build things.</span></h2></Reveal>
        <Stagger className="grid grid-cols-2 border-t border-[var(--line)] max-[480px]:grid-cols-1">
          {skills.map(([name, type]) => <motion.div key={name} variants={itemVariants} whileHover={{ x: 5 }} className="relative grid min-h-[105px] grid-cols-[42px_1fr] items-center gap-4 border-b border-[var(--line)] px-[25px] py-[22px] pr-12 odd:border-r odd:border-[var(--line)] max-[480px]:odd:border-r-0">
            <span className="grid h-[42px] w-[42px] place-items-center rounded-[10px] border border-[var(--line)] bg-[var(--panel)]" style={{ color: `#${skillIcons[name]?.hex ?? "ff9900"}` }}><SkillIcon name={name} /></span>
            <span className="flex flex-col justify-center"><span className="text-[10px] uppercase tracking-[1.5px] text-[var(--muted)]">{type}</span><span className="mt-[7px] text-xl font-semibold">{name}</span></span>
            <span className="absolute right-5 top-5 text-[var(--accent)] opacity-0 transition group-hover:opacity-100">↗</span>
          </motion.div>)}
        </Stagger>
      </section>

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

      <section className={`${section} pt-[30px]`}>
        <Reveal className="grid grid-cols-2 gap-20 border border-[var(--line)] bg-[var(--panel)] p-[70px] max-[800px]:grid-cols-1 max-[800px]:gap-[35px] max-[800px]:p-[40px_28px]">
          <div><p className={eyebrow}>CURRENTLY</p><h2 className="m-0 text-[clamp(48px,6vw,75px)] leading-[.94] tracking-[-4px]">Learning.<br />Building.<br /><span className="font-serif text-[var(--accent-soft)]">Improving.</span></h2></div>
          <div className="self-end"><p className={`text-base leading-[1.8] ${muted}`}>I'm looking for an internship as a Full Stack Developer where I can work with an experienced team, contribute to real products and gain practical industry experience.</p>
            <div className="mt-[45px] flex gap-[45px] max-[800px]:gap-[25px]"><div className="flex flex-col gap-1.5"><strong className="text-xl">IT</strong><span className="text-[10px] uppercase tracking-[1.5px] text-[var(--muted)]">Student</span></div><div className="flex flex-col gap-1.5"><strong className="text-xl">SETEC</strong><span className="text-[10px] uppercase tracking-[1.5px] text-[var(--muted)]">Institute</span></div><div className="flex flex-col gap-1.5"><strong className="text-xl">2026</strong><span className="text-[10px] uppercase tracking-[1.5px] text-[var(--muted)]">Building</span></div></div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className={`${section} border-t border-[var(--line)] text-center`}>
        <Reveal><p className={`${eyebrow} mb-[35px]`}>04 — CONTACT</p><h2 className="mb-[30px] text-[clamp(58px,9vw,115px)] leading-[.88] tracking-[-6px] max-[480px]:tracking-[-4px]">Have a project<br /><em className="font-serif text-[var(--accent-soft)]">in mind?</em></h2>
          <p className={`mx-auto mb-[30px] max-w-[500px] leading-[1.7] ${muted}`}>I'm always interested in learning, building and connecting with people working on interesting products.</p>
          <a className="inline-block border-b border-[var(--accent)] pb-[9px] text-[clamp(22px,3vw,32px)] transition hover:-translate-y-0.5 hover:text-[var(--accent-soft)]" href="mailto:your@email.com">your@email.com <Arrow /></a>
          <div className="mt-[65px] flex justify-center gap-7 max-[480px]:mt-10"><a className="text-xs uppercase tracking-[1.5px] text-[var(--social)] transition hover:-translate-y-0.5 hover:text-[var(--accent)]" href="#" aria-label="GitHub">GitHub</a><a className="text-xs uppercase tracking-[1.5px] text-[var(--social)] transition hover:-translate-y-0.5 hover:text-[var(--accent)]" href="#" aria-label="LinkedIn">LinkedIn</a><a className="text-xs uppercase tracking-[1.5px] text-[var(--social)] transition hover:-translate-y-0.5 hover:text-[var(--accent)]" href="#" aria-label="Facebook">Facebook</a></div>
        </Reveal>
      </section>
    </main>

    <SiteFooter />
  </div>;
}

export default App;
