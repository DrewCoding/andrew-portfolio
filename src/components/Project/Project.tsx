"use client";

import styles from "./Project.module.css";
import type { project } from "../../../lists/Projects";
import { TechStack } from "../TechStack";
import { VideoPlayer } from "../VideoPlayer";

export function Project({ title, description, techStack, src, link }: project) {
  return (
    <div className={styles.projectsList}>
      <a href={link || undefined} className={styles.projectCard}>
        <div className={styles.projectInfo}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <div className={styles.image}>
            {src && <VideoPlayer videoName={src} />}
          </div>
          <p className={styles.projectDescription}>{description}</p>
          <TechStack techStack={techStack} />
        </div>
      </a>
    </div>
  );
}
