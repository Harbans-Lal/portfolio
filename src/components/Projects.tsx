import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "Resume Builder",
    shortName: "RB",
    description:
      "Created a web-based resume builder enabling users to generate ATS-friendly resumes and export them instantly as PDFs",
    tech: ["React", "Typescript", "Redux-toolkit", "expressJS", "mongodb"],
    github: "https://github.com/Harbans-Lal/my-resume-builder-frontend",
    live: "https://myresume-henna.vercel.app/",
    image: null,
  },
  {
    title: "URL Shorten",
    shortName: "US",
    description:
      "Drop a long messy URL and get a clean, optimized LinkFlux link instantly. No friction, no delay — just fast and reliable shortening every single time.",
    tech: ["React", "Typescript", "Redux-toolkit", "expressJS", "mongodb"],
    github: "https://github.com/Harbans-Lal/url-shorten-frontend",
    live: "https://linkflux.netlify.app/",
    image: null,
  },
];

const otherProjects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/Harbans-Lal/ai-portfolio",
    live: "https://harbans-portfolio.netlify.app/",
  },
  {
    title: "Rental Service App",
    description:
      "A boilerplate for building RESTful APIs with Node.js and Express, including authentication middleware.",
    tech: ["Node.js", "Express", "Razorpay", "JWT", "React"],
    github: "https://github.com/Harbans-Lal/rentel-service-app",
    live: null,
  },
  {
    title: "Todo App",
    description:
      "A full-stack task management application with user authentication and real-time updates.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Harbans-Lal/ToDoList_with_mongoose",
    live: null,
  },
  {
    title: "Favicon Generator",
    shortName: "FG",
    description:
      "Create and export high-quality favicons in various styles and formats. Generate up to 1000 icons dynamically and download them instantly.",
    tech: ["React", "Node.js", "Typescript"],
    github: "https://github.com/Harbans-Lal/favicon-generator",
    live: "https://favicon-factory.netlify.app/",
    image: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-card/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-2">03.</p>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            A selection of projects I've worked on
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div key={project.title} className="relative">
              <div className="grid md:grid-cols-12 items-center gap-4">
                {/* Project Image/Visual */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 0 ? "" : "md:order-2"
                  }`}
                >
                  <div className="relative group rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 aspect-video flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                    <div className="text-center p-8">
                      <span className="font-mono text-6xl text-primary/30 font-bold">
                        {project.shortName}
                      </span>
                      <p className="font-mono text-primary mt-4">
                        Featured Project
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`md:col-span-5 ${
                    index % 2 === 0 ? "md:text-right" : ""
                  }`}
                >
                  <p className="font-mono text-primary text-sm mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="bg-secondary p-6 rounded-lg shadow-xl mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div
                    className={`flex flex-wrap gap-2 mb-4 ${
                      index % 2 === 0 ? "justify-end" : ""
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 0 ? "justify-end" : ""
                    }`}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold">Other Noteworthy Projects</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div key={project.title} className="card-glow group">
              <div className="card-glow-inner flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <Folder size={40} className="text-primary" />
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm flex-grow mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
