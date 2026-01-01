"use client";

import {
  ArrowLeftIcon, ArrowRightIcon, Check, Play,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { homeConfig } from "@/configs/home.config";
import Image from "next/image";


export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = homeConfig.hero.slides;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-fit overflow-hidden">
      {/* HERO */}
      <div className="relative h-[75vh] flex-1 flex flex-col justify-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: .8, ease: "backInOut" }}
          >

            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
              >
                <div className="absolute inset-0 h-full w-full">
                  {slide.type === "video" ? (
                    <video className="h-full w-full object-cover" autoPlay loop muted playsInline src={slide.src} />
                  ) : (
                    <img className="h-full w-full object-cover" src={slide.src} alt={slide.headline} />
                  )}
                </div>

                <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-0 md:justify-center">
                  <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div className="max-w-4xl mt-16">
                      <h3 className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-white uppercase opacity-90">
                        {slide.subheading}
                      </h3>
                      <h2 className="mb-4 sm:mb-8 text-2xl sm:text-4xl font-semibold text-white md:text-5xl lg:text-[64px]">
                        {slide.headline}
                      </h2>
                      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                        {slide.buttons.map((btn, idx) => (
                          <a
                            key={idx}
                            href={btn.href}
                            className={`inline-flex min-w-[140px] sm:min-w-[160px] items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${btn.variant === "primary"
                              ? "bg-white text-black hover:bg-gray-200"
                              : "bg-[#2d2d2d]/90 text-white hover:bg-[#1f1f1f]"
                              }`}
                          >
                            {btn.label}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-center sm:justify-end gap-2 mt-12">
                      <button onClick={prevSlide} aria-label="Previous slide">
                        <ArrowLeftIcon className="size-10 rounded-full bg-white/50 p-2 hover:bg-white/70" />
                      </button>
                      <button onClick={nextSlide} aria-label="Next slide">
                        <ArrowRightIcon className="size-10 rounded-full bg-white/50 p-2 hover:bg-white/70" />
                      </button>
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-1">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-[2px] w-8 ${index === currentSlide ? "bg-white" : "bg-white/40"}`}
                      />
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative h-fit flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-0">
        {homeConfig.boxes.map((box, id) => {
          return (
            <a
              key={id}
              href={box.href}
              className={`
                group relative w-full sm:w-1/2 
                h-full 
                px-5 py-8 sm:p-12 lg:p-16
                flex flex-col gap-4 sm:gap-8 
                transition-all duration-500 text-center cursor-pointer
                bg-white hover:-translate-y-2
                border border-gray-100 
                shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] 
                hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)]
              `}
            >
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-primary group-hover:text-accent transition-colors">
                {box.title}
              </h2>
              <div className="flex items-center justify-center w-full gap-10">
                {box.images && box.images.map((img, imgId) => (
                  <Image 
                    className="transition-transform group-hover:scale-110 duration-500" 
                    key={imgId} 
                    src={img} 
                    alt="" 
                    width={160} 
                    height={160}
                  />
                ))}
              </div>
              <p className="text-base sm:text-xl text-left text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                {box.description}
              </p>
              <button className="bg-accent text-white w-fit px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider rounded-md mx-auto hover:bg-accent-foreground transition-colors duration-300">
                {box.button}
              </button>
            </a>
          );
        })}
      </div>
    </section>
  );
}
