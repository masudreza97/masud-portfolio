import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "masudreza366@gmail.com",
    href: "mailto:masudreza366@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 50 747 8520",
    href: "tel:+971507478520",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Masud Reza",
    href: "https://www.linkedin.com/in/masud-reza-101b20180",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United Arab Emirates",
    href: null,
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {contactLinks.map((contact) => (
                <div key={contact.label}>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <contact.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <contact.icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-4">
                Prefer to have my full resume? Download it below!
              </p>
              <Button size="lg" asChild className="gap-2">
                <a href="/resume.pdf" download>
                  <Download size={20} />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
