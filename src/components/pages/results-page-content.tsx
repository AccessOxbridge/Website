'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const acceptanceRateData = [
  {
    name: 'Global Average',
    value: 17,
  },
  {
    name: 'Access Oxbridge',
    value: 73,
  },
];

const successStories = [
  {
    name: 'Sarah Chen',
    university: 'University of Oxford',
    course: 'Medicine',
    quote: 'Access Oxbridge transformed my application. The mock interviews were incredibly realistic, and the feedback helped me articulate my passion for medicine clearly. I went from being uncertain about my chances to receiving an offer.',
  },
  {
    name: 'James Mitchell',
    university: 'University of Cambridge',
    course: 'Natural Sciences',
    quote: 'The admissions test tuition was a game-changer. I improved my score by 25% in just 6 hours. The tutors really understood what Cambridge was looking for and tailored their teaching accordingly.',
  },
  {
    name: 'Priya Patel',
    university: 'University of Oxford',
    course: 'Law',
    quote: 'What impressed me most was the personalized strategy. They didn\'t just prepare me for interviews—they helped me understand my own academic interests better. That authenticity came through in my application.',
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 sm:py-32 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl text-black w-2/3 mx-auto">
            Discover the impact Access Oxbridge has made on thousands of students pursuing their Oxbridge dreams
            </h1>
            {/* <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the impact Access Oxbridge has made on thousands of students pursuing their Oxbridge dreams.
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* UK & Oxbridge Section */}
      <section className="py-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">UK & Oxbridge</h2>
            <p className="text-lg text-gray-600">
              73% of our Premier Service students receive an offer from Oxford or Cambridge, vs a global average of 17%.
            </p>
          </motion.div>

          {/* Acceptance Rate Chart */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            <div className="bg-gray-50 p-8 rounded-lg">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={acceptanceRateData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                    }}
                    formatter={(value) => `${value}%`}
                  />
                  <Bar dataKey="value" fill="#06b6d4" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-black mb-4">Oxbridge Acceptance Rate</h3>
              <p className="text-gray-700 mb-6">
                Our students achieve a 73% acceptance rate to Oxford and Cambridge, significantly outperforming the global average of 17%.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span className="text-gray-700">100% of our Oxbridge candidates receive at least two offers from Russell Group universities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span className="text-gray-700">Our students receive 500+ Oxbridge offers every year</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-500 font-bold">•</span>
                  <span className="text-gray-700">Average 20% improvement in admissions test scores after just 4 hours of tuition</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold text-black mb-6">
              The Highest Oxbridge Success Rate of Any School or Consultancy
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-300">
                    <th className="px-6 py-4 text-left font-semibold text-black">Institution</th>
                    <th className="px-6 py-4 text-left font-semibold text-black">Type</th>
                    <th className="px-6 py-4 text-left font-semibold text-black">Success Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 bg-cyan-50">
                    <td className="px-6 py-4 font-semibold text-black">Access Oxbridge</td>
                    <td className="px-6 py-4 text-gray-700">Consultancy</td>
                    <td className="px-6 py-4 font-bold text-cyan-600">73%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-700">Competitor A</td>
                    <td className="px-6 py-4 text-gray-700">Consultancy</td>
                    <td className="px-6 py-4 text-gray-700">59%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-700">Top Grammar School</td>
                    <td className="px-6 py-4 text-gray-700">Grammar School</td>
                    <td className="px-6 py-4 text-gray-700">51%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 text-gray-700">Independent School</td>
                    <td className="px-6 py-4 text-gray-700">Independent School</td>
                    <td className="px-6 py-4 text-gray-700">47%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <p className="text-lg text-gray-700 italic mb-6">
              "I highly recommend Access Oxbridge. The team was very professional, helpful and patient. From start to finish, everything was clearly communicated and all my questions were answered. My child has an offer from their first choice university and couldn't be happier. The staff really care about the students and work hard to ensure the best outcomes for them."
            </p>
            <p className="font-semibold text-black">— Parent of Oxbridge Admit</p>
          </motion.div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 sm:py-24 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={itemVariants} className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="text-5xl font-bold text-cyan-500 mb-2">73%</div>
              <p className="text-lg text-gray-700 font-semibold">Oxbridge Success Rate</p>
              <p className="text-gray-600 mt-2">Highest in the industry</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="text-5xl font-bold text-cyan-500 mb-2">10,000+</div>
              <p className="text-lg text-gray-700 font-semibold">Oxbridge Offers</p>
              <p className="text-gray-600 mt-2">10x more than our closest competitor</p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center p-8 bg-white rounded-lg shadow-sm">
              <div className="text-5xl font-bold text-cyan-500 mb-2">20%</div>
              <p className="text-lg text-gray-700 font-semibold">Average Test Improvement</p>
              <p className="text-gray-600 mt-2">After just 4 hours of tuition</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Student Success Stories</h2>
            <p className="text-lg text-gray-600">
              Hear from students who achieved their Oxbridge dreams with Access Oxbridge.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {successStories.map((story, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-black mb-2">{story.name}</h3>
                <p className="text-sm text-cyan-500 font-medium mb-1">{story.university}</p>
                <p className="text-sm text-gray-600 mb-4">{story.course}</p>
                <p className="text-gray-700 italic">"{story.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Why Students Choose Access Oxbridge</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Expert Tutors</h3>
                  <p className="text-gray-600">Oxbridge-educated tutors specializing in every course offered by Oxford and Cambridge.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-2">3,000+ Mock Interviews</h3>
                  <p className="text-gray-600">We conduct over 3,000 subject-specific mock interviews annually, run by Oxbridge graduates.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Proven Results</h3>
                  <p className="text-gray-600">73% of our students receive offers from Oxford or Cambridge.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Personalized Strategy</h3>
                  <p className="text-gray-600">A tailored roadmap covering subject preparation, admissions tests, and application milestones.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Test Score Improvement</h3>
                  <p className="text-gray-600">Average 20% improvement in admissions test scores after just 4 hours of tuition.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl flex-shrink-0">✓</div>
                <div>
                  <h3 className="font-semibold text-black mb-2">1,000+ School Partners</h3>
                  <p className="text-gray-600">Trusted by 82% of the Times Top 50 Independent Schools in the UK.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
