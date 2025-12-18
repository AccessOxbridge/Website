import Header from "@/components/sections/header";
import HeroSuperSUV from "@/components/home/hero";
// import SplitShowcase from "@/components/sections/split-showcase";
import StoriesSection from "@/components/sections/stories-section";
import NewsSection from "@/components/sections/news-section";
import Footer from "@/components/sections/footer";
import ScrollIntentWebinar from "@/components/dialogs/ScrollIntentWebinar";
import ApproachCards from "@/components/sections/cards";
import Stats from "@/components/sections/stats";
import UniversitiesCarousel from "@/components/home/universities-carousel";
import ExpertiseSection from "@/components/home/expertise";
import { VideoTestimonials } from "@/components/home/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSuperSUV />
      <div className="mx-auto  h-px w-full max-w-5xl bg-gray-200" />
      <UniversitiesCarousel/>
      <Stats/>
      <ExpertiseSection />
      <VideoTestimonials/>
      <StoriesSection />
      <NewsSection/>
      <Footer />
      <ScrollIntentWebinar/>
    </main>
  );
}
