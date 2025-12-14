const skills = [
  { name: "React", level: "Advanced" },
  { name: "Next.js", level: "Advanced" },
  { name: "JavaScript (ES6+)", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Node.js", level: "Advanced" },
  { name: "Express.js", level: "Advanced" },
  { name: "HTML5 & CSS3", level: "Advanced" },
  { name: "Tailwind CSS", level: "Advanced" },
  { name: "OAuth Integration", level: "Intermediate" },
  { name: "REST APIs", level: "Advanced" },
  { name: "Git & GitHub", level: "Advanced" },
  { name: "Responsive Design", level: "Intermediate" },
  { name: "Yup", level: "Advanced" },
  { name: "React-hook-form", level: "Advanced" },
  { name: "Redux-toolkit", level: "Advanced" },
  { name: "Fluent-Ui", level: "Intermediate" },
  { name: "Material-Ui", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "Mongodb", level: "Intermediate" },
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-2">02.</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Here are a few technologies I've been working with recently
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-badge group cursor-default"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="font-mono text-xs text-primary mr-2">▹</span>
              {skill.name}
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="card-glow">
            <div className="card-glow-inner text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Frontend</h3>
              <p className="text-muted-foreground text-sm">
                Building responsive, accessible user interfaces with React and
                modern CSS frameworks
              </p>
            </div>
          </div>

          <div className="card-glow">
            <div className="card-glow-inner text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Backend</h3>
              <p className="text-muted-foreground text-sm">
                Creating robust APIs and server-side logic with Node.js,
                Express, and backend services
              </p>
            </div>
          </div>

          <div className="card-glow">
            <div className="card-glow-inner text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔐</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Integration</h3>
              <p className="text-muted-foreground text-sm">
                Implementing OAuth, third-party services, and ensuring
                cross-browser compatibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
