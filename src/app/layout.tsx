import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THE FASHION PARADIGM SHIFT",
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
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-offwhite text-deep-brown">
        {children}
      </body>
    </html>
  );
}
