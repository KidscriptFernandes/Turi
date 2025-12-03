import { Card } from "@/components/ui/card";
import { MapPin, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import santoriniImg from "@/assets/destination-santorini.jpg";
import machuPicchuImg from "@/assets/destination-machu-picchu.jpg";
import tokyoImg from "@/assets/destination-tokyo.jpg";
import maldivesImg from "@/assets/destination-maldives.jpg";

const destinations = [
  {
    id: 1,
    name: "Santorini",
    country: "Grécia",
    image: santoriniImg,
    rating: 4.9,
    price: "R$ 4.590",
    description: "Pôr do sol deslumbrante e arquitetura icônica",
  },
  {
    id: 2,
    name: "Machu Picchu",
    country: "Peru",
    image: machuPicchuImg,
    rating: 4.8,
    price: "R$ 3.890",
    description: "Mistério e história nas montanhas sagradas",
  },
  {
    id: 3,
    name: "Tóquio",
    country: "Japão",
    image: tokyoImg,
    rating: 4.9,
    price: "R$ 5.290",
    description: "Tradição e modernidade em harmonia perfeita",
  },
  {
    id: 4,
    name: "Maldivas",
    country: "Oceano Índico",
    image: maldivesImg,
    rating: 5.0,
    price: "R$ 8.990",
    description: "Paraíso tropical com águas cristalinas",
  },
];

const Destinations = () => {
  return (
    <section id="destinos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-ocean/10 text-ocean rounded-full text-sm font-medium mb-4">
            Destinos Populares
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Explore Lugares{" "}
            <span className="text-gradient-ocean">Incríveis</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubra os destinos mais procurados pelos nossos viajantes e encontre 
            sua próxima aventura inesquecível.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card
              key={destination.id}
              variant="destination"
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-foreground">
                    {destination.price}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1 text-card">
                  <Star className="w-4 h-4 fill-gold text-gold" />
                  <span className="font-medium">{destination.rating}</span>
                </div>

                {/* Location Info */}
                <div className="absolute bottom-4 right-4 text-right text-card">
                  <h3 className="text-lg font-display font-bold">{destination.name}</h3>
                  <div className="flex items-center gap-1 justify-end text-sm text-card/80">
                    <MapPin className="w-3 h-3" />
                    {destination.country}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-3">
                  {destination.description}
                </p>
                <Button variant="ghost" size="sm" className="w-full justify-between group/btn">
                  Ver Detalhes
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="ocean" size="lg">
            Ver Todos os Destinos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
