"use client";

import { X } from "lucide-react";
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

const DiscountModal = dynamic(() => import('@/components/ui/discount-modal'), {
  ssr: false
})

export default function ScrollIntentSpinWheel() {
  const [open, setOpen] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [showModal, setShowModal] = useState(false);
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
    setShowModal(true);
    setOpen(false); // Close the spin wheel dialog when modal opens
  };

  const handleModalClose = () => {
    setShowModal(false);
    setDiscountResult(null);
  };

  return (
    <>
      <SpinWheelToast
        open={open}
        onClose={() => setOpen(false)}
        setShouldShow={setShouldShow}
        onSpinComplete={handleSpinComplete}
      />
      <Suspense fallback={null}>
        <DiscountModal
          isOpen={showModal}
          onClose={handleModalClose}
          discount={discountResult?.discount || 0}
          code={discountResult?.code || ''}
        />
      </Suspense>
    </>
  );
}

export function SpinWheelToast({
  open,
  onClose,
  setShouldShow,
  onSpinComplete
}: {
  open: boolean;
  onClose: () => void;
  setShouldShow: Dispatch<SetStateAction<boolean>>;
  onSpinComplete: (discount: number, code: string) => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 sm:right-auto sm:left-6 sm:bottom-6 z-50 w-auto sm:w-full max-w-sm rounded-xl
          bg-[#000000] p-4 sm:p-6 text-white shadow-2xl h-[75%]"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-white/20 p-1.5 hover:bg-white/30"
          >
            <X className="h-4 w-4" onClick={() => setShouldShow(show => show == true ? false : true)} />
          </button>

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
        </motion.div>
      )}
    </AnimatePresence>
  );
}