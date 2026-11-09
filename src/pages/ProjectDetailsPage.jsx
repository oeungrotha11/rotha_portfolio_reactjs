import React from "react";
import { Link, useParams } from "react-router-dom";
import Arrow from "../components/ui/Arrow.jsx";
import FlutterProjectPreview from "../components/sections/FlutterProjectPreview.jsx";
import useTheme from "../hooks/useTheme.js";
import { projects } from "../data/portfolio.js";

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);
  const { darkMode, toggleTheme } = useTheme();

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <header className="flex h-[76px] items-center justify-between border-b border-[var(--line)] px-6 sm:px-10">
        <Link className="text-sm text-[var(--muted)] transition hover:text-[var(--accent-soft)]" to="/">
          ← Back to projects
        </Link>
        <button
          className="rounded-full border border-[var(--button-border)] px-4 py-2 text-xs transition hover:border-[var(--accent)]"
          onClick={toggleTheme}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? "☀ Light" : "☾ Dark"}
        </button>
      </header>

      <main className="mx-auto w-[min(1000px,calc(100%-32px))] pb-20 pt-12 sm:pt-20">
        <p className="mb-5 text-[11px] font-bold uppercase tracking-[2.5px] text-[var(--accent-soft)]">
          Project {project.number} — Selected work
        </p>
        <div className="flex flex-wrap items-start justify-between gap-6 border-b border-[var(--line)] pb-10">
          <div className="max-w-[720px]">
            <h1 className="mb-5 text-[clamp(38px,7vw,68px)] font-semibold leading-[1.05] tracking-[-2px]">
              {project.title}
            </h1>
            <p className="text-base leading-[1.8] text-[var(--muted)]">{project.description}</p>
          </div>
          {project.liveUrl && (
            <a
              className="inline-flex items-center gap-2 rounded-full border border-[var(--button-border)] px-5 py-3 text-sm transition hover:border-[var(--accent)] hover:text-[var(--accent-soft)]"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit live site <Arrow />
            </a>
          )}
        </div>

        <section className="py-9" aria-labelledby="tech-stack-title">
          <h2 id="tech-stack-title" className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[var(--muted)]">
            Built with
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="border border-[var(--tag-border)] px-3 py-2 text-[10px] uppercase tracking-[1px] text-[var(--tag-text)]">
                {tag}
              </span>
            ))}
          </div>
        </section>

        {project.slug === "food-ordering-mobile-app" && <FlutterProjectPreview />}
      </main>
    </div>
  );
}

function ProjectNotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--bg)] px-6 text-center text-[var(--text)]">
      <div>
        <p className="mb-3 text-sm text-[var(--muted)]">That project could not be found.</p>
        <Link className="text-[var(--accent-soft)] hover:underline" to="/">Back to portfolio</Link>
      </div>
    </main>
  );
}
