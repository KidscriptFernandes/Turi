import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Percent, Plane, Hotel, ArrowRight } from "lucide-react";

const offers = [
  {
    id: 1,
    type: "voo",
    title: "São Paulo → Paris",
    discount: "30% OFF",
    originalPrice: "R$ 6.890",
    price: "R$ 4.823",
    deadline: "Termina em 2 dias",
    icon: Plane,
    gradient: "from-ocean to-ocean-light",
  },
  {
    id: 2,
    type: "hotel",
    title: "Resort Cancún 5★",
    discount: "25% OFF",
    originalPrice: "R$ 4.500",
    price: "R$ 3.375",
    deadline: "Termina em 5 dias",
    icon: Hotel,
    gradient: "from-coral to-coral-light",
  },
  {
    id: 3,
    type: "pacote",
    title: "Pacote Dubai Luxo",
    discount: "40% OFF",
    originalPrice: "R$ 15.000",
    price: "R$ 9.000",
    deadline: "Termina em 1 dia",
    icon: Plane,
    gradient: "from-gold to-gold-light",
  },
];

const Offers = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block px-4 py-1 bg-coral/10 text-coral rounded-full text-sm font-medium mb-4">
              Ofertas Especiais
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
              Economize na sua{" "}
              <span className="text-gradient-sunset">Viagem</span>
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            Ver Todas as Ofertas
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <Card
              key={offer.id}
              variant="elevated"
              className="overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${offer.gradient} p-4`}>
                <div className="flex items-center justify-between">
                  <offer.icon className="w-8 h-8 text-primary-foreground/80" />
                  <div className="flex items-center gap-1 bg-card/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Percent className="w-4 h-4 text-primary-foreground" />
                    <span className="text-sm font-bold text-primary-foreground">
                      {offer.discount}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-primary-foreground mt-4">
                  {offer.title}
                </h3>
              </div>

              <CardContent className="p-6">
                {/* Pricing */}
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground line-through">
                    {offer.originalPrice}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">
                      {offer.price}
                    </span>
                    <span className="text-sm text-muted-foreground">/pessoa</span>
                  </div>
                </div>

                {/* Deadline */}
                <div className="flex items-center gap-2 text-coral mb-6">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-medium">{offer.deadline}</span>
                </div>

                {/* CTA */}
                <Button variant="ocean" className="w-full">
                  Reservar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Banner */}
        <div className="mt-12 bg-gradient-to-r from-ocean-dark to-ocean rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-light/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-coral/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-2">
                Primeira Viagem? Ganhe 15% de Desconto!
              </h3>
              <p className="text-primary-foreground/80">
                Cadastre-se agora e receba um cupom exclusivo para sua primeira reserva.
              </p>
            </div>
            <Button variant="hero" size="lg" className="shrink-0">
              Criar Conta Grátis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
