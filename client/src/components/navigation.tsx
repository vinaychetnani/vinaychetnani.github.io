import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-semibold text-primary">Vinay Chetnani</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-secondary transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-secondary transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-secondary transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-secondary transition-colors">
              Contact
            </button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-secondary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-secondary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-secondary transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-secondary transition-colors">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
