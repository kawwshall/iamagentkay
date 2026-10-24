import { profile } from '@/app/data/profile';
import type { ReactNode } from 'react';

export type CommandResult = ReactNode;

export const availableCommands = [
  'about', 'projects', 'experience', 'skills', 'contact', 'help', 'clear',
];

export const welcome: CommandResult = (
  <div className="space-y-1">
    <h1 className="text-term-fg text-lg font-normal">{profile.name}</h1>
    <p className="text-term-dim">Software &amp; AI tools · {profile.location}</p>
  </div>
);

const commands: Record<string, () => CommandResult> = {
  help: () => <div className="text-term-dim">{availableCommands.join(' · ')}</div>,
  about: () => (
    <div>
      <div>{profile.name} · {profile.title}</div>
      <div className="text-term-dim">{profile.location} · Open to AI generalist roles</div>
    </div>
  ),
  projects: () => (
    <div className="space-y-2">
      {profile.projects.map((project) => (
        <div key={project.name}>
          <div className="flex flex-wrap items-baseline gap-x-3">
            <a href={project.live} target="_blank" rel="noreferrer">{project.name}</a>
            <span className="text-term-dim">{project.summary}</span>
            <a className="text-xs" href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.name} source code`}>code</a>
          </div>
        </div>
      ))}
    </div>
  ),
  experience: () => (
    <div>
      <div>Operations Tech Lead · Build AI · Mar–Aug 2026</div>
      <div className="text-term-dim">Internal tools, technical guides, and operator training.</div>
    </div>
  ),
  skills: () => (
    <div className="text-term-dim space-y-1">
      {Object.values(profile.skills).map((skills, index) => <div key={index}>{skills.join(' · ')}</div>)}
    </div>
  ),
  contact: () => (
    <div className="flex flex-wrap gap-x-4 gap-y-1">
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
      <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  ),
};

const aliases: Record<string, string> = {
  ls: 'help', whoami: 'about', social: 'contact', work: 'projects', proof: 'projects',
};

export function runCommand(input: string): CommandResult {
  const raw = input.trim().toLowerCase();
  if (!raw) return null;
  if (raw === 'clear') return '__CLEAR__';
  const cmd = Object.prototype.hasOwnProperty.call(aliases, raw) ? aliases[raw] : raw;
  if (Object.prototype.hasOwnProperty.call(commands, cmd)) return commands[cmd]();
  return <span className="text-term-dim">Unknown command. Try help.</span>;
}
