import { profile } from '@/app/data/profile';
import type { ReactNode } from 'react';

export type CommandResult = ReactNode;

const line = (s: ReactNode, key?: string | number) => (
  <div key={key} className="whitespace-pre-wrap leading-relaxed">
    {s}
  </div>
);

const banner = (
  <pre className="text-term-accent leading-tight text-[11px] sm:text-sm overflow-x-auto">
{String.raw` █████╗  ██████╗ ███████╗███╗   ██╗████████╗██╗  ██╗ █████╗ ██╗   ██╗
██╔══██╗██╔════╝ ██╔════╝████╗  ██║╚══██╔══╝██║ ██╔╝██╔══██╗╚██╗ ██╔╝
███████║██║  ███╗█████╗  ██╔██╗ ██║   ██║   █████╔╝ ███████║ ╚████╔╝
██╔══██║██║   ██║██╔══╝  ██║╚██╗██║   ██║   ██╔═██╗ ██╔══██║  ╚██╔╝
██║  ██║╚██████╔╝███████╗██║ ╚████║   ██║   ██║  ██╗██║  ██║   ██║
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   `}
  </pre>
);

export const welcome: CommandResult = (
  <div className="space-y-3">
    {banner}
    <div>
      <span className="text-term-fg">{profile.name.toLowerCase()}</span>
      <span className="text-term-dim"> / {profile.title}</span>
    </div>
    <div className="max-w-2xl text-term-fg/90">{profile.tagline}</div>
    <div className="text-term-dim">
      recently: 300+ operators · 27+ cities · 5+ regions · 70,000+ hours delivered
    </div>
    <div className="text-term-dim text-sm">
      use the shortcuts below or type <span className="text-term-amber">help</span>.
    </div>
  </div>
);

const commands: Record<string, () => CommandResult> = {
  help: () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
      {[
        ['help', 'show this list'],
        ['about', 'who i am'],
        ['whoami', 'quick identity'],
        ['projects', 'things i built'],
        ['story', 'how i got here'],
        ['skills', 'what i can work with'],
        ['now', 'what i am doing right now'],
        ['contact', 'how to reach me'],
        ['resume', 'link to resume.md'],
        ['social', 'links'],
        ['clear', 'clear terminal'],
      ].map(([cmd, desc]) => (
        <div key={cmd}>
          <span className="text-term-accent">{cmd.padEnd(10)}</span>
          <span className="text-term-dim">{desc}</span>
        </div>
      ))}
    </div>
  ),

  whoami: () => line(`${profile.handle} / ${profile.title} / ${profile.location}`),

  about: () => (
    <div className="space-y-1">
      {profile.about.map((l, i) => line(l, i))}
    </div>
  ),

  projects: () => (
    <div className="space-y-3">
      {profile.projects.map((p) => (
        <div key={p.name}>
          <div>
            <span className="text-term-accent">▸ {p.name}</span>{' '}
            <span className="text-term-dim">[{p.stack.join(', ')}]</span>
          </div>
          <div className="pl-4 text-term-fg/90">{p.blurb}</div>
          {p.link && p.link !== '#' && (
            <div className="pl-4">
              <a href={p.link} target="_blank" rel="noreferrer">
                → {p.linkLabel ?? p.link}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  ),

  skills: () => (
    <div className="space-y-1">
      {Object.entries(profile.skills).map(([k, v]) => (
        <div key={k}>
          <span className="text-term-amber">{k.padEnd(12)}</span>
          <span>{(v as string[]).join(' · ')}</span>
        </div>
      ))}
    </div>
  ),

  now: () => (
    <div className="space-y-1">
      {profile.now.map((l, i) => line(`• ${l}`, i))}
    </div>
  ),

  story: () => (
    <div className="space-y-2">
      {profile.story.map((item, i) => (
        <div key={item} className="grid grid-cols-[2rem_1fr] gap-2">
          <span className="text-term-amber">{String(i + 1).padStart(2, '0')}</span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  ),

  contact: () => (
    <div className="space-y-1">
      {line(
        <>
          email:{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </>,
      )}
      {line(
        <>
          github:{' '}
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            {profile.links.github}
          </a>
        </>,
      )}
      {line(
        <>
          linkedin:{' '}
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            {profile.links.linkedin}
          </a>
        </>,
      )}
    </div>
  ),

  social: () => commands.contact(),

  resume: () => (
    <div>
      <a href="/resume.md" target="_blank" rel="noreferrer">
        → open resume.md
      </a>
    </div>
  ),
};

export function runCommand(input: string): CommandResult {
  const cmd = input.trim().toLowerCase();
  if (!cmd) return null;
  if (cmd === 'clear') return '__CLEAR__';
  if (cmd === 'ls') return commands.help();
  if (cmd === 'work' || cmd === 'proof') return commands.projects();
  if (cmd in commands) return commands[cmd]();
  if (cmd === 'sudo rm -rf /') {
    return <span className="text-term-red">nice try.</span>;
  }
  return (
    <span className="text-term-red">
      command not found: {cmd}. try <span className="text-term-amber">help</span>.
    </span>
  );
}

export const availableCommands = [
  'help', 'about', 'whoami', 'projects', 'story', 'skills',
  'now', 'contact', 'social', 'resume', 'clear',
];
