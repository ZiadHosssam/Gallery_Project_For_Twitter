# MS Paint Art Gallery

A whimsical, museum-style digital gallery showcasing MS Paint artwork and hilarious filenames. Built with **Next.js**, **HeroUI (NextUI)**, and **Framer Motion**.

## Features

- **Auto-detection**: Images in `/public/artworks/` are scanned at build time; add files and update `data/artworks.csv` to see new pieces.
- **CSV metadata**: `filename`, `display_title`, `description`, `date_created` (supports quoted fields).
- **Chaotic gallery**: Masonry-style layout with random rotation and sizing, entrance animations, and hover effects (Framer Motion).
- **Museum placards**: Filename always visible on each artwork card and on individual artwork pages.
- **Static export**: Ready for Vercel; run `npm run build` and deploy the `out` folder.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Test images (Lorem Picsum)

To populate the gallery with placeholder images:

```bash
npm run fetch-images
```

This downloads 5 images from [Lorem Picsum](https://picsum.photos) into `public/artworks/` as `.jpg`. Ensure `data/artworks.csv` uses the same filenames (e.g. `masterpiece_final_v2.jpg`, `definitely_a_sunset.jpg`, `not_a_cat_i_swear.jpg`, `why_did_i_make_this.jpg`, `final_FINAL_real.jpg`).

## Adding Artwork

1. Add image files (`.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.bmp`) to `public/artworks/`.
2. Add a row to `data/artworks.csv`:
   ```csv
   filename,display_title,description,date_created
   my_piece.png,My Piece,Optional description,2024-06-01
   ```
3. Rebuild and redeploy; new artwork appears in the gallery.

## Deploy (Vercel)

1. Connect your repo to Vercel.
2. Build command: `npm run build`
3. Output directory: `out`
4. Deploy.

## Tech Stack

- Next.js 16 (App Router)
- HeroUI (NextUI) – provider and theming
- Framer Motion – gallery animations
