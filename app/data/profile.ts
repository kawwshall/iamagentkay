export const profile = {
  name: 'Kaushal Raj',
  handle: 'agentkay',
  title: 'Software developer',
  tagline: 'Useful software. Built around real problems.',
  description: 'I build and ship web applications and AI tools.',
  location: 'Indore, India',
  email: 'beingkaushal01@gmail.com',
  links: {
    github: 'https://github.com/kawwshall',
    linkedin: 'https://www.linkedin.com/in/kaushal-339345266/',
  },
  skills: {
    Languages: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
    Apps: ['React', 'Next.js', 'React Native', 'Expo'],
    AI: ['OpenAI API', 'Structured outputs', 'API integrations'],
    Data: ['SQLite', 'Cloudflare D1', 'Drizzle'],
    Deploy: ['Cloudflare Workers', 'Cloudflare Pages', 'Vercel'],
  },
  projects: [
    {
      name: 'Posy',
      summary: 'AI gifting assistant · sandbox',
      category: 'AI agent · Hackathon project',
      blurb: 'An AI gifting assistant you can text. Finds gifts within a budget and handles an approval-based checkout flow using sandbox payments.',
      stack: ['TypeScript', 'Next.js', 'OpenAI', 'Prava', 'Linq'],
      link: 'https://github.com/kawwshall/posy',
      live: 'https://posy.getcontios.com/',
    },
    {
      name: 'Notch',
      summary: 'Prepaid session tracking',
      category: 'Session tracking',
      blurb: 'Session tracking for independent trainers and teachers. Tracks prepaid sessions and helps them follow up when clients need to renew.',
      stack: ['TypeScript', 'Next.js', 'Cloudflare D1', 'Drizzle', 'Resend'],
      link: 'https://github.com/kawwshall/notch',
      live: 'https://notch.beingkaushal01.workers.dev/',
    },
    {
      name: 'Beforeburn',
      summary: 'Energy planning · in development',
      category: 'In development',
      blurb: 'An app for planning personal energy, spotting overloaded days, and making room for recovery. Currently in development.',
      stack: ['Expo', 'React Native', 'TypeScript'],
      link: 'https://github.com/kawwshall/beforeburn',
      live: 'https://beforeburn.vercel.app/',
    },
  ],
};

export type Profile = typeof profile;
