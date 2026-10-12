import { useState } from "react";
import useReducedMotion from "./useReducedMotion.js";
import asset from "../data/asset.js";

export default function Thumb({ src, video, alt, label, className = "thumb" }) {
  const [failed, setFailed] = useState(false);
  const reduced = useReducedMotion();
  const showImage = Boolean(src) && !failed;

  if (video) {
    return (
      <div className={className}>
        <video
          src={asset(video)}
          poster={showImage ? asset(src) : undefined}
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
        <img src={asset(src)} alt={alt} onError={() => setFailed(true)} loading="lazy" />
      ) : (
        <p className="thumb__empty">{label}</p>
      )}
    </div>
  );
}
