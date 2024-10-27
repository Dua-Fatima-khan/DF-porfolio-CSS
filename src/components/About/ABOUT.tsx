// pages/About.tsx

import React from 'react';
import styles from './About.module.css';

export default function About(){
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Dua Fatima.</h2>
      <p className={styles.paragraph}>
        I’m a <span className={styles.highlight}>Pakistan-based Frontend Web Developer</span> and designer who <span className={styles.highlight}>loves</span> turning ideas into vibrant online experiences! With a knack for <span className={styles.highlight}>HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Bootstrap, and Next.js</span>, I create sleek, responsive websites that are not just pretty but also packed with functionality. My expertise extends to animations using <span className={styles.highlight}>GSAP, Scroll Trigger, AOS,</span> and <span className={styles.highlight}>Framer Motion</span>, ensuring a dynamic user experience, along with proficiency in version control with <span className={styles.highlight}>Git</span> and <span className={styles.highlight}>GitHub</span>. If you’re ready to bring your vision to life, let’s make some <span className={styles.highlight}>digital fireworks</span> together!
      </p>
      <h2 className={styles.quote}>
        &quot;Creativity takes courage&quot; - <span>Henri Matisse</span>
      </h2>
    </section>
  );
};


