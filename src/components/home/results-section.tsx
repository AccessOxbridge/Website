'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, TooltipProps } from 'recharts';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

function ChartTooltip({ active, payload }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  const dataName = item.payload?.name as string;
  const value = item.payload?.name === 'Access Oxbridge (2025)' ? 67 : item.payload?.name === 'The Times Global Average (2024-26)' ? 15 : item.value;
  const isAccessOxbridge = dataName === 'Access Oxbridge (2025)';
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '2px solid #1e3a8a',
        borderRadius: '12px',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        padding: '12px 16px',
        fontSize: '14px',
        fontWeight: '600',
        color: 'black',
      }}
    >
      <p style={{ fontSize: '12px', fontWeight: '500', marginBottom: '4px', color: 'black' }}>Acceptance Rate</p>
      <p style={{ color: '#092c68' }}>
        {value}%{isAccessOxbridge && ' — Out of 84 students, 56 were successful in their applications to either Oxford or Cambridge'}
      </p>
    </div>
  );
}

const acceptanceRateData = [
  {
    name: 'The Times Global Average (2024-26)',
    value: 15,
  },
  {
    name: 'Access Oxbridge (2025)',
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
  buttonHref = '/our-story#our-results'
}: ResultsSectionProps) {
  const shouldReduceMotion = useReducedMotion();
  const [animatedData, setAnimatedData] = useState([
    { name: 'The Times Global Average (2024-26)', value: 0 },
    { name: 'Access Oxbridge (2025)', value: 0 },
  ]);
  const [animationComplete, setAnimationComplete] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  const isResultsPage = variant === 'results-page';

  // Animate bar values when chart comes into view
  const handleChartInView = () => {
    if (!shouldReduceMotion) {
      setTimeout(() => {
        setAnimatedData([
          { name: 'The Times Global Average (2024-26)', value: 15 },
          { name: 'Access Oxbridge (2025)', value: 67 },
        ]);
        // Mark animation as complete after a short delay
        setTimeout(() => setAnimationComplete(true), 100);
      }, 300); // Small delay to ensure smooth animation
    } else {
      // If reduced motion is preferred, set final values immediately
      setAnimatedData([
        { name: 'The Times Global Average (2024-26)', value: 15 },
        { name: 'Access Oxbridge (2025)', value: 67 },
      ]);
      setAnimationComplete(true);
    }
  };

  // Colors based on variant
  const titleColor = isResultsPage ? 'text-black' : 'text-white';
  const subtitleColor = isResultsPage ? 'text-gray-600' : 'text-white/80';
  const chartBgColor = 'bg-white';
  const chartAxisColor = '#6b7280';
  const chartBarColor = '#1e3a8a';
  const textColor = 'text-black';
  const subTextColor = 'text-gray-700';
  const bulletColor = 'text-accent'
  const buttonClasses = 'bg-accent text-white hover:bg-rich-amber-accent hover:text-accent'
    // : 'bg-white text-accent hover:bg-white/90';

  return (
    <section className={`py-20 bg-white`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold text-black text-center mb-8`}>
            {isResultsPage ? "Proven Success" : "Why Our Students Succeed"}
          </h2>
          {!hideSubtitle && (
            <p className={`text-lg text-gray-600`}>
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
            <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Oxbridge Admissions Statistics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={animatedData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <XAxis dataKey="name" stroke={chartAxisColor} />
                <YAxis stroke={chartAxisColor} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                {animationComplete && (
                  <Tooltip content={<ChartTooltip />} cursor={false} />
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
            <h3 className={`text-2xl font-semibold mb-6`}>Why our students succeed:</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <span className={`${bulletColor} font-bold`}>•</span>
                <span className={subTextColor}><strong>Targeted preparation:</strong> Applications are shaped around each student's academic strengths, subject interests, and long-term goals.</span>
              </li>
              <li className="flex gap-3">
                <span className={`${bulletColor} font-bold`}>•</span>
                <span className={subTextColor}><strong>Insider insight:</strong> Guidance is led by Oxbridge graduates and Senior Academic Staff who understand the admissions process from the inside.</span>
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
