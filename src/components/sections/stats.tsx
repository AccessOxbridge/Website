import { homeConfig } from "@/configs/home.config";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Stats() {
  return (
    <motion.div
        className="relative z-20 bg-[#ffffff] min-h-[45vh] py-8 sm:py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-3">
          {homeConfig.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1], // luxury easing
                  },
                },
              }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#000000]">
                <Check className="h-5 w-5 text-white" />
              </div>

              <h5 className="text-4xl font-bold text-[#000000]">{stat.value}</h5>
              <h6 className="mt-2 text-2xl tracking-tighter text-black">
                {stat.title}
              </h6>
              <p className="mt-1 text-lg text-black/80">
                {stat.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
  );
}