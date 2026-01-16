'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { ArrowRight, Users, GraduationCap, Sparkles } from "lucide-react";

export default function JoinOurTeamPage() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <main className="min-h-screen w-full bg-white">
            {/* Hero Section */}
            <section className="bg-accent py-20 md:py-28">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <motion.div
                        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                        animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                            Join Our Admissions Team
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="max-w-4xl mx-auto">
                        {/* Introduction */}
                        <motion.div
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12"
                        >
                            <p>
                                At Access Oxbridge, our admissions mentors are carefully selected from the
                                highest-achieving students and graduates. We work with a carefully selected
                                team to ensure that every student receives bespoke, rigorous and strategically
                                informed guidance. Our mentors bring first-hand experience of the most
                                competitive admissions processes in the world and the insight to translate
                                that experience into exceptional outcomes for our students.
                            </p>

                            <p>
                                If you would like to apply to be a part of the Access Oxbridge mentoring team,
                                then click the link below. All applications are reviewed individually and with
                                care. Your application will be assessed, processed and responded to within 48 hours.
                            </p>
                        </motion.div>

                        {/* Apply Button */}
                        <motion.div
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-center mb-20"
                        >
                            <Link
                                href="https://portal.accessoxbridge.com/signup?role=mentor"
                                className="inline-flex items-center gap-3 bg-accent px-10 py-5 text-white font-semibold text-lg rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                            >
                                Apply Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Who Are We Looking For */}
                        <motion.div
                            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-gray-50 rounded-2xl p-8 md:p-12"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
                                Who are we looking for?
                            </h2>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                We are seeking high-achieving, personable undergraduates and graduates from
                                Oxbridge and other G5 universities, including those currently studying at
                                undergraduate, master's, or PhD level. Our ideal mentors are intellectually
                                curious, articulate and genuinely motivated to make a difference in the
                                admissions landscape. They are passionate about providing the expert, honest
                                and strategic guidance they wish they had received during their own application
                                journey.
                            </p>

                            {/* Key Qualities */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                        <GraduationCap className="w-7 h-7 text-accent" />
                                    </div>
                                    <h3 className="font-semibold text-black mb-2">High-Achieving</h3>
                                    <p className="text-sm text-gray-600">
                                        From Oxbridge and G5 universities
                                    </p>
                                </div>

                                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                        <Sparkles className="w-7 h-7 text-accent" />
                                    </div>
                                    <h3 className="font-semibold text-black mb-2">Intellectually Curious</h3>
                                    <p className="text-sm text-gray-600">
                                        Articulate and genuine
                                    </p>
                                </div>

                                <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
                                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                        <Users className="w-7 h-7 text-accent" />
                                    </div>
                                    <h3 className="font-semibold text-black mb-2">Passionate Mentors</h3>
                                    <p className="text-sm text-gray-600">
                                        Motivated to make a difference
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
