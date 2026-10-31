import { Arrow } from "../ui/Arrow.jsx";

export default function SiteHeader({ darkMode, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-[1000] flex h-[86px] w-full items-center justify-between border-b border-[var(--line)] bg-[var(--header)] px-[max(24px,calc((100%-1180px)/2))] backdrop-blur-[14px] max-[800px]:h-[70px] max-[800px]:px-[15px]"> 
      <a className="text-[25px] font-bold tracking-[-1px]" href="#home">Rotha<span className="text-[var(--accent)]">.</span></a> 
      <nav className="flex gap-[34px] text-sm text-[#bdbab4] max-[800px]:hidden"> 
        <a className="transition-colors hover:text-[var(--accent)]" href="#about">About</a> 
        <a className="transition-colors hover:text-[var(--accent)]" href="#skills">Skills</a> 
        <a className="transition-colors hover:text-[var(--accent)]" href="#projects">Projects</a> 
        <a className="transition-colors hover:text-[var(--accent)]" href="#contact">Contact</a> 
      </nav> 
      <div className="flex items-center gap-[10px] max-[800px]:gap-1.5"> 
        <button 
          className="inline-flex cursor-pointer items-center gap-[7px] rounded-full border border-[var(--button-border)] bg-transparent px-[13px] py-[10px] text-xs text-[var(--text)] transition hover:-translate-y-px hover:border-[var(--accent)] max-[800px]:[&>span:last-child]:hidden" 
          onClick={onToggleTheme} 
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} 
          title={darkMode ? "Light mode" : "Dark mode"} 
        > 
          <span className="text-sm leading-none">{darkMode ? "☀" : "☾"}</span> 
          <span>{darkMode ? "Light" : "Dark"}</span> 
        </button> 
        <a className="rounded-full border border-[var(--button-border)] px-[17px] py-[11px] text-sm text-[var(--text)] transition hover:-translate-y-px hover:border-[var(--accent)] hover:text-[var(--accent)] max-[480px]:px-[13px] max-[480px]:py-[9px] max-[480px]:text-xs" href="#contact">Let's talk <Arrow /></a> 
      </div> 
    </header>
  );
}
