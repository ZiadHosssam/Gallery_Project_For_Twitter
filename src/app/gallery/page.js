import dynamic from 'next/dynamic';
import { getArtworks } from '../../../lib/artworks';
import styles from './page.module.css';

// Lazy-load grid so Framer Motion lives in a separate chunk → faster /gallery compile.
// For even faster dev: use ArtworkCard instead of ArtworkCardMotion in GalleryGrid.
const GalleryGrid = dynamic(() => import('@/components/GalleryGrid'), { ssr: true });

export const metadata = {
    title: 'Gallery | MS Paint Art Gallery',
    description: 'Browse our collection of MS Paint masterpieces',
};

export default function GalleryPage() {
    const artworks = getArtworks();

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>🖼️ The Gallery</h1>
                <p className={styles.subtitle}>
                    Browse our collection of {artworks.length > 0 ? artworks.length : 'magnificent'} masterpieces
                </p>
            </header>

            {artworks.length > 0 ? (
                <div className={styles.gallery}>
                    <GalleryGrid artworks={artworks} />
                </div>
            ) : (
                <div className={styles.emptyState}>
                    <div className={styles.emptyIcon}>🎨</div>
                    <h2>No Artworks Yet!</h2>
                    <p>
                        Add your MS Paint masterpieces to the <code>/public/artworks/</code> folder
                        and update the CSV file to see them here.
                    </p>
                </div>
            )}
        </div>
    );
}
