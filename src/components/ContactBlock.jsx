import { site } from "../data/site.js";
import CopyEmail from "./CopyEmail.jsx";

export default function ContactBlock({ label = "Get in touch" }) {
  return (
    <section className="accent-block reveal" aria-labelledby="contact-block-heading">
      <div className="accent-block__inner">
        <p className="accent-block__label" id="contact-block-heading">
          {label}
        </p>
        <a className="accent-block__email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <div className="accent-block__actions">
          <CopyEmail email={site.email} variant="btn--on-accent" />
        </div>
      </div>
    </section>
  );
}
