"use client";

import { About } from "../About";
import { Footer } from "../Footer";
import { Projects } from "../Projects";
import { useEffect, useState, useCallback } from "react";

import styles from "./Main.module.css";

const sections = ["about", "projects"] as const;
type SectionId = (typeof sections)[number];

const navLabels: Record<SectionId, string> = {
  about: "ABOUT",
  projects: "PROJECTS",
};

export function Main() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY + window.innerHeight / 3;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && scrollY >= el.offsetTop) {
        setActiveSection(sections[i]);
        return;
      }
    }
    setActiveSection(sections[0]);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.sidebar}>
        <div className={styles.sidebarTop}>
          <h1 className={styles.name}>
            <a href="/" className={styles.nameLink}>Andrew Williams</a>
          </h1>
          <h2 className={styles.title}>Software Engineer</h2>


          <nav className={styles.nav} aria-label="In-page navigation">
            <ul className={styles.navList}>
              {sections.map((id) => (
                <li key={id}>
                  <button
                    className={`${styles.navLink} ${activeSection === id ? styles.navLinkActive : ""
                      }`}
                    onClick={() => handleNavClick(id)}
                    aria-current={activeSection === id ? "true" : undefined}
                  >
                    <span className={styles.navLabel}>{navLabels[id]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="content" className={styles.content}>
        <section id="about" className={styles.section} aria-label="About me">
          <div className={styles.sectionLabelMobile}>
            <h2 className={styles.sectionHeading}>About</h2>
          </div>
          <About />
        </section>

        <section id="projects" className={styles.section} aria-label="Projects">
          <div className={styles.sectionLabelMobile}>
            <h2 className={styles.sectionHeading}>Projects</h2>
          </div>
          <Projects />
        </section>

        <Footer />
      </main>
    </div>
  );
}
