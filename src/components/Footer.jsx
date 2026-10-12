import { site } from "../data/site.js";
import asset from "../data/asset.js";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {site.name} · {site.city}
        </p>
        <nav className="footer__links" aria-label="Elsewhere">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.github}>GitHub</a>
          <a href={site.linkedin}>LinkedIn</a>
          <a href={asset(site.cv)}>CV</a>
        </nav>
      </div>
    </footer>
  );
}
