"use client";

import ArtworkCardMotion from './ArtworkCardMotion';

export default function GalleryGrid({ artworks }) {
    return (
        <>
            {artworks.map((artwork, index) => (
                <ArtworkCardMotion key={artwork.id} artwork={artwork} index={index} />
            ))}
        </>
    );
}
