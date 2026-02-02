"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import MuseumPlacard from './MuseumPlacard';
import ArtworkImage from './ArtworkImage';
import styles from './ArtworkCard.module.css';

export default function ArtworkCardMotion({ artwork, index }) {
    return (
        <motion.div
            className={`${styles.card} ${styles[artwork.sizeVariant]}`}
            style={{ '--rotation': `${artwork.rotation}deg` }}
            initial={{ opacity: 0, y: 40, rotate: artwork.rotation }}
            animate={{ opacity: 1, y: 0, rotate: artwork.rotation }}
            transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
                scale: 1.03,
                rotate: artwork.rotation * 0.3,
                transition: { duration: 0.2 },
            }}
        >
            <Link
                href={`/artwork/${artwork.slug}`}
                className={styles.cardLink}
                style={{ display: 'block' }}
            >
                <div className={styles.frame}>
                    <div className={styles.imageWrapper}>
                        <ArtworkImage
                            filename={artwork.filename}
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
        </motion.div>
    );
}
