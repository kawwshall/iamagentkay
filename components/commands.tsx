import { profile } from '@/app/data/profile';
import type { ReactNode } from 'react';

export type CommandResult = ReactNode;

const line = (s: ReactNode, key?: string | number) => (
  <div key={key} className="whitespace-pre-wrap leading-relaxed">
    {s}
  </div>
);

export const welcome: CommandResult = (
  <div className="welcome-copy">
    <div className="text-term-accent text-sm tracking-[0.16em] uppercase">agent kay</div>
    <h1 className="text-term-fg text-2xl sm:text-3xl leading-tight font-normal max-w-3xl">
      {profile.tagline}
    </h1>
    <p>
      that has been the pattern so far. i have moved through coffee, theatre, code, field operations and now jazz, and none of it was planned particularly well. i usually enter because i am curious, stay because the work starts getting interesting, and then build something because i cannot stop thinking about how badly the current thing works.
    </p>
    <p>
      i still believe passion follows art. you do the work first, often badly, and somewhere in the middle it begins to matter. right now i am in goa, learning jazz, building whatever keeps bothering me and holding on to a few delusions of grandeur because life is boring without them.
    </p>
    <p className="text-term-dim text-sm">
      you can click around if you want, or type <span className="text-term-amber">help</span>. it is just a website. nothing sacred here.
    </p>
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
