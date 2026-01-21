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
        quote: "Access Oxbridge pushed my Engineering thinking well beyond school level and clarified exactly what Oxford tutors value in technical interviews.",
        role: "Arjun P.",
        image: "/testimonials/1.jpg",
        institution: "Student"
    },
    {
        quote: "As a parent, I valued the clarity and structure Access Oxbridge provided. The process felt calm, well organised and reassuring at every stage.",
        role: "Helen W.",
        image: "/testimonials/1.jpg",
        institution: "Parent"
    },
    {
        quote: "I have observed clear improvements in my students' academic confidence and interview readiness after working with Access Oxbridge alongside our school support.",
        role: "Teacher",
        image: "/testimonials/1.jpg",
        institution: "School Teacher"
    },
    {
        quote: "The mentors understood Philosophy at a deep level and challenged my reasoning every session. It was far more demanding than anything I experienced at school.",
        role: "Sofia R.",
        image: "/testimonials/1.jpg",
        institution: "Student"
    },
    {
        quote: "Access Oxbridge helped me think more clearly under pressure. The preparation felt realistic, intellectually stretching and closely aligned with real interviews.",
        role: "Mateo G.",
        image: "/testimonials/1.jpg",
        institution: "Student"
    },
    {
        quote: "As a parent, I appreciated how tailored the guidance felt to my son's needs. The advice was thoughtful, measured and clearly targeted to help him improve.",
        role: "Kerri J.",
        image: "/testimonials/1.jpg",
        institution: "Parent"
    },
    {
        quote: "What impressed me most was how authentic the Economics interview preparation felt. The technical questioning reflected the real admissions experience closely.",
        role: "Ayman S.",
        image: "/testimonials/1.jpg",
        institution: "Cambridge Economics Student"
    },
    {
        quote: "The personalised strategy gave me clear direction throughout the process. I always understood what I needed to improve and why it mattered academically.",
        role: "Yuvraj M.",
        image: "/testimonials/1.jpg",
        institution: "LSE Student"
    },
    {
        quote: "We chose Access Oxbridge for its personalised approach. As parents, the balance between academic challenge and reassurance was exactly what we wanted.",
        role: "Sarah K.",
        image: "/testimonials/1.jpg",
        institution: "Parent"
    },
    {
        quote: "The Physics preparation strengthened how I explained complex ideas and responded confidently to unfamiliar questions in interviews. Thank you!",
        role: "Isabella M.",
        image: "/testimonials/1.jpg",
        institution: "Student"
    },
    {
        quote: "I felt informed, supported and confident in the guidance my child received. I could not recommend this enough to give your son or daughter the tools they need.",
        role: "Jonathan S.",
        image: "/testimonials/1.jpg",
        institution: "Parent"
    },
    {
        quote: "Access Oxbridge challenged my critical thinking and helped me articulate historical interpretations through multiple mock interviews before the real thing!",
        role: "Kwame D.",
        image: "/testimonials/1.jpg",
        institution: "Student"
    },
    {
        quote: "The Mathematics interview preparation was demanding and honest. It improved how I approached unfamiliar problems rather than relying on memorised methods.",
        role: "Jayanth V.",
        image: "/testimonials/1.jpg",
        institution: "Cambridge Mathematics Student"
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