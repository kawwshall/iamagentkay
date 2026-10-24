import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Kaushal Raj — Software & AI Tools',
  description: 'Kaushal Raj builds web applications and practical tools for AI assistants and field operations.',
  openGraph: {
    title: 'Kaushal Raj — Software & AI Tools',
    description: 'Kaushal Raj builds web applications and practical tools for AI assistants and field operations.',
    url: 'https://iamagentkay.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Kaushal Raj — Software & AI Tools',
    description: 'Kaushal Raj builds web applications and practical tools for AI assistants and field operations.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
