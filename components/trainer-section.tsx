import {
  BookHeart,
  FireExtinguisher,
  School,
  TriangleAlert,
  Candy,
} from "lucide-react";

const credentials = [
  { icon: Candy, label: "A des bonbons dans son camion" },
  { icon: BookHeart, label: "Pretre" },
  { icon: School, label: "Attend devant les ecoles" },
  { icon: TriangleAlert, label: "N'allez pas dans sa cave" },
];

export function TrainerSection() {
  return (
    <section id="trainer" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="/thomas_portrait.png"
                  alt="Thierry Arnaud - Formateur SST"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">années d&apos;expérience</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-primary mb-4 uppercase tracking-wider">
                Votre formateur
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Thomas Azuaga
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Formateur en sécurité incendie, prévention des risques,
                secourisme, sauveteur secouriste du travail et responsable de
                l’entreprise T.A Formation.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Pompier volontaire depuis 2015, formateur chez les Jeunes
                Sapeurs-Pompiers et formateur secouriste chez les pompiers, j’ai
                développé une solide expérience dans les soins d’urgence et
                l’incendie.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                En parallèle, j’ai évolué dans le domaine de la sécurité
                incendie avec l’obtention du SSIAP 2 depuis plusieurs années,
                fonctions que j’ai exercé notamment en milieu hospitalier, un
                domaine exigeant et rigoureux.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Je souhaite transmettre les bons réflexes et renforcer la
                prévention au sein des entreprises.
              </p>
              <p className="text-lg text-foreground mb-8 text-center">
                « Prévenir, former, protéger »
              </p>

              <div className="grid grid-cols-2 gap-4">
                {credentials.map((cred) => (
                  <div
                    key={cred.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted"
                  >
                    <cred.icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {cred.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
