"use client"

import type { Metadata } from 'next'
import ApproachCards from '@/components/sections/cards'
import { motion } from 'framer-motion'
import { CheckCircle2, Target, FileText, BookOpen, Users, Clock, Award, GraduationCap } from 'lucide-react'
import ScrollIntentSpinWheel from '@/components/dialogs/ScrollIntentSpinWheel'
import { useState } from 'react'

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
  const [isOxbridge, setIsOxbridge] = useState(false);

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
    <main className={`w-full transition-colors duration-500 ${isOxbridge ? 'bg-gray-900 dark' : 'bg-white'}`}>
      {/* Hero Section - Horizontal Timeline with Alternating Steps */}
      <section className={`relative min-h-[85vh] pt-28 pb-20 w-full flex flex-col items-center justify-center 
      overflow-hidden transition-colors duration-500 ${isOxbridge ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center gap-8">
          {/* Toggle Switch */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={() => setIsOxbridge(false)}
              className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                !isOxbridge
                  ? 'bg-accent text-white shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              UK Universities
            </button>
            <button
              onClick={() => setIsOxbridge(true)}
              className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                isOxbridge
                  ? 'bg-accent text-white shadow-lg scale-105'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Oxbridge
            </button>
          </motion.div>

          <div className="relative w-full max-w-7xl px-4 py-1">
            {/* Horizontal Timeline Track */}
            <div className={`absolute top-1/2 left-0 w-full h-[3px] hidden md:block transition-colors duration-500 transform -translate-y-1/2 rounded-full ${
              isOxbridge ? 'bg-gray-700' : 'bg-gray-200'
            }`} />
            <motion.div
              key={isOxbridge ? 'oxbridge' : 'uk'}
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 left-0 h-[3px] bg-secondary hidden md:block transform -translate-y-1/2 rounded-full"
            />

            {/* Timeline Steps */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-20 w-full"
            >
              {steps.map((step, idx) => {
                const isEven = idx % 2 === 1;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeIn}
                    className={`relative flex flex-col items-center group ${
                      isEven 
                        ? 'md:flex-col-reverse md:pb-0 md:pt-24' 
                        : 'md:pt-0 md:pb-24'
                    }`}
                  >
                    {/* Step Content - Above Timeline for Even, Below for Odd */}
                    <div className={`flex flex-col items-center w-full max-w-[200px] text-center mb-4 ${
                      isEven ? 'md:mb-0 md:mt-8' : 'md:mb-0 md:mt-8'
                    }`}>
                      <span className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 transition-colors ${
                        isOxbridge
                          ? 'text-gray-400 group-hover:text-secondary'
                          : 'text-gray-500 group-hover:text-accent'
                      }`}>
                        Step 0{step.number}
                      </span>
                      <h3 className={`text-sm md:text-base font-bold mb-2 transition-colors duration-500 leading-tight ${
                        isOxbridge ? 'text-white' : 'text-primary'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-xs leading-relaxed transition-all duration-500 ${
                        isOxbridge ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {step.desc}
                      </p>
                    </div>

                    {/* Step Icon Circle */}
                    <motion.div
                      whileHover={{ scale: 1.15, y: isEven ? -5 : 5 }}
                      className={`
                        w-20 h-20 rounded-full flex items-center justify-center
                        transition-all duration-500 relative z-30
                        ${step.isSuccess
                          ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-[0_0_30px_rgba(22,163,74,0.4)] ring-4 ring-green-500/20"
                          : isOxbridge
                            ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white border-4 border-gray-700 shadow-xl group-hover:border-secondary group-hover:shadow-[0_0_25px_rgba(251,191,36,0.2)]"
                            : "bg-gradient-to-br from-white to-gray-50 text-primary border-4 border-gray-200 shadow-xl group-hover:border-accent group-hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"}
                      `}
                    >
                      <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:opacity-10 transition-opacity" />
                      <div className="relative z-10">
                        {step.icon}
                      </div>
                      {step.isSuccess && (
                        <motion.div
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full border-4 border-green-400/50"
                        />
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className={`py-12 relative overflow-hidden transition-colors duration-500 ${
        isOxbridge ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className={`absolute top-0 left-0 w-full h-px transition-colors duration-500 ${
          isOxbridge ? 'bg-gray-700' : 'bg-gray-100'
        }`} />

        <div className="container mx-auto px-6">
          <div className="flex flex-col mb-12 gap-8 text-center ">
            <div>
              <h2 className={`text-5xl font-black tracking-tight transition-colors duration-500 ${
                isOxbridge ? 'text-white' : 'text-primary'
              }`}>
                Our Tailored <span className={`transition-colors duration-500 ${
                  isOxbridge ? 'text-gray-400' : 'text-gray-400'
                }`}>Services</span>
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
                className={`group relative p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 border cursor-pointer
                shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)] ${
                  isOxbridge
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-100'
                }`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl origin-left" />

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-colors duration-500 ${
                  isOxbridge
                    ? 'bg-gray-700 group-hover:bg-primary group-hover:text-accent'
                    : 'bg-gray-50 group-hover:bg-primary group-hover:text-accent'
                }`}>
                  <service.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>

                <h3 className={`text-xl font-bold mb-4 group-hover:underline group-hover:text-secondary transition-colors duration-500 ${
                  isOxbridge ? 'text-white' : 'text-primary'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 transition-colors duration-500 ${
                  isOxbridge ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {service.desc}
                </p>

                <div className={`flex items-center text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0 ${
                  isOxbridge ? 'text-white' : 'text-primary'
                }`}>
                  <span>Learn more</span>
                  <div className={`ml-2 w-4 h-px transition-colors duration-500 ${
                    isOxbridge ? 'bg-white' : 'bg-primary'
                  }`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
