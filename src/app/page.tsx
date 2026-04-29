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

      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-heading text-2xl text-charcoal mb-2">
            1995—1999
          </p>
          <p className="font-body text-xs text-silver">
            Fashion Culture & History — An Interactive Exploration
          </p>
          <p className="font-body text-xs text-silver/50 mt-4">
            Image archive references: FirstView.com
          </p>
        </div>
      </footer>
    </div>
  );
}
