import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  role: string;
}

const projects: Project[] = [
  {
    title: "MyStreet",
    description:
      "A mobile-first social e-commerce web application featuring real-time cart updates via WebSockets, dynamic pricing, and seamless checkout workflows. Built with a focus on performance and cross-browser compatibility.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    technologies: ["Next.js", "Redux", "Tailwind CSS", "WebSockets", "RabbitMQ"],
    liveUrl: "https://customer.qa.mystreet.io/",
    role: "Frontend Developer",
  },
  {
    title: "OneDash",
    description:
      "High-performance data platform with scalable backend services, Elasticsearch integration, and role-based admin panel. Integrated with major e-commerce platforms including Shopify, BigCommerce, and WooCommerce.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    technologies: ["Node.js", "Elasticsearch", "AWS Lambda", "JWT", "Shopify API"],
    liveUrl: "https://onedash.com",
    role: "Development Lead",
  },
  {
    title: "KT Gamez",
    description:
      "Hyper-casual gaming platform launched in partnership with Khaleej Times. Built for scalability and performance, featuring subscription management and telecom provider integrations.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop",
    technologies: ["Ionic", "Angular", "Node.js", "Bootstrap", "REST APIs"],
    liveUrl: "https://ktgamez.com",
    role: "Fullstack Engineer & Team Lead",
  },
  {
    title: "Giro Wallet",
    description:
      "Digital wallet system rebuilt from scratch with mobile-first responsive design. Achieved CERT-In penetration testing certification after identifying and fixing critical security vulnerabilities.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    technologies: ["Ionic", "Angular", "Bootstrap", "JavaScript", "Security"],
    role: "Fullstack Engineer",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of impactful projects I've built and led throughout my career
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary backdrop-blur-sm">
                    {project.role}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild className="gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} />
                      View Live
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
