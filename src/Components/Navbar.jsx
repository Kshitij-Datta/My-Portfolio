import useScrollSpy from "./UseScrollSpy";
import { ScrollProgressBar } from "./ScrollProgressBar";

const navComp = [
  { id: 1, name: "Home", link: "home" },
  { id: 2, name: "Projects", link: "projects" },
  { id: 3, name: "About", link: "about" },
  { id: 4, name: "Contact", link: "contact" },
];

export function Navbar() {
  const [activeNav, setActiveNav] = useScrollSpy("#home", 100);
  return (
    <>
      <ScrollProgressBar />

      <nav className="navbar">
        <div className="nav-links">
          {navComp.map((component) => {
            const targetId = `#${component.link}`;

            return (
              <a
                key={component.id}
                href={targetId}
                onClick={() => setActiveNav(targetId)}
                className={`nav-link ${activeNav === targetId ? "active" : ""}`}
              >
                {component.name}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
