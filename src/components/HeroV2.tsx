import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Harbans-Lal", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/harbans-lal-b5499917a/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:harbansl506@gmail.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
          Harbans Lal.
        </h1>

        {/* Tagline */}
        <h2
          className="text-3xl md:text-5xl font-medium mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          I build things for the{" "}
          <span className="text-gradient-italic">web.</span>
        </h2>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Full-stack web developer specializing in building exceptional digital
          experiences. Currently focused on creating accessible, user-friendly
          applications with{" "}
          <span className="text-primary font-medium">React</span>,{" "}
          <span className="text-primary font-medium">Express</span>, and{" "}
          <span className="text-primary font-medium">Node.js</span>.
        </p>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-6 mb-10 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <Button variant="hero" size="lg" className="min-w-[180px]">
            <ArrowRight className="mr-2" size={18} />
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="heroOutline" size="lg" className="min-w-[180px]">
            <MessageCircle className="mr-2" size={18} />
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="heroPrimary" size="lg" className="min-w-[180px]">
            <Download className="mr-2" size={18} />
            <a href="/harbansMResume.pdf" download>
              Download CV
            </a>
          </Button>
        </div>

        {/* Decorative element */}
        <div className="mt-20 animate-float">
          <div className="w-6 h-6 mx-auto border-b-2 border-r-2 border-primary/40 rotate-45 transform" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
