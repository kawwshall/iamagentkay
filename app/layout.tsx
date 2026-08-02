import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'agent kay',
  description: 'Agent Kay. I enter unfamiliar systems, learn the real work, and build what is missing.',
  openGraph: {
    title: 'agent kay',
    description: 'I enter unfamiliar systems, learn the real work, and build what is missing.',
    url: 'https://iamagentkay.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'agent kay',
    description: 'Passion follows art. Obsession follows repetition. The rest is noise.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="scanlines">{children}</body>
    </html>
  );
}
