import Header from "@/components/sections/header";
import Hero from "@/components/home/hero";
import Footer from "@/components/sections/footer";
import ScrollIntentWebinar from "@/components/dialogs/ScrollIntentWebinar";
import ApproachCards from "@/components/sections/cards";
import Stats from "@/components/sections/stats";
import UniversitiesCarousel from "@/components/home/universities-carousel";
import ExpertiseSection from "@/components/home/expertise";
import FAQs from "@/components/home/faqs";
import { GetInTouch } from "@/components/home/get-in-touch";
import { Globe } from "@/components/ui/globe";
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
      <Stats/>
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

      <LazyLoad>
        <Globe/>
      </LazyLoad>

      <ScrollIntentWebinar/>
    </main>
  );
}
