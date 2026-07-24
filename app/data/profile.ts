export const profile = {
  handle: 'agentkay',
  name: 'Kaushal Raj',
  title: 'founder / builder',
  tagline: 'building agents, shipping products, breaking things on purpose.',
  location: 'India',
  email: 'you@example.com',
  links: {
    github: 'https://github.com/kawwshall',
    linkedin: 'https://www.linkedin.com/in/kaushal-raj-339345266/',
    x: 'https://x.com/agentkay',
  },
  about: [
    "i'm kaushal — i build things on the internet.",
    'currently obsessed with ai agents, autonomous systems, and the space between design and code.',
    'previously: [replace with prior experience].',
    'if it can be automated, it probably should be.',
  ],
  skills: {
    languages: ['TypeScript', 'Python', 'Go', 'SQL'],
    frameworks: ['Next.js', 'React', 'Node', 'FastAPI'],
    infra: ['Cloudflare Workers', 'Vercel', 'Postgres', 'Redis'],
    ai: ['Claude API', 'OpenAI', 'LangChain', 'MCP', 'Agent SDKs'],
  },
  projects: [
    {
      name: 'agentkay',
      blurb: 'personal AI ops layer — agents that ship code, triage inbox, run errands.',
      stack: ['TypeScript', 'Claude', 'MCP'],
      link: 'https://github.com/kawwshall',
    },
    {
      name: 'project-two',
      blurb: 'replace with the thing you actually shipped.',
      stack: ['Next.js', 'Postgres'],
      link: '#',
    },
    {
      name: 'project-three',
      blurb: 'replace with another shipped project. keep it short and punchy.',
      stack: ['Python', 'FastAPI'],
      link: '#',
    },
  ],
  now: [
    'shipping agentkay v1',
    'writing more, tweeting less',
    'looking for interesting collabs',
  ],
};

export type Profile = typeof profile;
