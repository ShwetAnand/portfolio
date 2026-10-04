import { certifications } from '../data/portfolioData.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section tight">
      <div className="container">
        <h2>Certifications</h2>
        <div className="grid cert-grid">
          {certifications.map((c) => (
            <div className="card compact" key={c.title}>
              <h3>{c.issuer}</h3>
              <p className="body">{c.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
