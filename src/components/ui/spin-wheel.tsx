"use client"

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Gift, Sparkles } from 'lucide-react'

interface SpinWheelProps {
  onSpinComplete: (discount: number, code: string) => void
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}

const DISCOUNTS = [
  { percentage: 25, color: '#10B981', weight: 40 }, // Green - most common
  { percentage: 50, color: '#3B82F6', weight: 35 }, // Blue - medium common
  { percentage: 75, color: '#8B5CF6', weight: 25 }, // Purple - rarest
]

export default function SpinWheel({ onSpinComplete, disabled = false, size = 'large' }: SpinWheelProps) {
  const wheelSize = size === 'small' ? 240 : size === 'medium' ? 280 : 320
  const fontSize = size === 'small' ? 'text-sm' : size === 'medium' ? 'text-base' : 'text-lg'
  const buttonSize = size === 'small' ? 'text-sm' : size === 'medium' ? 'text-base' : 'text-lg'
  const buttonPadding = size === 'small' ? 'px-6 py-3' : size === 'medium' ? 'px-7 py-3.5' : 'px-8 py-4'
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const wheelRef = useRef<HTMLDivElement>(null)

  const generateDiscountCode = (percentage: number) => {
    const prefix = percentage === 25 ? 'OX25' : percentage === 50 ? 'OX50' : 'OX75'
    const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `${prefix}${randomNum}`
  }

  const spinWheel = () => {
    if (isSpinning || disabled) return

    setIsSpinning(true)

    // Calculate weighted random selection
    const totalWeight = DISCOUNTS.reduce((sum, discount) => sum + discount.weight, 0)
    let random = Math.random() * totalWeight

    let selectedDiscount = DISCOUNTS[0]
    for (const discount of DISCOUNTS) {
      random -= discount.weight
      if (random <= 0) {
        selectedDiscount = discount
        break
      }
    }

    // Calculate rotation to land on selected segment
    const segmentAngle = 360 / DISCOUNTS.length
    const selectedIndex = DISCOUNTS.indexOf(selectedDiscount)
    const targetAngle = selectedIndex * segmentAngle + segmentAngle / 2

    // Add multiple full rotations plus target angle
    const spins = 5 + Math.random() * 3 // 5-8 full rotations
    const finalRotation = rotation + (spins * 360) + (360 - targetAngle)

    setRotation(finalRotation)

    // Generate code and call callback after animation
    const code = generateDiscountCode(selectedDiscount.percentage)
    setTimeout(() => {
      setIsSpinning(false)
      onSpinComplete(selectedDiscount.percentage, code)
    }, 4000) // Match animation duration
  }

  const segmentAngle = 360 / DISCOUNTS.length

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Wheel Container */}
      <div className="relative">
        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-500"></div>
        </div>

        {/* Wheel */}
        <motion.div
          ref={wheelRef}
          className={`relative rounded-full border-8 border-gray-200 shadow-2xl cursor-pointer`}
          style={{
            width: wheelSize,
            height: wheelSize,
            background: `conic-gradient(
              ${DISCOUNTS.map((discount, index) => {
                const startAngle = index * segmentAngle
                const endAngle = (index + 1) * segmentAngle
                return `${discount.color} ${startAngle}deg ${endAngle}deg`
              }).join(', ')}
            )`
          }}
          animate={{ rotate: rotation }}
          transition={{
            duration: 4,
            ease: [0.25, 0.1, 0.25, 1], // Custom easing for realistic spin
          }}
          onClick={spinWheel}
          whileHover={!isSpinning && !disabled ? { scale: 1.02 } : {}}
          whileTap={!isSpinning && !disabled ? { scale: 0.98 } : {}}
        >
          {/* Center Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
              <Gift className="w-8 h-8 text-gray-600" />
            </div>
          </div>

          {/* Segment Labels */}
          {DISCOUNTS.map((discount, index) => {
            const angle = index * segmentAngle + segmentAngle / 2
            const radius = wheelSize * 0.375 // Distance from center (37.5% of wheel size)
            const x = Math.cos((angle - 90) * Math.PI / 180) * radius
            const y = Math.sin((angle - 90) * Math.PI / 180) * radius

            return (
              <div
                key={index}
                className={`absolute text-white font-bold flex items-center justify-center ${fontSize}`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${angle}deg)`,
                  transformOrigin: 'center',
                }}
              >
                <span className="transform -rotate-90">
                  {discount.percentage}%
                  <br />
                  OFF
                </span>
              </div>
            )
          })}
        </motion.div>

        {/* Sparkle Effects */}
        {isSpinning && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: Math.random() * wheelSize - wheelSize / 2,
                  y: Math.random() * wheelSize - wheelSize / 2,
                  scale: 0,
                  opacity: 0
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: 360
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                style={{
                  left: '50%',
                  top: '50%',
                }}
              >
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Spin Button */}
      <button
        onClick={spinWheel}
        disabled={isSpinning || disabled}
        className={`
          ${buttonPadding} rounded-full font-bold uppercase tracking-wider
          transition-all duration-300 shadow-lg hover:shadow-xl ${buttonSize}
          ${isSpinning || disabled
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-rich-amber-accent text-accent transform hover:scale-105'
          }
        `}
      >
        {isSpinning ? 'Spinning...' : 'Spin for Discount!'}
      </button>

      {/* Instructions */}
      <p className="text-gray-600 text-center max-w-md">
        Spin the wheel to win a discount code for our mentoring sessions!
        Higher discounts are rarer - good luck! 🎯
      </p>
    </div>
  )
}