import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { DesignerSpotlights } from "@/components/DesignerSpotlights";
import { Infographics } from "@/components/Infographics";
import { TrendQuiz } from "@/components/TrendQuiz";

export default function Home() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <Timeline />
      <DesignerSpotlights />
      <Infographics />

      <TrendQuiz />

      <footer className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-body text-xs text-silver/50">
            THE FASHION PARADIGM SHIFT - Copyright Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
