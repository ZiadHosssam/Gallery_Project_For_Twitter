import { getArtworks, getArtworkBySlug, getArtworkSlugs } from '../../../../lib/artworks';
import MsPaintButton from '@/components/MsPaintButton';
import MuseumPlacard from '@/components/MuseumPlacard';
import ArtworkImage from '@/components/ArtworkImage';
import styles from './page.module.css';
import Link from 'next/link';

export async function generateStaticParams() {
    const slugs = getArtworkSlugs();
    // Static export requires at least one param; use placeholder when gallery is empty
    if (slugs.length === 0) return [{ slug: '_empty' }];
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const resolved = await Promise.resolve(params);
    const slug = typeof resolved?.slug === 'string' ? resolved.slug : resolved?.slug?.[0] ?? '';
    const artwork = slug && slug !== '_empty' ? getArtworkBySlug(slug) : null;
    return {
        title: `${artwork?.displayTitle || slug || 'Artwork'} | MS Paint Gallery`,
        description: artwork?.description || `View ${artwork?.displayTitle || slug} in the MS Paint Gallery`,
    };
}

export default async function ArtworkPage({ params }) {
    const resolved = await Promise.resolve(params);
    const slug = typeof resolved?.slug === 'string' ? resolved.slug : resolved?.slug?.[0] ?? '';
    const artwork = slug && slug !== '_empty' ? getArtworkBySlug(slug) : null;
    const allArtworks = getArtworks();

    if (!artwork || slug === '_empty') {
        return (
            <div className={styles.notFound}>
                <h1>🤔 Artwork Not Found</h1>
                <p>This masterpiece seems to have wandered off...</p>
                <MsPaintButton href="/gallery">Back to Gallery</MsPaintButton>
            </div>
        );
    }

    // Find prev/next artworks
    const currentIndex = allArtworks.findIndex(a => a.slug === artwork.slug);
    const prevArtwork = currentIndex > 0 ? allArtworks[currentIndex - 1] : null;
    const nextArtwork = currentIndex < allArtworks.length - 1 ? allArtworks[currentIndex + 1] : null;

    return (
        <div className={styles.container}>
            <div className={styles.navigation}>
                <MsPaintButton href="/gallery" size="small">
                    ← Back to Gallery
                </MsPaintButton>
            </div>

            <article className={styles.artwork}>
                <div className={styles.frame}>
                    <div className={styles.imageContainer}>
                        <ArtworkImage
                            filename={artwork.filename}
                            alt={artwork.displayTitle}
                            className={styles.image}
                            loading="eager"
                        />
                    </div>
                </div>

                <div className={styles.info}>
                    <div className={styles.placardLarge}>
                        <MuseumPlacard
                            filename={artwork.filename}
                            title={artwork.displayTitle}
                            showFilename={true}
                        />
                    </div>

                    {artwork.description && (
                        <p className={styles.description}>{artwork.description}</p>
                    )}

                    {artwork.dateCreated && (
                        <p className={styles.date}>
                            Created: {new Date(artwork.dateCreated).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                        </p>
                    )}
                </div>
            </article>

            <nav className={styles.artworkNav}>
                {prevArtwork ? (
                    <Link href={`/artwork/${prevArtwork.slug}`} className={styles.navLink}>
                        <span className={styles.navArrow}>←</span>
                        <span className={styles.navLabel}>Previous</span>
                        <span className={styles.navTitle}>{prevArtwork.displayTitle}</span>
                    </Link>
                ) : (
                    <div className={styles.navPlaceholder}></div>
                )}

                {nextArtwork ? (
                    <Link href={`/artwork/${nextArtwork.slug}`} className={styles.navLink}>
                        <span className={styles.navLabel}>Next</span>
                        <span className={styles.navArrow}>→</span>
                        <span className={styles.navTitle}>{nextArtwork.displayTitle}</span>
                    </Link>
                ) : (
                    <div className={styles.navPlaceholder}></div>
                )}
            </nav>
        </div>
    );
}
