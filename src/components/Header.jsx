import { Link, NavLink } from "react-router-dom";
import { site } from "../data/site.js";

const links = [
  { to: "/", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="header__name" to="/">
          {site.name}
          <span className="header__dot">.</span>
        </Link>

        <nav className="header__nav" aria-label="Main">
          {links.map((link) => (
            <NavLink key={link.to} className="header__link" to={link.to} end>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <p className="header__status">{site.status}</p>
      </div>
    </header>
  );
}
