"use client";

import { homeConfig } from "@/configs/home.config";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Stats() {
  return (
    <motion.div
        className="relative z-20 bg-white text-black min-h-[35vh] py-8 sm:py-12"
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
        <div className="container mx-auto grid grid-cols-1 gap-8 px-6 md:grid-cols-3 font-serif">
          {homeConfig.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl overflow-hidden"
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
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated border - top */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-black/30 to-transparent origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                whileHover={{ scaleX: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              />
              
              {/* Animated border - right */}
              <motion.div
                className="absolute top-0 right-0 bottom-0 w-[2px] bg-linear-to-b from-transparent via-black/30 to-transparent origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                whileHover={{ scaleY: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
                transition={{ duration: 0.8, delay: idx * 0.1 + 0.2, ease: "easeOut" }}
              />
              
              {/* Animated border - bottom */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-black/30 to-transparent origin-right"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                whileHover={{ scaleX: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
                transition={{ duration: 0.8, delay: idx * 0.1 + 0.4, ease: "easeOut" }}
              />
              
              {/* Animated border - left */}
              <motion.div
                className="absolute top-0 left-0 bottom-0 w-[2px] bg-linear-to-b from-transparent via-black/30 to-transparent origin-bottom"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                whileHover={{ scaleY: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
                transition={{ duration: 0.8, delay: idx * 0.1 + 0.6, ease: "easeOut" }}
              />
              
              {/* Animated gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-linear-to-br from-black/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />
              
              {/* Subtle shadow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.h5 
                  className="text-6xl font-bold bg-linear-to-br from-black via-black to-black/70 bg-clip-text text-transparent group-hover:from-black group-hover:via-black/90 group-hover:to-black/60 transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.value}
                </motion.h5>
                <h6 className="mt-2 text-2xl tracking-tighter">
                  {stat.title}
                </h6>
                <p className="mt-1 text-lg text-black/80">
                  {stat.subtitle}
                </p>
              </div>

              {/* Decorative corner accents */}
              <motion.div
                className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-black/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
              <motion.div
                className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-black/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-black/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-black/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
  );
}