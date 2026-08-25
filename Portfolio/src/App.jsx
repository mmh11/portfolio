import {
  aboutHighlights,
  certifications,
  contactLinks,
  currentLearning,
  education,
  experience,
  featuredProjects,
  skillGroups,
  timelineDirection,
  timelineItems,
  upcomingProjects,
} from './data/portfolio'
import SectionHeader from './components/SectionHeader'
import ProjectCard from './components/ProjectCard'
import ArchitectureDiagram from './components/ArchitectureDiagram'
import './App.css'

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  return (
    <header className="site-header">
      <a className="brand-link" href="#top" aria-label="Go to top">
        <span className="brand-mark">MH</span>
        <span>Martin Hui</span>
      </a>
      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow">Melbourne, Australia</p>
        <h1 id="hero-title">Martin Hui</h1>
        <p className="hero-role">Cybersecurity {'\u2022'} Cloud {'\u2022'} IT Infrastructure</p>
        <p className="hero-summary">
          Cybersecurity graduate with hands-on experience across AWS, Microsoft 365,
          cloud infrastructure, email security and IT operations.
        </p>
        <div className="hero-actions" aria-label="Primary links">
          <a className="button primary" href="#experience">
            View Experience
          </a>
          <a className="button primary-soft" href="#projects">
            View Projects
          </a>
          <a className="button ghost" href="https://github.com/mmh11" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            className="button ghost"
            href="https://www.linkedin.com/in/sze-ming-hui-baa202225/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="button ghost" href="mailto:huim13a@gmail.com?subject=Resume%20request">
            Resume
          </a>
        </div>
      </div>
      <div className="hero-panel" aria-label="Professional focus areas">
        <ArchitectureDiagram />
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section-shell split-section" id="about" aria-labelledby="about-heading">
      <SectionHeader
        eyebrow="About"
        title="Applications, infrastructure and security in one view"
        description="My background has progressed from software development into cybersecurity, then into cloud infrastructure and security operations."
      />
      <div className="about-card">
        <p>
          I am a Melbourne-based cybersecurity graduate with a Master of Cybersecurity
          from Monash University, awarded with Distinction, and CompTIA Security+
          certification.
        </p>
        <p>
          Recent MSP experience at CyberAgency Group has extended my work into real
          client environments, including AWS account setup, Microsoft 365 administration,
          DNS and email authentication, technical troubleshooting and security operations.
        </p>
        <div className="highlight-list" aria-label="About highlights">
          {aboutHighlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function CurrentExperience() {
  const current = experience[0]

  return (
    <section className="section-shell" id="experience" aria-labelledby="experience-heading">
      <SectionHeader
        eyebrow="Current Experience"
        title="CyberAgency Group"
        description="MSP exposure across cloud operations, Microsoft 365, email security, documentation and client-facing technical support."
      />
      <article className="current-experience-card">
        <div className="experience-heading">
          <div>
            <h3>{current.role}</h3>
            <p>{current.company}</p>
          </div>
          <div className="meta-stack">
            <span>{current.period}</span>
            <span>{current.location}</span>
          </div>
        </div>
        <div className="capability-grid">
          {current.capabilities.map((capability) => (
            <section className="capability-card" key={capability.title}>
              <h4>{capability.title}</h4>
              <ul>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </article>
    </section>
  )
}

function PreviousExperience() {
  const previous = experience[1]

  return (
    <section className="section-shell compact-section" aria-labelledby="previous-experience-heading">
      <SectionHeader
        eyebrow="Previous Experience"
        title="Professional software engineering foundation"
        description="Earlier React development experience supports the cloud and security work by adding application-level context."
      />
      <article className="previous-experience-card">
        <div>
          <h3>{previous.role}</h3>
          <p className="company-line">{previous.company}</p>
          <p className="meta-line">{previous.period}</p>
        </div>
        <div>
          <p className="project-line">{previous.project}</p>
          <ul>
            {previous.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="tag-row">
            {previous.technologies.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </article>
    </section>
  )
}

function Projects() {
  return (
    <section className="section-shell" id="projects" aria-labelledby="projects-heading">
      <SectionHeader
        eyebrow="Featured Projects"
        title="Cloud, backend and security case studies"
        description="Selected work is presented by technical contribution and security thinking, not as generic coursework."
      />
      <div className="project-grid">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="upcoming-card" aria-label="Currently building">
        <span>Currently Building</span>
        <h3>{upcomingProjects[0].title}</h3>
        <p>{upcomingProjects[0].description}</p>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section-shell" id="skills" aria-labelledby="skills-heading">
      <SectionHeader
        eyebrow="Technical Skills"
        title="Organised by working domain"
        description="A practical view of tools and technologies used across cloud, security, IT operations and development."
      />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <p className="skill-description">{group.description}</p>
            <div className="tag-row">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            {group.note ? <p>{group.note}</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}

function Education() {
  return (
    <section className="section-shell" id="education" aria-labelledby="education-heading">
      <SectionHeader
        eyebrow="Education & Certifications"
        title="Cybersecurity academic base with current certification"
        description="Credentials are separated from learning plans so the page stays accurate as new certifications are added."
      />
      <div className="education-grid">
        <div className="credential-column">
          {education.map((item) => (
            <article className="credential-card" key={item.degree}>
              <span>{item.period}</span>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <p>{item.result}</p>
              {item.details ? <p className="fine-print">{item.details}</p> : null}
            </article>
          ))}
        </div>
        <div className="credential-column">
          {certifications.map((item) => (
            <article className="credential-card certification-card" key={item.name}>
              <span>Certification</span>
              <h3>{item.name}</h3>
              <p>{item.issued}</p>
              <p>{item.expires}</p>
            </article>
          ))}
          <article className="credential-card learning-card">
            <span>Currently Learning</span>
            {currentLearning.map((item) => (
              <div key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.status}</p>
              </div>
            ))}
          </article>
        </div>
      </div>
    </section>
  )
}

function Timeline() {
  return (
    <section className="section-shell" id="timeline" aria-labelledby="timeline-heading">
      <SectionHeader
        eyebrow="Career Timeline"
        title="Progression toward cloud security engineering"
        description="The timeline connects software development, cybersecurity study, cloud projects and current MSP operations experience."
      />
      <ol className="timeline-list">
        {timelineItems.map((item) => (
          <li key={`${item.period}-${item.title}`}>
            <time>{item.period}</time>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <aside className="timeline-direction" aria-label="Current direction">
        <span>{timelineDirection.title}</span>
        <p>{timelineDirection.description}</p>
      </aside>
    </section>
  )
}

function Contact() {
  return (
    <section className="section-shell contact-section" id="contact" aria-labelledby="contact-heading">
      <SectionHeader
        eyebrow="Contact"
        title="Open to cloud, security and infrastructure opportunities"
        description="Best contacted through email, LinkedIn or GitHub. Residential and phone details are intentionally omitted from the public site."
      />
      <div className="contact-card">
        {contactLinks.map((link) => (
          <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined}>
            <span>{link.label}</span>
            <strong>{link.value}</strong>
          </a>
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CurrentExperience />
        <PreviousExperience />
        <Projects />
        <Skills />
        <Education />
        <Timeline />
        <Contact />
      </main>
    </>
  )
}

export default App
