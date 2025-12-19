"use client";

import { homeConfig } from "@/configs/home.config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Play, ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

export function VideoTestimonials() {
    const swiperRef = useRef<SwiperType | null>(null);
    return (
        <section id="testimonials" className="relative bg-rich-beige-accent py-12 sm:py-24 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-10 sm:mb-16 text-center px-4"
            >
                <h2 className="mx-auto max-w-3xl text-2xl sm:text-4xl font-semibold tracking-tighter text-black mb-4 sm:mb-6">
                    {homeConfig.testimonialsSection.title}
                </h2>
                <a
                    href="#"
                    className="inline-block bg-black hover:bg-accent-foreground text-white text-sm sm:text-base font-bold px-6 py-3 uppercase tracking-wider transition-all duration-300"
                >
                    {homeConfig.testimonialsSection.buttonText}
                </a>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="container mx-auto px-4 sm:px-6 relative"
            >
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    spaceBetween={24}
                    loop
                    navigation={{
                        nextEl: null,
                        prevEl: null,
                    }}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="px-4 pb-16"
                >
                    {homeConfig.testimonials.map((t, i) => (
                        <SwiperSlide key={i} className="pb-8">
                            <motion.div
                                className="h-full"
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Video Card */}
                                <div className="relative aspect-9/16 overflow-hidden rounded-2xl bg-black/10">
                                    <iframe
                                        src={`${t.video}?badge=0&autopause=0`}
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        className="absolute inset-0 h-full w-full"
                                    />
                                    {/* Play overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300">
                                        <div className="rounded-full bg-rich-amber-accent p-4 shadow-lg">
                                            <Play className="h-8 w-8 text-white" fill="white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Testimonial info */}
                                <div className="text-center mt-6">
                                    <h3 className="text-xl font-semibold text-black mb-2">
                                        {t.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {t.description}
                                    </p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-1 z-20">
                    <button
                        onClick={() => {
                            if (swiperRef.current) {
                                swiperRef.current.slidePrev();
                            }
                        }}
                        className="rounded-full bg-black/30 hover:bg-black/50 p-3 transition-colors duration-300 backdrop-blur-sm border border-black/10"
                        aria-label="Previous testimonial"
                    >
                        <ArrowLeftIcon className="h-5 w-5 text-black" />
                    </button>
                    <button
                        onClick={() => {
                            if (swiperRef.current) {
                                swiperRef.current.slideNext();
                            }
                        }}
                        className="rounded-full bg-black/30 hover:bg-black/50 p-3 transition-colors duration-300 backdrop-blur-sm border border-black/10"
                        aria-label="Next testimonial"
                    >
                        <ArrowRightIcon className="h-5 w-5 text-black" />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}