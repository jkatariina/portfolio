import { useState } from "react";

export default function CopyEmail({ email, variant = "" }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
    }
  }

  const extra = variant ? ` ${variant}` : "";

  return (
    <>
      <a className={`btn${extra}`} href={`mailto:${email}`}>
        Email me
      </a>
      <button className={`btn btn--ghost${extra}`} type="button" onClick={copy}>
        {copied ? "Copied!" : "Copy email"}
      </button>
    </>
  );
}
