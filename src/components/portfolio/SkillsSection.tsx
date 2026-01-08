import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "Angular", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux", level: 85 },
    ],
  },
  {
    title: "Backend & API",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 95 },
      { name: "RESTful APIs", level: 95 },
      { name: "JWT Auth", level: 90 },
      { name: "WebSockets", level: 85 },
      { name: "RabbitMQ", level: 75 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Elasticsearch", level: 85 },
      { name: "DynamoDB", level: 75 },
      { name: "Schema Design", level: 90 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS Lambda", level: 85 },
      { name: "AWS EC2/S3", level: 85 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Git/GitLab", level: 95 },
    ],
  },
];

const AnimatedSkillBar = ({ skill, isVisible }: { skill: Skill; isVisible: boolean }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(skill.level), 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit refined over 5+ years of professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6 gradient-text">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <AnimatedSkillBar key={skill.name} skill={skill} isVisible={isVisible} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold mb-4">Also Proficient In</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Ionic", "Bootstrap", "HTML5", "CSS3", "Python", "Jest", "Jenkins", "TeamCity", "Bash", "Figma to Code"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full glass-card text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
