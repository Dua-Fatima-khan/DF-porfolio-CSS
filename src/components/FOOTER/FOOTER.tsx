// components/FOOTER.tsx

import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css"; // Import the CSS module

const quote: string = "Let's";

export default function FOOTER() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <p className={styles.quote}>Project in mind?</p>
                <h2 className={styles.title}>
                    <span className={styles.titleSpan}>{quote} make your</span>
                    <br />
                    Website Shine
                </h2>
                <p className={styles.subtitle}>Web Development, Web design, and Graphic design services.</p>
                <Link href="/contact">
                    <button className={styles.button}>Get in touch</button>
                </Link>
            </div>
            <h2 className={styles.followHeader}>Follow me on</h2>
            <div className={styles.socialContainer}>
                <div className={styles.socialLink}>
                    <div>
                        <Image src="/linked.png" alt="LinkedIn" width={100} height={100} />
                    </div>
                    <h2 className={styles.socialTitle}>LinkedIn</h2>
                    <Link href="https://www.linkedin.com/in/dua-fatima-%E2%9C%A8%F0%9F%87%B5%F0%9F%87%B8-906208258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                        <button className={styles.button}>Follow</button>
                    </Link>
                </div>
                <div className={styles.socialLink}>
                    <div>
                        <Image src="/ig.png" alt="Instagram" width={100} height={100} />
                    </div>
                    <h2 className={styles.socialTitle}>Instagram</h2>
                    <Link href="https://www.instagram.com/fatima_bint__ahmed?igsh=MXV2eWpveWNrczN2bQ==">
                        <button className={styles.button}>Follow</button>
                    </Link>
                </div>
                <div className={styles.socialLink}>
                    <div>
                        <Image src="/github.png" alt="GitHub" width={100} height={100} />
                    </div>
                    <h2 className={styles.socialTitle}>GitHub</h2>
                    <Link href="https://github.com/Dua-Fatima-khan/Dua-Fatima-khan/blob/main/README.md">
                        <button className={styles.button}>Follow</button>
                    </Link>
                </div>
            </div>
            <p className={styles.footerText}>
                &copy; 2024 <span className={styles.footerHighlight}>Dua Fatima.</span> All rights reserved.
            </p>
        </section>
    );
}
