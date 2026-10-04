import { about } from '../data/portfolioData.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container two-col">
        <div>
          <h2>About me</h2>
          {about.paragraphs.map((p) => <p key={p} className="body">{p}</p>)}
        </div>
        <div>
          <h3 className="sub">Focus areas</h3>
          <ul className="chips">
            {about.focus.map((f) => <li key={f}>{f}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
