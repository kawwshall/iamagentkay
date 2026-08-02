import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'agentkay // kaushal raj',
  description: 'Kaushal Raj. Making things, learning jazz and mostly figuring it out from Goa.',
  openGraph: {
    title: 'agentkay // kaushal raj',
    description: 'Making small tools, following curiosity and carrying a few delusions of grandeur.',
    url: 'https://iamagentkay.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'agentkay // kaushal raj',
    description: 'Making things, learning jazz and mostly figuring it out from Goa.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="scanlines">{children}</body>
    </html>
  );
}
