import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import yatiMark from "@/assets/yati-mark-transparent.png";
import yatiText from "@/assets/yati-text-transparent.png";

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
            <img src={yatiMark} alt="Yati International" className="h-10 w-10 object-contain" />
            <img src={yatiText} alt="Yati International Inc." className="h-8 md:h-10 w-auto" />
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

          {/* Mobile Menu Button with Custom Animation */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <div className="relative w-6 h-5">
              <span className={`hamburger-line top-0 ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : ''}`} />
              <span className={`hamburger-line top-1/2 -translate-y-1/2 ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}`} />
              <span className={`hamburger-line bottom-0 ${isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background/95 backdrop-blur-md animate-slide-down-menu shadow-lg">
            <nav className="flex flex-col space-y-4 px-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent hover:pl-2 transition-all duration-200 font-medium py-2 border-b border-border/40 last:border-0"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="animate-slide-up inline-block">{item.name}</span>
                </a>
              ))}
              <div className="pt-2 animate-slide-up" style={{ animationDelay: `${navItems.length * 50}ms`, animationFillMode: 'both' }}>
                <Button variant="accent" className="w-full hover:bg-primary hover:text-primary-foreground" onClick={() => setIsMenuOpen(false)} asChild>
                  <a href="#contact">Request Quote</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
