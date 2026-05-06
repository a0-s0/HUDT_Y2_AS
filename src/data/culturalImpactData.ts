export interface CulturalEvent {
  year: number;
  event: string;
  lat: number;
  lng: number;
  impact: number; // 1-100 scale
  description: string;
}

export const culturalImpactData: CulturalEvent[] = [
  {
    year: 1995,
    event: "Rise of Supermodels",
    lat: 51.5074,
    lng: -0.1278,
    impact: 75,
    description: "Kate Moss, Naomi Campbell, Cindy Crawford dominate fashion"
  },
  {
    year: 1995,
    event: "Grunge to Minimalism",
    lat: 47.6062,
    lng: -122.3321,
    impact: 70,
    description: "Marc Jacobs brings grunge to luxury fashion"
  },
  {
    year: 1996,
    event: "Gucci Revival",
    lat: 43.7696,
    lng: 11.2558,
    impact: 80,
    description: "Tom Ford transforms Gucci with sexy minimalism"
  },
  {
    year: 1996,
    event: "Dior Saddle Bag Launch",
    lat: 48.8566,
    lng: 2.3522,
    impact: 85,
    description: "John Galliano introduces iconic Saddle Bag"
  },
  {
    year: 1997,
    event: "Princess Diana's Death",
    lat: 48.8566,
    lng: 2.3522,
    impact: 95,
    description: "Fashion world mourns, influence on mourning attire"
  },
  {
    year: 1997,
    event: "Alexander McQueen's Rise",
    lat: 51.5074,
    lng: -0.1278,
    impact: 88,
    description: "McQueen becomes Givenchy's creative director"
  },
  {
    year: 1998,
    event: "Y2K Aesthetic Emerges",
    lat: 34.0522,
    lng: -118.2437,
    impact: 90,
    description: "Futuristic metallics and tech-inspired fashion"
  },
  {
    year: 1998,
    event: "Gianni Versace Assassination",
    lat: 40.8518,
    lng: 14.2681,
    impact: 92,
    description: "Fashion world shocked, legacy continues"
  },
  {
    year: 1999,
    event: "Y2K Panic Fashion",
    lat: 40.7128,
    lng: -74.0060,
    impact: 85,
    description: "Tech-wear and metallic fabrics dominate"
  },
  {
    year: 1999,
    event: "Logo Mania Peak",
    lat: 48.8566,
    lng: 2.3522,
    impact: 98,
    description: "Designer logos reach saturation point"
  }
];
