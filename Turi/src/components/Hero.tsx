import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plane, Hotel, Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";

type SearchType = "voos" | "hoteis";

const Hero = () => {
  const [searchType, setSearchType] = useState<SearchType>("voos");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-coral/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-ocean-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-card mb-6 animate-fade-up">
            Descubra o Mundo com{" "}
            <span className="text-gradient-sunset">Conforto</span>
          </h1>
          <p className="text-lg md:text-xl text-card/80 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Reserve voos, hotéis e resorts de luxo para sua próxima aventura. 
            As melhores ofertas para destinos incríveis ao redor do mundo.
          </p>
        </div>

        {/* Search Card */}
        <div className="max-w-4xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-card/95 backdrop-blur-md rounded-2xl shadow-elevated p-6 md:p-8">
            {/* Tabs */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setSearchType("voos")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  searchType === "voos"
                    ? "bg-ocean text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Plane className="w-4 h-4" />
                Voos
              </button>
              <button
                onClick={() => setSearchType("hoteis")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  searchType === "hoteis"
                    ? "bg-ocean text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <Hotel className="w-4 h-4" />
                Hotéis
              </button>
            </div>

            {/* Search Form */}
            {searchType === "voos" ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Origem</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Sua Localização"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ocean"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Destino</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Para onde ?"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ocean"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Data</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ocean"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Passageiros</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ocean appearance-none">
                      <option>1 Adulto</option>
                      <option>2 Adultos</option>
                      <option>3 Adultos</option>
                      <option>4 Adultos</option>
                    </select>
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Destino</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Cidade, região ou hotel"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ocean"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Check-in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ocean"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">Hóspedes</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ocean appearance-none">
                      <option>2 Hóspedes</option>
                      <option>1 Hóspede</option>
                      <option>3 Hóspedes</option>
                      <option>4 Hóspedes</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Search Button */}
            <div className="mt-6 flex justify-center">
              <Button variant="hero" size="xl" className="w-full md:w-auto">
                Buscar {searchType === "voos" ? "Voos" : "Hotéis"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-card/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-card/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
