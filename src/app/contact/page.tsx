"use client"

import { motion } from "framer-motion";
import { Menu, Twitter, Linkedin, Instagram, Globe, Link } from "lucide-react";

export default function ContactPage() {
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
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="group">
              <label className="block text-sm text-gray-400 mb-1 group-focus-within:text-white transition-colors">Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-white transition-all duration-300"
                required
              />
            </div>
            <div className="group">
              <label className="block text-sm text-gray-400 mb-1 group-focus-within:text-white transition-colors">Email</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-white transition-all duration-300"
                required
              />
            </div>
            <div className="group">
              <label className="block text-sm text-gray-400 mb-1 group-focus-within:text-white transition-colors">Phone Number</label>
              <input 
                type="tel" 
                className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-white transition-all duration-300"
              />
            </div>
            <div className="group">
              <label className="block text-sm text-gray-400 mb-1 group-focus-within:text-white transition-colors">Message</label>
              <textarea 
                rows={1}
                className="w-full bg-transparent border-b border-gray-700 py-2 focus:outline-none focus:border-white transition-all duration-300 resize-none min-h-[40px]"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-[#ffffff] hover:bg-rich-amber-accent text-accent py-4 
              transition-all duration-300 font-bold tracking-widest text-sm uppercase mt-4
              cursor-pointer"
            >
              Send
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
          {/* <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-gray-400 font-serif text-lg mb-4">Visit us</h3>
              <p className="text-xl text-gray-200 font-light leading-relaxed">
                263 Homebush Road<br />
                Strathfield South 2136
              </p>
            </div>
            
            <div className="pt-8">
              <h3 className="text-gray-400 font-serif text-lg mb-4">Talk to us</h3>
              <p className="text-xl text-gray-200 font-light leading-relaxed">
                +61 421 307 998<br />
                <a href="mailto:helen@helenarvan.com" className="hover:text-white transition-colors">helen@helenarvan.com</a>
              </p>
            </div>

            <div className="flex gap-8 pt-12 items-center">
              <a href="#" className="text-white hover:text-gray-400 transition-all transform hover:scale-110"><Twitter size={24} strokeWidth={1.5} /></a>
              <a href="#" className="text-white hover:text-gray-400 transition-all transform hover:scale-110"><Linkedin size={24} strokeWidth={1.5} /></a>
              <a href="#" className="text-white hover:text-gray-400 transition-all transform hover:scale-110"><Instagram size={24} strokeWidth={1.5} /></a>
              <a href="#" className="text-white hover:text-gray-400 transition-all transform hover:scale-110"><Globe size={24} strokeWidth={1.5} /></a>
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  </div>
  );
}