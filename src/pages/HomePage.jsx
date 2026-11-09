import React from "react";
import useTheme from "../hooks/useTheme.js";
import SiteHeader from "../components/layout/SiteHeader.jsx";
import SiteFooter from "../components/layout/SiteFooter.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import SkillsSection from "../components/sections/SkillsSection.jsx";
import CertificateSection from "../components/sections/CertificateSection.jsx";
import ProjectsSection from "../components/sections/ProjectsSection.jsx";
import JourneySection from "../components/sections/JourneySection.jsx";
import ContactSection from "../components/sections/ContactSection.jsx";


function HomePage() {
  const { darkMode, toggleTheme } = useTheme();

  return <div className="site min-h-screen overflow-x-clip bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
    <SiteHeader darkMode={darkMode} onToggleTheme={toggleTheme} />

    <main>
      <HeroSection />

      <AboutSection />

      <SkillsSection />

      <CertificateSection />

      <ProjectsSection />

      <JourneySection />

      <ContactSection />
    </main>

    <SiteFooter />
  </div>;
}

export default HomePage;
