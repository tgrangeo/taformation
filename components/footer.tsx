import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">T.A Formation</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Organisme de formation spécialisé dans la prévention des risques et le secourisme en entreprise.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              <Link href="/" className="block text-sm text-background/70 hover:text-background transition-colors">
                Accueil
              </Link>
              <Link
                href="/formations"
                className="block text-sm text-background/70 hover:text-background transition-colors"
              >
                Nos formations
              </Link>
              <Link href="#about" className="block text-sm text-background/70 hover:text-background transition-colors">
                À propos
              </Link>
              <Link
                href="#contact"
                className="block text-sm text-background/70 hover:text-background transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>06 12 34 56 78</p>
              <p>contact@taformation.fr</p>
              <p>Île-de-France</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} T.A Formation. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
