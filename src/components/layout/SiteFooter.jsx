import React from "react";
import Arrow from "../ui/Arrow";
export default function SiteFooter() {
  return (
    <footer className="mx-auto flex w-[min(1180px,calc(100%-48px))] justify-between border-t border-[var(--line)] py-7 pb-10 text-[11px] uppercase tracking-[1px] text-[var(--footer)] max-[480px]:flex-col max-[480px]:gap-[14px]">
      <span>© 2026 Oeung Rotha</span><span>Built with React + Tailwind CSS</span><a className="inline-flex items-center justify-center gap-[5px] transition hover:text-[var(--accent)]" href="#home">Back to top <Arrow /></a>
    </footer>
  );
}
