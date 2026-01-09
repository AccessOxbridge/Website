"use client"

import type { Metadata } from 'next'
import ApproachCards from '@/components/sections/cards'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { CheckCircle2, Target, FileText, BookOpen, Users, Clock, Award, GraduationCap } from 'lucide-react'
import ScrollIntentSpinWheel from '@/components/dialogs/ScrollIntentSpinWheel'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

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

function ServicesContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');
  const [isOxbridge, setIsOxbridge] = useState(type !== 'uk');

  useEffect(() => {
    setIsOxbridge(type !== 'uk');
  }, [type]); 

  const ukSteps = [
    {
      number: 1,
      title: "Early Preparation and Qualification Planning",
      desc: "Understanding UK requirements and aligning international qualifications with course expectations.",
      icon: <Users className="w-5 h-5" />
    },
    {
      number: 2,
      title: "Course Research and Application Strategy",
      desc: "Choosing suitable courses and beginning academic enrichment.",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      number: 3,
      title: "UCAS Application and Personal Statement",
      desc: "Completing applications accurately and meeting key UK university deadlines.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      number: 4,
      title: "Offers Interviews and Visa Planning",
      desc: "Responding to offers preparing interviews and organising visa documentation.",
      icon: <Target className="w-5 h-5" />
    },
    {
      number: 5,
      title: "Results, Visa and University Preparation",
      desc: "Confirming university placement and preparing for arrival in the UK.",
      icon: <CheckCircle2 className="w-5 h-5" />,
      isSuccess: true
    }
  ];

  const oxbridgeSteps = [
    {
      number: 1,
      title: "Early Academic Foundation and Subject Alignment",
      desc: "Understanding Oxbridge expectations and aligning all preparation accordingly.",
      icon: <Users className="w-5 h-5" />
    },
    {
      number: 2,
      title: "Strategic Course, College and Admissions Test Planning",
      desc: "Choosing College and course and understanding relevant Admissions Test content.",
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      number: 3,
      title: "Early UCAS Personal Statement Submission and Interview Preparation",
      desc: "Completing applications accurately and meeting the early Oxbridge application deadline.",
      icon: <FileText className="w-5 h-5" />
    },
    {
      number: 4,
      title: "Admissions Tests and Interview Prep",
      desc: "Preparing for interviews and Admissions Tests.",
      icon: <Target className="w-5 h-5" />
    },
    {
      number: 5,
      title: "Decisions, Results and University Preparation",
      desc: "Responding to outcomes and preparing for Oxbridge study if successful.",
      icon: <CheckCircle2 className="w-5 h-5" />,
      isSuccess: true
    }
  ];

  const steps = isOxbridge ? oxbridgeSteps : ukSteps;

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
    <section className={`py-24 transition-colors duration-700 ${!isOxbridge ? 'bg-gray-900 text-white' : 'bg-white text-slate-900'}`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* 1. Detached Header Section - Prevents overlap */}
        <div className="flex flex-col items-center mb-8">
          <div className="inline-flex bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10 backdrop-blur-md">
            {['UK Universities', 'Oxbridge'].map((tab) => {
              const active = (tab === 'Oxbridge') === isOxbridge
              return (
                <button
                  key={tab}
                  onClick={() => setIsOxbridge(tab === 'Oxbridge')}
                  className={`relative px-8 py-2.5 text-sm font-semibold rounded-full transition-colors duration-300 ${active ? 'text-white' : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                    }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-accent dark:bg-white rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* 2. The Timeline - Engineered for clarity */}
        <div className="relative">
          {/* Background Track */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 dark:bg-white/10 -translate-y-1/2 hidden md:block" />

          {/* Animated Progress Track */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-0 w-full h-px bg-accent dark:bg-white origin-left -translate-y-1/2 hidden md:block"
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          />

          <LayoutGroup>
            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
              <AnimatePresence mode="popLayout">
                {steps.map((step, idx) => {
                  const isEven = idx % 2 === 1
                  return (
                    <motion.div
                      layout
                      key={step.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className="relative flex flex-col items-center"
                    >
                      {/* Top Content (Odd Steps) */}
                      <div className={`hidden md:flex flex-col items-center text-center mb-12 h-32 justify-end transition-opacity duration-500 ${isEven ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <StepContent step={step} isOxbridge={isOxbridge} />
                      </div>

                      {/* The Node */}
                      <div className="relative z-10">
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all 
                        duration-500 shadow-2xl hover:scale-150 hover:bg-green-400 cursor-pointer ${step.isSuccess
                            ? 'bg-green-500 border-green-400 text-white'
                            : isOxbridge
                              ? 'bg-gray-900 border-white/20 text-white'
                              : 'bg-white border-slate-200 text-slate-900'
                          }`}>
                          {step.icon}
                        </div>
                      </div>

                      {/* Bottom Content (Even Steps) */}
                      <div className={`flex flex-col items-center text-center mt-8 md:mt-12 md:h-32 transition-opacity duration-500 ${!isEven && 'md:opacity-0 md:pointer-events-none'}`}>
                        <StepContent step={step} isOxbridge={isOxbridge} />
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </LayoutGroup>
        </div>
      </div>

      {/* Core Services Grid */}
      <section className={`mt-12 py-12 overflow-hidden transition-colors duration-500 
      ${!isOxbridge ? 'bg-gray-900' : 'bg-white'}`}>
        <div className={`absolute top-0 left-0 w-full h-px transition-colors duration-500 
        ${!isOxbridge ? 'bg-gray-700' : 'bg-gray-100'}`} />
        <div className=" mx-auto px-6">
          <div className="flex flex-col mb-12 gap-8 text-center ">
              <h2 className={`text-5xl font-black tracking-tight transition-colors duration-500 
              ${!isOxbridge ? 'text-white' : 'text-primary'}`}>
                Our Tailored <span className={`transition-colors duration-500 
                ${!isOxbridge ? 'text-gray-400' : 'text-gray-400'}`}>
                  Services
                </span>
              </h2>
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
                className={`group relative p-10 rounded-2xl border transition-all duration-500 hover:-translate-y-2 cursor-pointer
                shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] ${!isOxbridge
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-100'
                  }`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl origin-left" />

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-colors duration-500 ${!isOxbridge
                    ? 'bg-gray-700 group-hover:bg-primary group-hover:text-accent'
                    : 'bg-gray-50 group-hover:bg-primary group-hover:text-accent'
                  }`}>
                  <service.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>

                <h3 className={`text-xl font-bold mb-4 group-hover:underline group-hover:text-secondary transition-colors duration-500 ${!isOxbridge ? 'text-white' : 'text-primary'
                  }`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 transition-colors duration-500 ${!isOxbridge ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                  {service.desc}
                </p>

                <div className={`flex items-center text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 ${!isOxbridge ? 'text-white' : 'text-primary'
                  }`}>
                  <span>Learn more</span>
                  <div className={`ml-2 w-4 h-px transition-colors duration-500 ${!isOxbridge ? 'bg-white' : 'bg-primary'
                    }`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </section>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServicesContent />
    </Suspense>
  );
}

function StepContent({ step, isOxbridge }: { step: any, isOxbridge: boolean }) {
  return (
    <div className="max-w-[200px]">
      <span className="text-[10px] font-black tracking-widest text-rich-amber-accent uppercase mb-2 block">
        Phase 0{step.number}
      </span>
      <h3 className="font-bold mb-2 leading-tight tracking-tight">
        {step.title}
      </h3>
      <p className="text-sm leading-4 opacity-60 font-medium">
        {step.desc}
      </p>
    </div>
  )
}