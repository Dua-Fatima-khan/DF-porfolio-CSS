// pages/Tech.tsx

import Image from "next/image";
import styles from "./Tech.module.css";

export default function Tech(){
    return (
        <section className={styles.section}>
            <h2 className={styles.heading}>Explore my Tech Arsenal</h2>
            <p className={styles.subheading}>Softwares that power my work</p>
            <div className={styles.imageContainer}>
                <Image src="/vs.png" alt="Visual Studio" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/next.png" alt="Next.js" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/tailwind.png" alt="Tailwind CSS" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/html.png" alt="HTML" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/css.png" alt="CSS" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/ts.png" alt="TypeScript" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/node.png" alt="Node.js" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/framer.png" alt="Framer Motion" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/figma.png" alt="Figma" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/ms.png" alt="Microsoft" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/adobe.png" alt="Adobe" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/canva.png" alt="Canva" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/ai.png" alt="Adobe Illustrator" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/yt.png" alt="YouTube" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
                <Image src="/google.png" alt="Google" width={100} height={100} className={`${styles.image} ${styles.bgDiv} ${styles.shadow}`} />
            </div>
        </section>
    );
};
