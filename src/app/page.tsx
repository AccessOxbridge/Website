import Header from "@/components/sections/header";
import HeroSuperSUV from "@/components/sections/hero-super-suv";
import BrandPhilosophy from "@/components/sections/brand-philosophy";
import ModelCarousel from "@/components/sections/model-carousel";
import SplitShowcase from "@/components/sections/split-showcase";
import StoriesSection from "@/components/sections/stories-section";
import NewsSection from "@/components/sections/news-section";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Header />
      <HeroSuperSUV />
      <BrandPhilosophy />
      <ModelCarousel />
      <SplitShowcase />
      <StoriesSection />
      <NewsSection />
      <Footer />
    </main>
  );
}
