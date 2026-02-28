import { Linkedin, Twitter, Facebook } from "lucide-react";
import yatiFavicon from "@/assets/yati-favicon.jpeg";
import yatiLogo from "@/assets/yati-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: "Hydraulic Systems", href: "#products" },
      { name: "Filtration", href: "#products" },
      { name: "Valves & Fittings", href: "#products" },
      { name: "Hoses & Tubing", href: "#products" },
      { name: "Seals & O-Rings", href: "#products" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Brands", href: "#brands" },
      { name: "Industries", href: "#industries" },
      { name: "Careers", href: "#" },
      { name: "News", href: "#" },
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Request Quote", href: "#contact" },
      { name: "Technical Support", href: "#" },
      { name: "Resources", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  };

  return (
    <footer className="bg-accent text-foreground">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Company Info */}
          <div className="flex items-center gap-3">
            <img src={yatiFavicon} alt="Yati International" className="h-8 w-8 rounded object-contain" />
            <img src={yatiLogo} alt="Yati International Inc." className="h-6 w-auto" />
          </div>
          
          <p className="text-foreground/80 text-sm text-center">
            © {currentYear} Yati International Inc. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-primary transition-colors group"
            >
              <Linkedin className="w-4 h-4 text-foreground group-hover:text-primary-foreground" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-primary transition-colors group"
            >
              <Twitter className="w-4 h-4 text-foreground group-hover:text-primary-foreground" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center hover:bg-primary transition-colors group"
            >
              <Facebook className="w-4 h-4 text-foreground group-hover:text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
