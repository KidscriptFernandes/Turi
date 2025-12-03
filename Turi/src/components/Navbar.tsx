import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plane, Menu, X, Hotel, MapPin, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-ocean to-ocean-light flex items-center justify-center">
              <Plane className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-display font-bold text-foreground">VoyageLux</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#voos" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Plane className="w-4 h-4" />
              <span>Voos</span>
            </a>
            <a href="#hoteis" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Hotel className="w-4 h-4" />
              <span>Hotéis</span>
            </a>
            <a href="#destinos" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <MapPin className="w-4 h-4" />
              <span>Destinos</span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Entrar
            </Button>
            <Button variant="ocean" size="sm">
              Reservar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-up">
            <div className="flex flex-col gap-4">
              <a href="#voos" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2">
                <Plane className="w-4 h-4" />
                <span>Voos</span>
              </a>
              <a href="#hoteis" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2">
                <Hotel className="w-4 h-4" />
                <span>Hotéis</span>
              </a>
              <a href="#destinos" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-2">
                <MapPin className="w-4 h-4" />
                <span>Destinos</span>
              </a>
              <div className="flex gap-3 pt-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  Entrar
                </Button>
                <Button variant="ocean" size="sm" className="flex-1">
                  Reservar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
