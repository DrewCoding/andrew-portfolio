"use client";

import styles from "./Projects.module.css";
import { Project } from "../Project";
import { projects } from "../../../data/projectData";

export function Projects() {
  return (
    <div className={styles.projectsList}>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}
