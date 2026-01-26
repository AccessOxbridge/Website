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
  const [scrollOpacity, setScrollOpacity] = useState(0.7);
  const slides = homeConfig.hero.slides;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Start fading when scrolled 50px, fully faded at 200px
      const opacity = Math.max(0, 0.7 - (scrollY / 200));
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-fit overflow-hidden">
      {/* HERO */}
      <div className="relative h-[75vh] flex-1 flex flex-col justify-center">
        <Image
          src='/logo.webp'
          alt="Access Oxbridge"
          width={360}
          height={360}
          className="hidden md:block absolute top-[30%] right-[14%] w-48 h-48 z-1001 opacity-70 transition-colors duration-300"
          style={{ opacity: scrollOpacity }}
        />
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
                        {slide.id === 2 ? (
                          <>
                            Securing Futures:<br />
                            Bespoke UCAS Support
                          </>
                        ) : slide.id === 3 ? <>Trusted for Oxford,<br/> Cambridge & G5 Excellence</> : (
                          slide.headline
                        )}
                      </h2>
                      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                        {slide.buttons.map((btn, idx) => (
                          <a
                            key={idx}
                            href={btn.href}
                            className={`inline-flex min-w-[140px] sm:min-w-[160px] items-center justify-center px-6 sm:px-8 py-3 
                              sm:py-3.5 text-base font-bold transition-all duration-300 
                              rounded-md  whitespace-nowrap ${btn.variant === "primary"
                                ? "bg-accent text-white hover:bg-accent/90"
                                : "bg-white text-black hover:bg-gray-200"
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
        {/* UK University Admissions Box */}
        <a
          href="/services"
          className={`
            group relative w-full sm:w-1/2
            h-120
            px-5 py-8
            flex flex-col gap-4 sm:gap-8
            transition-all duration-500 text-center cursor-pointer
            bg-white hover:-translate-y-2
            border border-gray-100
            shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]
            hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)]
          `}
        >
          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-primary group-hover:text-accent 
          transition-colors h-[5%]">
            UK University Admissions
          </h2>
          <div className="flex flex-col items-center justify-center w-full gap-4 h-[30%] scale-60 sm:scale-100">
            <div className="flex items-center justify-center gap-6">
              <Image
                className="transition-transform group-hover:scale-110 duration-200 w-24 h-full 
                object-cover"
                src="/imperial.png"
                alt="Scientia"
                width={90}
                height={90}
              />
              <Image
                className="transition-transform group-hover:scale-110 duration-200 w-15 h-full object-contain"
                src="/lse.png"
                alt="LSE"
                width={90}
                height={90}
              />
              <Image
                className="transition-transform group-hover:scale-110 duration-200 w-22 h-full object-contain"
                src="/ucl.png"
                alt="UCL"
                width={90}
                height={90}
              />
               <Image
                className="transition-transform group-hover:scale-110 duration-200 w-16 h-full object-contain"
                src="/edinburgh.png"
                alt="Edinburgh"
                width={90}
                height={90}
              />
              <Image
                className="transition-transform group-hover:scale-110 duration-200 w-18 h-full object-contain"
                src="/kings.png"
                alt="Kings"
                width={90}
                height={90}
              />
            </div>
          </div>
          <p className="text-base text-left text-gray-500 leading-relaxed group-hover:text-gray-700 
          transition-colors h-[40%]">
            Applying to UK universities is exciting but complex, and small mistakes can have a big impact on your results. 
            From choosing the right courses to writing a strong personal statement and meeting UCAS deadlines, the process rewards strategy as much as academic ability. 
            Many students find that clear guidance and a well-structured approach, supported by expert insight, provide the essential foundation for achieving success.
          </p>
          <button className="bg-accent text-white px-6 sm:px-8 py-2 text-sm justify-center
          font-bold uppercase tracking-wider rounded-md mx-auto flex items-center gap-2 mt-14 sm:mt-0
          hover:bg-accent-foreground transition-colors duration-300 cursor-pointer h-12 w-68">
            Find Out More
            <ArrowRightIcon className="size-4" />
          </button>
        </a>

        {/* Oxbridge Admissions Box */}
        <a
          href="/consultation"
          className={`
            group relative w-full sm:w-1/2
            h-120
            px-5 py-8
            flex flex-col gap-4 sm:gap-8
            transition-all duration-500 text-center cursor-pointer
            bg-white hover:-translate-y-2
            border border-gray-100
            shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]
            hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)]
          `}
        >
          <h2 className="text-base sm:text-lg lg:text-xl font-bold text-primary group-hover:text-accent 
          transition-colors h-[10%]">
            Oxbridge Admissions
          </h2>
          <div className="flex items-center justify-center w-full gap-6 h-[30%] scale-90 sm:scale-100">
            <Image
              className="transition-transform group-hover:scale-110 duration-200 w-40 h-full object-contain"
              src="/cambridge.png"
              alt="Cambridge"
              width={90}
              height={90}
            />
            <Image
              className="transition-transform group-hover:scale-110 duration-200 w-22 h-full object-contain"
              src="/oxford.png"
              alt="Oxford"
              width={90}
              height={90}
            />
          </div>
          <p className="text-base text-left text-gray-500 leading-relaxed group-hover:text-gray-700 
          transition-colors h-[40%]">
            Oxbridge is challenging, but with the right guidance and support, you can secure your place.
            Our Oxbridge Admissions service provides expert guidance, personalized mock interviews, and comprehensive admissions test tuition. 
            We help you prepare for interviews, improve your test scores, and write a strong personal statement. 
            With our support, you can increase your chances of success by 400%.
          </p>
          <button className="bg-accent text-white px-6 sm:px-8 py-2 text-sm justify-center
          font-bold uppercase tracking-wider rounded-md mx-auto flex items-center gap-2 mt-14 sm:mt-0
          hover:bg-accent-foreground whitespace-nowrap transition-colors duration-300 cursor-pointer h-12 w-68">
            Speak to a Specialist
            <ArrowRightIcon className="size-4" />
          </button>
        </a>
      </div>
    </section>
  );
}
