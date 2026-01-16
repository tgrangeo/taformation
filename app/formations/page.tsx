import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Clock, Users, Award, CheckCircle, ArrowLeft } from "lucide-react"

const formations = [
  {
    title: "Formation SST Initiale",
    description:
      "Devenez Sauveteur Secouriste du Travail et apprenez à porter secours à une victime d'un accident du travail.",
    duration: "14 heures (2 jours)",
    participants: "4 à 10 personnes",
    certification: "Certificat SST valable 24 mois",
    image: "/first-aid-cpr-training-session-with-mannequin.jpg",
    highlights: [
      "Protéger et prévenir les risques",
      "Examiner la victime",
      "Alerter les secours",
      "Secourir : saignements, étouffements, malaises...",
      "Réanimation cardio-pulmonaire (RCP)",
      "Utilisation du défibrillateur (DAE)",
    ],
    badge: "Populaire",
  },
  {
    title: "Maintien et Actualisation des Compétences SST (MAC)",
    description: "Recyclez vos compétences SST pour maintenir votre certification et rester opérationnel.",
    duration: "7 heures (1 jour)",
    participants: "4 à 10 personnes",
    certification: "Renouvellement certificat SST",
    image: "/professional-first-aid-refresher-course-team-train.jpg",
    highlights: [
      "Révision des gestes de premiers secours",
      "Actualisation selon les dernières recommandations",
      "Mise en situation pratique",
      "Évaluation des compétences",
    ],
    badge: "Recyclage",
  },
  {
    title: "Sensibilisation aux Gestes de Premiers Secours",
    description: "Formation courte pour apprendre les gestes essentiels de premiers secours sans certification.",
    duration: "3 à 4 heures",
    participants: "Jusqu'à 15 personnes",
    certification: "Attestation de formation",
    image: "/workplace-first-aid-awareness-training-group-sessi.jpg",
    highlights: [
      "Les gestes qui sauvent",
      "Alerter les secours efficacement",
      "Position latérale de sécurité (PLS)",
      "Massage cardiaque et défibrillateur",
    ],
    badge: "Express",
  },
  {
    title: "Formation Incendie et Évacuation",
    description: "Apprenez à réagir face à un départ de feu et à évacuer les locaux en toute sécurité.",
    duration: "3 à 4 heures",
    participants: "Jusqu'à 12 personnes",
    certification: "Attestation de formation",
    image: "/fire-safety-training-workplace-fire-extinguisher-d.jpg",
    highlights: [
      "Les classes de feux",
      "Manipulation des extincteurs",
      "Procédures d'évacuation",
      "Rôle des guides et serre-files",
    ],
    badge: "Sécurité",
  },
]

export default function FormationsPage() {
  return (
    <main>
      <Header />

      <section className="pt-32 pb-16 bg-muted">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l&apos;accueil
            </Link>
          </Button>

          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">Nos formations</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Des formations adaptées à vos besoins
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Découvrez notre catalogue de formations en sécurité et secourisme. Toutes nos formations peuvent être
              dispensées dans vos locaux.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {formations.map((formation, index) => (
              <Card key={index} className="overflow-hidden border-border bg-card flex flex-col">
                <div className="relative h-56">
                  <img
                    src={formation.image || "/placeholder.svg"}
                    alt={formation.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4">{formation.badge}</Badge>
                </div>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-foreground">{formation.title}</h2>
                  <p className="text-muted-foreground">{formation.description}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{formation.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{formation.participants}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{formation.certification}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Programme :</h3>
                    <ul className="space-y-2">
                      {formation.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full">
                    <Link href="/#contact">Demander un devis</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Vous avez un besoin spécifique ?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Nous pouvons adapter nos formations à votre secteur d&apos;activité et aux risques spécifiques de votre
            entreprise.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/#contact">Contactez-nous</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
