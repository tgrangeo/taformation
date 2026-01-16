import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Marie Dupont",
    company: "BTP Solutions",
    rating: 5,
    text: "Formation SST très complète et enrichissante. Le formateur sait rendre les gestes de secours accessibles à tous. Je recommande vivement !",
    avatar: "professional-woman-portrait.png",
  },
  {
    name: "Jean-Pierre Martin",
    company: "Industrie Moderne",
    rating: 5,
    text: "Excellente pédagogie, cas pratiques très réalistes. Toute notre équipe est maintenant formée grâce à T.A Formation.",
    avatar: "professional-man-portrait.png",
  },
  {
    name: "Sophie Bernard",
    company: "Restaurant Le Gourmet",
    rating: 5,
    text: "Un formateur passionné qui sait transmettre les bons réflexes. La formation s'est déroulée dans nos locaux, très pratique !",
    avatar: "professional-woman-chef.png",
  },
  {
    name: "Thomas Leroy",
    company: "Logistique Express",
    rating: 5,
    text: "Formation de qualité, parfaitement adaptée aux risques de notre secteur. Un vrai plus pour la sécurité de nos collaborateurs.",
    avatar: "professional-man-warehouse-worker-portrait.jpg",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">Témoignages</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez les retours de nos stagiaires et entreprises partenaires
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">{review.text}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar || "placeholder.svg"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
