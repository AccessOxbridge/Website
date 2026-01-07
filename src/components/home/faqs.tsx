"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/configs/types";
import { homeConfig } from "@/configs/home.config";
import Markdown from "react-markdown";

function FAQItem({ faq, index }: { faq: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      id="faqs"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 text-left flex justify-between items-center hover:bg-gray-50 rounded-lg transition-colors duration-200"
      >
        <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-gray-500 shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-4">
              {/* <p className="text-gray-700 leading-relaxed">{faq.answer}</p> */}
              <Markdown>
                {faq.answer}
              </Markdown>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQs({ showAdditionalFAQBox = true }: { showAdditionalFAQBox?: boolean }) {
  return (
    <section className="pt-16 sm:pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            FAQs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about UCAS applications, Oxbridge interviews, and admissions tests.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {homeConfig.faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className=" rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-sm underline font-bold text-accent mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-0">
                {category.faqs.map((faq, faqIndex) => (
                  <FAQItem
                    key={faqIndex}
                    faq={faq}
                    index={faqIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {showAdditionalFAQBox && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center py-14 w-full bg-rich-amber-accent"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-8">
              Not found what you were looking for ?
            </h2>
            <button className="bg-black text-white px-4 py-2">Ask us any question</button>
          </motion.div>
        )}

      </div>

    </section>
  );
}