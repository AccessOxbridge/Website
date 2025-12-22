"use client";

import { X, Copy, CheckCircle, Gift, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Lazy load components to minimize performance impact
const SpinWheel = dynamic(() => import('@/components/ui/spin-wheel'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
    </div>
  )
})

export default function ScrollIntentSpinWheel() {
  const [open, setOpen] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [discountResult, setDiscountResult] = useState<{ discount: number; code: string } | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = scrollTop / docHeight;

      if (scrolled > 0.5 && !open && shouldShow) {
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, shouldShow]);

  const handleSpinComplete = (discount: number, code: string) => {
    setDiscountResult({ discount, code });
  };

  const handleClose = () => {
    setOpen(false);
    setDiscountResult(null);
  };

  return (
    <SpinWheelToast
      open={open}
      onClose={handleClose}
      setShouldShow={setShouldShow}
      onSpinComplete={handleSpinComplete}
      discountResult={discountResult}
    />
  );
}

export function SpinWheelToast({
  open,
  onClose,
  setShouldShow,
  onSpinComplete,
  discountResult
}: {
  open: boolean;
  onClose: () => void;
  setShouldShow: Dispatch<SetStateAction<boolean>>;
  onSpinComplete: (discount: number, code: string) => void;
  discountResult: { discount: number; code: string } | null;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (!discountResult) return;
    try {
      await navigator.clipboard.writeText(discountResult.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const getDiscountColor = (percentage: number) => {
    switch (percentage) {
      case 25: return 'text-green-600 bg-green-50 border-green-200';
      case 50: return 'text-blue-600 bg-blue-50 border-blue-200';
      case 75: return 'text-purple-600 bg-purple-50 border-purple-200';
      default: return 'text-primary bg-primary/5 border-primary/20';
    }
  };

  const getDiscountIcon = (percentage: number) => {
    switch (percentage) {
      case 25: return '🎉';
      case 50: return '⭐';
      case 75: return '💎';
      default: return '🎁';
    }
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 z-50 w-auto sm:w-full max-w-sm rounded-xl
          bg-[#000000] p-4 sm:p-6 text-white shadow-2xl"
        >
          {/* Close */}
          <button
            onClick={() => {
              setShouldShow(false);
              onClose();
            }}
            className="absolute right-3 top-3 rounded-full bg-white/20 p-1.5 hover:bg-white/30"
          >
            <X className="h-4 w-4" />
          </button>

          {!discountResult ? (
            // Show Spin Wheel
            <>
              <p className="mb-2 text-xs tracking-widest text-white/70 uppercase">
                🎯 Special Offer
              </p>

              <h3 className="mb-3 text-lg font-semibold text-[#d6b34a]">
                Spin for a Discount!
              </h3>

              <p className="mb-4 text-sm leading-relaxed text-white/90">
                Win up to 75% off our premium mentoring sessions. Every spin is a winner!
              </p>

              {/* Mini Spin Wheel */}
              <div className="flex justify-center mb-4">
                <Suspense fallback={
                  <div className="flex items-center justify-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#d6b34a]"></div>
                  </div>
                }>
                  <SpinWheel onSpinComplete={onSpinComplete} size="small" />
                </Suspense>
              </div>

              <p className="text-xs text-white/70">
                *Valid for 30 days • Cannot combine with other offers
              </p>
            </>
          ) : (
            // Show Discount Result
            <>
              <div className="text-center">
                {/* Header */}
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl animate-bounce">
                    {getDiscountIcon(discountResult.discount)}
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-[#d6b34a]">
                  Congratulations!
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-white/90">
                  You've won a discount on our mentoring sessions!
                </p>

                {/* Discount Amount */}
                <div className={`inline-block text-center p-4 rounded-xl border-2 mb-4 ${getDiscountColor(discountResult.discount)}`}>
                  <div className="flex items-center justify-center mb-2">
                    <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                    <span className="text-2xl font-bold">{discountResult.discount}% OFF</span>
                    <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
                  </div>
                  <p className="text-xs opacity-80">
                    Valid for all mentoring session packages
                  </p>
                </div>

                {/* Discount Code */}
                <div className="mb-4">
                  <label className="block text-xs font-medium text-white/70 mb-2">
                    Your Discount Code
                  </label>

                  <div className="flex items-center justify-center space-x-2">
                    <div className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 font-mono text-sm font-bold tracking-wider text-white">
                      {discountResult.code}
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="p-2 bg-[#d6b34a] text-[#1e2f55] rounded-lg hover:bg-[#c7a741] transition-colors"
                      title="Copy to clipboard"
                    >
                      {copied ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {copied && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[#d6b34a] text-xs font-medium mt-2"
                    >
                      Code copied!
                    </motion.p>
                  )}
                </div>

                {/* Instructions */}
                <div className="bg-white/10 rounded-lg p-3 mb-4">
                  <h4 className="font-semibold text-white text-sm mb-2 flex items-center">
                    <Gift className="w-3 h-3 mr-1" />
                    How to use:
                  </h4>
                  <ul className="text-xs text-white/70 space-y-1">
                    <li>• Book a mentoring session through our contact form</li>
                    <li>• Mention your discount code during booking</li>
                    <li>• Code is valid for 30 days</li>
                    <li>• Cannot be combined with other offers</li>
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={onClose}
                  className="w-full bg-[#d6b34a] text-[#1e2f55] font-bold py-2 px-4 rounded-lg hover:bg-[#c7a741] transition-all transform hover:scale-105"
                >
                  Book Your Session Now
                </button>
              </div>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}