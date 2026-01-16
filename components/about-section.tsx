import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Sécurité garantie",
    description: "Formations conformes aux normes INRS",
  },
  {
    icon: Users,
    title: "Sur mesure",
    description: "Formations adaptées à votre secteur",
  },
  {
    icon: Award,
    title: "Certifié",
    description: "Formateur habilité et expérimenté",
  },
  {
    icon: Clock,
    title: "Flexible",
    description: "Interventions dans vos locaux",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <p className="text-sm font-medium text-primary uppercase tracking-wider">
            À propos
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Protégez vos équipes avec des formations de qualité
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            T.A Formation est un organisme de formation créé en 2021 et basé à
            Lyon. L’entreprise est spécialisée en sécurité incendie, prévention
            des risques et secourisme.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Elle accompagne toutes les entreprises et associations au niveau
            national dans la mise en conformité réglementaire et la protection
            des collaborateurs, à travers différentes formations distinctes.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Avec une approche professionnelle, structurée et pédagogique, T.A
            Formation accompagne ses clients à travers des formations adaptées
            et réalisées sur mesure afin de répondre aux besoins spécifiques du
            client tout en respectant strictement la réglementation en vigueur.
          </p>

          <p className="pt-4 text-lg font-medium text-foreground max-w-2xl mx-auto">
            T.A Formation, des formations concrètes, une expertise complète au
            service de la sécurité
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="/formations">Accédez à nos formations</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
