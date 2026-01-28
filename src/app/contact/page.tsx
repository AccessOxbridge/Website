"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Instagram, Globe, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again later.");
      }

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-accent text-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Left Side: Header & Form */}
          <div className="space-y-16 mt-12">
            <div className="space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl lg:text-[100px] font-serif leading-none tracking-tight"
              >
                Contact Us
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-gray-300 text-lg lg:text-xl max-w-md font-light leading-relaxed"
              >
                Please feel free to contact us and we will get back to you as soon as we can.
              </motion.p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12 max-w-md"
              onSubmit={handleSubmit}
            >
              <div className="group">
                <label className="block text-sm text-gray-400 mb-1 group-focus-within:text-white transition-colors">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-white transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="group">
                <label className="block text-sm text-gray-400 mb-1 group-focus-within:text-white transition-colors">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-white transition-all duration-300"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="group">
                <label className="block text-sm text-gray-400 mb-1 group-focus-within:text-white transition-colors">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-white transition-all duration-300"
                  disabled={isSubmitting}
                />
              </div>
              <div className="group">
                <label className="block text-sm text-gray-400 mb-1 group-focus-within:text-white transition-colors">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={1}
                  className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-white transition-all duration-300 resize-none min-h-[40px]"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ffffff] hover:bg-rich-amber-accent text-accent py-4 
                transition-all duration-300 font-bold tracking-widest text-sm uppercase mt-4
                cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send"
                )}
              </button>
            </motion.form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="pt-32 space-y-16 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex justify-center lg:justify-start"
            >
              <img
                src="/logo.webp"
                alt="Oxbridge Logo"
                className="w-64 h-64 lg:w-96 lg:h-96 object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6 w-full"
            >
              <a href="/consultation" className="bg-[#ffffff] hover:bg-rich-amber-accent text-accent transition-all duration-300 
              text-base capitalize px-18 py-5 w-full font-bold cursor-pointer">
                I want to speak to a specialist
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}