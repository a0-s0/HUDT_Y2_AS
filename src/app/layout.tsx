import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Paradigm Shift: Fashion 1995-1999",
  description:
    "An interactive exploration of fashion culture and history during the pivotal transition from mid-90s minimalism to Y2K futurism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-offwhite text-charcoal">
        {children}
      </body>
    </html>
  );
}
