/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    // Silence lockfile warning when multiple lockfiles exist
    turbopack: { root: __dirname },
};

module.exports = nextConfig;
