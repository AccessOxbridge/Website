"use client";

import { homeConfig } from "@/configs/home.config";
import { getIcon } from "@/configs/icon-map";
import { motion } from "framer-motion";

export default function ExpertiseSection() {
    return (
      <section className="relative bg-accent py-16 sm:py-28">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           variants={{
             hidden: {},
             visible: { transition: { staggerChildren: 0.15 } },
           }}
          className="flex flex-col items-center text-center px-4"
        >
          <motion.img
            src={homeConfig.expertise.logo.src}
            alt={homeConfig.expertise.logo.alt}
            width={homeConfig.expertise.logo.width}
            height={homeConfig.expertise.logo.height}
            className="w-20 sm:w-[120px]"
          />
          <motion.h1 className="text-center w-full sm:w-2/3 mx-auto text-xl mt-6 text-white sm:text-3xl tracking-tighter font-medium">
            {homeConfig.expertise.description}
          </motion.h1>
        </motion.div>
  
        {/* </div> */}
        {/* Divider */}
        <div className="mx-auto my-20 h-px w-full max-w-5xl bg-gray-200" />
  
        <div className="container mx-auto px-6 md:px-10 lg:px-12">
  
          {/* Grid */}
          <motion.div
            className="grid gap-16 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {homeConfig.expertise.items.map((item, idx) => {
              const IconComponent = getIcon(item.icon);
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#ffffff]">
                    <IconComponent className="h-6 w-6" />
                  </div>
  
                  <h3 className="mb-4 text-2xl font-bold tracking-tighter text-white">
                    {item.title}
                  </h3>
  
                <p className="max-w-md text-base leading-relaxed text-white" dangerouslySetInnerHTML={{ __html: item.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}>
                </p>
                </motion.div>
              );
            })}
          </motion.div>
  
          {/* Divider */}
          <div className="mx-auto mt-20 h-px w-full max-w-5xl bg-gray-200" />
        </div>
      </section>
    );
  }