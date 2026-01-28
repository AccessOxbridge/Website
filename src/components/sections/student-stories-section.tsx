'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import { getPostsByCategory } from "@/lib/blog";

export function StudentStoriesSection() {
  const shouldReduceMotion = useReducedMotion();
  const [articles, setArticles] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStories() {
      try {
        const stories = await getPostsByCategory("Student Stories");
        if (stories && stories.length > 0) {
          // Map BlogPost to the structure used in the UI
          const mappedStories = stories.map(story => ({
            id: story.id,
            title: story.title,
            excerpt: story.description,
            author: story.author,
            // We can use tags for university/course or provide defaults
            university: story.tags?.find(t => t.toLowerCase().includes("university")) || "Oxbridge Success",
            course: story.tags?.find(t => !t.toLowerCase().includes("university")) || "Student Story",
            image: story.image,
            href: `/blog/${story.slug}`,
          }));
          setArticles(mappedStories);
        }
      } catch (error) {
        console.error("Error fetching student stories:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchStories();
  }, []);

  return (
    <section className="bg-slate-50 py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="space-y-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 text-accent text-sm font-semibold tracking-wide uppercase">
              <GraduationCap className="w-4 h-4" />
              Student Journeys
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Student Stories
            </h2>
          </div>
          <p className="text-lg text-slate-900 ">
            Read about the journeys of students who achieved their Oxbridge dreams with our bespoke mentoring and support.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((skeleton) => (
              <div key={skeleton} className="h-[500px] rounded-3xl bg-slate-200 animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles && articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl 
                transition-all duration-500 border border-slate-200/60"
              >
                

                {/* Content */}
                <div className="flex flex-col grow p-8">
                  <div className="text-xs font-semibold text-accent uppercase tracking-widest mb-8">
                    {article.course}
                  </div>

                  <Link href={article.href} className="group-hover:text-accent transition-colors duration-300">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-accent 
                    transition-colors">
                      {article.title}
                    </h3>
                  </Link>

                  <p className="text-slate-600 mb-8 grow leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                    <Link
                      href={article.href}
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-accent group-hover:text-white transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
            <div className="h-full items-center flex justify-center">
              <a href="/admissions-resources" className="bg-accent h-12 px-8 rounded-lg text-xl text-white flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors">
                More Student Success
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
