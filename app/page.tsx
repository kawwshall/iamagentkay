import { profile } from './data/profile';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="portfolio">
      <section aria-labelledby="about">
        <h1 id="about">About Kaushal</h1>
        <p>I’m Kaushal Raj, also known as agentkay, a developer currently based in {profile.location}. My work involves building and shipping web applications and AI tools.</p>
        <p>Open to AI generalist roles that involve building tools, connecting systems, and helping teams use them.</p>
      </section>

      <section aria-labelledby="projects">
        <h2 id="projects">Projects</h2>
        {profile.projects.map((project) => (
          <article key={project.name}>
            <h3>
              <a href={project.live ?? project.link} target="_blank" rel="noreferrer">{project.name}</a>
              <a className="project-code" href={project.link} target="_blank" rel="noreferrer" aria-label={`${project.name} source code`}>code</a>
            </h3>
            <p>{project.blurb}</p>
          </article>
        ))}
      </section>

      <section aria-labelledby="experience">
        <h2 id="experience">Experience</h2>
        <p>Operations Tech Lead at <a href="https://www.build.ai/" target="_blank" rel="noreferrer">Build AI</a> <span className="detail">· March-August 2026</span></p>
        <p>Joined as an operator and grew into the lead role. Built internal tools, created <a href="https://zkits.vercel.app/" target="_blank" rel="noreferrer">ZKits equipment guides</a>, and trained field teams on an AI data collection project. Led operations across 25+ cities and 300+ operators, supporting the collection of 70,000+ hours of training data.</p>
        <p>Earlier work includes web development at Faayo, teaching JavaScript at Chai &amp; Code, and supporting a Solidity workshop at IIT Madras CyStar.</p>
      </section>

      <section aria-labelledby="tools">
        <h2 id="tools">Stack</h2>
        <dl className="skills">
          {Object.entries(profile.skills).map(([category, items]) => (
            <div key={category}><dt>{category}</dt><dd>{items.join(', ')}</dd></div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="outside-work">
        <h2 id="outside-work">Side quests</h2>
        <p>I’ve spent a fair amount of time pretending to be other people on stage. You can find some <a href="https://actfolio.netlify.app/" target="_blank" rel="noreferrer">evidence here</a>.</p>
        <p>Music takes up some of my time too. I study Hindustani classical vocals and western vocals at Goa Jazz Academy, though the high notes still take some convincing.</p>
        <p>Then there’s coffee, which I love enough to have worked at Starbucks. Apparently just drinking it wasn’t a sufficient commitment.</p>
        <p className="detail">Also pursuing a BS in Data Science and Applications from IIT Madras alongside work.</p>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">Contact</h2>
        <p>Reach me at <a href={`mailto:${profile.email}`}>{profile.email}</a>.</p>
        <p><a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a> · <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></p>
      </section>
      <footer><Link href="/terminal">terminal</Link></footer>
    </main>
  );
}
