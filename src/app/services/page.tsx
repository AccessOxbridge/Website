"use client"

import type { Metadata } from 'next'
import ApproachCards from '@/components/sections/cards'
import { motion } from 'framer-motion'
import { CheckCircle2, Target, FileText, BookOpen, Users, Clock, Award, GraduationCap } from 'lucide-react'
import ScrollIntentSpinWheel from '@/components/dialogs/ScrollIntentSpinWheel'

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
  const steps = [
    {
      number: 1,
      title: "Free Consultation",
      desc: "Initial assessment of academic profile and university goals. We map out your strategic roadmap.",
      icon: <Users className="w-5 h-5" />
    },
    {
      number: 2,
      title: "Program Development",
      desc: "Tailored academic enrichment, reading lists, and super-curricular planning to build your profile.",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      number: 3,
      title: "Application & Testing",
      desc: "Intensive personal statement crafting and admissions test preparation (UCAT, LNAT, TSA, etc).",
      icon: <FileText className="w-5 h-5" />
    },
    {
      number: 4,
      title: "Interview Coaching",
      desc: "Rigorous mock interviews with subject specialists to refine communication and critical thinking.",
      icon: <Target className="w-5 h-5" />
    },
    {
      number: 5,
      title: "Offer & Success",
      desc: "Securing your place at a top-tier university and preparing for the transition.",
      icon: <CheckCircle2 className="w-5 h-5" />,
      isSuccess: true
    }
  ];

  const services = [
    { title: "Strategic Admissions Consultations", icon: Target, desc: "Expert guidance on university selection and application strategy tailored to your strengths." },
    { title: "Academic Portfolio Development", icon: FileText, desc: "Building a robust body of work to demonstrate intellectual curiosity and capability." },
    { title: "Super Curricular Enrichment", icon: BookOpen, desc: "Going beyond the syllabus with advanced reading and research projects." },
    { title: "Academic Resource Creation", icon: Users, desc: "Custom guides, exclusive webinars, and sample statements for your subject." },
    { title: "UCAS Personal Statement Support", icon: FileText, desc: "Drafting, editing, and refining your statement to stand out to admissions tutors." },
    { title: "Admissions Test Prep", icon: Clock, desc: "Comprehensive preparation for UCAT, BMAT, LNAT, TSA, and other entrance exams." },
    { title: "Medicine Mock Interviews", icon: Award, desc: "MMI and panel interview simulations with qualified medical professionals." },
    { title: "Oxbridge Mock Interviews", icon: GraduationCap, desc: "Subject-specific mock interviews replicating the rigorous Oxbridge format." },
    { title: "Curriculum Support (GCSE/A-Level/IB)", icon: BookOpen, desc: "Subject tuition to ensure top grades in your qualifying examinations." },
  ];

  return (
    <main className="w-full bg-white">
      {/* Hero Section - 70% Height Horizontal Timeline */}
      <section className="relative h-[70vh] min-h-fit pt-24 w-full flex flex-col items-center justify-center 
      overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-black tracking-tight text-primary mb-6">
              Your Journey <span className="text-accent underline">to Success</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A structured, strategic approach ensuring every aspect of your application is perfected,
              from your first consultation to the moment you receive your offer.
            </p>
          </motion.div>

          <div className="relative w-full max-w-6xl px-4">
            {/* Horizontal Timeline Track */}
            <div className="absolute top-[32px] left-0 w-full h-[2px] bg-gray-100 hidden md:block" />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[32px] left-0 h-[2px] bg-secondary hidden md:block"
            />

            {/* Timeline Steps */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-20 w-full"
            >
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn}
                  className="flex flex-col items-center text-left group"
                >
                  <div className={`
                    w-16 h-16 rounded-full flex items-center justify-center 
                    transition-all duration-500 relative
                    ${step.isSuccess
                      ? "bg-green-600 text-white shadow-[0_0_20px_rgba(22,163,74,0.3)]"
                      : idx === 0
                        ? "bg-secondary text-primary shadow-[0_0_20px_rgba(251,191,36,0.2)]"
                        : "bg-white text-primary border-2 border-gray-100 shadow-sm"}
                    group-hover:scale-110 group-hover:shadow-lg
                  `}>
                    <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 transition-opacity" />
                    {step.icon}
                  </div>

                  <div className="mt-6 flex flex-col items-center w-full">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 group-hover:text-secondary mb-1 transition-colors">
                      Step 0{step.number}
                    </span>
                    <h3 className="text-lg font-bold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 text-left leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col mb-12 gap-8 text-center ">
            <div>
              <span className="text-secondary uppercase tracking-[0.3em] text-xs font-black mb-4 block">
                Comprehensive Expertise
              </span>
              <h2 className="text-5xl font-black text-primary tracking-tight">
                Our Specialized <span className="text-gray-400">Services</span>
              </h2>
            </div>
            {/* <p className="text-gray-500 max-w-md md:mb-1">
              From subject-specific interview prep to long-term academic mentoring, we provide elite
              support at every stage of the competitive admissions process.
            </p> */}
          </div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="group relative bg-white p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 border cursor-pointer
                border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)]"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl origin-left" />

                <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center mb-8 group-hover:bg-primary 
                group-hover:text-accent transition-colors duration-500">
                  <service.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>

                <h3 className="text-xl font-bold text-primary mb-4 group-hover:underline group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center text-xs font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  <span>Learn more</span>
                  <div className="ml-2 w-4 h-px bg-primary" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
