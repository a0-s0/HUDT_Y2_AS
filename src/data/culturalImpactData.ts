export interface CulturalEvent {
  year: number;
  event: string;
  x: number; // Direct SVG x coordinate for 1600x800 Mercator viewBox
  y: number; // Direct SVG y coordinate for 1600x800 Mercator viewBox
  impact: number; // 1-100 scale
  description: string;
}

export const culturalImpactData: CulturalEvent[] = [
  // Events near New York - East Coast USA (x: 475-485, y: 275-285)
  {
    year: 1995,
    event: "Rise of Supermodels",
    x: 478,
    y: 278,
    impact: 75,
    description: "Kate Moss, Naomi Campbell, Cindy Crawford dominate fashion"
  },
  {
    year: 1995,
    event: "Grunge to Minimalism",
    x: 476,
    y: 282,
    impact: 70,
    description: "Marc Jacobs brings grunge to luxury fashion"
  },
  {
    year: 1997,
    event: "Alexander McQueen's Rise",
    x: 480,
    y: 280,
    impact: 85,
    description: "McQueen becomes Givenchy's creative director"
  },

  // Events near Paris (x: 748-755, y: 243-248)
  {
    year: 1996,
    event: "Gucci Revival",
    x: 750,
    y: 245,
    impact: 80,
    description: "Tom Ford transforms Gucci with sexy minimalism"
  },
  {
    year: 1996,
    event: "Dior Saddle Bag Launch",
    x: 752,
    y: 247,
    impact: 85,
    description: "John Galliano introduces iconic Saddle Bag"
  },
  {
    year: 1997,
    event: "Princess Diana's Death",
    x: 755,
    y: 244,
    impact: 95,
    description: "Fashion world mourns, influence on mourning attire"
  },

  // Events near London (x: 728-735, y: 233-238)
  {
    year: 1998,
    event: "Y2K Aesthetic Emerges",
    x: 730,
    y: 235,
    impact: 90,
    description: "Futuristic metallics and tech-inspired fashion"
  },

  // Events near Milan (x: 768-775, y: 258-263)
  {
    year: 1998,
    event: "Gianni Versace Assassination",
    x: 770,
    y: 260,
    impact: 92,
    description: "Fashion world shocked, legacy continues"
  },

  // Events near Tokyo (x: 1248-1253, y: 278-283)
  {
    year: 1999,
    event: "Y2K Panic Fashion",
    x: 1250,
    y: 280,
    impact: 85,
    description: "Tech-wear and metallic fabrics dominate"
  },
  {
    year: 1999,
    event: "Logo Mania Peak",
    x: 1252,
    y: 282,
    impact: 98,
    description: "Designer logos reach saturation point"
  },
];
