import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";
import ProjectRow from "../components/ProjectRow.jsx";
import ContactBlock from "../components/ContactBlock.jsx";
import { projects } from "../data/projects.js";
import { site } from "../data/site.js";

export default function Home() {
  return (
    <>
      <PageTitle />

      <section className="container hero">
        <h1 className="hero__name">
          {site.nameUpper}
          <span className="hero__dot">.</span>
        </h1>
        <p className="hero__intro">{site.home.intro}</p>

        <div className="hero__meta">
          <a className="btn" href="#work">
            See the work
          </a>
          <p className="hero__currently">{site.home.currently}</p>
        </div>
      </section>

      <section className="container section" id="work" aria-labelledby="work-heading">
        <div className="work__head">
          <h2 className="eyebrow" id="work-heading">
            Selected work
          </h2>
          <p className="work__count">{projects.length} projects</p>
        </div>

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <section className="container section--tight reveal" aria-labelledby="about-teaser-heading">
        <h2 className="eyebrow" id="about-teaser-heading">
          About
        </h2>
        <p className="lead">{site.about.gotHere}</p>
        <div className="stack about-teaser__actions">
          <Link className="btn btn--ghost" to="/about">
            More about me
          </Link>
          <a className="btn btn--ghost" href={site.cv}>
            Download CV
          </a>
        </div>
      </section>

      <ContactBlock label={site.status} />
    </>
  );
}
