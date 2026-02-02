"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

/**
 * Renders an artwork image with a src that works in both:
 * - Dev/server: /artworks/filename.jpg
 * - Static export opened as file (file://): relative path from current page
 */
export default function ArtworkImage({ filename, alt, className, loading = "lazy" }) {
    const pathname = usePathname();
    const [src, setSrc] = useState(() => `/artworks/${filename}`);

    useEffect(() => {
        if (typeof window !== "undefined" && window.location?.protocol === "file:") {
            const segments = (pathname ?? "").split("/").filter(Boolean);
            const depth = segments.length;
            const base = depth === 0 ? "" : "../".repeat(depth);
            setSrc(`${base}artworks/${filename}`);
        } else {
            setSrc(`/artworks/${filename}`);
        }
    }, [filename, pathname]);

    return (
        <img
            src={src}
            alt={alt ?? ""}
            className={className}
            loading={loading}
        />
    );
}
