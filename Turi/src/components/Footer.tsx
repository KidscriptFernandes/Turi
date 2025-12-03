import { Plane, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">
                Receba Ofertas Exclusivas
              </h3>
              <p className="text-background/70">
                Inscreva-se e seja o primeiro a saber das melhores promoções.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 md:w-64 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-coral"
              />
              <Button variant="hero" size="lg">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-coral to-gold flex items-center justify-center">
                <Plane className="w-5 h-5 text-background" />
              </div>
              <span className="text-xl font-display font-bold">VoyageLux</span>
            </a>
            <p className="text-background/70 mb-4">
              Sua plataforma completa para reservas de voos, hotéis e resorts de luxo.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-coral transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-coral transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-coral transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-coral transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-coral transition-colors">Voos</a></li>
              <li><a href="#" className="text-background/70 hover:text-coral transition-colors">Hotéis</a></li>
              <li><a href="#" className="text-background/70 hover:text-coral transition-colors">Resorts</a></li>
              <li><a href="#" className="text-background/70 hover:text-coral transition-colors">Pacotes</a></li>
              <li><a href="#" className="text-background/70 hover:text-coral transition-colors">Ofertas</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/70 hover:text-coral transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-background/70 hover:text-coral transition-colors">Política de Cancelamento</a></li>
              <li><a href="#" className="text-background/70 hover:text-coral transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-background/70 hover:text-coral transition-colors">Privacidade</a></li>
              <li><a href="#" className="text-background/70 hover:text-coral transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5 text-coral" />
                tuuri@gmail.com
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5 text-coral" />
                (+224) 912 346 6789
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 text-coral shrink-0" />
                Angola-Luanda
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
            <p>© 2024 VoyageLux. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">Termos</a>
              <a href="#" className="hover:text-background transition-colors">Privacidade</a>
              <a href="#" className="hover:text-background transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
