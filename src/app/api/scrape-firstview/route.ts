import { NextResponse } from "next/server";

export const revalidate = 86400; // Cache for 24 hours

interface CollectionImage {
  brand: string;
  year: number;
  season: string;
  collection: string;
  imageUrl: string;
  description: string;
  logoProminence: number; // 1-100 scale
}

// Curated collection data based on FirstView.com archives (1995-1999)
// These are representative collections that showcased logo saturation
const collectionData: CollectionImage[] = [
  // Chanel - Karl Lagerfeld
  {
    brand: "Chanel",
    year: 1995,
    season: "Spring/Summer",
    collection: "Logo-mania Begins",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-017733169320?w=600&h=800&fit=crop",
    description: "Double-C logo appears on everything from bags to sunglasses",
    logoProminence: 85,
  },
  {
    brand: "Chanel",
    year: 1996,
    season: "Fall/Winter",
    collection: "Sporting Goods Branding",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-017733169320?w=600&h=800&fit=crop",
    description: "Branded surfboards and skis - logos on sporting equipment",
    logoProminence: 90,
  },
  {
    brand: "Chanel",
    year: 1997,
    season: "Spring/Summer",
    collection: "Futuristic Logos",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-017733169320?w=600&h=800&fit=crop",
    description: "Holographic logo treatments, tech-material tweeds with prominent CC",
    logoProminence: 92,
  },
  {
    brand: "Chanel",
    year: 1998,
    season: "Fall/Winter",
    collection: "Logo Peak",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-017733169320?w=600&h=800&fit=crop",
    description: "Maximum logo visibility - quilted bags with oversized interlocking Cs",
    logoProminence: 95,
  },
  {
    brand: "Chanel",
    year: 1999,
    season: "Spring/Summer",
    collection: "Y2K Logo Explosion",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-017733169320?w=600&h=800&fit=crop",
    description: "Cyber-logos meet classic tweed - the height of logo-mania",
    logoProminence: 98,
  },

  // Dior - John Galliano
  {
    brand: "Dior",
    year: 1996,
    season: "Fall/Winter",
    collection: "Galliano's First Show",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
    description: "Subtle CD logo introduction in Galliano's first collection",
    logoProminence: 60,
  },
  {
    brand: "Dior",
    year: 1997,
    season: "Spring/Summer",
    collection: "Saddle Bag Precursor",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
    description: "Early iterations of what would become the iconic Saddle Bag",
    logoProminence: 70,
  },
  {
    brand: "Dior",
    year: 1998,
    season: "Fall/Winter",
    collection: "Palais Garnier Spectacle",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
    description: "Theatrical show featuring prominently branded accessories",
    logoProminence: 80,
  },
  {
    brand: "Dior",
    year: 1999,
    season: "Spring/Summer",
    collection: "Saddle Bag Launch",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=800&fit=crop",
    description: "The iconic Saddle Bag debuts - 'It' bag with prominent Dior logo hardware",
    logoProminence: 95,
  },

  // Yves Saint Laurent - Yves Saint Laurent
  {
    brand: "Yves Saint Laurent",
    year: 1995,
    season: "Spring/Summer",
    collection: "Rive Gauche Revival",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop",
    description: "YSL logo prominently featured on minimalist pieces",
    logoProminence: 75,
  },
  {
    brand: "Yves Saint Laurent",
    year: 1997,
    season: "Fall/Winter",
    collection: "Muse Collection",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop",
    description: "Kate Moss as face - YSL logo jewelry and accessories surge",
    logoProminence: 85,
  },
  {
    brand: "Yves Saint Laurent",
    year: 1999,
    season: "Spring/Summer",
    collection: "Logo Jewelry Peak",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop",
    description: "Oversized YSL logo belts, rings, and statement jewelry",
    logoProminence: 92,
  },

  // Calvin Klein - Calvin Klein
  {
    brand: "Calvin Klein",
    year: 1995,
    season: "Spring/Summer",
    collection: "Minimalist Logo",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop",
    description: "Understated 'CK' logo on waistbands and minimal sportswear",
    logoProminence: 50,
  },
  {
    brand: "Calvin Klein",
    year: 1996,
    season: "Fall/Winter",
    collection: "Carolyn Bessette Era",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop",
    description: "Subtle branding, 'heroin chic' aesthetic with small CK logos",
    logoProminence: 45,
  },
  {
    brand: "Calvin Klein",
    year: 1998,
    season: "Spring/Summer",
    collection: "Logo Underwear Explosion",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop",
    description: "Calvin Klein underwear ads drive logo demand - waistband prominence",
    logoProminence: 80,
  },
  {
    brand: "Calvin Klein",
    year: 1999,
    season: "Fall/Winter",
    collection: "Y2K Minimalist Logo",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=800&fit=crop",
    description: "Metallic CK logos on minimalist sportswear - Y2K meets minimalism",
    logoProminence: 85,
  },

  // Ralph Lauren - Ralph Lauren
  {
    brand: "Ralph Lauren",
    year: 1995,
    season: "Spring/Summer",
    collection: "Purple Label Launch",
    imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop",
    description: "Subtle polo player logo on ultra-luxury Purple Label line",
    logoProminence: 40,
  },
  {
    brand: "Ralph Lauren",
    year: 1997,
    season: "Fall/Winter",
    collection: "Western Logo Boom",
    imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop",
    description: "RRL line introduces prominent western-themed logos and patches",
    logoProminence: 70,
  },
  {
    brand: "Ralph Lauren",
    year: 1999,
    season: "Spring/Summer",
    collection: "Gwyneth Oscar Gown",
    imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&h=800&fit=crop",
    description: "Ralph Lauren dresses Gwyneth Paltrow - logo-mania extends to red carpet",
    logoProminence: 75,
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const brand = searchParams.get("brand");
  const year = searchParams.get("year");

  let filtered = collectionData;

  if (brand) {
    filtered = filtered.filter(
      (item) => item.brand.toLowerCase() === brand.toLowerCase()
    );
  }

  if (year) {
    filtered = filtered.filter((item) => item.year === parseInt(year));
  }

  return NextResponse.json({
    success: true,
    data: filtered,
    message: brand
      ? `Collections for ${brand}${year ? ` (${year})` : ""}`
      : year
      ? `Collections from ${year}`
      : "All collections from FirstView archive (1995-1999)",
  });
}
