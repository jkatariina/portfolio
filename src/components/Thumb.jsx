import { useState } from "react";
import useReducedMotion from "./useReducedMotion.js";

export default function Thumb({ src, video, alt, label, className = "thumb" }) {
  const [failed, setFailed] = useState(false);
  const reduced = useReducedMotion();
  const showImage = Boolean(src) && !failed;

  if (video) {
    return (
      <div className={className}>
        <video
          src={video}
          poster={showImage ? src : undefined}
          autoPlay={!reduced}
          controls={reduced}
          preload={reduced ? "none" : "auto"}
          muted
          loop
          playsInline
          aria-label={alt}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      {showImage ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} loading="lazy" />
      ) : (
        <p className="thumb__empty">{label}</p>
      )}
    </div>
  );
}
