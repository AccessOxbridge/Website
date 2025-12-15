"use client";

import React, { useState, useEffect } from "react";

export default function HeroSuperSUV() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      subheading: "TOP GEAR AWARD",
      headline: "Super SUV of the Year 2026",
      buttons: [
        { label: "Configure", href: "#", variant: "primary" },
        { label: "Watch Now", href: "#", variant: "secondary" }
      ],
      type: "gradient",
      bgClass: "bg-gradient-to-br from-[#0a1628] via-[#1e3a5f] to-[#0f172a]"
    },
    {
      id: 2,
      subheading: "ICON. DRIVEN.",
      headline: "DB12 S",
      buttons: [
        { label: "Explore", href: "#", variant: "primary" },
        { label: "Configure", href: "#", variant: "secondary" }
      ],
      type: "video",
      src: "https://www.astonmartin.com/-/media/models---db12-s/final-images/heros/home_page_16x9_edit_3.mp4?rev=a387b4fe1ca348fc89e2ffbefc061406"
    },
    {
      id: 3,
      subheading: "ASTON MARTIN",
      headline: "BERO Collection",
      buttons: [
        { label: "Discover", href: "#", variant: "primary" },
        { label: "Learn More", href: "#", variant: "secondary" }
      ],
      type: "image",
      src: "https://www.astonmartin.com/-/media/brand-stories/bero/bero-new-hero.jpg?mw=1920&rev=c7592cae29df4ba2b3c3391749c2e0bc&extension=webp&hash=9FFFD68CD5FE82C0021018589EA03AC9"
    },
    {
      id: 4,
      subheading: "RECOGNITION",
      headline: "Top Gear Award 2026",
      buttons: [
        { label: "View Award", href: "#", variant: "primary" },
        { label: "Read More", href: "#", variant: "secondary" }
      ],
      type: "image",
      src: "https://www.astonmartin.com/-/media/top-gear-award-2026/tga-desk-still-new.jpg?mw=1920&rev=a7de10be96464e8a8b2cbc28245eab17&extension=webp&hash=82C03D910BC260F53351CD1AFFA2835B"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#1a1a1a] text-white">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 h-full w-full">
            {slide.type === "video" && slide.src ? (
              <video
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src={slide.src}
              />
            ) : slide.type === "image" && slide.src ? (
              <img
                className="h-full w-full object-cover"
                src={slide.src}
                alt={slide.headline}
              />
            ) : (
              <div className={`h-full w-full ${slide.bgClass} relative`}>
                <div className="absolute inset-0 opacity-30 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%,rgba(255,255,255,0.05)_100%)] bg-[length:24px_24px]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end pb-24 sm:pb-32">
            <div className="container mx-auto px-6 md:px-10 lg:px-12">
              <div className="max-w-4xl">
                {slide.subheading && (
                  <h3 className="mb-3 text-sm font-semibold tracking-[0.15em] text-white uppercase opacity-90">
                    {slide.subheading}
                  </h3>
                )}
                <h2 className="mb-8 text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]">
                  {slide.headline}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {slide.buttons.map((btn, idx) => (
                    <a
                      key={idx}
                      href={btn.href}
                      className={`
                        inline-flex min-w-[160px] items-center justify-center px-8 py-3.5 text-sm font-bold uppercase tracking-wider transition-all duration-300
                        ${
                          btn.variant === "primary"
                            ? "bg-white text-black hover:bg-gray-200"
                            : "bg-[#2d2d2d]/90 text-white backdrop-blur-sm hover:bg-[#1f1f1f]"
                        }
                      `}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-4 text-white/70 transition-colors hover:text-white md:left-8"
        aria-label="Previous slide"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
          strokeLinejoin="miter"
          className="h-12 w-12 md:h-16 md:w-16"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-4 text-white/70 transition-colors hover:text-white md:right-8"
        aria-label="Next slide"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
          strokeLinejoin="miter"
          className="h-12 w-12 md:h-16 md:w-16"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-[2px] w-8 transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}