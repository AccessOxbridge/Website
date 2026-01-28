'use client';

import { memo, useRef } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

// Custom tick component that wraps text
const WrappedTick = ({ x, y, payload }: any) => {
  const words = payload.value.split(' ');
  const maxWidth = 200; // Maximum width before wrapping
  const fontSize = 16;
  const lineHeight = fontSize * 1.2;
  
  const lines: string[] = [];
  let currentLine = '';
  
  words.forEach((word: string) => {
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    // Rough estimate: each character is about fontSize * 0.6 wide
    const estimatedWidth = testLine.length * fontSize * 0.6;
    
    if (estimatedWidth > maxWidth && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });
  
  if (currentLine) {
    lines.push(currentLine);
  }
  
  return (
    <g transform={`translate(${x},${y})`}>
      {lines.map((line, index) => (
        <text
          key={index}
          x={0}
          y={index * lineHeight + 10}
          textAnchor="middle"
          fontSize={fontSize}
          fill="#6b7280"
          dy="0.71em"
        >
          {line}
        </text>
      ))}
    </g>
  );
};

const tooltipContainerStyle = {
  backgroundColor: '#ffffff',
  border: '2px solid #071c3a',
  borderRadius: '12px',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  padding: '12px 16px',
  fontSize: '14px',
  fontWeight: '600',
  color: 'black',
} as const;

const ChartTooltip = memo(function ChartTooltip({ active, payload }: { active?: boolean; payload?: any[] }) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  const dataName = item.payload?.name as string;
  const value = item.payload?.name === 'Access Oxbridge (2025)' ? 67 : item.payload?.name === 'The Times Global Oxbridge Acceptance Rate (2024-26)' ? 15 : item.value;
  const isAccessOxbridge = dataName === 'Access Oxbridge (2025)';
  const isGlobalTimes = dataName === 'The Times Global Oxbridge Acceptance Rate (2024-26)';
  return (
    <div
      style={tooltipContainerStyle}
    >
      <p style={{ fontSize: '12px', fontWeight: '500', marginBottom: '4px', color: 'black' }}>Acceptance Rate</p>
      {isGlobalTimes ? (
        <>
          <p style={{ color: '#071c3a' }}>Global Oxford Acceptance — 14%</p>
          <p style={{ color: '#071c3a' }}>Global Cambridge Acceptance — 16%</p>
        </>
      ) : (
        <p style={{ color: '#071c3a' }}>
          {value}%{isAccessOxbridge && ' — Out of 84 students, 56 were successful in their applications to either Oxford or Cambridge'}
        </p>
      )}
    </div>
  );
});

const acceptanceRateData = [
  {
    name: 'The Times Global Oxbridge Acceptance Rate (2024-26)',
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
  const chartRef = useRef<HTMLDivElement>(null);

  const isResultsPage = variant === 'results-page';

  const chartBgColor = 'bg-white';
  const chartAxisColor = '#6b7280';
  const textColor = 'text-black';
  const subTextColor = 'text-gray-700';
  const bulletColor = 'text-accent'
  const buttonClasses = 'bg-accent text-white hover:bg-rich-amber-accent hover:text-accent'

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
Why Our Students Succeed
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          <div className={`${chartBgColor} p-8 rounded-lg text-center`}>
            <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>Oxbridge Admissions Statistics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={acceptanceRateData} margin={{ top: 20, right: 30, left: 0, bottom: 80 }}>
                <XAxis 
                  className='mt-12'
                  dataKey="name" 
                  stroke={chartAxisColor}
                  textAnchor="middle"
                  height={80}
                  tick={<WrappedTick />}
                />
                <YAxis stroke={chartAxisColor} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                <Tooltip
                  content={<ChartTooltip />}
                  cursor={false}
                  // Prevent the tooltip from capturing the pointer and causing hover flicker.
                  wrapperStyle={{ pointerEvents: 'none' }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} isAnimationActive={false}>
                  {acceptanceRateData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={"#071c3a"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col justify-center">
            {/* <h3 className={`text-2xl font-semibold mb-6`}>Why our students succeed:</h3> */}
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
              className={`inline-flex items-center justify-center px-6 py-3 ${buttonClasses} font-bold rounded-md transition-colors 
                duration-300`}
            >
              {buttonText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
