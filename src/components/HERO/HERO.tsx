import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <h1 className={styles.heroTitle} >Web Developer</h1>
            <h2 className={styles.heroTitlee} >& Designer</h2>
            <p>
                {`I'm a Pakistan-based web developer and designer, building websites that don’t just work—they slap! Whether it’s front-end magic or designs that make you go ‘damn!’, I’ve got the skills to bring your ideas to life. Let’s create something so epic, your browser will do a double take!`}
            </p>
        </section>
    );
}