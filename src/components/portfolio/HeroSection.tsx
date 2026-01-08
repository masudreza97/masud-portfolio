import { Mail, Linkedin, Phone, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary font-medium">
              UAE Golden Visa Holder 🇦🇪
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            <span className="gradient-text">MASUD REZA</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 animate-fade-in">
            Senior Fullstack Engineer
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in">
            5+ years specializing in building backend systems with Node.js, SQL/NoSQL, and AWS. I turn ideas into fully functional products, delivering projects end-to-end with a problem-solving mindset. Fast learner, reliable, and focused on building high-performance, scalable solutions, while removing technical barriers for teams and stakeholders.

            I’ve applied my skills across multiple domains, including <span className="text-primary">Fintech</span>, <span className="text-primary">Video-Commerce</span>, <span className="text-primary">E-Commerce</span> & <span className="text-primary">Gaming</span>, bringing domain knowledge and technical expertise to every project.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>UAE</span>
            </div>
            <a
              href="mailto:masudreza366@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} className="text-primary" />
              <span>masudreza366@gmail.com</span>
            </a>
            <a
              href="tel:+971507478520"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} className="text-primary" />
              <span>+971 50 747 8520</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in">
            <Button size="lg" asChild className="gap-2">
               <a href="MasudReza-CV.pdf" download target="_blank" rel="noopener noreferrer">
                <Download size={20} />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <a
                href="https://www.linkedin.com/in/masud-reza-101b20180"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="md:flex hidden absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
