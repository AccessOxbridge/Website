"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[1002] w-full bg-white text-[#1a1a1a] shadow-sm transition-all duration-300">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 md:h-20 md:px-10">
          <div className="flex w-[120px] items-center justify-start">
            <button
              aria-label="Navigation Menu"
              className="group flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
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

          <a
            href="/"
            aria-label="Aston Martin"
            className="flex items-center justify-center transition-opacity hover:opacity-80"
          >
            <div className="relative h-10 w-[180px] text-black">
              <svg
                viewBox="0 0 200 45"
                fill="currentColor"
                className="h-full w-full"
                aria-label="Aston Martin Logo"
              >
                <path d="M100 8.5C125 8.5 155 4 195 4C198 4 200 6 200 8C200 12 180 25 150 25C140 25 130 24 120 22L110 32H120V34H80V32H90L80 22C70 24 60 25 50 25C20 25 0 12 0 8C0 6 2 4 5 4C45 4 75 8.5 100 8.5ZM100 11C80 11 40 7 10 7C14 12 30 22 50 22C65 22 80 20 90 16L100 26L110 16C120 20 135 22 150 22C170 22 186 12 190 7C160 7 120 11 100 11ZM100 14L105 19H95L100 14Z" />
                <path d="M70 36H130V38H70V36Z" fill="currentColor" opacity="0.8"/>
                <text x="100" y="44" fontFamily="sans-serif" fontSize="6" textAnchor="middle" letterSpacing="2" fill="currentColor">ASTON MARTIN</text>
              </svg>
            </div>
          </a>

          <div className="flex w-[160px] md:w-[240px] items-center justify-end gap-x-6">
            <a
              href="#"
              className="hidden text-sm font-medium uppercase tracking-wider text-[#1a1a1a] transition-all hover:text-[#1b8a7a] md:inline-block"
            >
              Configure
            </a>
            <a
              href="#"
              className="text-sm font-medium uppercase tracking-wider text-[#1a1a1a] transition-all hover:text-[#1b8a7a]"
            >
              Enquire
            </a>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <nav
          className="fixed inset-0 z-[1001] bg-[#1a1a1a]/95 text-white backdrop-blur-md"
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
                  <button className="flex w-full items-center justify-between text-2xl font-light text-white hover:text-[#1b8a7a]">
                    <span>Models</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="flex w-full items-center justify-between text-2xl font-light text-white hover:text-[#1b8a7a]">
                    <span>Our World</span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </li>
                <li>
                  <a href="#" className="flex w-full items-center justify-between text-2xl font-light text-white hover:text-[#1b8a7a]">
                    <span>Pre-Owned</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex w-full items-center justify-between text-2xl font-light text-white hover:text-[#1b8a7a]">
                    <span>F1® Team</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex w-full items-center justify-between text-2xl font-light text-white hover:text-[#1b8a7a]">
                    <span>Store</span>
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
