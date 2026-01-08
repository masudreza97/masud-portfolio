import { GraduationCap, Award, Medal } from "lucide-react";

const certifications = [
  "Cisco CCNA R&S: Introduction to Networks",
  "Cisco CCNA R&S: Routing and Switching Essentials",
  "Google IT Support: Operating Systems and You",
  "Python Programming – A Concise Introduction",
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education
            </h3>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-primary">Manipal Academy of Higher Education</p>
                  <p className="text-sm text-muted-foreground">Dubai, UAE</p>
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10">
                    <span className="text-primary font-semibold">CGPA: 9.4</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Higher Secondary (Grade 12)</h4>
                  <p className="text-primary">Gulf Asian English School</p>
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10">
                    <span className="text-primary font-semibold">76%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <h3 className="text-xl font-semibold flex items-center gap-2 pt-4">
              <Medal className="text-primary" />
              Achievements
            </h3>

            <div className="grid gap-4">
              <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center">
                  🇦🇪
                </div>
                <div>
                  <h4 className="font-semibold">UAE Golden Visa Holder</h4>
                  <p className="text-sm text-muted-foreground">Distinction Student Category</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                  🏆
                </div>
                <div>
                  <h4 className="font-semibold">Student of the Year</h4>
                  <p className="text-sm text-muted-foreground">Gulf Asian English School</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Award className="text-primary" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="text-primary" size={20} />
                  </div>
                  <p className="font-medium">{cert}</p>
                </div>
              ))}
            </div>

            {/* Certification Providers */}
            <div className="glass-card rounded-xl p-6 mt-6">
              <h4 className="font-semibold mb-4">Certified By</h4>
              <div className="flex flex-wrap gap-4">
                {["Cisco", "Google", "Coursera", "Wesleyan University"].map((provider) => (
                  <span
                    key={provider}
                    className="px-4 py-2 rounded-full bg-secondary text-sm"
                  >
                    {provider}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
