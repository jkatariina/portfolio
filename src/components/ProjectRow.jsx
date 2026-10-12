import { Link } from "react-router-dom";
import Thumb from "./Thumb.jsx";

export default function ProjectRow({ project, index }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link className="project-row reveal" to={`/projects/${project.slug}`}>
      <p className="project-row__num">{num}</p>

      <div>
        <h3 className="project-row__title">
          {project.title}
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </h3>
        <p className="project-row__summary">{project.summary}</p>
        <p className="project-row__facts">
          {project.year} · {project.stack.join(", ")} · {project.team}
        </p>
      </div>

      <Thumb src={project.cover} alt="" label={project.title} />
    </Link>
  );
}
