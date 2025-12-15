import React from "react";
import Link from "next/link";
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Search,
  ChevronUp,
  Twitter,
  AtSign,
  Music,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-neutral-900 font-sans antialiased border-t border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-16">
        {/* Top Header */}
        <div className="mb-6">
          <h2 className="text-[13px] font-bold tracking-[0.1em] uppercase text-black">
            Aston Martin
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-200 mb-10"></div>

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-24">
          {/* Column 1: Our World */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm text-neutral-900 font-normal mb-1">
              Our World
            </h3>
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors"
                >
                  Models
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors"
                >
                  Owners
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors"
                >
                  F1 Team
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors"
                >
                  Preowned
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors"
                >
                  Experiences
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Dealers */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm text-neutral-900 font-normal mb-1">
              Dealers
            </h3>
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors"
                >
                  Enquiry
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm text-neutral-900 font-normal mb-1">
              Corporate
            </h3>
            <ul className="flex flex-col space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors"
                >
                  Media
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors"
                >
                  Investors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Find a dealer */}
          <div className="flex flex-col space-y-4 lg:pl-10">
            <h3 className="text-sm text-neutral-900 font-normal mb-1">
              Find a dealer
            </h3>
            <div className="relative w-full max-w-[300px]">
              <input
                type="text"
                placeholder="Town/Postcode"
                className="w-full border-b border-neutral-300 py-2 text-sm text-neutral-900 placeholder:text-neutral-500 bg-transparent focus:outline-none focus:border-[#1b8a7a] transition-colors pr-8"
              />
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            </div>
          </div>
        </div>

        {/* Legal Links Top */}
        <div className="flex flex-col items-start space-y-8 mb-16">
          <Link
            href="#"
            className="text-[10px] sm:text-xs font-medium text-neutral-500 hover:text-[#1b8a7a] uppercase tracking-wide border-b border-neutral-300 pb-0.5 hover:border-[#1b8a7a] transition-colors flex items-center gap-1"
          >
            <span className="text-[10px]">&gt;</span> MODERN SLAVERY STATEMENT
            ACT
          </Link>

          <p className="text-[10px] sm:text-[11px] leading-relaxed text-neutral-500 max-w-4xl">
            The emissions/fuel economy figures quoted are sourced from official
            regulated test results obtained through laboratory testing. They are
            for comparability purposes only and may not reflect your real
            driving experience, which may vary depending on factors including
            road conditions, weather, vehicle load and driving style.
          </p>

          <Link
            href="#"
            className="text-[10px] sm:text-xs font-medium text-neutral-500 hover:text-[#1b8a7a] uppercase tracking-wide border-b border-neutral-300 pb-0.5 hover:border-[#1b8a7a] transition-colors flex items-center gap-1"
          >
            <span className="text-[10px]">&gt;</span> WLTP - CONSUMPTION AND
            EMISSION VALUES
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pt-4">
          {/* International Site Selector */}
          <button className="flex items-center gap-2 text-xs text-neutral-800 hover:text-[#1b8a7a] transition-colors group">
            <span>International site</span>
            <ChevronUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>

          {/* Right Side: Social & Legal */}
          <div className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-auto">
            {/* Social Icons */}
            <div className="flex items-center gap-5 text-neutral-500">
              <Link
                href="#"
                className="hover:text-[#1b8a7a] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-[18px] h-[18px]" strokeWidth={2} />
              </Link>
              <Link
                href="#"
                className="hover:text-[#1b8a7a] transition-colors"
                aria-label="Threads"
              >
                <AtSign className="w-[18px] h-[18px]" strokeWidth={2} />
              </Link>
              <Link
                href="#"
                className="hover:text-[#1b8a7a] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-[18px] h-[18px]" strokeWidth={2} />
              </Link>
              <Link
                href="#"
                className="hover:text-[#1b8a7a] transition-colors"
                aria-label="X"
              >
                {/* Custom X Icon replacement using minimal SVG path or Lucide fallback */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-[17px] h-[17px]"
                >
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </Link>
              <Link
                href="#"
                className="hover:text-[#1b8a7a] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-[18px] h-[18px]" strokeWidth={2} />
              </Link>
              <Link
                href="#"
                className="hover:text-[#1b8a7a] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-[18px] h-[18px]" strokeWidth={2} />
              </Link>
              <Link
                href="#"
                className="hover:text-[#1b8a7a] transition-colors"
                aria-label="TikTok"
              >
                <Music className="w-[18px] h-[18px]" strokeWidth={2} />
              </Link>
            </div>

            {/* Copyright & Links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-neutral-500">
              <Link
                href="#"
                className="hover:text-[#1b8a7a] transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="#"
                className="hover:text-[#1b8a7a] transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="hover:text-[#1b8a7a] transition-colors"
              >
                Cookies
              </Link>
              <span className="text-neutral-400">
                © Aston Martin 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}