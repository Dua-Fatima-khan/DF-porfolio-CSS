
import CARD from "../CARD/CARD";
import styles from './Service.module.css'; // Adjust the path if needed

export default function SERVICE() {
    return (
        <section className={styles.service}>
            <h2 className={styles.serviceTitle}>Services</h2>
            <div className={styles.cardContainer}>
                <CARD />
            </div>
        </section>
    );
}
