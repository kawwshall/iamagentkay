import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kaushal Raj — Software & AI Tools',
  description: 'Kaushal Raj builds and ships web applications and AI tools.',
  openGraph: {
    title: 'Kaushal Raj — Software & AI Tools',
    description: 'Kaushal Raj builds and ships web applications and AI tools.',
    url: 'https://iamagentkay.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Kaushal Raj — Software & AI Tools',
    description: 'Kaushal Raj builds and ships web applications and AI tools.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
