import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="flame.png"
              alt="Logo T.A Formation"
              width={32}
              height={32}
              priority
            />
            <span className="text-xl font-bold text-foreground">
              T.A Formation
            </span>
          </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="#about"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            À propos
          </Link>
          <Link
            href="#reviews"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Avis
          </Link>
          <Link
            href="#trainer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Formateur
          </Link>
          <Link
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/formations">Nos Formations</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium">
                Accueil
              </Link>
              <Link href="#about" className="text-lg font-medium">
                À propos
              </Link>
              <Link href="#reviews" className="text-lg font-medium">
                Avis
              </Link>
              <Link href="#trainer" className="text-lg font-medium">
                Formateur
              </Link>
              <Link href="#contact" className="text-lg font-medium">
                Contact
              </Link>
              <Button asChild className="mt-4">
                <Link href="/formations">Nos Formations</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
