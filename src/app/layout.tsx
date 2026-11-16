import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dar Marrakech — Restaurant marocain",
    template: "%s | Dar Marrakech",
  },
  description:
    "Découvrez l'art de la cuisine marocaine dans une ambiance chaleureuse et raffinée. Une expérience culinaire inoubliable chez Dar Marrakech.",
  applicationName: "Dar Marrakech",
};

export const viewport: Viewport = {
  themeColor: "#160F0A",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
