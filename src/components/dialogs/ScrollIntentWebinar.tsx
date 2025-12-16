"use client";

import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function ScrollIntentWebinar() {
  const [open, setOpen] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrolled = scrollTop / docHeight;

      if (scrolled > 0.6 && !open && shouldShow) {
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return <WebinarToast open={open} onClose={() => setOpen(false)} setShouldShow={setShouldShow} />;
}

export function WebinarToast({
  open,
  onClose,
  setShouldShow
}: {
  open: boolean;
  onClose: () => void;
  setShouldShow: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-50 w-full max-w-sm rounded-xl bg-[#1e2f55] p-6 text-white shadow-2xl"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-white/20 p-1.5 hover:bg-white/30"
          >
            <X className="h-4 w-4" onClick={() => setShouldShow(show => show == true ? false : true)} />
          </button>

          <p className="mb-2 text-xs tracking-widest text-white/70 uppercase">
            Upcoming webinar
          </p>

          <h3 className="mb-3 text-lg font-semibold text-[#d6b34a]">
            Get a head start on your Oxbridge application
          </h3>

          <p className="mb-4 text-sm leading-relaxed text-white/90">
            Learn how preparing in Year 12 gives students a competitive
            advantage for Oxbridge admissions.
          </p>

          <p className="mb-4 text-sm font-medium text-[#d6b34a]">
            Wed 14<sup>th</sup> Jan · 6:00pm (UK)
          </p>

          <a
            href="/webinar-registration"
            className="inline-block w-full rounded-md bg-[#d6b34a] py-2.5 text-center text-sm font-semibold text-[#1e2f55] transition hover:bg-[#c7a741]"
          >
            Register Now
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}