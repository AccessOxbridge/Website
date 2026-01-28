import Hero from "@/components/home/hero";
import ScrollIntentWebinar from "@/components/dialogs/ScrollIntentWebinar";
import UniversitiesCarousel from "@/components/home/universities-carousel";
import FAQs from "@/components/home/faqs";
import { LazyLoad } from "@/components/ui/lazy-load";
import dynamic from "next/dynamic";

// Lazy load heavy below-the-fold components
const LazyVideoTestimonials = dynamic(() => import("@/components/home/testimonials").then(mod => ({ default: mod.VideoTestimonials })), {
  loading: () => <div className="h-96 flex items-center justify-center bg-white">Loading testimonials...</div>
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="mx-auto  h-px w-full max-w-5xl bg-gray-200" />
      <UniversitiesCarousel/>
      {/* <Stats/> */}
      {/* <GetInTouch /> */}
      {/* <ExpertiseSection /> */}

      {/* Lazy load heavy components */}
      <LazyLoad>
        <LazyVideoTestimonials/>
      </LazyLoad>

      {/* <LazyLoad>
        <StoriesSection />
      </LazyLoad> */}

      <FAQs />

      {/* <LazyLoad>
        <NewsSection/>
      </LazyLoad> */}

      {/* <ScrollIntentWebinar/> */}
    </main>
  );
}
