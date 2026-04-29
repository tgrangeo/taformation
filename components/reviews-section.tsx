import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">
            Note Générale
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            4.86/5
          </h2>
          <p className="text-lg text-muted-foreground">
            Note moyenne basée sur les retours de nos stagiaires et entreprises
            partenaires
          </p>
        </div>
      </div>
    </section>
  );
}
