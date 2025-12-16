"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 z-1002 w-full shadow-sm transition-all duration-300 backdrop-blur-md
      bg-blend-exclusion">
        <div className="mx-auto h-16 max-w-[1440px] px-4 md:px-10 grid grid-cols-3 items-center">
          <div className="col-span-1 flex items-center">
            <button
              aria-label="Navigation Menu"
              className="group flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
          <Link
            href="/"
            aria-label="Access Oxbridge"
            className="col-span-1 flex items-center justify-center transition-opacity gap-2"
          >
            <Image src="/logo.webp" alt="Access Oxbridge" width={32} height={32} />
            <h1 className="text-lg hidden md:flex sm:text-2xl tracking-tighter text-center whitespace-nowrap">
              Access Oxbridge
            </h1>
          </Link>
          <div className="col-span-1 md:flex items-center justify-end gap-4 w-fit sm:w-full h-fit">
            <Link
              href="#"
              className="px-1 sm:px-4 py-2 text-[10px] sm:text-sm font-semibold border whitespace-nowrap
              transition-all uppercase tracking-tighter bg-white text-black"
            >
              Book free consultation
            </Link>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <nav
          className="fixed inset-0 z-1001 bg-[#1a1a1a]/95 text-white backdrop-blur-md"
          aria-hidden="false"
        >
          <div className="flex h-full flex-col">
            <div className="flex h-20 items-center justify-between px-10">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 text-sm uppercase tracking-wider text-white hover:text-[#1b8a7a]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back
              </button>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white hover:text-[#1b8a7a]"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-10 py-8">
              <ul className="space-y-6">
                <li>
                  <a href="#" className="flex w-full items-center justify-between text-2xl font-light text-white hover:text-[#1b8a7a]">
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex w-full items-center justify-between text-2xl font-light text-white hover:text-[#1b8a7a]">
                    <span>Guides</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex w-full items-center justify-between text-2xl font-light text-white hover:text-[#1b8a7a]">
                    <span>Mentorship</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex w-full items-center justify-between text-2xl font-light text-white hover:text-[#1b8a7a]">
                    <span>Testimonials</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex w-full items-center justify-between text-2xl font-light text-white hover:text-[#1b8a7a]">
                    <span>Resources</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex w-full items-center justify-between text-2xl font-light text-white hover:text-[#1b8a7a]">
                    <span>FAQs</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
