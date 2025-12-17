"use client";

import {
  ArrowLeftIcon, ArrowRightIcon, Check, Play,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { homeConfig } from "@/configs/home.config";
import { getIcon } from "@/configs/icon-map";
import Stats from "./stats";


export default function HeroSuperSUV() {
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

                    <div className="hidden md:flex justify-end gap-2 mt-12">
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

      {/* STATS */}
      <Stats/>

      <div className="mx-auto  h-px w-full max-w-5xl bg-gray-200" />

      <SchoolLogosCarousel />
      <ExpertiseSection />
      <VideoTestimonials/>
    </section>
  );
}

export function SchoolLogosCarousel() {
  return (
    <section className="overflow-hidden py-12 sm:py-24">
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
        <button className="mt-4 sm:mt-6 bg-black px-6 py-3 text-sm sm:text-base text-white hover:bg-accent cursor-pointer">{homeConfig.schoolLogos.buttonText}</button>
      </motion.div>


      <div className="relative">
        <div className="flex w-max animate-marquee gap-16">
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


      <style jsx>{`
  @keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
  }
  .animate-marquee {
  animation: marquee 28s linear infinite;
  }
  `}</style>
    </section>
  );
}

export function ExpertiseSection() {
  return (
    <section className="relative bg-accent py-16 sm:py-28">
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-100px" }}
         variants={{
           hidden: {},
           visible: { transition: { staggerChildren: 0.15 } },
         }}
        className="flex flex-col items-center text-center px-4"
      >
        <motion.img
          src={homeConfig.expertise.logo.src}
          alt={homeConfig.expertise.logo.alt}
          width={homeConfig.expertise.logo.width}
          height={homeConfig.expertise.logo.height}
          className="w-20 sm:w-[120px]"
        />
        <motion.h1 className="text-center w-full sm:w-2/3 mx-auto text-xl mt-6 text-white sm:text-3xl tracking-tighter font-medium">
          {homeConfig.expertise.description}
        </motion.h1>
      </motion.div>

      {/* </div> */}
      {/* Divider */}
      <div className="mx-auto my-20 h-px w-full max-w-5xl bg-gray-200" />

      <div className="container mx-auto px-6 md:px-10 lg:px-12">

        {/* Grid */}
        <motion.div
          className="grid gap-16 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {homeConfig.expertise.items.map((item, idx) => {
            const IconComponent = getIcon(item.icon);
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#ffffff]">
                  <IconComponent className="h-6 w-6" />
                </div>

                <h3 className="mb-4 text-2xl font-bold tracking-tighter text-white">
                  {item.title}
                </h3>

              <p className="max-w-md text-base leading-relaxed text-white" dangerouslySetInnerHTML={{ __html: item.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}>
              </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Divider */}
        <div className="mx-auto mt-20 h-px w-full max-w-5xl bg-gray-200" />
      </div>
    </section>
  );
}

export function VideoTestimonials() {
  return (
    <section className="relative bg-[#1a1a1a] py-20">
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 px-4 sm:px-14">
          <a
            href="#"
            className="mt-4 md:mt-0 inline-block bg-accent hover:bg-accent-foreground text-white text-sm sm:text-[16px] font-semibold px-6 sm:px-8 py-3 sm:py-4 transition-colors duration-300 ease-in-out"
          >
            {homeConfig.testimonialsSection.buttonText}
          </a>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-normal leading-[1.2] tracking-tighter text-white">
            {homeConfig.testimonialsSection.title}
          </h2>
        </div>
      <Swiper
        modules={[Navigation, Pagination]}
        centeredSlides
        slidesPerView={3}
        spaceBetween={32}
        loop
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          768: { slidesPerView: 3 },
        }}
        className="px-10"
      >
        {homeConfig.testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            {({ isActive } : { isActive: boolean }) => (
              <div
                className={`transition-all h-full pb-12 duration-500 ${
                  isActive
                    ? "scale-105 opacity-100"
                    : "scale-90 opacity-40"
                }`}
              >
                {/* Video Card */}
                <div className="relative aspect-9/16 overflow-hidden rounded-2xl scale-[0.8]">
                  <iframe
                    src={`${t.video}?badge=0&autopause=0`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    className="absolute inset-0 h-full w-full"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-black/60 p-4">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Active text only */}
                {isActive && (
                  <div className="text-center -mt-12">
                    <span className="inline-block rounded bg-lime-400 px-4 py-1 text-lg font-semibold text-black">
                      {t.name}
                    </span>
                    <p className="mt-3 text-sm text-white/80">
                      {t.description}
                    </p>
                  </div>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}