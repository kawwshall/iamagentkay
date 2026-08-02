import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'agentkay // kaushal raj',
  description: 'Kaushal Raj. Operator turned builder, currently exploring from Goa.',
  openGraph: {
    title: 'agentkay // kaushal raj',
    description: 'Operator turned builder. I learn the real work and build what is missing.',
    url: 'https://iamagentkay.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'agentkay // kaushal raj',
    description: 'Operator turned builder, currently exploring from Goa.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="scanlines">{children}</body>
    </html>
  );
}
