import { Heart } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">MR</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">Senior Fullstack Developer</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="text-primary fill-primary" size={14} />
            <span>in UAE</span>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Masud Reza. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
