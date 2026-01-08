import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Experience {
  title: string;
  company: string;
  period: string;
  location?: string;
  link?: string;
  highlights: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "National Dynamics DWC - LLC",
    period: "Nov 2023 – Present",
    link: "https://customer.qa.mystreet.io/",
    highlights: [
      "Developed a mobile-first, fully responsive social e-commerce web application using Next.js, Redux, and Tailwind CSS",
      "Architected and implemented a real-time cart system using WebSockets for live pricing updates and inventory sync",
      "Designed a dynamic email notification system using MJML for onboarding, password recovery, and transactional emails",
      "Implemented RabbitMQ-based async processing for product reviews to prevent concurrency conflicts",
    ],
    technologies: ["Next.js", "React", "Redux", "Tailwind CSS", "WebSockets", "MJML", "RabbitMQ"],
  },
  {
    title: "Fullstack Engineer (Development Lead)",
    company: "OneDash (Part of National Dynamics DWC)",
    period: "Jan 2022 – Present",
    link: "https://onedash.com",
    highlights: [
      "Designed and implemented scalable backend services using Node.js and Elasticsearch for high-performance data retrieval",
      "Built a secure role-based admin panel reducing manual database operations by 50%+",
      "Implemented JWT-based authentication and authorization for API security",
      "Integrated with Shopify, BigCommerce, and WooCommerce using webhook-based communication",
      "Maintained CI/CD pipelines using TeamCity, improving deployment consistency",
    ],
    technologies: ["Node.js", "Elasticsearch", "AWS Lambda", "JWT", "Shopify API", "TeamCity"],
  },
  {
    title: "Fullstack Engineer",
    company: "Giro Fintech Ltd",
    period: "June 2020 – Oct 2023",
    link: "https://ktgamez.com",
    highlights: [
      "Led backend infrastructure and development team to launch a hyper-casual gaming platform with Khaleej Times",
      "Rebuilt Giro Wallet mobile and web application from scratch using Ionic, Angular, and Bootstrap",
      "Identified and remediated critical security vulnerabilities, achieving CERT-In penetration testing certification",
      "Led integration efforts with telecom providers (Ooredoo Kuwait, Dialog) for mobile subscription management",
    ],
    technologies: ["Ionic", "Angular", "Node.js", "Bootstrap", "JavaScript", "REST APIs"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full bg-primary -translate-x-1/2 ring-4 ring-background" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Briefcase className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-primary text-sm">{exp.company}</p>
                      </div>
                    </div>

                    <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>

                    <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          • {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {exp.link && (
                      <Button variant="ghost" size="sm" asChild className="gap-2">
                        <a href={exp.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} />
                          View Project
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Empty space for timeline alignment */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
