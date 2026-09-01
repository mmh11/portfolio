import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion as Motion, useReducedMotion } from 'framer-motion'
import {
  aboutHighlights,
  certifications,
  contactLinks,
  currentLearning,
  education,
  experience,
  featuredProjects,
  skillGroups,
  timelineItems,
  upcomingProjects,
} from './data/portfolio'
import {
  ctaItem,
  fadeIn,
  fadeUp,
  heroGroup,
  heroVisual,
  staggerGroup,
  viewportOnce,
} from './animations/variants'
import SectionHeader from './components/SectionHeader'
import ProjectCard from './components/ProjectCard'
import ArchitectureDiagram from './components/ArchitectureDiagram'
import './App.css'

const introStorageKey = 'martin-hui-intro-seen'

const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function hasSeenIntro() {
  try {
    return sessionStorage.getItem(introStorageKey) === 'true'
  } catch {
    return true
  }
}

function markIntroSeen() {
  try {
    sessionStorage.setItem(introStorageKey, 'true')
  } catch {
    // If storage is unavailable, keep the portfolio accessible.
  }
}

function IntroOverlay({ onComplete }) {
  const shouldReduceMotion = useReducedMotion()
  const [status, setStatus] = useState('initializing')

  useEffect(() => {
    markIntroSeen()

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    if (shouldReduceMotion) {
      const timer = window.setTimeout(onComplete, 220)
      return () => {
        document.body.style.overflow = originalOverflow
        window.clearTimeout(timer)
      }
    }

    const statusTimer = window.setTimeout(() => setStatus('connected'), 650)
    const completeTimer = window.setTimeout(onComplete, 1620)

    return () => {
      document.body.style.overflow = originalOverflow
      window.clearTimeout(statusTimer)
      window.clearTimeout(completeTimer)
    }
  }, [onComplete, shouldReduceMotion])

  const particles = Array.from({ length: 16 }, (_, index) => index)

  return (
    <Motion.div
      className="intro-overlay"
      aria-live="polite"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: shouldReduceMotion ? 0.14 : 0.34, ease: [0.22, 1, 0.36, 1] } }}
      onAnimationEnd={(event) => {
        if (event.currentTarget === event.target && event.animationName === 'intro-lifetime') {
          onComplete()
        }
      }}
    >
      {!shouldReduceMotion ? (
        <div className="intro-particles" aria-hidden="true">
          {particles.map((particle) => (
            <span key={particle} style={{ '--particle-index': particle }} />
          ))}
        </div>
      ) : null}
      <div className="intro-status">
        <span className="intro-status-dot" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <Motion.p
            key={status}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: shouldReduceMotion ? 0.08 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {status === 'initializing' ? 'INITIALIZING...' : 'MARTIN HUI // CONNECTED'}
          </Motion.p>
        </AnimatePresence>
        <span className="intro-status-line" aria-hidden="true" />
      </div>
    </Motion.div>
  )
}

function Header({ isIntroComplete }) {
  return (
    <Motion.header
      className="site-header"
      initial={{ opacity: 0, y: -8 }}
      animate={isIntroComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
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
    </Motion.header>
  )
}

function Hero({ isIntroComplete }) {
  return (
    <section className="hero-section section-shell" id="top" aria-labelledby="hero-title">
      <Motion.div className="hero-content" variants={heroGroup} initial="hidden" animate={isIntroComplete ? 'show' : 'hidden'}>
        <Motion.p className="eyebrow" variants={fadeIn}>
          Melbourne, Australia
        </Motion.p>
        <Motion.h1 id="hero-title" variants={fadeUp}>
          Martin Hui
        </Motion.h1>
        <Motion.p className="hero-role" variants={fadeUp}>
          Cybersecurity {'\u2022'} Cloud {'\u2022'} IT Infrastructure
        </Motion.p>
        <Motion.p className="hero-summary" variants={fadeUp}>
          Cybersecurity graduate with hands-on experience across AWS, Microsoft 365,
          cloud infrastructure, email security and IT operations.
        </Motion.p>
        <Motion.div className="hero-actions" variants={staggerGroup} aria-label="Primary links">
          <Motion.a className="button primary" href="#experience" variants={ctaItem}>
            View Experience
          </Motion.a>
          <Motion.a className="button primary-soft" href="#projects" variants={ctaItem}>
            View Projects
          </Motion.a>
          <Motion.a className="button ghost" href="https://github.com/mmh11" target="_blank" rel="noreferrer" variants={ctaItem}>
            GitHub
          </Motion.a>
          <Motion.a
            className="button ghost"
            href="https://www.linkedin.com/in/sze-ming-hui-baa202225/"
            target="_blank"
            rel="noreferrer"
            variants={ctaItem}
          >
            LinkedIn
          </Motion.a>
          <Motion.a className="button ghost" href="mailto:huim13a@gmail.com?subject=Resume%20request" variants={ctaItem}>
            Resume
          </Motion.a>
        </Motion.div>
      </Motion.div>
      <Motion.div className="hero-panel" aria-label="Professional focus areas" initial="hidden" animate={isIntroComplete ? 'show' : 'hidden'} variants={heroVisual}>
        <ArchitectureDiagram />
      </Motion.div>
    </section>
  )
}

function About() {
  return (
    <Motion.section
      className="section-shell split-section"
      id="about"
      aria-labelledby="about-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <SectionHeader
        eyebrow="About"
        title="Applications, infrastructure and security in one view"
        description="My background has progressed from software development into cybersecurity, then into cloud infrastructure and security operations."
      />
      <Motion.div className="about-card" variants={fadeUp}>
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
      </Motion.div>
    </Motion.section>
  )
}

function CurrentExperience() {
  const current = experience[0]

  return (
    <Motion.section
      className="section-shell"
      id="experience"
      aria-labelledby="experience-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <SectionHeader
        eyebrow="Current Experience"
        title="CyberAgency Group"
        description="MSP exposure across cloud operations, Microsoft 365, email security, documentation and client-facing technical support."
      />
      <Motion.article className="current-experience-card" variants={fadeUp}>
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
        <Motion.div className="capability-grid" variants={staggerGroup}>
          {current.capabilities.map((capability) => (
            <Motion.section className="capability-card" key={capability.title} variants={fadeUp}>
              <h4>{capability.title}</h4>
              <ul>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Motion.section>
          ))}
        </Motion.div>
      </Motion.article>
    </Motion.section>
  )
}

function PreviousExperience() {
  const previous = experience[1]

  return (
    <Motion.section
      className="section-shell compact-section"
      aria-labelledby="previous-experience-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <SectionHeader
        eyebrow="Previous Experience"
        title="Professional software engineering foundation"
        description="Earlier React development experience supports the cloud and security work by adding application-level context."
      />
      <Motion.article className="previous-experience-card" variants={fadeUp}>
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
      </Motion.article>
    </Motion.section>
  )
}

function Projects() {
  return (
    <Motion.section
      className="section-shell"
      id="projects"
      aria-labelledby="projects-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <SectionHeader
        eyebrow="Featured Projects"
        title="Cloud, backend and security case studies"
        description="Selected work is presented by technical contribution and security thinking, not as generic coursework."
      />
      <Motion.div className="project-grid" variants={staggerGroup}>
        {featuredProjects.map((project) => (
          <Motion.div key={project.title} variants={fadeUp}>
            <ProjectCard project={project} />
          </Motion.div>
        ))}
      </Motion.div>
      <Motion.div className="upcoming-card" aria-label="Currently building" variants={fadeUp}>
        <span>Currently Building</span>
        <h3>{upcomingProjects[0].title}</h3>
        <p>{upcomingProjects[0].description}</p>
      </Motion.div>
    </Motion.section>
  )
}

function Skills() {
  return (
    <Motion.section
      className="section-shell"
      id="skills"
      aria-labelledby="skills-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <SectionHeader
        eyebrow="Technical Skills"
        title="Organised by working domain"
        description="A practical view of tools and technologies used across cloud, security, IT operations and development."
      />
      <Motion.div className="skills-grid" variants={staggerGroup}>
        {skillGroups.map((group) => (
          <Motion.article className="skill-card" key={group.title} variants={fadeUp}>
            <h3>{group.title}</h3>
            <p className="skill-description">{group.description}</p>
            <div className="tag-row">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            {group.note ? <p>{group.note}</p> : null}
          </Motion.article>
        ))}
      </Motion.div>
    </Motion.section>
  )
}

function Education() {
  return (
    <Motion.section
      className="section-shell"
      id="education"
      aria-labelledby="education-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <SectionHeader
        eyebrow="Education & Certifications"
        title="Cybersecurity academic base with current certification"
        description="Credentials are separated from learning plans so the page stays accurate as new certifications are added."
      />
      <Motion.div className="education-grid" variants={staggerGroup}>
        <Motion.div className="credential-column" variants={staggerGroup}>
          {education.map((item) => (
            <Motion.article className="credential-card" key={item.degree} variants={fadeUp}>
              <span>{item.period}</span>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
              <p>{item.result}</p>
              {item.details ? <p className="fine-print">{item.details}</p> : null}
            </Motion.article>
          ))}
        </Motion.div>
        <Motion.div className="credential-column" variants={staggerGroup}>
          {certifications.map((item) => (
            <Motion.article className="credential-card certification-card" key={item.name} variants={fadeUp}>
              <span>Certification</span>
              <h3>{item.name}</h3>
              <p>{item.issued}</p>
              <p>{item.expires}</p>
            </Motion.article>
          ))}
          <Motion.article className="credential-card learning-card" variants={fadeUp}>
            <span>Currently Learning</span>
            {currentLearning.map((item) => (
              <div key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.status}</p>
              </div>
            ))}
          </Motion.article>
        </Motion.div>
      </Motion.div>
    </Motion.section>
  )
}

function Timeline() {
  return (
    <Motion.section
      className="section-shell"
      id="timeline"
      aria-labelledby="timeline-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <SectionHeader
        eyebrow="Career Timeline"
        title="Progression toward cloud security engineering"
        description="The timeline connects software development, cybersecurity study, cloud projects and current MSP operations experience."
      />
      <Motion.ol className="timeline-list" variants={staggerGroup}>
        {timelineItems.map((item) => (
          <Motion.li
            className={item.variant === 'current' ? 'timeline-current' : undefined}
            key={`${item.period}-${item.title}`}
            variants={fadeUp}
          >
            <time>{item.period}</time>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Motion.li>
        ))}
      </Motion.ol>
    </Motion.section>
  )
}

function Contact() {
  return (
    <Motion.section
      className="section-shell contact-section"
      id="contact"
      aria-labelledby="contact-heading"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <SectionHeader
        eyebrow="Contact"
        title="Open to cloud, security and infrastructure opportunities"
        description="Best contacted through email, LinkedIn or GitHub. Residential and phone details are intentionally omitted from the public site."
      />
      <Motion.div className="contact-card" variants={staggerGroup}>
        {contactLinks.map((link) => (
          <Motion.a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            variants={fadeUp}
          >
            <span>{link.label}</span>
            <strong>{link.value}</strong>
          </Motion.a>
        ))}
      </Motion.div>
    </Motion.section>
  )
}

function App() {
  const [showIntro, setShowIntro] = useState(() => !hasSeenIntro())
  const shouldReduceMotion = useReducedMotion()
  const shouldShowIntro = showIntro && shouldReduceMotion === false
  const isIntroComplete = !shouldShowIntro

  useEffect(() => {
    if (shouldReduceMotion && showIntro) {
      markIntroSeen()
    }
  }, [shouldReduceMotion, showIntro])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {shouldShowIntro ? <IntroOverlay key="intro" onComplete={() => setShowIntro(false)} /> : null}
      </AnimatePresence>
      <Header isIntroComplete={isIntroComplete} />
      <main>
        <Hero isIntroComplete={isIntroComplete} />
        <About />
        <CurrentExperience />
        <PreviousExperience />
        <Projects />
        <Skills />
        <Education />
        <Timeline />
        <Contact />
      </main>
    </MotionConfig>
  )
}

export default App
