import { Terminal } from '@/components/Terminal';
import Link from 'next/link';

export default function TerminalPage() {
  return <div className="terminal-surface scanlines min-h-screen"><div className="max-w-2xl mx-auto px-4 sm:px-8 pt-5 text-sm"><Link href="/">← back to portfolio</Link></div><Terminal /></div>;
}
