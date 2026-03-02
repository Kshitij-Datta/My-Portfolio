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
    title: "Dino-Wiki Concept",
    description:
      "A comprehensive static encyclopedia project exploring paleontological data. This project served as an early deep-dive into semantic HTML and structured layouts, currently slated for a full React/TypeScript reconstruction.",
    tags: ["HTML5", "CSS3", "Legacy Project"],
    image: dinowebImg,
    link: "https://kshitij-datta.github.io/Dinosaurs",
  },
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="project-image-wrapper">
      <img
        src={project.image}
        alt={project.title}
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
        <i className="uil uil-arrow-up-right w-5 h-5"></i>
      </h3>
      <p className="project-description">{project.description}</p>

      <a
        href={project.link}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Site
      </a>
    </div>
  </div>
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
