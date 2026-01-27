'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { ResultsSection } from '../home/results-section';


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
    <div className="min-h-screen pt-18">

      {/* Reuse Results Section from home - with custom styling for this page */}
      <ResultsSection
        variant="results-page"
        title="67% of our students receive an offer from Oxford or Cambridge versus the global average of 15%."
        hideSubtitle={true}
        buttonText="Start Your Journey Today →"
        buttonHref="/consultation"
      />

      {/* Why Students Choose Access Oxbridge - 6 Points */}
      <section className="pb-16 bg-white">
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
                className="bg-accent backdrop-blur-sm p-6 rounded-lg"
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

    </div>
  );
}
