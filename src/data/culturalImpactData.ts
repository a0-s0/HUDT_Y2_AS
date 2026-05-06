export interface CulturalEvent {
  year: number;
  event: string;
  x: number; // Direct SVG x coordinate for 800x400 viewBox
  y: number; // Direct SVG y coordinate for 800x400 viewBox
  impact: number; // 1-100 scale
  description: string;
}

export const culturalImpactData: CulturalEvent[] = [
  // Events near New York (x: 150-200, y: 120-180)
  {
    year: 1995,
    event: "Rise of Supermodels",
    x: 180,
    y: 140,
    impact: 75,
    description: "Kate Moss, Naomi Campbell, Cindy Crawford dominate fashion"
  },
  {
    year: 1995,
    event: "Grunge to Minimalism",
    x: 160,
    y: 160,
    impact: 70,
    description: "Marc Jacobs brings grunge to luxury fashion"
  },
  {
    year: 1997,
    event: "Alexander McQueen's Rise",
    x: 170,
    y: 180,
    impact: 85,
    description: "McQueen becomes Givenchy's creative director"
  },

  // Events near Paris (x: 400-450, y: 100-140)
  {
    year: 1996,
    event: "Gucci Revival",
    x: 420,
    y: 110,
    impact: 80,
    description: "Tom Ford transforms Gucci with sexy minimalism"
  },
  {
    year: 1996,
    event: "Dior Saddle Bag Launch",
    x: 430,
    y: 120,
    impact: 85,
    description: "John Galliano introduces iconic Saddle Bag"
  },
  {
    year: 1997,
    event: "Princess Diana's Death",
    x: 440,
    y: 115,
    impact: 95,
    description: "Fashion world mourns, influence on mourning attire"
  },

  // Events near London (x: 380-420, y: 90-130)
  {
    year: 1998,
    event: "Y2K Aesthetic Emerges",
    x: 390,
    y: 100,
    impact: 90,
    description: "Futuristic metallics and tech-inspired fashion"
  },

  // Events near Milan (x: 430-460, y: 110-150)
  {
    year: 1998,
    event: "Gianni Versace Assassination",
    x: 450,
    y: 130,
    impact: 92,
    description: "Fashion world shocked, legacy continues"
  },

  // Events near Tokyo (x: 700-750, y: 120-180)
  {
    year: 1999,
    event: "Y2K Panic Fashion",
    x: 720,
    y: 150,
    impact: 85,
    description: "Tech-wear and metallic fabrics dominate"
  },
  {
    year: 1999,
    event: "Logo Mania Peak",
    x: 730,
    y: 170,
    impact: 98,
    description: "Designer logos reach saturation point"
  },
];
