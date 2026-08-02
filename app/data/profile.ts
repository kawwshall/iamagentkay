export const profile = {
  handle: 'agentkay',
  name: 'Agent Kay',
  title: 'built from detours',
  tagline: 'i enter unfamiliar systems, learn the real work, and build what is missing.',
  location: 'Guirim, Goa, India',
  email: 'beingkaushal01@gmail.com',
  links: {
    github: 'https://github.com/kawwshall',
    linkedin: 'https://www.linkedin.com/in/kaushal-raj-339345266/',
    x: 'https://x.com/agentkay',
  },
  about: [
    "i'm kay. i have a high tolerance for chaos and a habit of making myself useful.",
    'i have served coffee, taught code, anchored in hindi, acted on stage, run field operations and built software in the gaps.',
    'i do not wait for passion to arrive. i start working. passion follows art.',
    'i am not looking for a neat identity. i am looking for work with teeth.',
    'currently in goa, learning jazz and testing a few delusions of grandeur against reality.',
  ],
  skills: {
    build: ['JavaScript', 'TypeScript', 'Python', 'React', 'React Native', 'Next.js'],
    ship: ['Cloudflare', 'Vercel', 'ffmpeg', 'Whisper'],
    make_things_work: ['Messy operations', 'Training', 'Documentation', 'Pressure'],
    craft: ['Acting', 'Hindustani vocals', 'Jazz'],
  },
  projects: [
    {
      name: 'jumpcut',
      blurb: 'i hated editing the awkward pauses out of my own videos, so i made the browser do it. it cuts, captions and keeps the file on your machine.',
      stack: ['JavaScript', 'Whisper', 'ffmpeg', 'Cloudflare'],
      link: 'https://jumpcut.iamagentkay.com/',
      linkLabel: 'try jumpcut',
    },
    {
      name: 'spec ops',
      blurb: 'field work was breaking under chats and spreadsheets. i put clock-ins, proof, handovers, reimbursements and payouts in one place.',
      stack: ['Operations', 'Product', 'Field systems'],
      link: 'https://spec-ops.best/',
      linkLabel: 'open spec ops',
    },
    {
      name: 'zkits',
      blurb: 'the setup was confusing and the same questions kept blocking work. i turned the answers into a visual field guide.',
      stack: ['Training', 'Documentation', 'Operations'],
      link: 'https://zkits.vercel.app/',
      linkLabel: 'open the guide',
    },
    {
      name: 'actfolio',
      blurb: 'the acting side of my life. software is not the only thing i enjoy making dramatic.',
      stack: ['Acting', 'Performance', 'Storytelling'],
      link: 'https://actfolio.netlify.app/',
      linkLabel: 'see the acting work',
    },
  ],
  story: [
    'served coffee at starbucks. got fast at making drinks and calm around chaos.',
    'taught javascript and react native, did a short hindi anchor stint, then spent a lot of time acting, running events and convincing people to show up.',
    'an operator job turned into running field operations across a lot of cities. doing every layer mattered more than the final title.',
    'built a few internal tools because chats and spreadsheets were starting to lose the plot.',
    'refereed a fire and rescue robotics game at bykm 2026. strange sentence. true story.',
    'studied hindustani classical vocals. now learning jazz, where bluffing is immediately audible.',
  ],
  now: [
    'building before i feel ready',
    'following questions with teeth',
    'learning jazz at goa jazz academy',
    'keeping the delusions, demanding evidence',
  ],
};

export type Profile = typeof profile;
