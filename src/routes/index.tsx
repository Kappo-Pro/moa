import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { AmbientAudio } from "@/components/AmbientAudio";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhySection } from "@/components/sections/WhySection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { SponsorshipSection } from "@/components/sections/SponsorshipSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mall of America — An Interactive Sales Experience" },
      {
        name: "description",
        content:
          "5.6 million square feet. 40 million guests a year. A cinematic invitation for retail, luxury, sponsorship and event partners to join the Mall of America.",
      },
      { property: "og:title", content: "Mall of America — Interactive Sales Experience" },
      {
        property: "og:description",
        content:
          "Where flagships become icons. Discover leasing, sponsorship, and event partnerships at the Western Hemisphere's largest retail destination.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-bg-deep text-foreground antialiased">
      <SmoothScroll />
      <Nav />
      <Hero />
      <WhySection />
      <ShowcaseSection />
      <SponsorshipSection />
      <Footer />
      <AmbientAudio />
    </main>
  );
}
