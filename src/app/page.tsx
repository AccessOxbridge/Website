import Header from "@/components/sections/header";
import HeroSuperSUV from "@/components/sections/hero-super-suv";
import BrandPhilosophy from "@/components/sections/brand-philosophy";
import ModelCarousel from "@/components/sections/model-carousel";
import SplitShowcase from "@/components/sections/split-showcase";
import StoriesSection from "@/components/sections/stories-section";
import NewsSection from "@/components/sections/news-section";
import Footer from "@/components/sections/footer";
import ScrollIntentWebinar from "@/components/dialogs/ScrollIntentWebinar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSuperSUV />
      <StoriesSection />
      {/* 
      <NewsSection /> 
      <SplitShowcase />
      <BrandPhilosophy />
      <ModelCarousel />
      */}
      <Footer />
      <ScrollIntentWebinar/>
    </main>
  );
}
