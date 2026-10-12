import { useEffect, useState } from "react";
import asset from "../data/asset.js";

export default function Gallery({ shots, title }) {
  const [open, setOpen] = useState(null);
  const n = shots.length;

  useEffect(() => {
    if (open === null) return;

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + n) % n);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % n);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, n]);

  if (n === 0) return null;

  return (
    <>
      <div className="gallery">
        {shots.map((src, i) => (
          <button
            key={src}
            className="shot"
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Enlarge screenshot ${i + 1} of ${n}`}
          >
            <img src={asset(src)} alt="" loading="lazy" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${title} screenshots`}>
          <figure className="lightbox__figure">
            <img src={asset(shots[open])} alt={`${title}, screenshot ${open + 1}`} />
          </figure>
          <div className="lightbox__bar">
            <button
              className="lightbox__btn"
              type="button"
              onClick={() => setOpen((open - 1 + n) % n)}
              aria-label="Previous screenshot"
            >
              ←
            </button>
            <p className="lightbox__count">
              {open + 1} / {n}
            </p>
            <button
              className="lightbox__btn"
              type="button"
              onClick={() => setOpen((open + 1) % n)}
              aria-label="Next screenshot"
            >
              →
            </button>
            <button className="lightbox__btn" type="button" onClick={() => setOpen(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
