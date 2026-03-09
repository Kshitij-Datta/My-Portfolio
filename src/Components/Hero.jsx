import CV from "../assets/Kshitij_Datta.pdf";

export const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-content animate-fade-in-up">
      <span className="badge">Available for new projects</span>

      <h1 className="hero-title">
        Building fast, interactive <span className="italic">interfaces</span>{" "}
        that scale.
      </h1>
      <p className="hero-description">
        Hi, I'm Kshitij Datta, a Front-End Engineer who specializes in crafting
        dynamic, responsive web applications using modern tools like React to
        bring complex logic to life.
      </p>
      <div className="hero-actions">
        <a href="#projects" className="btn-primary">
          View My Work
        </a>
        <div className="social-links">
          <a
            href="https://github.com/Kshitij-Datta"
            className="social-btn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/kshitij-datta-sde"
            className="social-btn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a download="Kshitij_Datta.pdf" href={CV} className="social-btn">
            <i className="uil uil-file-info-alt"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);
