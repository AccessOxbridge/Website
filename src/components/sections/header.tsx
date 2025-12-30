"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className={`fixed top-0 z-1002 w-full shadow-sm transition-all duration-300 backdrop-blur-md bg-black/20 text-white`}>
        <div className="mx-auto h-16 max-w-[1440px] px-4 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Mobile hamburger menu */}
            <button
              aria-label="Navigation Menu"
              className={`md:hidden group flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10 text-white`}
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

            <Link
              href="/"
              aria-label="Access Oxbridge"
              className="flex items-center transition-opacity gap-2"
            >
              <Image src="/logo.webp" alt="Access Oxbridge" width={32} height={32} />
              <h1 className={`text-lg hidden md:flex sm:text-2xl tracking-tighter whitespace-nowrap text-white`}>
                Access Oxbridge
              </h1>
            </Link>
          </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 flex-1 justify-center">
          <a href="#" className="text-xs font-light text-white hover:text-rich-amber-accent transition-colors uppercase tracking-wider">
            UK University Applicants
          </a>
          <Link href="/services" className="text-xs font-light text-white hover:text-rich-amber-accent transition-colors uppercase tracking-wider">
            Oxbridge Applicants
          </Link>
          <a href="#" className="text-xs font-light text-white hover:text-rich-amber-accent transition-colors uppercase tracking-wider">
            FREE RESOURCES
          </a>
          <Link href="/services" className="text-xs font-light text-white hover:text-rich-amber-accent transition-colors uppercase tracking-wider">
            OUR SERVICES
          </Link>
          <Link href="/contact" className="text-xs font-light text-white hover:text-rich-amber-accent transition-colors uppercase tracking-wider">
            CONTACT US
          </Link>
        </nav>

        <div className="flex items-center shrink-0">
          <Link
            href="#"
            className={`px-1 sm:px-4 py-2 text-[10px] sm:text-sm font-serif font-black border whitespace-nowrap
            transition-all uppercase tracking-tight bg-rich-amber-accent text-rich-purple border-rich-purple hover:bg-gray-100'`}
          >
            Book free consultation
          </Link>
        </div>
      </div>
    </header>

    {/* Mobile dropdown menu */}
    {isMenuOpen && (
      <nav
        className="fixed inset-0 z-1001 bg-[#1a1a1a]/95 text-white backdrop-blur-md md:hidden"
        aria-hidden="false"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-between px-10">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-sm uppercase tracking-wider"
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
              className="p-2"
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
            <ul className="space-y-6 uppercase">
              <li onClick={() => setIsMenuOpen(false)}>
                <a href="#" className="flex w-full items-center justify-between text-2xl font-light text-white hover:underline">
                  <span>UK University Applicants</span>
                </a>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link href="/services" className="flex w-full items-center justify-between text-2xl font-light text-white hover:underline">
                  <span>Oxbridge Applicants</span>
                </Link>
              </li>
              <li>
                <a href="#" className="flex w-full items-center justify-between text-2xl font-light text-white hover:underline">
                  <span>FREE RESOURCES</span>
                </a>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link href="/services" className="flex w-full items-center justify-between text-2xl font-light text-white hover:underline">
                  <span>OUR SERVICES</span>
                </Link>
              </li>
              <li onClick={() => setIsMenuOpen(false)}>
                <Link href="/contact" className="flex w-full items-center justify-between text-2xl font-light text-white hover:underline">
                  <span>CONTACT US</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )}
    </>
  );
}
