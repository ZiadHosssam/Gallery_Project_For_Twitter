import Link from 'next/link';
import MuseumPlacard from './MuseumPlacard';
import styles from './ArtworkCard.module.css';

export default function ArtworkCard({ artwork, index }) {
    const animationDelay = `${index * 0.1}s`;

    return (
        <Link
            href={`/artwork/${artwork.slug}`}
            className={`${styles.card} ${styles[artwork.sizeVariant]}`}
            style={{
                '--rotation': `${artwork.rotation}deg`,
                '--animation-delay': animationDelay,
            }}
        >
            <div className={styles.frame}>
                <div className={styles.imageWrapper}>
                    <img
                        src={artwork.imagePath}
                        alt={artwork.displayTitle}
                        className={styles.image}
                        loading="lazy"
                    />
                </div>
                <div className={styles.placardWrapper}>
                    <MuseumPlacard
                        filename={artwork.filename}
                        title={artwork.displayTitle}
                    />
                </div>
            </div>
        </Link>
    );
}
