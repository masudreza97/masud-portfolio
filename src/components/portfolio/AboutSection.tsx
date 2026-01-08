import { Code2, Server, Database, Cloud } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "3", label: "Companies" },
  { value: "10+", label: "Projects Delivered" },
  { value: "9.4", label: "CGPA" },
];

const highlights = [
  { icon: Server, label: "Backend Expert", desc: "Node.js, Express.js, Typescript, Rest APIs, Microservices" },
  { icon: Code2, label: "Frontend Master", desc: "React, Next.js, Tailwind, Angular" },
  { icon: Database, label: "Data Architect", desc: "MongoDB, MySQL, Elastic Search, DynamoDB" },
  { icon: Cloud, label: "Cloud Native", desc: "AWS, Docker, CI/CD, Jenkins, Teamcity, Git, Bash" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">Senior Full Stack Engineer</span> with over 5 years of hands-on experience, specializing in building scalable applications. I have always been hardworking, and it's my firm belief that hard work and consistency have enabled me to come this far while continuing to impress people with my work. I have been a fast learner since my early school days, and over the years, I’ve consistently stepped out of my comfort zone to bring clarity in solving a problem. I’m known for solving problems and delivering solutions that make a real impact at the end of the day.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe tools and frameworks are just that - tools. The fundamentals are what matter most, and over the years, I have developed the skills to learn and apply them efficiently.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I hold a <span className="text-primary font-semibold">UAE Golden Visa</span> under the 
              Distinguished Student category, reflecting my academic excellence and professional achievements.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
