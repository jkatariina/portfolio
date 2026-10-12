import { Link, useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";
import Thumb from "../components/Thumb.jsx";
import Gallery from "../components/Gallery.jsx";
import NotFound from "./NotFound.jsx";
import { findProject, nextProject } from "../data/projects.js";

const chapters = [
  { num: "01", title: "The brief", key: "brief" },
  { num: "02", title: "What I built", key: "built" },
  { num: "03", title: "The hard part", key: "hard" },
  { num: "04", title: "What I learned", key: "learned" },
];

export default function ProjectPage() {
  const { slug } = useParams();
  const project = findProject(slug);

  if (!project) return <NotFound />;

  const next = nextProject(slug);
  const firstTwo = chapters.slice(0, 2).filter((c) => project.story[c.key]);
  const lastTwo = chapters.slice(2).filter((c) => project.story[c.key]);

  return (
    <>
      <PageTitle title={project.title} />

      <section className="container hero">
        <Link className="case__back" to="/">
          ← All work
        </Link>
        <h1 className="case__title">{project.title}</h1>
        <p className="case__summary">{project.summary}</p>
      </section>

      <section className="container" aria-label="Project facts">
        <dl className="facts">
          <div>
            <dt className="facts__label">Role</dt>
            <dd className="facts__value">{project.team}</dd>
          </div>
          <div>
            <dt className="facts__label">Stack</dt>
            <dd className="facts__value">{project.stack.join(", ")}</dd>
          </div>
          <div>
            <dt className="facts__label">Year</dt>
            <dd className="facts__value">{project.year}</dd>
          </div>
          <div>
            <dt className="facts__label">Links</dt>
            <dd className="facts__value">
              {project.live && <a href={project.live}>Live</a>}
              {project.live && project.code && " · "}
              {project.code && <a href={project.code}>Code</a>}
              {!project.live && !project.code && "—"}
            </dd>
          </div>
        </dl>
      </section>

      <section className="container section--tight">
        <Thumb
          src={project.cover}
          video={project.video}
          alt={`${project.title}, main screen`}
          label={`${project.title} — main screenshot`}
          className="shot-main reveal"
        />
      </section>

      {firstTwo.length > 0 && (
        <section className="container">
          {firstTwo.map((c) => (
            <Chapter key={c.key} chapter={c} text={project.story[c.key]} />
          ))}
        </section>
      )}

      {project.shots.length > 0 && (
        <section className="container section--tight" aria-labelledby="screens-heading">
          <h2 className="eyebrow" id="screens-heading">
            Screens
          </h2>
          <Gallery shots={project.shots} title={project.title} />
        </section>
      )}

      {lastTwo.length > 0 && (
        <section className="container">
          {lastTwo.map((c) => (
            <Chapter key={c.key} chapter={c} text={project.story[c.key]} />
          ))}
        </section>
      )}

      {next && (
        <section className="accent-block reveal" aria-labelledby="next-heading">
          <div className="accent-block__inner next-project">
            <div>
              <p className="accent-block__label" id="next-heading">
                Next project
              </p>
              <Link className="next-project__title" to={`/projects/${next.slug}`}>
                {next.title}
                <span className="arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
            <p>
              {next.year} · {next.stack.join(", ")}
            </p>
          </div>
        </section>
      )}
    </>
  );
}

function Chapter({ chapter, text }) {
  return (
    <div className="chapter reveal">
      <p className="chapter__num">{chapter.num}</p>
      <div>
        <h2 className="chapter__title">{chapter.title}</h2>
        <p className="prose">{text}</p>
      </div>
    </div>
  );
}
