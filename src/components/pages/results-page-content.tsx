'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import { ResultsSection } from '../home/results-section';

// Quote testimonials - same as landing page
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

// Why Students Choose Access Oxbridge - 6 points
const whyChoosePoints = [
  {
    title: "Expert Tutors",
    description: "Oxbridge and G5 educated tutors with first hand experience of the admissions processes for the courses they support."
  },
  {
    title: "Authentic Interview Preparation",
    description: "Challenging, subject specific interview preparation designed to reflect the academic depth and style of real Oxbridge interviews."
  },
  {
    title: "Oxbridge Offer Outcomes",
    description: "67% of our supported applicants receive at least one offer from Oxford or Cambridge."
  },
  {
    title: "Personalised Admissions Strategy",
    description: "A bespoke admissions roadmap covering subject preparation, admissions tests, written work and application milestones."
  },
  {
    title: "G5 University Success",
    description: "82% of our students secure offers from at least one G5 university."
  },
  {
    title: "Trusted by High Performing Students",
    description: "Chosen by academically ambitious students from leading UK and international schools seeking serious, high level admissions guidance."
  },
];

export function ResultsPageContent() {
  const shouldReduceMotion = useReducedMotion();
  const swiperRef = useRef<SwiperType | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="min-h-screen bg-accent pt-18">

      {/* Hero Section */}
      <section className="py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl text-white w-2/3 mx-auto">
              Why Access Oxbridge?
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Reuse Results Section from home - with custom styling for this page */}
      <ResultsSection
        variant="results-page"
        title="67% of our students receive an offer from Oxford or Cambridge, vs a global average of 15%."
        hideSubtitle={true}
        buttonText="Start Your Journey Today →"
        buttonHref="/consultation"
      />

      {/* Why Students Choose Access Oxbridge - 6 Points */}
      <section className="py-16 sm:py-24 bg-accent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChoosePoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              >
                <div className="flex gap-4">
                  <div className="text-2xl text-white flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{point.title}</h3>
                    <p className="text-white/80">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black">Student Success Stories</h2>
          </motion.div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
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
            className="success-stories-slider"
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
                    <Image className="w-full h-full object-cover" src={testimonial.image} alt={testimonial.role} width={200} height={320} />
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
                  <div className="w-[200px] sm:w-[280px] h-fit mx-4 rounded-lg shrink-0">
                    <Image className="w-full h-full object-cover" src={testimonial.image} alt={testimonial.role} width={200} height={320} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <style jsx global>{`
          .success-stories-slider .swiper-wrapper {
            transition-timing-function: linear !important;
          }
        `}</style>
      </section>
    </div>
  );
}
