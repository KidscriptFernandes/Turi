import { Shield, CreditCard, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Reserva Segura",
    description: "Seus dados protegidos com criptografia de ponta a ponta",
  },
  {
    icon: CreditCard,
    title: "Melhor Preço",
    description: "Garantimos o menor preço ou devolvemos a diferença",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Assistência em português disponível a qualquer hora",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Parceiros verificados e hotéis com alta avaliação",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-ocean/10 to-ocean-light/10 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-ocean" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
