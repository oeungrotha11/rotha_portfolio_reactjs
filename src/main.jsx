import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "motion/react";
import {
  siDocker,
  siDjango,
  siFlutter,
  siGithub,
  siJavascript,
  siLaravel,
  siMysql,
  siNginx,
  siOpenapiinitiative,
  siReact,
  siSpringboot
} from "simple-icons";
import "./styles.css";
import profile from "./assets/photo_2026-01-05_00-08-44.jpg";

const projects = [
  {
    number: "01",
    title: "E-Commerce API",
    description:
      "A Laravel-based e-commerce backend with authentication, categories, products, variants, cart, wishlist, checkout and order management.",
    tags: ["Laravel", "PHP", "MySQL", "REST API", "Sanctum"],
    link: "#"
  },
  {
    number: "02",
    title: "POS Mobile App",
    description:
      "A Flutter POS application with product browsing, categories, search, cart management, authentication and REST API integration.",
    tags: ["Flutter", "Dart", "REST API", "Provider"],
    link: "#"
  },
  {
    number: "03",
    title: "Order Management API",
    description:
      "A Spring Boot REST API using layered architecture, DTOs, ModelMapper, authentication and database persistence for order workflows.",
    tags: ["Spring Boot", "Java", "JPA", "MySQL"],
    link: "#"
  },
  {
    number: "04",
    title: "Customer Management API",
    description:
      "A Django REST API project focused on structured CRUD operations, database models and API endpoints for customer management.",
    tags: ["Django", "Python", "REST API", "MySQL"],
    link: "#"
  }
];

const skills = [
  ["React", "Frontend"],
  ["JavaScript", "Frontend"],
  ["Laravel", "Backend"],
  ["Spring Boot", "Backend"],
  ["Django", "Backend"],
  ["Flutter", "Mobile"],
  ["MySQL", "Database"],
  ["REST API", "Architecture"],
  ["Git / GitHub", "Tools"],
  ["Docker", "DevOps"],
  ["Nginx", "DevOps"],
  ["AWS EC2", "Cloud"]
];

const skillIcons = {
  React: siReact,
  JavaScript: siJavascript,
  Laravel: siLaravel,
  "Spring Boot": siSpringboot,
  Django: siDjango,
  Flutter: siFlutter,
  MySQL: siMysql,
  "REST API": siOpenapiinitiative,
  "Git / GitHub": siGithub,
  Docker: siDocker,
  Nginx: siNginx
};

function SkillIcon({ name }) {
  const icon = skillIcons[name];

  if (!icon) {
    return (
      <svg viewBox="0 0 32 32" role="img" aria-label="AWS icon">
        <text x="16" y="20" textAnchor="middle">aws</text>
        <path d="M7 24c6 4 13 4 19 0" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={`${name} icon`}>
      <path d={icon.path} />
    </svg>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Reveal({ children, className = "", delay = 0, y = 28 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Stagger({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08 }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("ratha-theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem("ratha-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="site">
      <header className="nav">
        <a className="logo" href="#home">Rotha<span>.</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((value) => !value)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            <span className="theme-icon">{darkMode ? "☀" : "☾"}</span>
            <span>{darkMode ? "Light" : "Dark"}</span>
          </button>
          <a className="nav-cta" href="#contact">Let's talk <Arrow /></a>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">FULL STACK WEB DEVELOPER</p>
            <h1>Building digital<br /><em>experiences</em> that work.</h1>
            <p className="hero-text">
              Hi, I'm <strong>Oeung Rotha</strong>. I create modern web applications
              and APIs with a focus on clean UI, solid backend architecture and
              real-world problem solving.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">View my work <Arrow /></a>
              <a className="button button-ghost" href="#contact">Contact me</a>
            </div>
            <div className="hero-meta">
              <span>Based in Cambodia</span>
              <span className="dot"></span>
              <span>Open to internship opportunities</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, scale: 0.94, x: 35 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="photo-glow"></div>
            <motion.img
              className="hero-photo"
              src={profile}
              alt="Oeung Ratha"
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.5 }}
            />
            <div className="photo-label">
              <span>01</span>
              <span>Developer / Creator</span>
            </div>
          </motion.div>
        </section>

        <section id="about" className="section about">
          <Reveal className="section-heading">

            <p className="eyebrow">01 — ABOUT ME</p>
            <h2>Curious by nature.<br /><span>Developer by choice.</span></h2>
          </Reveal>
          <Reveal className="about-content" delay={0.12}>
            <p className="lead">
              I'm an MIS(Management Information System) student at <strong>SETEC Institute</strong>,
              passionate about building useful software and continuously improving
              my development skills.
            </p>
            <p>
              My main interests are full-stack web development, REST APIs, mobile
              development and deployment. I enjoy turning ideas into working
              products and learning how frontend, backend, databases and servers
              fit together.
            </p>
            <a className="text-link" href="#contact">Let's work together <Arrow /></a>
          </Reveal>
        </section>

        <section id="skills" className="section skills-section">
          <Reveal className="section-heading">

            <p className="eyebrow">02 — SKILLS</p>
            <h2>Tools I use to<br /><span>build things.</span></h2>
          </Reveal>
          <Stagger className="skills-grid">
            {skills.map(([name, type]) => (
              <motion.div
                className="skill"
                key={name}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                style={{ "--skill-color": `#${skillIcons[name]?.hex ?? "ff9900"}` }}
              >
                <span className="skill-icon"><SkillIcon name={name} /></span>
                <span className="skill-details">
                  <span className="skill-type">{type}</span>
                  <span className="skill-name">{name}</span>
                </span>
                <span className="skill-arrow"><Arrow /></span>
              </motion.div>
            ))}
          </Stagger>
        </section>

        <section id="projects" className="section projects-section">
          <div className="projects-top">
            <Reveal className="section-heading">
              <p className="eyebrow">03 — SELECTED WORK</p>
              <h2>Projects I've<br /><span>worked on.</span></h2>
            </Reveal>
            <Reveal className="projects-intro" delay={0.12}>
              A selection of projects across web, backend, mobile and API development.
            </Reveal>
          </div>

          <Stagger className="projects-list">
            {projects.map((project) => (
              <motion.article className="project" key={project.number} variants={itemVariants}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <motion.a
                  className="project-link"
                  href={project.link}
                  aria-label={`View ${project.title}`}
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                >
                  <Arrow />
                </motion.a>
              </motion.article>
            ))}
          </Stagger>
        </section>

        <section className="section journey">
          <Reveal className="journey-card">
            <div>
              <p className="eyebrow">CURRENTLY</p>
              <h2>Learning.<br />Building.<br /><span>Improving.</span></h2>
            </div>
            <div className="journey-text">
              <p>
                I'm looking for an internship as a Full Stack Developer where I can
                work with an experienced team, contribute to real products and gain
                practical industry experience.
              </p>
              <div className="mini-stats">
                <div><strong>IT</strong><span>Student</span></div>
                <div><strong>SETEC</strong><span>Institute</span></div>
                <div><strong>2026</strong><span>Building</span></div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="section contact">
          <Reveal>
            <p className="eyebrow">04 — CONTACT</p>
          <h2>Have a project<br /><em>in mind?</em></h2>
          <p className="contact-copy">
            I'm always interested in learning, building and connecting with people
            working on interesting products.
          </p>
          <a className="email" href="mailto:your@email.com">your@email.com <Arrow /></a>
          <div className="socials">
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
          </Reveal>
        </section>
      </main>

      <footer>
        <span>© 2026 Oeung Ratha</span>
        <span>Built with React</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);