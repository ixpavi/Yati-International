import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import yatiFavicon from "@/assets/yati-favicon.jpeg";
import yatiLogo from "@/assets/yati-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Products", href: "#products" },
    { name: "Brands", href: "#brands" },
    { name: "About", href: "#about" },
    { name: "Industries", href: "#industries" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border animate-slide-down">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 hover:scale-[1.03] transition-transform">
            <img src={yatiFavicon} alt="Yati International" className="h-10 w-10 rounded object-contain" />
            <img src={yatiLogo} alt="Yati International Inc." className="h-8 md:h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-foreground hover:text-accent transition-colors font-medium text-sm tracking-wide after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-[2px] after:bg-accent after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="accent" size="lg" className="hover:bg-primary hover:text-primary-foreground" asChild>
              <a href="#contact">Request Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="accent" className="mt-4 hover:bg-primary hover:text-primary-foreground" onClick={() => setIsMenuOpen(false)} asChild>
                <a href="#contact">Request Quote</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
