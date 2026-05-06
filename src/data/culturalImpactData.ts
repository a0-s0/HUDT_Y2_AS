export interface CulturalEvent {
  year: number;
  event: string;
  x: number; // Direct SVG x coordinate for 3024x1964 Mercator viewBox
  y: number; // Direct SVG y coordinate for 3024x1964 Mercator viewBox
  impact: number; // 1-100 scale
  description: string;
}

export const culturalImpactData: CulturalEvent[] = [
  // Events near New York - East Coast USA (x: 900, y: 600)
  {
    year: 1995,
    event: "Rise of Supermodels",
    x: 900,
    y: 600,
    impact: 75,
    description: "Kate Moss, Naomi Campbell, Cindy Crawford dominate fashion"
  },
  {
    year: 1995,
    event: "Grunge to Minimalism",
    x: 898,
    y: 602,
    impact: 70,
    description: "Marc Jacobs brings grunge to luxury fashion"
  },
  {
    year: 1997,
    event: "Alexander McQueen's Rise",
    x: 902,
    y: 598,
    impact: 85,
    description: "McQueen becomes Givenchy's creative director"
  },

  // Events near Paris (x: 1520, y: 480)
  {
    year: 1996,
    event: "Gucci Revival",
    x: 1520,
    y: 480,
    impact: 80,
    description: "Tom Ford transforms Gucci with sexy minimalism"
  },
  {
    year: 1996,
    event: "Dior Saddle Bag Launch",
    x: 1522,
    y: 482,
    impact: 85,
    description: "John Galliano introduces iconic Saddle Bag"
  },
  {
    year: 1997,
    event: "Princess Diana's Death",
    x: 1524,
    y: 479,
    impact: 95,
    description: "Fashion world mourns, influence on mourning attire"
  },

  // Events near London (x: 1480, y: 440)
  {
    year: 1998,
    event: "Y2K Aesthetic Emerges",
    x: 1480,
    y: 440,
    impact: 90,
    description: "Futuristic metallics and tech-inspired fashion"
  },

  // Events near Milan (x: 1560, y: 510)
  {
    year: 1998,
    event: "Gianni Versace Assassination",
    x: 1560,
    y: 510,
    impact: 92,
    description: "Fashion world shocked, legacy continues"
  },

  // Events near Tokyo (x: 2620, y: 560)
  {
    year: 1999,
    event: "Y2K Panic Fashion",
    x: 2620,
    y: 560,
    impact: 85,
    description: "Tech-wear and metallic fabrics dominate"
  },
  {
    year: 1999,
    event: "Logo Mania Peak",
    x: 2622,
    y: 562,
    impact: 98,
    description: "Designer logos reach saturation point"
  },
];
