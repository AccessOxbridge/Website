"use client";

import { homeConfig } from "@/configs/home.config";
import { motion } from "framer-motion";

export default function UniversitiesCarousel() {
    return (
      <section className="overflow-hidden py-12 sm:py-24 bg-rich-beige-accent">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16 text-center px-4"
        >
          <h2 className="mx-auto max-w-3xl text-2xl sm:text-4xl font-semibold tracking-tighter text-black">
            {homeConfig.schoolLogos.title}
          </h2>
          <button className="mt-4 sm:mt-6 bg-black px-6 py-3 text-sm sm:text-base text-white hover:bg-black/80 cursor-pointer">{homeConfig.schoolLogos.buttonText}</button>
        </motion.div>
  
  
        <div className="relative">
          <div className="flex w-max gap-16" style={{ animation: 'marquee 28s linear infinite' }}>
            {[...homeConfig.logos, ...homeConfig.logos].map((logo, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.5 }}
                className="flex h-24 items-center opacity-70"
              >
                <img src={logo} alt="School logo" className="h-full object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }