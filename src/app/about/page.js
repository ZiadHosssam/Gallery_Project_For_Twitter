import styles from './page.module.css';

export const metadata = {
    title: 'About | MS Paint Art Gallery',
    description: 'Learn about the artist and the philosophy behind MS Paint art',
};

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>About the Artist</h1>
                <div className={styles.paintIcon}>🎨</div>
            </header>

            <section className={styles.content}>
                <div className={styles.windowFrame}>
                    <div className={styles.windowTitle}>
                        <span>📝 artist_bio.txt - Notepad</span>
                        <div className={styles.windowButtons}>
                            <span>_</span>
                            <span>□</span>
                            <span>×</span>
                        </div>
                    </div>
                    <div className={styles.windowContent}>
                        <h2>Hello, Art Enthusiast!</h2>
                        <p>
                            Welcome to my digital gallery! I create art exclusively in Microsoft Paint,
                            embracing the beautiful limitations and nostalgic charm of this classic software
                            that we all grew up with.
                        </p>
                        <p>
                            Each piece in this gallery was lovingly crafted pixel by pixel, using nothing
                            but the humble tools that MS Paint provides: the trusty pencil, the bold brush,
                            the mysterious spray can, and of course, the legendary bucket fill.
                        </p>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>🖌️ Why MS Paint?</h2>
                    <div className={styles.reasonsGrid}>
                        <div className={styles.reasonCard}>
                            <span className={styles.reasonIcon}>💾</span>
                            <h3>Nostalgia</h3>
                            <p>It reminds us of simpler times, when creating art was about fun, not perfection.</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <span className={styles.reasonIcon}>🎯</span>
                            <h3>Constraints</h3>
                            <p>Limited tools force creativity. No fancy brushes, no excuses!</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <span className={styles.reasonIcon}>😄</span>
                            <h3>Charm</h3>
                            <p>There's beauty in imperfection. Jagged lines have character!</p>
                        </div>
                        <div className={styles.reasonCard}>
                            <span className={styles.reasonIcon}>🌐</span>
                            <h3>Universal</h3>
                            <p>Everyone has used MS Paint. It's democratized digital art.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>📁 The Filename Philosophy</h2>
                    <div className={styles.filenameBox}>
                        <p>
                            Every artwork in this gallery comes with a unique, often humorous filename.
                            Because let's be honest - have you ever saved something as <code>final_FINAL_v2_real.png</code>?
                        </p>
                        <p>
                            The filenames are as much a part of the art as the images themselves.
                            They tell a story of creative process, late-night inspiration,
                            and the eternal struggle of naming things.
                        </p>
                        <div className={styles.filenameExamples}>
                            <code>definitely_not_a_mistake.png</code>
                            <code>why_did_i_do_this.jpg</code>
                            <code>masterpiece_attempt_47.png</code>
                        </div>
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>🏛️ The Creative Process</h2>
                    <ol className={styles.processList}>
                        <li>
                            <span className={styles.stepNumber}>1</span>
                            <span>Open MS Paint (the one true canvas)</span>
                        </li>
                        <li>
                            <span className={styles.stepNumber}>2</span>
                            <span>Stare at the blank white rectangle</span>
                        </li>
                        <li>
                            <span className={styles.stepNumber}>3</span>
                            <span>Make the first mark (the hardest part)</span>
                        </li>
                        <li>
                            <span className={styles.stepNumber}>4</span>
                            <span>Embrace the chaos</span>
                        </li>
                        <li>
                            <span className={styles.stepNumber}>5</span>
                            <span>Save with a funny filename</span>
                        </li>
                        <li>
                            <span className={styles.stepNumber}>6</span>
                            <span>Call it a masterpiece! 🎨</span>
                        </li>
                    </ol>
                </div>
            </section>

            {/* Floating decorative elements */}
            <div className={styles.floatingElements}>
                <span style={{ '--delay': '0s', '--x': '5%', '--y': '30%' }}>🖌️</span>
                <span style={{ '--delay': '1.5s', '--x': '90%', '--y': '25%' }}>✨</span>
                <span style={{ '--delay': '0.7s', '--x': '85%', '--y': '65%' }}>🎨</span>
                <span style={{ '--delay': '2s', '--x': '8%', '--y': '70%' }}>🖼️</span>
            </div>
        </div>
    );
}
