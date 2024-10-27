import { serviceDetails } from "../../app/data/details";
import styles from '../CARD/card.module.css'; // Adjust the path if necessary

export default function CARD() {
    return (
        <>
            {serviceDetails.map((service) => (
                <div key={service.id} className={styles.card}>
                    <p>{service.id}</p>
                    <h2 className={styles.cardTitle}>{service.title}</h2>
                    <p className={styles.cardDescription}>{service.description}</p>
                    <button className={styles.cardButton}>CONTACT ME</button>
                </div>
            ))}
        </>
    );
}
