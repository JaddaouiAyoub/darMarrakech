import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileReservationBar } from "@/components/layout/MobileReservationBar";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { Toaster } from "@/components/ui/Toaster";
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
      <body className="flex min-h-full flex-col">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ink"
        >
          Aller au contenu
        </a>
        <MotionProvider>
          <Header />
          <main id="contenu" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
          <MobileReservationBar />
          <Toaster />
        </MotionProvider>
      </body>
    </html>
  );
}
