"use client";

import { homeConfig } from "@/configs/home.config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Play } from "lucide-react";

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
                        {({ isActive }: { isActive: boolean }) => (
                            <div
                                className={`transition-all h-full pb-12 duration-500 ${isActive
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