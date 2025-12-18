"use client"

import type { Metadata } from 'next'
import ApproachCards from '@/components/sections/cards'
import { motion } from 'framer-motion'
import { CheckCircle2, Target, FileText, BookOpen, Users, Clock, Award, GraduationCap, ArrowRight, ArrowRightIcon, ArrowLeftIcon } from 'lucide-react'

// export const metadata: Metadata = blogConfig.metadata

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ServicesPage() {
  return (
    <section className='w-full h-full'>

      <section className='w-full h-screen'>
        <div
          className={`absolute inset-0 h-[75vh] w-full transition-opacity duration-1000 ease-in-out`}
        >
          <div className="absolute inset-0 h-full w-full">
            <img className="h-full w-full object-cover" src='https://dukestutoring.com/content/uploads/2024/05/bg-hero.png' alt='' />
          </div>

          <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-0 md:justify-center">
            <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-4xl mt-16">
                <h3 className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-white uppercase opacity-90">
                  Lorem, ipsum dolor sit amet
                </h3>
                <h2 className="mb-4 sm:mb-8 text-2xl sm:text-4xl font-semibold text-white md:text-5xl lg:text-[64px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam laudantium
                </h2>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                  <a
                    href={''}
                    className={`inline-flex min-w-[140px] sm:min-w-[160px] items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 text-xs 
                      sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 bg-white text-black hover:bg-gray-200`}
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-primary mb-4">Your Journey to Success</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured, strategic approach ensuring every aspect of your application is perfected.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 hidden md:block transform -translate-x-1/2" />

            <div className="space-y-12 md:space-y-24">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative md:grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="md:text-right">
                  <h3 className="text-2xl font-serif text-primary mb-2">Free Consultation</h3>
                  <p className="text-gray-600">Initial assessment of academic profile and university goals. We map out your strategic roadmap.</p>
                </div>
                <div className="hidden md:flex justify-center absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-primary font-bold z-10 border-4 border-white shadow-lg">1</div>
                </div>
                <div className="hidden md:block" />
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative md:grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="hidden md:block" />
                <div className="hidden md:flex justify-center absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center font-bold z-10 border-4 border-white shadow-lg">2</div>
                </div>
                <div className="md:text-left">
                  <h3 className="text-2xl font-serif text-primary mb-2">Program Development</h3>
                  <p className="text-gray-600">Tailored academic enrichment, reading lists, and super-curricular planning to build your profile.</p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative md:grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="md:text-right">
                  <h3 className="text-2xl font-serif text-primary mb-2">Application & Testing</h3>
                  <p className="text-gray-600">Intensive personal statement crafting and admissions test preparation (UCAT, LNAT, TSA, etc).</p>
                </div>
                <div className="hidden md:flex justify-center absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center font-bold z-10 border-4 border-white shadow-lg">3</div>
                </div>
                <div className="hidden md:block" />
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative md:grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="hidden md:block" />
                <div className="hidden md:flex justify-center absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center font-bold z-10 border-4 border-white shadow-lg">4</div>
                </div>
                <div className="md:text-left">
                  <h3 className="text-2xl font-serif text-primary mb-2">Interview Coaching</h3>
                  <p className="text-gray-600">Rigorous mock interviews with subject specialists to refine communication and critical thinking.</p>
                </div>
              </motion.div>

              {/* Step 5 - Success */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative text-center pt-8"
              >
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold z-10 border-4 border-white shadow-xl mx-auto mb-6 text-2xl">
                  <CheckCircle2 />
                </div>
                <h3 className="text-3xl font-serif text-primary mb-2">Offer & Success</h3>
                <p className="text-gray-600 max-w-md mx-auto">Securing your place at a top-tier university and preparing for the transition.</p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary/60 uppercase tracking-widest text-xs font-bold mb-3 block">Comprehensive Support</span>
            <h2 className="text-4xl font-serif text-primary">Core Services</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Strategic Admissions Consultations", icon: Target, desc: "Expert guidance on university selection and application strategy tailored to your strengths." },
              { title: "Academic Portfolio Development", icon: FileText, desc: "Building a robust body of work to demonstrate intellectual curiosity and capability." },
              { title: "Super Curricular Enrichment", icon: BookOpen, desc: "Going beyond the syllabus with advanced reading and research projects." },
              { title: "Academic Resource Creation", icon: Users, desc: "Custom guides, exclusive webinars, and sample statements for your subject." },
              { title: "UCAS Personal Statement Support", icon: FileText, desc: "Drafting, editing, and refining your statement to stand out to admissions tutors." },
              { title: "Admissions Test Prep", icon: Clock, desc: "Comprehensive preparation for UCAT, BMAT, LNAT, TSA, and other entrance exams." },
              { title: "Medicine Mock Interviews", icon: Award, desc: "MMI and panel interview simulations with qualified medical professionals." },
              { title: "Oxbridge Mock Interviews", icon: GraduationCap, desc: "Subject-specific mock interviews replicating the rigorous Oxbridge format." },
              { title: "Curriculum Support (GCSE/A-Level/IB)", icon: BookOpen, desc: "Subject tuition to ensure top grades in your qualifying examinations." },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all border border-gray-100 group"
              >
                <service.icon className="w-10 h-10 text-primary mb-6 group-hover:text-secondary transition-colors" />
                <h3 className="text-xl font-serif text-primary mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


    </section>
  )
}
