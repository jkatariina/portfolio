import PageTitle from "../components/PageTitle.jsx";
import ContactBlock from "../components/ContactBlock.jsx";
import { site } from "../data/site.js";

export default function Contact() {
  return (
    <>
      <PageTitle title="Contact" />

      <section className="container hero">
        <h1 className="case__title">Let's talk.</h1>
        <p className="case__summary">{site.contact.openTo}</p>
      </section>

      <ContactBlock label="Email" />

      <section className="container section--tight" aria-labelledby="elsewhere-heading">
        <h2 className="eyebrow" id="elsewhere-heading">
          Elsewhere
        </h2>

        <dl className="facts">
          <div>
            <dt className="facts__label">GitHub</dt>
            <dd className="facts__value">
              <a href={site.github}>{site.githubLabel}</a>
            </dd>
          </div>
          <div>
            <dt className="facts__label">LinkedIn</dt>
            <dd className="facts__value">
              <a href={site.linkedin}>{site.linkedinLabel}</a>
            </dd>
          </div>
          <div>
            <dt className="facts__label">Based in</dt>
            <dd className="facts__value">{site.city}</dd>
          </div>
          <div>
            <dt className="facts__label">Reply time</dt>
            <dd className="facts__value">{site.contact.replyTime}</dd>
          </div>
        </dl>
      </section>
    </>
  );
}
