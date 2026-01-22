import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { Clock, Users, Download, CheckCircle, ArrowLeft } from "lucide-react";

const formations = [
  {
    title: "Équipier de première intervention EPI",
    description:
      "Formation à la prévention incendie pour reconnaître les extincteurs, appliquer les consignes de sécurité et intervenir efficacement sur un départ de feu.",
    duration: "3 heures",
    participants: "jusqu'à 10 personnes",
    image: "first-aid-cpr-training-session-with-mannequin.jpg",
    highlights: [
      "Être capable d’identifier les différents extincteurs.",
      "Être capable de mobiliser les moyens de secours liés à l’entreprise.",
      "Être capable de décrire les procédures et consignes de sécurité de l’entreprise.",
      "Être capable d’identifier les étapes d’intervention pour agir sur un départ de feu.",
    ],
    pdf: "pdf/programme_formation_EPI.pdf",
  },
  {
    title: "Exercice d’évacuation incendie",
    description:
      "Formation pratique visant à intervenir efficacement sur un départ de feu, participer à l’évacuation du public et adopter les bons réflexes en situation d’urgence.",
    duration: "2 heures",
    participants: "nombre défini avec l’entreprise",
    image: "fire-evacuation-drill-with-smoke-machine.jpg",
    highlights: [
      "Intervenir efficacement sur un départ de feu.",
      "Participer à l’évacuation du public en sécurité.",
      "Identifier les dysfonctionnements lors de l’exercice.",
      "Sensibiliser le personnel aux gestes réflexes incendie.",
    ],
    pdf: "pdf/programme_formation_exercice_d'e%CC%81vacuation.pdf",
  },
  {
    title: "Exploitation du Système de Sécurité Incendie (SSI)",
    description:
      "Formation permettant d’exploiter et de réarmer le SSI, de participer activement à l’évacuation et d’alerter, accueillir et guider les secours.",
    duration: "3 heures",
    participants: "de 4 à 10 personnes",
    image: "fire-safety-control-panel-training.jpg",
    highlights: [
      "Exploiter et réarmer le Système de Sécurité Incendie (SSI).",
      "Devenir acteur de l’évacuation au sein de l’entreprise.",
      "Alerter, accueillir et guider les secours.",
      "Mettre en œuvre le SSI lors de mises en situation réelles.",
    ],
    pdf: "pdf/programme_formation_exploitation_SSI.pdf",
  },
  {
    title: "Gestes qui sauvent (GQS)",
    description:
      "Formation pratique permettant d’assurer une protection pour soi et pour les autres, de transmettre un message d’alerte, et de maîtriser les techniques de secourisme pour éviter l’aggravation de l’état de santé d’une victime.",
    duration: "2 heures",
    participants: "4 à 15 personnes",
    image: "gestes-qui-sauvent-formation-secourisme.jpg",
    highlights: [
      "Apprendre à protéger et alerter en cas d’urgence.",
      "Maîtriser les gestes de secourisme : hémorragie, victime inconsciente qui respire ou ne respire pas.",
      "Savoir réagir rapidement et efficacement pour éviter l’aggravation de l’état d’une victime.",
      "Formation interactive avec démonstrations pratiques sur mannequins.",
    ],
    pdf: "pdf/programme_formation_GQS.pdf",
  },
  {
    title:
      "Maintien et Actualisation des Compétences du Sauveteur Secouriste du Travail (MAC SST)",
    description:
      "Formation permettant d’intervenir efficacement face à une situation d’accident du travail, tout en actualisant ses compétences en prévention des risques professionnels et en gestes de secours.",
    duration: "7 heures",
    participants: "4 à 10 personnes",
    image: "formation-mac-sst-secourisme-travail.jpg",
    highlights: [
      "Actualisation des compétences en prévention des risques professionnels.",
      "Retour d’expérience et partage des bonnes pratiques entre SST.",
      "Mises à jour des gestes de secours et mises en situation d’accidents du travail.",
      "Évaluation certificative MAC SST selon les critères INRS.",
      "Formation interactive avec supports pédagogiques et exercices pratiques.",
    ],
    pdf: "pdf/programme_formation_MAC_SST.pdf",
  },
  {
    title: "Prévention des risques",
    description:
      "Formation visant à identifier les risques spécifiques à une entreprise, à effectuer une remontée d'informations de qualité et à utiliser le Mécanisme d'Apparition du Dommage (MAD) pour renforcer la sécurité au travail.",
    duration: "2 heures",
    participants: "4 à 10 personnes",
    image: "formation-prevention-risques-entreprise.jpg",
    highlights: [
      "Identifier les risques liés à l'activité de l'entreprise.",
      "Apprendre à rédiger une remontée d'informations efficace.",
      "Utiliser le Mécanisme d'Apparition du Dommage (MAD) pour analyser les situations à risque.",
      "Visite pratique du site pour appliquer les connaissances acquises.",
      "Formation interactive avec vidéos, exposés et partage d'expérience.",
    ],
    pdf: "pdf/programme_formation_pre%CC%81vention_des_risques.pdf",
  },
  {
    title: "Savoir porter secours (SPS)",
    description:
      "Formation complète pour apprendre à protéger, alerter et réaliser les gestes de secours adaptés en cas d'urgence (étouffement, saignement, malaise, brûlure, traumatisme, etc.).",
    duration: "7 heures",
    participants: "4 à 10 personnes",
    image: "formation-savoir-porter-secours-sps.jpg",
    highlights: [
      "Maîtriser les gestes de secours pour diverses situations d'urgence.",
      "Apprendre à protéger et alerter efficacement.",
      "Exercices pratiques sur mannequins pour une immersion réaliste.",
      "Évaluation par des mises en situation adaptées à l'entreprise.",
      "Formation interactive avec démonstrations et partage d'expérience.",
    ],
    pdf: "pdf/programme_formation_SPS.pdf",
  },
  {
    title: "Sauveteur Secouriste du Travail (SST)",
    description:
      "Formation certifiante permettant d’intervenir efficacement en cas d’accident du travail, tout en intégrant la prévention des risques professionnels. Les participants apprennent à protéger, examiner, alerter et réaliser les gestes de premiers secours adaptés.",
    duration: "14 heures (2 journées)",
    participants: "4 à 10 personnes",
    image: "formation-sst-sauveteur-secouriste-travail.jpg",
    highlights: [
      "Maîtriser le rôle du SST et le cadre juridique lié à la prévention des risques professionnels.",
      "Apprendre à protéger, examiner une victime et alerter les secours.",
      "Réaliser les gestes de premiers secours pour diverses situations (saignement, étouffement, malaise, brûlures, traumatismes, etc.).",
      "Épreuves certificatives selon les critères INRS pour valider les compétences acquises.",
      "Formation interactive avec vidéos, supports pédagogiques et exercices pratiques sur mannequins.",
    ],
    pdf: "pdf/programme_formation_SST.pdf",
  },
];

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
            <p className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">
              Nos formations
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Des formations adaptées à vos besoins
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Découvrez notre catalogue de formations en sécurité et secourisme.
              Toutes nos formations peuvent être dispensées dans vos locaux.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {formations.map((formation, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border bg-card flex flex-col"
              >
                <div className="relative h-56">
                  <img
                    src={formation.image || "/placeholder.svg"}
                    alt={formation.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <h2 className="text-2xl font-bold text-foreground">
                    {formation.title}
                  </h2>
                  <p className="text-muted-foreground">
                    {formation.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">
                        {formation.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">
                        {formation.participants}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      Programme :
                    </h3>
                    <ul className="space-y-2">
                      {formation.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button asChild className="w-full">
                    <Button asChild className="w-full">
                      <a
                        href={formation.pdf}
                        className="flex items-center gap-2"
                        download
                      >
                        <Download className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        Télécharger le détail
                      </a>
                    </Button>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Vous avez un besoin spécifique ?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Nous pouvons adapter nos formations à votre secteur d&apos;activité
            et aux risques spécifiques de votre entreprise.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/#contact">Contactez-nous</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
