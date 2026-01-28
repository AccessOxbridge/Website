'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { Quote } from "lucide-react";
import { useRef } from "react";
import { StudentStoriesSection } from "@/components/sections/student-stories-section";

// const studentArticles = [
//   {
//     id: 1,
//     title: "Navigating the Cambridge Natural Sciences Interview",
//     excerpt: "How I approached the technical questions and developed the confidence to discuss complex biological systems with world-leading academics.",
//     author: "James T.",
//     university: "University of Cambridge",
//     course: "Natural Sciences",
//     image: "https://images.unsplash.com/photo-1576085898323-2183ba9b22ea?auto=format&fit=crop&q=80&w=800",
//     href: "/blog/cambridge-natural-sciences-guide",
//   },
//   {
//     id: 2,
//     title: "Philosophy & Theology: Beyond the Personal Statement",
//     excerpt: "Deep diving into historical interpretations and learning to articulate nuanced arguments during my Oxford interview process.",
//     author: "Sofia R.",
//     university: "University of Oxford",
//     course: "Philosophy & Theology",
//     image: "https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=800",
//     href: "/blog/oxford-philosophy-theology-journey",
//   },
//   {
//     id: 3,
//     title: "Securing an Offer for Law at Cambridge",
//     excerpt: "Overcoming the LNAT and preparing for the problem-based questions that define the Law admissions process at Christ's College.",
//     author: "Elena M.",
//     university: "University of Cambridge",
//     course: "Law",
//     image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
//     href: "/blog/cambridge-law-success-story",
//   },
// ];

export default function OurStoryPage() {
  const shouldReduceMotion = useReducedMotion();
  const storyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: storyRef,
    offset: ["start start", "end end"]
  });

  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.8, 1, 1, 0.8]);

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Our Story Section - Sticky Layout */}
      <section
        id="our-story"
        ref={storyRef}
        className="bg-accent relative pt-24 pb-32"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-stretch relative">

            {/* Left Column: Sticky Container */}
            <div className="w-full lg:w-1/3 relative min-h-[300px] lg:min-h-full">
              {/* This inner div is what actually sticks */}
              <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2 flex items-center justify-center py-12 lg:py-0">
                <motion.div
                  style={{
                    scale: shouldReduceMotion ? 1 : logoScale,
                    opacity: shouldReduceMotion ? 1 : logoOpacity
                  }}
                  className="relative group"
                >
                  {/* Decorative glow background */}
                  <div className="absolute -inset-8 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700" />

                  <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                    <Image
                      src="/logo.webp"
                      alt="Access Oxbridge Logo"
                      fill
                      className="object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                      priority
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Narrative Text */}
            <div className="w-full lg:w-2/3">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-16"
              >
                <div className="space-y-6">
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter">
                    Our <span className="text-white/40">Story</span>
                  </h1>
                  <div className="w-24 h-1.5 bg-white/20 rounded-full" />
                </div>

                <div className="space-y-12 text-white/90 text-xl md:text-2xl leading-relaxed font-light">
                  <p className="">
                    Access Oxbridge was founded at the University of Cambridge by graduates who experienced both the opportunities
                    and the inequalities of the admissions process firsthand. As applicants ourselves, we encountered moments of
                    excitement and possibility alongside uncertainty about expectations, academic standards, and how best to express
                    our ideas.
                  </p>

                  <p>
                    Through this experience, one truth became clear: academic potential is too often limited not by ability,
                    but by unequal access to clear, informed guidance. Navigating Oxbridge applications can feel daunting,
                    particularly for students without established networks or specialist support.
                  </p>

                  <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                    <Quote className="absolute -top-4 -right-4 w-24 h-24 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                    <p className="italic text-white font-medium relative z-10">
                      "Small differences in preparation, confidence, and feedback can have an outsized impact. Access Oxbridge was created in response to this reality."
                    </p>
                  </div>

                  <p>
                    We wanted to build something that would demystify the process while encouraging students to engage deeply
                    with their subject and develop confidence in their own academic voice. Our mission is to support students
                    around the world in approaching competitive applications with clarity, integrity, and intellectual curiosity.
                  </p>

                  <p>
                    We believe that widening access and upholding academic rigour belong together. High standards matter,
                    and so does ensuring that talented students from all backgrounds are equipped to meet them on equal footing.
                  </p>

                  <p>
                    What began as a small initiative has grown into a global mentoring community shaped by thoughtful preparation,
                    curiosity, and a shared belief in education as a transformative force. At Access Oxbridge, we are committed
                    not only to helping students apply, but to helping them think independently, ask better questions, and
                    grow into scholars long before they enter an interview room.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Student Stories Section */}
      <StudentStoriesSection />
    </main>
  );
}