import Link from 'next/link';
import styles from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoIcon}>🎨</span>
                        <span className={styles.logoText}>MS Paint Gallery</span>
                    </Link>
                    <div className={styles.navLinks}>
                        <Link href="/gallery" className={styles.navLink}>Gallery</Link>
                        <Link href="/about" className={styles.navLink}>About</Link>
                    </div>
                </nav>
            </header>

            <main className={styles.main}>
                {children}
            </main>

            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.footerText}>
                        Made with 🖌️ in MS Paint
                    </p>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} MS Paint Art Gallery
                    </p>
                </div>
            </footer>
        </div>
    );
}
