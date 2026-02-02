import Layout from '@/components/Layout';
import { Providers } from './providers';
import '@/styles/globals.css';

export const metadata = {
    title: 'MS Paint Art Gallery',
    description: 'A whimsical museum-style digital gallery showcasing MS Paint artwork and hilarious filenames',
    keywords: ['MS Paint', 'art', 'gallery', 'digital art', 'museum'],
    openGraph: {
        title: 'MS Paint Art Gallery',
        description: 'A whimsical museum celebrating MS Paint art and creative filenames',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎨</text></svg>" />
            </head>
            <body>
                <Providers>
                    <Layout>{children}</Layout>
                </Providers>
            </body>
        </html>
    );
}
