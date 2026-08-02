export const profile = {
  handle: 'agentkay',
  name: 'Agent Kay',
  title: 'not one thing, thankfully',
  tagline: 'i enter unfamiliar systems, learn the real work, and build what is missing.',
  location: 'Guirim, Goa, India',
  email: 'beingkaushal01@gmail.com',
  links: {
    github: 'https://github.com/kawwshall',
    linkedin: 'https://www.linkedin.com/in/kaushal-raj-339345266/',
    x: 'https://x.com/agentkay',
  },
  about: [
    "i'm kay. i do not have a clean story for how i got here because, honestly, it was never clean.",
    'i have served coffee, taught javascript, anchored in hindi, acted on stage, run field operations and built software in the gaps. some of it was planned. most of it was me saying yes and then learning fast enough to survive the decision.',
    'the only pattern i trust is that i like getting close to the real work. once i understand it, i start seeing things that should exist but do not, and then it gets difficult not to build them.',
    'i do not know what the one big thing is yet, and i am not going to package that uncertainty as some grand vision. i am just taking the questions seriously enough to follow them.',
    'right now i am in goa, learning jazz, making things and keeping a few delusions of grandeur around because life gets boring without them.',
  ],
  skills: {
    build: ['JavaScript', 'TypeScript', 'Python', 'React', 'React Native', 'Next.js'],
    ship: ['Cloudflare', 'Vercel', 'ffmpeg', 'Whisper'],
    make_things_work: ['messy operations', 'training', 'documentation', 'pressure'],
    craft: ['Acting', 'Hindustani vocals', 'Jazz'],
  },
  projects: [
    {
      name: 'jumpcut',
      blurb: 'i made this because editing my own awkward pauses was annoying me. you give it a talking video, it cuts the dead parts, adds captions and keeps the file on your machine.',
      stack: ['JavaScript', 'Whisper', 'ffmpeg', 'Cloudflare'],
      link: 'https://jumpcut.iamagentkay.com/',
      linkLabel: 'try jumpcut',
    },
    {
      name: 'spec ops',
      blurb: 'we were trying to run field work through too many chats and spreadsheets, and things kept disappearing. i built this to keep clock-ins, proof, handovers, reimbursements and payouts in one place.',
      stack: ['Operations', 'Product', 'Field systems'],
      link: 'https://spec-ops.best/',
      linkLabel: 'open spec ops',
    },
    {
      name: 'zkits',
      blurb: 'the kit setup was confusing, people kept asking the same fair questions, and waiting for an answer slowed everyone down. so i turned what we knew into a visual guide.',
      stack: ['Training', 'Documentation', 'Operations'],
      link: 'https://zkits.vercel.app/',
      linkLabel: 'open the guide',
    },
    {
      name: 'actfolio',
      blurb: 'this is where i keep some of my acting work. software is not the only thing in my life that becomes more dramatic than necessary.',
      stack: ['Acting', 'Performance', 'Storytelling'],
      link: 'https://actfolio.netlify.app/',
      linkLabel: 'see the acting work',
    },
  ],
  story: [
    'i served coffee at starbucks for a while. it made me fast with my hands and much calmer when ten things were going wrong at once.',
    'around the same years i taught javascript and react native, did a short hindi anchor stint, acted in plays, ran events and spent a surprising amount of time convincing people to show up.',
    'later i joined a field data project as an operator. somehow that turned into managing work across a lot of cities, but the useful part was doing nearly every layer myself before trying to lead anyone else.',
    'a few of the tools on this site came from that time because our chats and spreadsheets were slowly losing the plot, and complaining about them was becoming less interesting than building something better.',
    'i was also a referee for a fire and rescue robotics game at bykm 2026, which sounds made up whenever i write it down, but it happened.',
    'i studied hindustani classical vocals and now i am learning jazz, where every attempt to bluff becomes audible immediately.',
  ],
  now: [
    'i am learning jazz at goa jazz academy and it is rearranging parts of my brain in ways i did not expect.',
    'i am building things when they keep bothering me long enough that ignoring them becomes harder than starting.',
    'i am still exploring what deserves years of my life. i would rather be honest about that than pretend the answer arrived fully formed.',
  ],
};

export type Profile = typeof profile;
