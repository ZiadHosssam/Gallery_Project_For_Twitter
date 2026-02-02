import MsPaintButton from '@/components/MsPaintButton';
import styles from './page.module.css';

export default function HomePage() {
    return (
        <div className={styles.container}>
            {/* Floating paint elements background */}
            <div className={styles.floatingElements}>
                <span className={styles.paintBlob} style={{ '--delay': '0s', '--x': '10%', '--y': '20%' }}>🎨</span>
                <span className={styles.paintBlob} style={{ '--delay': '1s', '--x': '80%', '--y': '15%' }}>🖌️</span>
                <span className={styles.paintBlob} style={{ '--delay': '2s', '--x': '70%', '--y': '70%' }}>🖼️</span>
                <span className={styles.paintBlob} style={{ '--delay': '0.5s', '--x': '20%', '--y': '75%' }}>✨</span>
                <span className={styles.paintBlob} style={{ '--delay': '1.5s', '--x': '50%', '--y': '30%' }}>🌈</span>
            </div>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>
                        <span className={styles.titleLine}>Welcome to the</span>
                        <span className={styles.titleMain}>MSPAINTED Gallery</span>
                    </h1>

                    <p className={styles.subtitle}>
                        A whimsical museum celebrating the art of MS Paint
                        <br />
                        <em>...and the hilarious filenames that accompany them</em>
                    </p>

                    <div className={styles.windowFrame}>
                        <div className={styles.windowTitle}>
                            <span className={styles.windowIcon}>🎨</span>
                            <span>untitled - Paint</span>
                            <div className={styles.windowButtons}>
                                <span className={styles.windowBtn}>_</span>
                                <span className={styles.windowBtn}>□</span>
                                <span className={styles.windowBtn}>×</span>
                            </div>
                        </div>
                        <div className={styles.windowContent}>
                            <p>
                                Every masterpiece here was lovingly crafted in Microsoft Paint.
                                Each piece comes with a unique, often humorous filename that tells
                                its own story. Because naming is an art form too! 🖌️
                            </p>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <MsPaintButton href="/gallery" size="large" variant="primary">
                            🚪 Enter Gallery
                        </MsPaintButton>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className={styles.features}>
                <div className={styles.feature}>
                    <span className={styles.featureIcon}>🖼️</span>
                    <h3>Original Artworks</h3>
                    <p>Every piece created exclusively in MS Paint</p>
                </div>
                <div className={styles.feature}>
                    <span className={styles.featureIcon}>📝</span>
                    <h3>Creative Filenames</h3>
                    <p>The names are as entertaining as the art itself</p>
                </div>
                <div className={styles.feature}>
                    <span className={styles.featureIcon}>🏛️</span>
                    <h3>Museum Experience</h3>
                    <p>Browse like you're in a real art gallery</p>
                </div>
            </section>
        </div>
    );
}
