'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ArrowRight } from "lucide-react";
import { ResultsPageContent } from "@/components/pages/results-page-content";

const studentArticles = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur",
    excerpt: "Adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Student Name A",
    university: "University of Cambridge",
    course: "Natural Sciences",
    href: "/articles/placeholder-1",
  },
  {
    id: 2,
    title: "Ut enim ad minim veniam quis nostrud",
    excerpt: "Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Student Name B",
    university: "University of Oxford",
    course: "Medicine",
    href: "/articles/placeholder-2",
  },
  {
    id: 3,
    title: "Duis aute irure dolor in reprehenderit",
    excerpt: "In voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Student Name C",
    university: "University of Cambridge",
    course: "Law",
    href: "/articles/placeholder-3",
  },
];

export default function OurStoryPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen w-full">
      {/* Hero Section - Our Story */}
      <section id="our-story" className="bg-accent pt-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-10 md:py-14">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Logo Section - Left */}
            <div className="shrink-0 w-full lg:w-1/4 flex items-center justify-center">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.9 }}
                animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-40 h-40 md:w-52 md:h-52 lg:w-[240px] lg:h-[240px]"
              >
                <Image
                  src="/logo.webp"
                  alt="Access Oxbridge Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>

            {/* Text Section - Right */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-3/4 space-y-4"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight 
              text-left pl-24">
                Our Story
              </h1>

              <div className="space-y-4 text-white/90 text-base md:text-lg leading-relaxed">
                <p>
                  Access Oxbridge was founded at the University of Cambridge by
                  graduates who experienced both the opportunities and
                  inequalities of the admissions process firsthand. Having
                  navigated Oxbridge applications ourselves, we recognised how
                  often academic potential is constrained by a lack of clear,
                  informed guidance rather than ability.
                </p>

                <p>
                  Our mission is to support students worldwide in approaching
                  competitive applications with confidence, clarity, and academic
                  integrity. What began as a small initiative has grown into a
                  global mentoring community, grounded in intellectual curiosity,
                  thoughtful preparation, and a commitment to widening access
                  while maintaining academic rigour.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Student Articles Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4">
              Student Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read about the journeys of students who achieved their Oxbridge dreams with our support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studentArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={article.href} className="block">
                  <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-accent/20 group-hover:-translate-y-1">
                    {/* Article Meta */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <span className="text-accent font-medium">{article.university}</span>
                      <span>•</span>
                      <span>{article.course}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-accent transition-colors">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">
                        {article.author}
                      </span>
                      <span className="text-accent group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* Our Results Section */}
      <section id="our-results">
        <ResultsPageContent />
      </section>
    </main>
  );
}