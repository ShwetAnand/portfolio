import { experience } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        {experience.map((job) => (
          <article className="card" key={job.role}>
            <div className="card-head">
              <h3>{job.role}</h3>
              {job.period && <span className="muted">{job.period}</span>}
            </div>
            <p className="accent">{job.company}</p>
            <ul className="bullets">
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
