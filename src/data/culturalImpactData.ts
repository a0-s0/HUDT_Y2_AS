export interface CulturalEvent {
  year: number;
  event: string;
  x: number; // Direct SVG x coordinate for 1200x600 viewBox
  y: number; // Direct SVG y coordinate for 1200x600 viewBox
  impact: number; // 1-100 scale
  description: string;
}

export const culturalImpactData: CulturalEvent[] = [
  // Events near New York - East Coast USA (x: 540-560, y: 160-180)
  {
    year: 1995,
    event: "Rise of Supermodels",
    x: 545,
    y: 170,
    impact: 75,
    description: "Kate Moss, Naomi Campbell, Cindy Crawford dominate fashion"
  },
  {
    year: 1995,
    event: "Grunge to Minimalism",
    x: 540,
    y: 175,
    impact: 70,
    description: "Marc Jacobs brings grunge to luxury fashion"
  },
  {
    year: 1997,
    event: "Alexander McQueen's Rise",
    x: 542,
    y: 178,
    impact: 85,
    description: "McQueen becomes Givenchy's creative director"
  },

  // Events near Paris (x: 550-570, y: 90-110)
  {
    year: 1996,
    event: "Gucci Revival",
    x: 560,
    y: 100,
    impact: 80,
    description: "Tom Ford transforms Gucci with sexy minimalism"
  },
  {
    year: 1996,
    event: "Dior Saddle Bag Launch",
    x: 565,
    y: 105,
    impact: 85,
    description: "John Galliano introduces iconic Saddle Bag"
  },
  {
    year: 1997,
    event: "Princess Diana's Death",
    x: 570,
    y: 98,
    impact: 95,
    description: "Fashion world mourns, influence on mourning attire"
  },

  // Events near London (x: 520-540, y: 95-110)
  {
    year: 1998,
    event: "Y2K Aesthetic Emerges",
    x: 530,
    y: 102,
    impact: 90,
    description: "Futuristic metallics and tech-inspired fashion"
  },

  // Events near Milan (x: 580-600, y: 120-140)
  {
    year: 1998,
    event: "Gianni Versace Assassination",
    x: 590,
    y: 130,
    impact: 92,
    description: "Fashion world shocked, legacy continues"
  },

  // Events near Tokyo (x: 1080-1100, y: 140-160)
  {
    year: 1999,
    event: "Y2K Panic Fashion",
    x: 1090,
    y: 150,
    impact: 85,
    description: "Tech-wear and metallic fabrics dominate"
  },
  {
    year: 1999,
    event: "Logo Mania Peak",
    x: 1095,
    y: 155,
    impact: 98,
    description: "Designer logos reach saturation point"
  },
];
