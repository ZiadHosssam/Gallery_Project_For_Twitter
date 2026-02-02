import fs from 'fs';
import path from 'path';

// Parse CSV content into array of objects (handles quoted fields with commas)
function parseCSV(content) {
    const lines = content.trim().split(/\r?\n/);
    if (lines.length === 0) return [];
    const headers = parseCSVLine(lines[0]);

    return lines.slice(1).map(line => {
        const values = parseCSVLine(line);
        const obj = {};
        headers.forEach((header, index) => {
            const key = header.trim();
            obj[key] = values[index]?.trim() ?? '';
        });
        return obj;
    });
}

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const c = line[i];
        if (c === '"') {
            inQuotes = !inQuotes;
        } else if ((c === ',' && !inQuotes) || (c === '\n' && !inQuotes)) {
            result.push(current);
            current = '';
        } else {
            current += c;
        }
    }
    result.push(current);
    return result;
}

// Find public/artworks by walking up from this file until we find it
// (works even when Next build runs from .next/server or different cwd)
function findArtworksDir() {
    const candidates = [
        path.join(process.cwd(), 'public', 'artworks'),
        path.join(__dirname, '..', 'public', 'artworks'),
        path.join(__dirname, '..', '..', 'public', 'artworks'),
        path.join(__dirname, '..', '..', '..', 'public', 'artworks'),
    ];
    for (const dir of candidates) {
        try {
            if (fs.existsSync(dir)) return dir;
        } catch (_) {}
    }
    // Walk up from __dirname until we find a folder containing public/artworks
    let dir = __dirname;
    for (let i = 0; i < 10; i++) {
        const artworksDir = path.join(dir, 'public', 'artworks');
        if (fs.existsSync(artworksDir)) return artworksDir;
        const parent = path.dirname(dir);
        if (parent === dir) break;
        dir = parent;
    }
    return path.join(process.cwd(), 'public', 'artworks');
}

function findCsvPath() {
    const artworksDir = findArtworksDir();
    const projectRoot = path.join(artworksDir, '..', '..');
    return path.join(projectRoot, 'data', 'artworks.csv');
}

// Get all artwork data by scanning directory and matching with CSV
export function getArtworks() {
    const artworksDir = findArtworksDir();
    const csvPath = fs.existsSync(findCsvPath()) ? findCsvPath() : path.join(path.dirname(artworksDir), '..', 'data', 'artworks.csv');

    // Check if artworks directory exists
    if (!fs.existsSync(artworksDir)) {
        return [];
    }

    // Get all image files from directory
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.bmp'];
    const files = fs.readdirSync(artworksDir).filter(file =>
        imageExtensions.includes(path.extname(file).toLowerCase())
    );

    // Parse CSV if it exists
    let csvData = [];
    if (fs.existsSync(csvPath)) {
        const csvContent = fs.readFileSync(csvPath, 'utf-8');
        csvData = parseCSV(csvContent);
    }

    // Match files with CSV data
    const artworks = files.map((filename, index) => {
        const csvEntry = csvData.find(entry => entry.filename === filename);
        const slug = filename.replace(/\.[^/.]+$/, ''); // Remove extension for slug

        // Generate random rotation and size for chaotic layout
        const rotation = (Math.random() * 6 - 3).toFixed(2); // -3 to +3 degrees
        const sizeVariant = ['small', 'medium', 'large'][Math.floor(Math.random() * 3)];

        return {
            id: index + 1,
            filename,
            slug,
            imagePath: `/artworks/${filename}`,
            displayTitle: csvEntry?.display_title || filename,
            description: csvEntry?.description || '',
            dateCreated: csvEntry?.date_created || '',
            rotation: parseFloat(rotation),
            sizeVariant,
        };
    });

    return artworks;
}

// Get a single artwork by slug
export function getArtworkBySlug(slug) {
    const artworks = getArtworks();
    return artworks.find(artwork => artwork.slug === slug);
}

// Get artwork slugs for static generation
export function getArtworkSlugs() {
    const artworks = getArtworks();
    return artworks.map(artwork => artwork.slug);
}
