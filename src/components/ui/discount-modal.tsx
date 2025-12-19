"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { X, Copy, CheckCircle, Gift, Sparkles } from 'lucide-react'
import { useState } from 'react'

interface DiscountModalProps {
  isOpen: boolean
  onClose: () => void
  discount: number
  code: string
}

export default function DiscountModal({ isOpen, onClose, discount, code }: DiscountModalProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy code:', err)
    }
  }

  const getDiscountColor = (percentage: number) => {
    switch (percentage) {
      case 25: return 'text-green-600 bg-green-50 border-green-200'
      case 50: return 'text-blue-600 bg-blue-50 border-blue-200'
      case 75: return 'text-purple-600 bg-purple-50 border-purple-200'
      default: return 'text-primary bg-primary/5 border-primary/20'
    }
  }

  const getDiscountIcon = (percentage: number) => {
    switch (percentage) {
      case 25: return '🎉'
      case 50: return '⭐'
      case 75: return '💎'
      default: return '🎁'
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-primary to-secondary p-6 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center justify-center mb-4">
                <div className="text-6xl animate-bounce">
                  {getDiscountIcon(discount)}
                </div>
              </div>

              <h2 className="text-2xl font-bold text-center mb-2">Congratulations!</h2>
              <p className="text-center text-white/90">
                You've won a discount on our mentoring sessions!
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Discount Amount */}
              <div className={`text-center p-6 rounded-xl border-2 mb-6 ${getDiscountColor(discount)}`}>
                <div className="flex items-center justify-center mb-2">
                  <Sparkles className="w-6 h-6 mr-2 animate-pulse" />
                  <span className="text-4xl font-bold">{discount}% OFF</span>
                  <Sparkles className="w-6 h-6 ml-2 animate-pulse" />
                </div>
                <p className="text-sm opacity-80">
                  Valid for all mentoring session packages
                </p>
              </div>

              {/* Discount Code */}
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Discount Code
                </label>

                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg px-4 py-3 font-mono text-lg font-bold tracking-wider">
                    {code}
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="p-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {copied && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-sm font-medium"
                  >
                    Code copied to clipboard!
                  </motion.p>
                )}
              </div>

              {/* Instructions */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <Gift className="w-4 h-4 mr-2" />
                  How to use your code:
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Book a mentoring session through our contact form</li>
                  <li>• Mention your discount code during booking</li>
                  <li>• Code is valid for 30 days from today</li>
                  <li>• Cannot be combined with other offers</li>
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={onClose}
                className="w-full mt-6 bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all transform hover:scale-105"
              >
                Book Your Session Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}