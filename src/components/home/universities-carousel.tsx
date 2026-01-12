"use client";

import { homeConfig } from "@/configs/home.config";
import { motion } from "framer-motion";
import { usePerformance } from "@/hooks/use-performance";
import Image from "next/image";
import { ResultsSection } from "./results-section";

export default function UniversitiesCarousel() {
    const { shouldReduceMotion } = usePerformance();

    return (
      <section className="overflow-hidden py-12 sm:py-24 bg-white">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={shouldReduceMotion ? {} : { duration: 0.8 }}
          className="mb-10 sm:mb-16 text-center px-4"
        >
          <h2 className="mx-auto max-w-3xl text-2xl sm:text-4xl font-semibold tracking-tighter text-black">
            {homeConfig.schoolLogos.title}
          </h2>
          {/* <button className="mt-4 sm:mt-6 bg-black px-6 py-3 text-sm sm:text-base text-white hover:bg-black/80 cursor-pointer">{homeConfig.schoolLogos.buttonText}</button> */}
        </motion.div>
        
        <div className="relative">
          <div className="flex w-max gap-16" style={{ animation: 'marquee 28s linear infinite' }}>
            {[...homeConfig.logos, ...homeConfig.logos].map((logo, idx) => (
              <motion.div
                key={idx}
                // whileHover={shouldReduceMotion ? {} : { scale: 1.5 }}
                className="flex h-24 items-center transition-colors"
              >
                <Image
                  src={logo}
                  alt="School logo"
                  width={96}
                  height={96}
                  className="h-full w-auto object-contain"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+Cjwvc3ZnPg=="
                />
              </motion.div>
            ))}
          </div>
        </div>

        <ResultsSection/>


      </section>
    );
  }