export interface CulturalEvent {
  year: number;
  event: string;
  x: number; // Direct SVG x coordinate for 1000x500 viewBox
  y: number; // Direct SVG y coordinate for 1000x500 viewBox
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

  // Events near Paris (x: 450-500, y: 100-140)
  {
    year: 1996,
    event: "Gucci Revival",
    x: 480,
    y: 120,
    impact: 80,
    description: "Tom Ford transforms Gucci with sexy minimalism"
  },
  {
    year: 1996,
    event: "Dior Saddle Bag Launch",
    x: 490,
    y: 125,
    impact: 85,
    description: "John Galliano introduces iconic Saddle Bag"
  },
  {
    year: 1997,
    event: "Princess Diana's Death",
    x: 500,
    y: 120,
    impact: 95,
    description: "Fashion world mourns, influence on mourning attire"
  },

  // Events near London (x: 440-470, y: 110-130)
  {
    year: 1998,
    event: "Y2K Aesthetic Emerges",
    x: 460,
    y: 110,
    impact: 90,
    description: "Futuristic metallics and tech-inspired fashion"
  },

  // Events near Milan (x: 480-520, y: 130-150)
  {
    year: 1998,
    event: "Gianni Versace Assassination",
    x: 510,
    y: 140,
    impact: 92,
    description: "Fashion world shocked, legacy continues"
  },

  // Events near Tokyo (x: 850-900, y: 170-200)
  {
    year: 1999,
    event: "Y2K Panic Fashion",
    x: 880,
    y: 180,
    impact: 85,
    description: "Tech-wear and metallic fabrics dominate"
  },
  {
    year: 1999,
    event: "Logo Mania Peak",
    x: 890,
    y: 190,
    impact: 98,
    description: "Designer logos reach saturation point"
  },
];
