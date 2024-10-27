import PROJECT from "../../components/PROJECTCARD/PROJECTCARD";
import styles from "./work.module.css"; // Import the CSS module

export default function Work() {
  return (
    <section className={styles.workSection}>
      <div className={styles.header}>
        <h2 className={styles.heading}>My Projects</h2>
        <p>Some of My latest projects</p>
      </div>

      <PROJECT />
    </section>
  );
}
