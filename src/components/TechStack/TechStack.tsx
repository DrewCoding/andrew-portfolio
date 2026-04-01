"use client";

import styles from "./TechStack.module.css";

export function TechStack({ techStack }: { techStack: string[] }) {
  return (
    <ul className={styles.techList}>
      {techStack.map((tech, index) => (
        <li key={index} className={styles.techTag}>
          {tech}
        </li>
      ))}
    </ul>
  );
}
