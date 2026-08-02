'use client';

import { useEffect, useRef, useState, type ReactNode, type KeyboardEvent } from 'react';
import { runCommand, welcome, availableCommands } from './commands';
import { profile } from '@/app/data/profile';

type HistoryEntry = { prompt: string; input: string; output: ReactNode };

export function Terminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [input, setInput] = useState('');
  const [cursor, setCursor] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const focus = () => inputRef.current?.focus();

  const prompt = `${profile.handle}@web:~$`;
  const quickCommands = ['about', 'projects', 'story', 'now', 'contact'];

  const submit = (raw: string) => {
    const out = runCommand(raw);
    if (out === '__CLEAR__') {
      setHistory([]);
      return;
    }
    setHistory((h) => [...h, { prompt, input: raw, output: out }]);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submit(input);
      setInput('');
      setCursor(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = history.filter((h) => h.input).map((h) => h.input);
      if (!prev.length) return;
      const next = cursor < 0 ? prev.length - 1 : Math.max(0, cursor - 1);
      setCursor(next);
      setInput(prev[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const prev = history.filter((h) => h.input).map((h) => h.input);
      if (cursor < 0) return;
      const next = cursor + 1;
      if (next >= prev.length) {
        setCursor(-1);
        setInput('');
      } else {
        setCursor(next);
        setInput(prev[next] ?? '');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = availableCommands.find((c) => c.startsWith(input.trim()));
      if (match) setInput(match);
    }
  };

  return (
    <div
      onClick={focus}
      className="min-h-screen w-full px-4 sm:px-8 py-6 sm:py-10 max-w-4xl mx-auto animate-flicker"
    >
      <div className="mb-5">{welcome}</div>

      <nav aria-label="Quick commands" className="mb-7 flex flex-wrap gap-2">
        {quickCommands.map((command) => (
          <button
            key={command}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              submit(command);
            }}
            className="border border-term-dim/50 px-3 py-1.5 text-sm text-term-accent transition-colors hover:border-term-accent hover:bg-term-accent/10 focus:outline-none focus:ring-1 focus:ring-term-accent"
          >
            ./{command}
          </button>
        ))}
      </nav>

      {history.map((h, i) => (
        <div key={i} className="mb-3">
          <div className="flex gap-2">
            <span className="text-term-accent">{h.prompt}</span>
            <span>{h.input}</span>
          </div>
          {h.output && <div className="mt-1">{h.output}</div>}
        </div>
      ))}

      <div className="flex gap-2 items-center border-t border-term-dim/20 pt-4">
        <span className="text-term-accent">{prompt}</span>
        <input
          ref={inputRef}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent border-0 outline-none text-term-fg caret-term-accent"
          spellCheck={false}
          autoComplete="off"
          aria-label="terminal input"
        />
      </div>

      <div ref={bottomRef} />
    </div>
  );
}
