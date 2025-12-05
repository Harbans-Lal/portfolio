const About = () => {
  return (
    <section id="about" className="bg-card/50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="font-mono text-primary text-sm mb-2">01.</p>
            <h2 className="section-title">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hello! I'm Harbans, a passionate full-stack web developer who
                enjoys creating things that live on the internet. My interest in
                web development started back when I decided to build my first
                website — turns out hacking together a custom layout taught me a
                lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, I've had the privilege of working on
                various projects that have honed my skills in both front-end and
                back-end development. My main focus these days is building
                accessible, inclusive products and digital experiences using
                modern technologies.
              </p>
              {/*<p>
                I recently built <span className="text-primary font-medium">Nekasu</span>, a
                user authentication system featuring Google OAuth and Facebook OAuth integration,
                powered by <span className="text-primary">Appwrite</span> backend. A significant
                challenge was ensuring cross-browser compatibility, particularly making login
                work seamlessly on Safari and Apple devices.
              </p>*/}
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or learning something new
                to expand my skill set.
              </p>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative flex justify-center">
            <div className="relative group">
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-primary/30 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />

              {/* Main container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-secondary border-2 border-primary/30 flex items-center justify-center">
                    {/*<span className="font-mono text-4xl md:text-5xl text-primary font-bold">
                      HL
                    </span>*/}
                    <img
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto"
                      src="/profile.jpeg"
                      alt="Profile Picture"
                    />
                  </div>
                  <p className="mt-4 font-mono text-sm text-muted-foreground">
                    Full-Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
