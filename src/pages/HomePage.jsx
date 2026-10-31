import React, { useEffect, useState } from "react";
import SiteHeader from "../components/layout/SiteHeader.jsx";
import SiteFooter from "../components/layout/SiteFooter.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import SkillsSection from "../components/sections/SkillsSection.jsx";
import ProjectsSection from "../components/sections/ProjectsSection.jsx";
import JourneySection from "../components/sections/JourneySection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("ratha-theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    localStorage.setItem("ratha-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return <div className="site min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
    <SiteHeader darkMode={darkMode} onToggleTheme={() => setDarkMode(value => !value)} />

    <main>
      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <JourneySection />

      <ContactSection />
    </main>

    <SiteFooter />
  </div>;
}

export default App;
