import PageTitle from "../components/PageTitle.jsx";
import Thumb from "../components/Thumb.jsx";
import { site } from "../data/site.js";

export default function About() {
  const { about } = site;

  return (
    <>
      <PageTitle title="About" />

      <section className="container hero">
        <div className="about-top">
          <div>
            <h1 className="case__title">{about.heading}</h1>
            <p className="case__summary">{about.lead}</p>
          </div>
          <Thumb
            src={site.portrait}
            alt={`Portrait of ${site.name}`}
            label="Portrait"
            className="portrait reveal"
          />
        </div>
      </section>

      <section className="container section--tight" aria-labelledby="timeline-heading">
        <h2 className="eyebrow" id="timeline-heading">
          How I got here
        </h2>
        <p className="lead">{about.gotHere}</p>

        <div className="timeline">
          {about.timeline.map((step) => (
            <div className="timeline__item reveal" key={step.when}>
              <p className="timeline__when">{step.when}</p>
              <p>{step.what}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="container">
        <hr className="rule" />
      </div>

      <section className="container section--tight" aria-labelledby="skills-heading">
        <h2 className="eyebrow" id="skills-heading">
          What I work with
        </h2>
        <p className="prose skills__intro">
          {about.careAbout}
        </p>

        <div className="skills">
          {about.skills.map((group) => (
            <div className="skills__group reveal" key={group.group}>
              <h3>{group.group}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="container">
        <hr className="rule" />
      </div>

      <section className="container section--tight" aria-labelledby="outside-heading">
        <h2 className="eyebrow" id="outside-heading">
          Outside of code
        </h2>
        <p className="lead">{about.outside}</p>
      </section>

      <section className="accent-block reveal" aria-labelledby="cv-heading">
        <div className="accent-block__inner">
          <p className="accent-block__label" id="cv-heading">
            The short version
          </p>
          <p className="accent-block__line">Everything above, on one page.</p>
          <div className="accent-block__actions">
            <a className="btn btn--on-accent" href={site.cv}>
              Download CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
