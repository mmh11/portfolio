import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function ProjectCard({ project }) {
  const [previewImage, setPreviewImage] = useState(null)

  useEffect(() => {
    if (!previewImage) return undefined

    const originalOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPreviewImage(null)
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [previewImage])

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
            <button
              className="project-image-button"
              key={image.src}
              type="button"
              onClick={() => setPreviewImage(image)}
              aria-label={`Open full image: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
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
      {previewImage
        ? createPortal(
            <div
              className="image-lightbox"
              onClick={() => setPreviewImage(null)}
              role="presentation"
            >
              <img
                src={previewImage.src}
                alt={previewImage.alt}
                onClick={(event) => event.stopPropagation()}
              />
            </div>,
          document.body,
        )
        : null}
    </article>
  )
}
