import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { DesignerSpotlights } from "@/components/DesignerSpotlights";
import { Infographics } from "@/components/Infographics";

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <Timeline />
      <DesignerSpotlights />
      <Infographics />

      <footer className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-heading text-[50px] md:text-[80px] font-bold uppercase text-deep-brown mb-4">
            THE FASHION PARADIGM SHIFT
          </p>
          <p className="font-body text-sm text-silver">
            Fashion Culture & History — An Interactive Exploration
          </p>
          <p className="font-body text-xs text-silver/50 mt-8">
            Image archive references: FirstView.com
          </p>
        </div>
      </footer>
    </div>
  );
}
