'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Link from 'next/link';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const chartData = [
  {
    name: 'Global Average',
    value: 17,
  },
  {
    name: 'Access Oxbridge',
    value: 73,
  },
];

export function ResultsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="results" className="pt-12 sm:pt-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -40 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? {} : { duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-black mb-4">
                4x Your Oxbridge Chances
              </h2>
              <p className="text-lg text-gray-600">
                We are proud of the improvements students make by working with us. 73% of our students receive offers from Oxford or Cambridge, compared to an average of 17%.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-black">Access Oxbridge by the numbers:</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-gray-700">
                    The average student improves their admissions test marks by 20% after just 4 hours of targeted tuition
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-gray-700">
                    100% of our Oxbridge candidates receive at least two offers from Russell Group universities
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span className="text-gray-700">
                    Our students receive 500+ Oxbridge offers every year
                  </span>
                </li>
              </ul>
            </div>

            <Link
              href="/our-results"
              className="inline-block bg-black px-8 py-3 text-white font-medium hover:bg-black/80 transition-colors"
            >
              Our Results
            </Link>
          </motion.div>

          {/* Right Chart */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 40 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={shouldReduceMotion ? {} : { duration: 0.8, delay: 0.1 }}
            className="flex justify-center items-center"
          >
            <div className="w-full h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
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
                  <Bar dataKey="value" className='fill-accent' radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
