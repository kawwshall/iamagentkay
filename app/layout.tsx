import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'agentkay // kaushal raj',
  description: 'founder / builder — shipping agents and things on the internet.',
  openGraph: {
    title: 'agentkay',
    description: 'founder / builder — shipping agents and things on the internet.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="scanlines">{children}</body>
    </html>
  );
}
