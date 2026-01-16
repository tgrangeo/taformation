import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/professional-first-aid-training-session-in-modern-.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="flex items-center justify-center gap-2 text-5xl md:text-7xl lg:text-8xl font-bold mb-2 tracking-tight text-background">
          <Image
            src="/flame.png"
            alt="Logo T.A Formation"
            width={64}
            height={64}
            priority
            className="md:w-[80px] md:h-[80px] lg:w-[128px] lg:h-[128px]"
          />
          <span className="text-foreground">T.A Formation</span>
        </h1>
        <p className="text-xl md:text-2xl text/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Formateur SST certifié au service de la sécurité de vos équipes
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="text-lg px-8">
            <Link href="/formations">Découvrir nos formations</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-lg px-8 bg-white/90 hover:bg-white/70 text-background/90 hover:text-background/80"
          >
            <Link href="#contact">Nous contacter</Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-background/60" />
      </div>
    </section>
  );
}
