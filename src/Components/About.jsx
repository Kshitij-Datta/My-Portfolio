import programmerImg from "../assets/developer.svg";

const skillCategories = [
  {
    id: 1,
    title: "Programming Languages",
    skills: ["Java", "JavaScript", "Python", "C++", "Kotlin", "SQL"],
  },
  {
    id: 2,
    title: "Frontend",
    skills: [
      "React",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    title: "Backend & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    id: 4,
    title: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Render",
      "React-Virtuoso",
      "Leaflet.js",
      "AI Integration",
    ],
  },
];

export const About = () => (
  <section id="about" className="section-about">
    <div className="container about-grid">
      <div className="about-image-wrapper">
        <div className="about-image">
          <img src={programmerImg} alt="Profile" referrerPolicy="no-referrer" />
        </div>
        <div className="about-image-accent" />
      </div>
      <div className="about-content">
        <h2>
          Building <span className="italic">robust, scalable</span>{" "}
          applications.
        </h2>
        <div className="about-text">
          <p>
            I'm a developer who believes that software should not only work
            perfectly but also feel intuitive and beautiful. With over 5 years
            of experience in the industry, I bring complex ideas to life.
          </p>
          <p>
            My expertise spans across the stack, from crafting responsive
            front-end interfaces to designing reliable database structures. Here
            are the core technologies I work with:
          </p>
        </div>
        <div className="skills-container">
          {skillCategories.map((category) => (
            <div key={category.id} className="skill-category-block">
              <h4 className="skill-category-title">{category.title}</h4>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
