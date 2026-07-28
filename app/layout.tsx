import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Great_Vibes,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Chá de Cozinha | Geovanna & Samuel",
  description: "Convite para o Chá de Cozinha de Geovanna & Samuel 💕",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${greatVibes.variable}
        ${cormorant.variable}
        h-full
        scroll-smooth
      `}
    >
      <body className="min-h-full bg-rose-50 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}