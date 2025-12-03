import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="section-container text-center relative z-10">
        <div
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="font-mono text-primary text-sm md:text-base mb-4">
            Hi, my name is
          </p>
        </div>

        <h1
          className="opacity-0 animate-fade-up text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          style={{ animationDelay: "0.4s" }}
        >
          Harbans Lal
        </h1>

        <h2
          className="opacity-0 animate-fade-up text-2xl sm:text-3xl md:text-5xl font-bold text-muted-foreground mb-6"
          style={{ animationDelay: "0.6s" }}
        >
          I build things for the <span className="gradient-text">web</span>.
        </h2>

        <p
          className="opacity-0 animate-fade-up text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 text-balance"
          style={{ animationDelay: "0.8s" }}
        >
          Full-stack web developer specializing in building exceptional digital
          experiences. Currently focused on creating accessible, user-friendly
          applications with
          <span className="text-primary"> React</span>,
          <span className="text-primary"> Express</span>, and
          <span className="text-primary"> Node.js</span>.
        </p>

        {/* Social Links */}
        <div
          className="opacity-0 animate-fade-up flex items-center justify-center gap-6 mb-12"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="https://github.com/Harbans-Lal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/harbans-lal-b5499917a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:harbansl506@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div
          className="opacity-0 animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animationDelay: "1.2s" }}
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "2s" }}
        >
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown size={24} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
