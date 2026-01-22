'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const acceptanceRateData = [
  {
    name: 'Global Average',
    value: 15,
  },
  {
    name: 'Access Oxbridge',
    value: 67,
  },
];

interface ResultsSectionProps {
  variant?: 'default' | 'results-page';
  title?: string;
  hideSubtitle?: boolean;
  buttonText?: string;
  buttonHref?: string;
}

export function ResultsSection({
  variant = 'default',
  title = 'UK & Oxbridge',
  hideSubtitle = false,
  buttonText = 'Our Results →',
  buttonHref = '/our-results'
}: ResultsSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [animatedData, setAnimatedData] = useState([
    { name: 'Global Average', value: 0 },
    { name: 'Access Oxbridge', value: 0 },
  ]);
  const [animationComplete, setAnimationComplete] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  const isResultsPage = variant === 'results-page';

  // Animate bar values when chart comes into view
  const handleChartInView = () => {
    if (!shouldReduceMotion) {
      setTimeout(() => {
        setAnimatedData([
          { name: 'Global Average', value: 15 },
          { name: 'Access Oxbridge', value: 67 },
        ]);
        // Mark animation as complete after a short delay
        setTimeout(() => setAnimationComplete(true), 100);
      }, 300); // Small delay to ensure smooth animation
    } else {
      // If reduced motion is preferred, set final values immediately
      setAnimatedData([
        { name: 'Global Average', value: 15 },
        { name: 'Access Oxbridge', value: 67 },
      ]);
      setAnimationComplete(true);
    }
  };

  // Colors based on variant
  const titleColor = isResultsPage ? 'text-white' : 'text-black';
  const subtitleColor = isResultsPage ? 'text-white/80' : 'text-gray-600';
  const chartBgColor = isResultsPage ? 'bg-white/10 backdrop-blur-sm' : 'bg-gray-50';
  const chartAxisColor = isResultsPage ? '#ffffff' : '#6b7280';
  const chartBarColor = isResultsPage ? '#ffffff' : '#1e3a8a';
  const textColor = isResultsPage ? 'text-accent' : 'text-black';
  const subTextColor = isResultsPage ? 'text-white/90' : 'text-gray-700';
  const bulletColor = isResultsPage ? 'text-white' : 'text-accent';
  const buttonClasses = isResultsPage
    ? 'bg-white text-accent hover:bg-white/90'
    : 'bg-accent text-white hover:bg-cyan-600';

  return (
    <section className={`py-1 ${isResultsPage ? 'bg-accent' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold ${titleColor} text-center mb-8`}>Proven Success</h2>
          {!hideSubtitle && (
            <p className={`text-lg ${subtitleColor}`}>
              67% of our students receive an offer from Oxford or Cambridge versus the global average of 15%.
            </p>
          )}
        </motion.div>

        {/* Acceptance Rate Chart */}
        <motion.div
          ref={chartRef}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onViewportEnter={handleChartInView}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <div className={`${chartBgColor} p-8 rounded-lg`}>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={animatedData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <XAxis dataKey="name" stroke={chartAxisColor} />
                <YAxis stroke={chartAxisColor} domain={[0, 100]} />
                {animationComplete && (
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '2px solid #1e3a8a',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                      padding: '12px 16px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'black',
                      transition: 'all 0.2s ease-in-out',
                    }}
                    labelStyle={{
                      color: 'black',
                      fontSize: '12px',
                      fontWeight: '500',
                      marginBottom: '4px',
                    }}
                    itemStyle={{
                      color: '#092c68',
                    }}
                    formatter={(value, name) => {
                      // Always show final values in tooltip to prevent glitches during animation
                      const finalValue = name === 'Global Average' ? 15 : name === 'Access Oxbridge' ? 67 : value;
                      return [`${finalValue}%`, 'Acceptance Rate'];
                    }}
                    cursor={false}
                  />
                )}
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {animatedData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={chartBarColor}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className={`text-2xl font-semibold ${textColor} mb-6`}>Why our students succeed:</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <span className={`${bulletColor} font-bold`}>•</span>
                <span className={subTextColor}><strong>Targeted preparation:</strong> Applications are shaped around each student's academic strengths, subject interests, and long-term goals.</span>
              </li>
              <li className="flex gap-3">
                <span className={`${bulletColor} font-bold`}>•</span>
                <span className={subTextColor}><strong>Insider insight:</strong> Guidance is led by Oxbridge graduates who understand the admissions process from the inside.</span>
              </li>
              <li className="flex gap-3">
                <span className={`${bulletColor} font-bold`}>•</span>
                <span className={subTextColor}><strong>Depth over formulas:</strong> We focus on intellectual development, interview thinking, and authentic academic engagement, not templates.</span>
              </li>
              <li className="flex gap-3">
                <span className={`${bulletColor} font-bold`}>•</span>
                <span className={subTextColor}><strong>Sustained mentoring:</strong> Support spans the full application journey, from subject exploration to interview readiness.</span>
              </li>
            </ul>
            <p className={`${subTextColor} mb-6`}>
              Our results reflect a commitment to thoughtful, individual mentoring and academic rigour.
            </p>
            <a
              href={buttonHref}
              className={`inline-flex items-center justify-center px-6 py-3 ${buttonClasses} font-bold rounded-md transition-colors duration-300`}
            >
              {buttonText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
