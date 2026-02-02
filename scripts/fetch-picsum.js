/**
 * Fetches test images from Lorem Picsum and saves them to public/artworks/.
 * Run from project root: node scripts/fetch-picsum.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const ARTWORKS_DIR = path.join(__dirname, '..', 'public', 'artworks');
const WIDTH = 400;
const HEIGHT = 300;

// Each entry: [filename, picsum seed for variety]
const IMAGES = [
    ['masterpiece_final_v2.jpg', 1],
    ['definitely_a_sunset.jpg', 10],
    ['not_a_cat_i_swear.jpg', 20],
    ['why_did_i_make_this.jpg', 30],
    ['final_FINAL_real.jpg', 40],
];

function fetchImage(seed) {
    return new Promise((resolve, reject) => {
        const url = `https://picsum.photos/seed/${seed}/${WIDTH}/${HEIGHT}`;
        https.get(url, (res) => {
            const chunks = [];
            res.on('data', (chunk) => chunks.push(chunk));
            res.on('end', () => resolve(Buffer.concat(chunks)));
            res.on('error', reject);
        }).on('error', reject);
    });
}

async function main() {
    if (!fs.existsSync(ARTWORKS_DIR)) {
        fs.mkdirSync(ARTWORKS_DIR, { recursive: true });
    }

    for (const [filename, seed] of IMAGES) {
        try {
            const buffer = await fetchImage(seed);
            const filepath = path.join(ARTWORKS_DIR, filename);
            fs.writeFileSync(filepath, buffer);
            console.log('Saved:', filename);
        } catch (err) {
            console.error('Failed', filename, err.message);
        }
    }

    console.log('Done. Update data/artworks.csv to use .jpg for these filenames if needed.');
}

main();
