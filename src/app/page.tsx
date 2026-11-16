import { AboutPreview } from "@/components/home/AboutPreview";
import { FeaturedMenu } from "@/components/home/FeaturedMenu";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
import { ReservationCTA } from "@/components/home/ReservationCTA";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <FeaturedMenu />
      <AboutPreview />
      <GalleryPreview />
      <Testimonials />
      <ReservationCTA />
    </>
  );
}
