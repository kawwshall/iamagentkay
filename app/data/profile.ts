export const profile = {
  handle: 'agentkay',
  name: 'Kaushal Raj',
  title: 'making things, mostly figuring it out',
  tagline: 'i build small tools, act when i get the chance, and am currently being humbled by jazz.',
  location: 'Guirim, Goa, India',
  email: 'beingkaushal01@gmail.com',
  links: {
    github: 'https://github.com/kawwshall',
    linkedin: 'https://www.linkedin.com/in/kaushal-raj-339345266/',
    x: 'https://x.com/agentkay',
  },
  about: [
    "i'm kaushal. i have had too many different jobs and i kind of like it that way.",
    'i have served coffee, taught code, anchored in hindi, acted in plays, managed field teams and built whatever tools people around me needed.',
    'i am suspicious of having a perfect five-year plan. right now i am following curiosity and seeing what refuses to leave me alone.',
    'i think passion follows art. you do the work first, stay with it, and the feeling catches up.',
    'currently in goa, learning jazz and carrying a manageable amount of delusions of grandeur.',
  ],
  skills: {
    build: ['JavaScript', 'TypeScript', 'Python', 'React', 'React Native', 'Next.js'],
    ship: ['Cloudflare', 'Vercel', 'ffmpeg', 'Whisper'],
    make_things_work: ['Messy operations', 'Training', 'Documentation', 'Talking to people'],
    craft: ['Acting', 'Hindustani vocals', 'Jazz'],
  },
  projects: [
    {
      name: 'jumpcut',
      blurb: 'i hate editing the awkward pauses out of my own videos, so i made the browser do it. it also adds captions and keeps the file on your machine.',
      stack: ['JavaScript', 'Whisper', 'ffmpeg', 'Cloudflare'],
      link: 'https://jumpcut.iamagentkay.com/',
      linkLabel: 'try jumpcut',
    },
    {
      name: 'spec ops',
      blurb: 'field work was scattered across chats and spreadsheets. this was my attempt to put clock-ins, proof, handovers, reimbursements and payouts in one place.',
      stack: ['Operations', 'Product', 'Field systems'],
      link: 'https://spec-ops.best/',
      linkLabel: 'open spec ops',
    },
    {
      name: 'zkits',
      blurb: 'people kept asking the same kit questions. fair enough, the setup was confusing. i made a visual guide so nobody had to wait around for an answer.',
      stack: ['Training', 'Documentation', 'Operations'],
      link: 'https://zkits.vercel.app/',
      linkLabel: 'open the guide',
    },
    {
      name: 'actfolio',
      blurb: 'a small home for the acting side of my life. software is not the only thing i enjoy making a little dramatic.',
      stack: ['Acting', 'Performance', 'Storytelling'],
      link: 'https://actfolio.netlify.app/',
      linkLabel: 'see the acting work',
    },
  ],
  story: [
    'served coffee at starbucks. got fast at making drinks and calm around chaos.',
    'taught javascript and react native, did a short hindi anchor stint, then spent a lot of time acting, running events and convincing people to show up.',
    'an operator job somehow turned into running field operations across a lot of cities. i learned more from doing every layer than from the final title.',
    'built a few internal tools because chats and spreadsheets were starting to lose the plot.',
    'refereed a fire and rescue robotics game at bykm 2026. this sentence still feels slightly made up, but it happened.',
    'studied hindustani classical vocals. now learning jazz badly enough to keep going back.',
  ],
  now: [
    'trying not to force myself into one neat identity',
    'building small things when they start bothering me enough',
    'learning jazz at goa jazz academy',
    'collecting strange questions and occasionally useful answers',
  ],
};

export type Profile = typeof profile;
