"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/sections/header";
import FAQs from "@/components/home/faqs";
import { homeConfig } from "@/configs/home.config";

const consultationStages = [
  {
    number: "01",
    title: "Academic Assessment",
    description: "Evaluate your child's current academic profile, achievements, and overall readiness as a competitive university applicant."
  },
  {
    number: "02",
    title: "Strengths and Opportunities Analysis",
    description: "Review your child's academic and extracurricular strengths and identify areas to improve for admission to their target universities."
  },
  {
    number: "03",
    title: "Understanding Our Approach",
    description: "Explore how our personalised mentoring works and see the tailored timeline and roadmap we create to maximise admissions success."
  },
  {
    number: "04",
    title: "Planning and Support Options",
    description: "Develop a customised plan with support options designed to meet your child's needs and fit your family's budget."
  }
];

function ConsultationStage({ stage, index }: { stage: typeof consultationStages[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="space-y-4"
    >
      <div className="flex items-start gap-6">
        <div className="text-4xl md:text-5xl font-bold text-rich-amber-accent flex-shrink-0">
          {stage.number}
        </div>
        <div className="flex-1 pt-2">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {stage.title}
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed">
            {stage.description}
          </p>
        </div>
      </div>
      {index < consultationStages.length - 1 && (
        <div className="ml-12 h-px bg-gray-200 my-8" />
      )}
    </motion.div>
  );
}

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-accent">
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Consultation Stages */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  What to Expect in Your Consultation
                </h2>
                <p className="text-lg text-gray-400">
                  Our consultation process is designed to give you clarity and confidence in your application journey
                </p>
              </div>

              <div className="space-y-8">
                {consultationStages.map((stage, index) => (
                  <ConsultationStage key={stage.number} stage={stage} index={index} />
                ))}
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-rich-beige-accent rounded-2xl shadow-lg p-8 md:p-10 lg:sticky lg:top-24"
            >
              <h2 className="text-2xl md:text-3xl font-bold  mb-6 text-left">
                Book Your Free Consultation
              </h2>
              <p className="text-base text-gray-800 mb-8 text-left">
                Fill out the form below and we'll get back to you within 24 hours to schedule your consultation
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your goals and any questions you have
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="E.g., I'm interested in applying to Oxford for Computer Science..."
                  />
                </div>

                <input type="checkbox"/>
                <label> I am a Student/Parent/School Teacher</label>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 text-lg"
                >
                  Submit Booking Request
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <div className="bg-white">
        <FAQs />
      </div>
    </div>
  );
}

