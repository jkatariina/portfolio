import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle.jsx";
import { site } from "../data/site.js";

export default function NotFound() {
  return (
    <>
      <PageTitle title="Page not found" />

      <section className="container notfound">
        <h1 className="notfound__code">
          404
          <span className="notfound__dot">.</span>
        </h1>
        <p className="notfound__line">{site.notFound}</p>
        <div className="stack notfound__actions">
          <Link className="btn" to="/">
            Back home
          </Link>
        </div>
      </section>
    </>
  );
}
