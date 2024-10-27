"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle menu open/close
    };

    return (
        <nav className={styles.nav}>
            {/* Logo */}
            <Link href="/" className={styles.logoLink}>
                <h2 className={styles.logo}>DF.</h2>
            </Link>

            {/* Desktop menu (visible only on larger screens) */}
            <div className={styles.desktopMenu}>
                <ul>
                    <li><Link href="/" className={styles.link}>Home</Link></li>
                    <li><Link href="/service" className={styles.link}>Services</Link></li>
                    <li><Link href="/work" className={styles.link}>Work</Link></li>
                    <li><Link href="/contact" className={styles.link}><button>HIRE ME</button></Link></li>
                </ul>
            </div>

            {/* Hamburger icon for mobile view */}
            <div className={styles.hamburgerIcon} onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
            </div>

            {/* Mobile menu (toggles based on isOpen state) */}
            {isOpen && (
                <div className={styles.mobileMenu}>
                    <ul>
                        <li onClick={toggleMenu}><Link href="/" className={styles.link}>Home</Link></li>
                        <li onClick={toggleMenu}><Link href="/service" className={styles.link}>Services</Link></li>
                        <li onClick={toggleMenu}><Link href="/work" className={styles.link}>Work</Link></li>
                        <li onClick={toggleMenu}><Link href="/contact" className={styles.link}>HIRE ME</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
