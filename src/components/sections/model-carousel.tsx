"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const models = [
  { id: 1, label: "ICON. DRIVEN.", name: "DB12 S" },
  { id: 2, label: "PURE POWER.", name: "Vantage" },
  { id: 3, label: "SUPREME GT.", name: "Vanquish" },
];

export default function ModelCarousel() {
  const [currentModel, setCurrentModel] = useState(0);

  const nextModel = () => {
    setCurrentModel((prev) => (prev + 1) % models.length);
  };

  const prevModel = () => {
    setCurrentModel((prev) => (prev - 1 + models.length) % models.length);
  };

  const model = models[currentModel];

  return (
    <section className="relative w-full h-screen min-h-[600px] bg-[#0f0f0f] text-white overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-12 h-12 relative animate-spin">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/icons/spinner-1.png"
            alt="Loading content"
            width={48}
            height={48}
            className="opacity-80"
          />
        </div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center mt-24 sm:mt-0 w-full max-w-[1440px] px-4 md:px-10">
        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.2em] md:tracking-[0.25em] mb-2 text-white/90 uppercase font-sans">
          {model.label}
        </span>

        <div className="flex items-center justify-center gap-6 md:gap-12 lg:gap-16 w-full mb-8 md:mb-10">
          <button 
            type="button"
            onClick={prevModel}
            className="group p-2 md:p-4 opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none"
            aria-label="Previous model"
          >
            <svg 
              width="45" 
              height="14" 
              viewBox="0 0 45 14" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-[45px] stroke-white"
            >
              <path 
                d="M44 7L1 7M1 7L7 1M1 7L7 13" 
                strokeWidth="1" 
                strokeLinecap="square"
                className="transition-transform duration-300 group-hover:-translate-x-1" 
              />
            </svg>
          </button>

          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-normal leading-tight text-white text-center tracking-tight">
            {model.name}
          </h2>

          <button 
            type="button"
            onClick={nextModel}
            className="group p-2 md:p-4 opacity-70 hover:opacity-100 transition-opacity duration-300 focus:outline-none"
            aria-label="Next model"
          >
            <svg 
              width="45" 
              height="14" 
              viewBox="0 0 45 14" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 md:w-[45px] stroke-white"
            >
              <path 
                d="M1 7H44M44 7L38 1M44 7L38 13" 
                strokeWidth="1" 
                strokeLinecap="square"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-row items-center gap-4">
          <Link 
            href="#"
            className="inline-flex items-center justify-center min-w-[120px] md:min-w-[140px] px-6 py-3.5 bg-white text-black font-semibold text-[14px] md:text-[15px] leading-tight hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 ease-in-out"
          >
            Explore
          </Link>
          
          <a
            href="#"
            className="inline-flex items-center justify-center min-w-[120px] md:min-w-[140px] px-6 py-3.5 bg-[#2d2d2d] text-white font-semibold text-[14px] md:text-[15px] leading-tight hover:bg-[#3d3d3d] transition-all duration-300 ease-in-out"
          >
            Configure
          </a>
        </div>
      </div>
    </section>
  );
}
