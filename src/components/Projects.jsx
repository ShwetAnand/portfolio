import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolioData.js'

function LinkBtn({ href, Icon, label, name }) {
  if (!href) {
    return (
      <span className="btn btn-ghost disabled" aria-disabled="true" title="Link not set yet">
        <Icon size={16} aria-hidden="true" /> {label}
      </span>
    )
  }
  return (
    <a className="btn btn-ghost" href={href} target="_blank" rel="noopener noreferrer"
       aria-label={`${label} for ${name}`}>
      <Icon size={16} aria-hidden="true" /> {label}
    </a>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section alt">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid projects-grid">
          {projects.map((p) => (
            <article className="card project" key={p.name}>
              <h3>{p.name}</h3>
              <p className="body">{p.description}</p>
              <ul className="bullets">
                {p.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <ul className="chips small">
                {p.tech.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <div className="actions">
                <LinkBtn href={p.github} Icon={Github} label="GitHub" name={p.name} />
                {(p.demo || false) && <LinkBtn href={p.demo} Icon={ExternalLink} label="Live Demo" name={p.name} />}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
