import { education } from '../data/portfolioData.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        <article className="card timeline">
          <div className="card-head">
            <h3>{education.school}</h3>
            <span className="muted">{education.period}</span>
          </div>
          <p className="body">{education.degree}</p>
          <p className="accent">CGPA: {education.cgpa}</p>
        </article>
      </div>
    </section>
  )
}
