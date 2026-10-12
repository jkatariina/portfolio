import { useEffect } from "react";
import { site } from "../data/site.js";

export default function PageTitle({ title }) {
  useEffect(() => {
    document.title = title ? `${title} — ${site.name}` : `${site.name} — ${site.role}`;
  }, [title]);

  return null;
}
