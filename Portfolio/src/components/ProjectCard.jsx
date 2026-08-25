export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.images ? 'project-card-featured' : ''}`}>
      <div className="project-copy">
        <div className="project-title-row">
          <div>
            {project.label ? <span className="project-label">{project.label}</span> : null}
            <h3>{project.title}</h3>
          </div>
          <span className="project-period">{project.period}</span>
        </div>
        <p>{project.summary}</p>
        <ul>
          {project.contribution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="tag-row">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
      {project.images ? (
        <div className="project-media-grid">
          {project.images.map((image) => (
            <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
          ))}
        </div>
      ) : null}
      {project.highlights ? (
        <div className="project-highlight-grid" aria-label="Network security implementation highlights">
          {project.highlights.map((highlight) => (
            <section className="project-highlight" key={highlight.title}>
              <h4>{highlight.title}</h4>
              <p>{highlight.text}</p>
            </section>
          ))}
        </div>
      ) : null}
    </article>
  )
}
