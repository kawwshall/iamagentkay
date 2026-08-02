export const profile = {
  handle: 'agentkay',
  name: 'Kaushal Raj',
  title: 'operator turned builder, currently exploring',
  tagline: 'i enter unfamiliar systems, learn the real work, and build what is missing.',
  location: 'Guirim, Goa, India',
  email: 'beingkaushal01@gmail.com',
  links: {
    github: 'https://github.com/kawwshall',
    linkedin: 'https://www.linkedin.com/in/kaushal-raj-339345266/',
    x: 'https://x.com/agentkay',
  },
  about: [
    "i'm kaushal. i learn systems from the ground up, then build what is missing.",
    'in three months, i went from doing field data collection myself to leading 300+ operators across 27+ cities and 5+ regions.',
    'i built tools for training, attendance, geotagged proof, reimbursements and payouts because the operation needed them.',
    'that experience is proof of how i work. it is not the company i have already decided to build.',
    'right now i am in goa, learning jazz and exploring what i want to spend years building.',
  ],
  skills: {
    build: ['JavaScript', 'TypeScript', 'Python', 'React', 'React Native', 'Next.js'],
    ship: ['Cloudflare', 'Vercel', 'ffmpeg', 'Whisper'],
    operate: ['Field ops', 'Hiring', 'Onboarding', 'Training', 'Multi-city execution'],
    craft: ['Acting', 'Hindustani vocals', 'Jazz'],
  },
  projects: [
    {
      name: 'jumpcut',
      blurb: 'a browser video editor that removes pauses and vocal hesitations, adds captions and exports an mp4. whisper and ffmpeg run on your machine.',
      stack: ['JavaScript', 'Whisper', 'ffmpeg', 'Cloudflare'],
      link: 'https://jumpcut.iamagentkay.com/',
      linkLabel: 'try jumpcut',
    },
    {
      name: 'spec ops',
      blurb: 'the daily operating layer i built for field teams: clock-ins, clock-outs, geotagged proof, handovers, reimbursements and payouts.',
      stack: ['Operations', 'Product', 'Field systems'],
      link: 'https://spec-ops.best/',
      linkLabel: 'open spec ops',
    },
    {
      name: 'zkits',
      blurb: 'a visual guide that helped operators assemble wearable camera kits, run field checks and solve problems without waiting for a manager.',
      stack: ['Training', 'Documentation', 'Operations'],
      link: 'https://zkits.vercel.app/',
      linkLabel: 'open the guide',
    },
    {
      name: 'actfolio',
      blurb: 'a small home for my acting work. building software is only one part of how i think and communicate.',
      stack: ['Acting', 'Performance', 'Storytelling'],
      link: 'https://actfolio.netlify.app/',
      linkLabel: 'see the acting work',
    },
  ],
  story: [
    'served coffee at starbucks and learned what calm, repeatable frontline work actually feels like.',
    'taught javascript and react native, anchored in hindi for doordarshan, and worked across acting, events and outreach at the iit madras bs drama society.',
    'joined an egocentric data project as an operator, then grew into national operations across 27+ cities, 5+ regions and 300+ operators.',
    'helped the operation deliver 70,000+ hours of data while building internal tools whenever spreadsheets and chats stopped being enough.',
    'refereed the fire and rescue robotics game at bykm 2026.',
    'studied hindustani classical vocals. now learning jazz at goa jazz academy.',
  ],
  now: [
    'exploring before forcing myself into one company idea',
    'building small tools when a problem feels real enough',
    'learning jazz at goa jazz academy',
    'looking for people with unusual obsessions and honest questions',
  ],
};

export type Profile = typeof profile;
