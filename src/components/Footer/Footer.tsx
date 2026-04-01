"use client";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Andrew Williams. All rights reserved.
      </p>
    </footer>
  );
}
