export interface CulturalEvent {
  year: number;
  event: string;
  x: number; // Direct SVG x coordinate for 1200x600 Mercator viewBox
  y: number; // Direct SVG y coordinate for 1200x600 Mercator viewBox
  impact: number; // 1-100 scale
  description: string;
}

export const culturalImpactData: CulturalEvent[] = [
  // Events near New York - East Coast USA (x: 340, y: 205-215)
  {
    year: 1995,
    event: "Rise of Supermodels",
    x: 342,
    y: 208,
    impact: 75,
    description: "Kate Moss, Naomi Campbell, Cindy Crawford dominate fashion"
  },
  {
    year: 1995,
    event: "Grunge to Minimalism",
    x: 338,
    y: 212,
    impact: 70,
    description: "Marc Jacobs brings grunge to luxury fashion"
  },
  {
    year: 1997,
    event: "Alexander McQueen's Rise",
    x: 340,
    y: 210,
    impact: 85,
    description: "McQueen becomes Givenchy's creative director"
  },

  // Events near Paris (x: 558-565, y: 183-188)
  {
    year: 1996,
    event: "Gucci Revival",
    x: 560,
    y: 185,
    impact: 80,
    description: "Tom Ford transforms Gucci with sexy minimalism"
  },
  {
    year: 1996,
    event: "Dior Saddle Bag Launch",
    x: 562,
    y: 187,
    impact: 85,
    description: "John Galliano introduces iconic Saddle Bag"
  },
  {
    year: 1997,
    event: "Princess Diana's Death",
    x: 565,
    y: 184,
    impact: 95,
    description: "Fashion world mourns, influence on mourning attire"
  },

  // Events near London (x: 543-548, y: 173-178)
  {
    year: 1998,
    event: "Y2K Aesthetic Emerges",
    x: 545,
    y: 175,
    impact: 90,
    description: "Futuristic metallics and tech-inspired fashion"
  },

  // Events near Milan (x: 573-578, y: 193-198)
  {
    year: 1998,
    event: "Gianni Versace Assassination",
    x: 575,
    y: 195,
    impact: 92,
    description: "Fashion world shocked, legacy continues"
  },

  // Events near Tokyo (x: 938-942, y: 208-212)
  {
    year: 1999,
    event: "Y2K Panic Fashion",
    x: 940,
    y: 210,
    impact: 85,
    description: "Tech-wear and metallic fabrics dominate"
  },
  {
    year: 1999,
    event: "Logo Mania Peak",
    x: 942,
    y: 212,
    impact: 98,
    description: "Designer logos reach saturation point"
  },
];
