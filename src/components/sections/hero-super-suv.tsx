"use client";

import {
  ArrowLeftIcon, ArrowRightIcon, Check, User,
  BookMarked,
  Star,
  GraduationCap,
  School,
  Play,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const stats = [
  {
    value: "10,000+",
    title: "Oxbridge offers",
    subtitle: "10x more than our closest competitor",
  },
  {
    value: "73%",
    title: "Oxbridge success rate",
    subtitle: "Highest in the industry",
  },
  {
    value: "1 in 5",
    title: "Oxbridge applicants",
    subtitle: "Use our guidance and resources",
  },
];

const items = [
  {
    icon: GraduationCap,
    title: "Deep Expertise",
    text: (
      <>
        Our Senior Consultants interview ten times more applicants
        each year than a real tutor.{" "}
        <strong>Over 73% of our students win an offer</strong> to Oxford or
        Cambridge, with <strong>100%</strong> receiving offers
      </>
    ),
  },
  {
    icon: User,
    title: "Expert Admissions Test Tuition",
    text: (
      <>
        Our admissions test tuition helps candidates significantly improve
        performance. On average, students see a{" "}
        <strong>20% improvement after just six hours</strong> of targeted
        tuition.
      </>
    ),
  },
  {
    icon: BookMarked,
    title: "65+ Oxbridge Courses",
    text: (
      <>
        Oxbridge-educated tutors specialising in every course offered by Oxford
        and Cambridge. We provide guides for every course, admissions test, and
        interview — using the same <strong>Canvas</strong> learning platform as
        Oxford.
      </>
    ),
  },
  {
    icon: Check,
    title: "3,000 Mock Interviews Per Year",
    text: (
      <>
        We conduct over <strong>3,000 subject-specific mock interviews</strong>{" "}
        annually, run by Oxbridge graduates and delivered in environments that
        closely mirror real Oxford and Cambridge interviews.
      </>
    ),
  },
  {
    icon: Star,
    title: "The Premier Service",
    text: (
      <>
        Our highest level of support, offered to 200 students annually.
        Participants are <strong>50% more likely</strong> to secure an Oxford
        interview, with <strong>90%</strong> of Cambridge applicants invited to
        interview.
      </>
    ),
  },
  {
    icon: School,
    title: "1,000+ School Partners",
    text: (
      <>
        Trusted by <strong>82% of the Times Top 50</strong> Independent Schools
        in the UK. Partner schools see an average{" "}
        <strong>30% uplift</strong> in Oxbridge offers, with ~90% rebooking
        annually.
      </>
    ),
  },
];

export const testimonials = [
  {
    name: "Pun Pum",
    description: "Sharing her thoughts on the care and quality of the service.",
    video: "https://player.vimeo.com/video/1098412383",
  },
  {
    name: "Time",
    description: "Sharing his great experience with our service.",
    video: "https://player.vimeo.com/video/1098411923",
  },
  {
    name: "Riddhi",
    description: "Guidance on courses and events",
    video: "https://player.vimeo.com/video/1098477835",
  },
  {
    name: "Cornelius Patrick",
    description: "Support with fast UK admissions",
    video: "https://player.vimeo.com/video/1098477917",
  },
  {
    name: "Andrea",
    description: "Guidance on visa, funds, housing",
    video: "https://player.vimeo.com/video/1098478059"
  },
  {
    name: "Hema",
    description: "Tailored advice for every question",
    video: "https://player.vimeo.com/video/1098478267"
  },
  {
    name: "Mahi",
    description: "Insightful fairs on overseas education",
    video: "https://player.vimeo.com/video/1098478374"
  },
  {
    name: "Hitashi",
    description: "Supportive team and education fairs",
    video: "https://player.vimeo.com/video/1098412536"
  },
];


const logos = [
  "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/City-of-London-Boys.png",
  "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Wellington-College.png",
  "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/JAGs.png",
  "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Marlborough-College-1.png",
  "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Rugby-School.png",
  "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Cardiff-Sixth-Form-College-1.png",
  "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Wellington-College-Shanghai.png",
  "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Charterhouse-1.png",
  "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Surbiton-.png",
  "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/St-Marys-Ascot.png",
  "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Francis-Holland-RP.png",
  "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/St-Andrew-College-Cambridge.png",
];


export default function HeroSuperSUV() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      subheading: "ELITE ADMISSIONS",
      headline: "Unlock Oxbridge: 62% Success Rate",
      buttons: [
        { label: "Free Consultation", href: "/consultation", variant: "primary" },
        { label: "Our Results", href: "#results", variant: "secondary" },
      ],
      type: "video",
      src: "https://www.astonmartin.com/-/media/models---db12-s/final-images/heros/home_page_16x9_edit_3.mp4?rev=a387b4fe1ca348fc89e2ffbefc061406",
    },
    {
      id: 2,
      subheading: "INSIGHTS & GUIDES",
      headline: "Achieving Dreams: The Cambridge Experience",
      buttons: [
        { label: "Download Free PDF", href: "/resources/ucas-guide", variant: "primary" },
        { label: "Explore Articles", href: "/blog", variant: "secondary" },
      ],
      type: "image",
      src: "/ppl2.jpeg",
    },
    {
      id: 3,
      subheading: "PARTNERSHIPS",
      headline: "Trusted for Oxford, Cambridge & G5 Excellence",
      buttons: [
        { label: "View Universities", href: "#partnerships", variant: "primary" },
        { label: "Boost Your Chances by 400%", href: "/success-stats", variant: "secondary" },
      ],
      type: "image",
      src: "https://www.astonmartin.com/-/media/top-gear-award-2026/tga-desk-still-new.jpg?mw=1920&rev=a7de10be96464e8a8b2cbc28245eab17&extension=webp",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

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
      <motion.div
        className="relative z-20 bg-[#ffffff] min-h-[45vh] py-8 sm:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1], // luxury easing
                  },
                },
              }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#000000]">
                <Check className="h-5 w-5 text-white" />
              </div>

              <h5 className="text-4xl font-bold text-[#000000]">{stat.value}</h5>
              <h6 className="mt-2 text-2xl tracking-tighter text-black">
                {stat.title}
              </h6>
              <p className="mt-1 text-lg text-black/80">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

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
          We have exclusive partnerships with the best schools in the UK and around the world.
        </h2>
        <button className="mt-4 sm:mt-6 bg-black px-6 py-3 text-sm sm:text-base text-white hover:bg-accent cursor-pointer">Find out more</button>
      </motion.div>


      <div className="relative">
        <div className="flex w-max animate-marquee gap-16">
          {[...logos, ...logos].map((logo, idx) => (
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
    <section className="relative bg-[#096857] py-16 sm:py-28">
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
        <motion.img src='/logo.webp' alt='' width={120} height={120} className="w-20 sm:w-[120px]" />
        <motion.h1 className="text-center w-full sm:w-2/3 mx-auto text-xl sm:text-3xl tracking-tighter font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Furiosam eos dolorem consequuntur quisquam sunt eum numquam commodi accusamus.
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
          {items.map((item, idx) => (
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
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#ffffff] text-[#096857]">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="mb-4 text-2xl font-bold tracking-tighter text-white">
                {item.title}
              </h3>

              <p className="max-w-md text-base leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
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
            className="mt-4 md:mt-0 inline-block bg-[#1b8a7a] hover:bg-[#156b5e] text-white text-sm sm:text-[16px] font-semibold px-6 sm:px-8 py-3 sm:py-4 transition-colors duration-300 ease-in-out"
          >
            Read Client reviews
          </a>
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-normal leading-[1.2] tracking-tight">
            Testimonials
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
        {testimonials.map((t, i) => (
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