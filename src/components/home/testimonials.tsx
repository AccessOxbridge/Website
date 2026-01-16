"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { motion } from "framer-motion";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";

// Quote testimonial data
const quoteTestimonials = [
    {
        quote: "Access Oxbridge helped us develop a framework for positioning candidates for sustained efficiency and cost benefit.",
        role: "Headmaster",
        image: "/testimonials/1.jpg",
        institution: "Leading UK Independent School"
    },
    {
        quote: "Access Oxbridge unified our systems to enable efficient cross-functional collaboration and streamline data-driven operations. Enhancing efficiency and limited our ability to derive actionable insights.",
        role: "Director of Studies",
        image: "/testimonials/1.jpg",
        institution: "Top Grammar School"
    },
    {
        quote: "Access Oxbridge provided our leadership with detailed insights into student sentiment, enabling targeted strategies to foster a positive learning culture",
        role: "Deputy Head",
        image: "/testimonials/1.jpg",
        institution: "UK State School"
    },
    {
        quote: "We faced challenges in modernising our reporting processes to better align with university goals. Access Oxbridge's solution streamlined reporting operations, reducing inefficiencies and enhancing organisational alignment.",
        role: "Head of Sixth Form",
        image: "/testimonials/1.jpg",
        institution: "Leading Independent School"
    },
    {
        quote: "Access Oxbridge has been a partner in integrating their expertise into our University prep programme. Their AI expertise and understanding of education have helped us create advanced, student-centric solutions.",
        role: "Principal",
        image: "/testimonials/1.jpg",
        institution: "International School Network"
    },
];

export function VideoTestimonials() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section id="testimonials" className="relative bg-white py-24 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-10 sm:mb-16 text-center px-4"
            >
                <h2 className="mx-auto max-w-3xl text-2xl sm:text-4xl font-semibold tracking-tighter text-black mb-4 sm:mb-6">
                    Client Testimonials and Results
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full"
            >
                {/* Infinite Sliding Quotes */}
                <Swiper
                    modules={[FreeMode, Autoplay]}
                    slidesPerView="auto"
                    spaceBetween={0}
                    loop={true}
                    freeMode={true}
                    speed={8000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    onSwiper={(swiper) => swiperRef.current = swiper}
                    className="testimonial-slider"
                >
                    {/* First set of quotes with screenshot placeholders */}
                    {quoteTestimonials.map((testimonial, i) => (
                        <SwiperSlide key={`quote-${i}`} style={{ width: 'auto' }}>
                            <div className="flex items-stretch">
                                {/* Quote Card */}
                                <div className="w-[350px] sm:w-[400px] p-8 flex flex-col justify-between h-[320px]">
                                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                                        "{testimonial.quote}"
                                    </p>
                                    <div>
                                        <p className="font-semibold text-black text-sm sm:text-base">
                                            {testimonial.role}
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            {testimonial.institution}
                                        </p>
                                    </div>
                                </div>

                                {/* Screenshot Placeholder - Space for future image */}
                                <div className="w-[200px] sm:w-[280px] h-fit mx-4 rounded-lg shrink-0">
                                    <Image className="w-full h-full object-cover" src={testimonial.image} alt={testimonial.role} width={200} height={320}/>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Duplicate for seamless infinite scroll */}
                    {quoteTestimonials.map((testimonial, i) => (
                        <SwiperSlide key={`quote-dup-${i}`} style={{ width: 'auto' }}>
                            <div className="flex items-stretch">
                                {/* Quote Card */}
                                <div className="w-[350px] sm:w-[400px] p-8 flex flex-col justify-between h-[320px]">
                                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-6">
                                        "{testimonial.quote}"
                                    </p>
                                    <div>
                                        <p className="font-semibold text-black text-sm sm:text-base">
                                            {testimonial.role}
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            {testimonial.institution}
                                        </p>
                                    </div>
                                </div>

                                {/* Screenshot Placeholder - Space for future image */}
                                <div className="w-[200px] sm:w-[280px] h-[320px] bg-gray-100 border border-dashed border-gray-300 flex items-center justify-center mx-4 rounded-lg shrink-0">
                                    <span className="text-gray-400 text-sm text-center px-4">
                                        Screenshot placeholder
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>

            <style jsx global>{`
                .testimonial-slider .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
        </section>
    );
}