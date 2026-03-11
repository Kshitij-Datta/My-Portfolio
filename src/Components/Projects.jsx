import mrwebchefImg from "../assets/mrwebchef-img.png";
import myportfolioImg from "../assets/myportfolio-img.png";
import dinowebImg from "../assets/dinoweb-img.png";

const PROJECTS = [
  {
    id: 1,
    title: "Mr. Web Chef",
    description:
      "A responsive custom-built recipe generator. It integrates a specialized generative AI model to provide intelligent culinary suggestions directly to the user.",
    tags: ["React", "Node.js", "Express", "AI Integration"],
    image: mrwebchefImg,
    link: "https://mrwebchef.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio Web App",
    description:
      "A fully responsive, single-page developer portfolio. Engineered with custom React hooks for high-performance scroll tracking, pure CSS Grid layouts, and a modern, accessible UI.",
    tags: ["React", "JavaScript", "CSS3"],
    image: myportfolioImg,
    link: "https://kshitijdatta.vercel.app/",
  },
  {
    id: 3,
    title: "DinoNaur",
    description:
      "A high-performance React Application that indexes over 2,500 dinosaur genera. Engineered with DOM virtualization and PBDB API integration to dynamically render live scientific data and interactive fossil maps without lag.",
    tags: ["React", "REST APIs", "React-Virtuoso", "Leaflet.js"],
    image: dinowebImg,
    link: "https://dinonaur.vercel.app/",
  },
];

const ProjectCard = ({ project }) => (
  <a
    href={project.link}
    className="project-card"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="project-image-wrapper">
      <img
        src={project.image}
        alt={`${project.title} project preview`}
        className="project-image"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="project-content">
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="project-card-title">
        {project.title}
        <i className="uil uil-arrow-up-right"></i>
      </h3>

      <p className="project-description">{project.description}</p>
      <span className="project-link">Visit Site</span>
    </div>
  </a>
);

export const Projects = () => (
  <section id="projects" className="section-projects">
    <div className="container">
      <div className="section-header">
        <div>
          <h2 className="section-title">Selected Works</h2>
          <p className="section-subtitle">
            A collection of my recent full-stack applications and intelligent
            web experiences.
          </p>
        </div>
        <button className="btn-text disabled">View All Projects</button>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);
