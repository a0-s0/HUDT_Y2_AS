export interface CulturalEvent {
  year: number;
  event: string;
  x: number; // Direct SVG x coordinate
  y: number; // Direct SVG y coordinate
  impact: number; // 1-100 scale
  description: string;
}

export const culturalImpactData: CulturalEvent[] = [
  // Events near New York (x: 460-540 after scale(1.8) translate(50,50))
  {
    year: 1995,
    event: "Rise of Supermodels",
    x: 486,
    y: 288,
    impact: 75,
    description: "Kate Moss, Naomi Campbell, Cindy Crawford dominate fashion"
  },
  {
    year: 1995,
    event: "Grunge to Minimalism",
    x: 459,
    y: 315,
    impact: 70,
    description: "Marc Jacobs brings grunge to luxury fashion"
  },
  {
    year: 1997,
    event: "Alexander McQueen's Rise",
    x: 513,
    y: 342,
    impact: 85,
    description: "McQueen becomes Givenchy's creative director"
  },
  {
    year: 1995,
    event: "Grunge to Minimalism",
    x: 255,
    y: 175,
    impact: 70,
    description: "Marc Jacobs brings grunge to luxury fashion"
  },
  {
    year: 1997,
    event: "Alexander McQueen's Rise",
    x: 285,
    y: 165,
    impact: 88,
    description: "McQueen becomes Givenchy's creative director"
  },
  {
    year: 1999,
    event: "Y2K Panic Fashion",
    x: 290,
    y: 170,
    impact: 85,
    description: "Tech-wear and metallic fabrics dominate"
  },

  // Events near Paris (x: 450-485)
  {
    year: 1996,
    event: "Gucci Revival",
    x: 455,
    y: 155,
    impact: 80,
    description: "Tom Ford transforms Gucci with sexy minimalism"
  },
  {
    year: 1996,
    event: "Dior Saddle Bag Launch",
    x: 465,
    y: 160,
    impact: 85,
    description: "John Galliano introduces iconic Saddle Bag"
  },
  {
    year: 1997,
    event: "Princess Diana's Death",
    x: 475,
    y: 155,
    impact: 95,
    description: "Fashion world mourns, influence on mourning attire"
  },
  {
    year: 1999,
    event: "Logo Mania Peak",
    x: 480,
    y: 160,
    impact: 98,
    description: "Designer logos reach saturation point"
  },

  // Events near other locations
  {
    year: 1998,
    event: "Y2K Aesthetic Emerges",
    x: 200,
    y: 180,
    impact: 90,
    description: "Futuristic metallics and tech-inspired fashion"
  },
  {
    year: 1998,
    event: "Gianni Versace Assassination",
    x: 490,
    y: 170,
    impact: 92,
    description: "Fashion world shocked, legacy continues"
  },
];
