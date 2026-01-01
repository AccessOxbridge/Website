"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuIcon } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);
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
              <MenuIcon className="w-6 h-6" />
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

        <nav className="hidden md:flex items-center space-x-2 flex-1 justify-center">
          <Accordion type="single" collapsible className="w-auto flex items-center justify-center gap-2">
            {/* UK University Applicants */}
            <AccordionItem value="uk-applicants" className="border-0 relative">
              <AccordionTrigger className="text-xs font-light text-white hover:text-accent hover:font-black hover:underline transition-colors uppercase tracking-wider px-2 py-1 hover:no-underline data-[state=open]:text-rich-amber-accent gap-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:transition-transform [&>svg]:duration-200 items-center">
                UK University Applicants
              </AccordionTrigger>
              <AccordionContent className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200 p-0 overflow-hidden data-[state=closed]:animate-dropdown-up data-[state=open]:animate-dropdown-down">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Undergraduate Applications
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Postgraduate Applications
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Application Guidance
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Oxbridge Applicants */}
            <AccordionItem value="oxbridge" className="border-0 relative">
              <AccordionTrigger className="text-xs font-light text-white hover:text-accent hover:font-black hover:underline transition-colors uppercase tracking-wider px-2 py-1 hover:no-underline data-[state=open]:text-rich-amber-accent gap-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:transition-transform [&>svg]:duration-200 items-center">
                Oxbridge Applicants
              </AccordionTrigger>
              <AccordionContent className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200 p-0 overflow-hidden data-[state=closed]:animate-dropdown-up data-[state=open]:animate-dropdown-down">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Oxford Applications
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Cambridge Applications
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* FREE RESOURCES */}
            <AccordionItem value="resources" className="border-0 relative">
              <AccordionTrigger className="text-xs font-light text-white hover:text-accent hover:font-black hover:underline transition-colors uppercase tracking-wider px-2 py-1 hover:no-underline data-[state=open]:text-rich-amber-accent gap-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:transition-transform [&>svg]:duration-200 items-center">
                FREE RESOURCES
              </AccordionTrigger>
              <AccordionContent className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200 p-0 overflow-hidden data-[state=closed]:animate-dropdown-up data-[state=open]:animate-dropdown-down">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Application Guides
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Sample Essays
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Interview Tips
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* OUR SERVICES */}
            <AccordionItem value="services" className="border-0 relative">
              <AccordionTrigger className="text-xs font-light text-white hover:text-accent hover:font-black hover:underline transition-colors uppercase tracking-wider px-2 py-1 hover:no-underline data-[state=open]:text-rich-amber-accent gap-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:transition-transform [&>svg]:duration-200 items-center">
                OUR SERVICES
              </AccordionTrigger>
              <AccordionContent className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200 p-0 overflow-hidden data-[state=closed]:animate-dropdown-up data-[state=open]:animate-dropdown-down">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Personal Statement Review
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Mock Interviews
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    UCAS Application Help
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link href="/contact" className="text-xs font-light text-white hover:text-accent hover:font-black hover:underline transition-colors uppercase tracking-wider">
            CONTACT US
          </Link>
        </nav>

        <div className="flex items-center shrink-0">
          <Link
            href="#"
            className={`
              px-1 sm:px-4 py-2 text-base sm:text-sm font-black border whitespace-nowrap
              transition-all rounded-md
              bg-white text-black border-rich-purple
              hover:text-blue-600 hover:shadow-lg hover:scale-105
              duration-200 ease-in-out
            `}
            style={{ textTransform: "none" }}
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
            <Accordion type="single" collapsible className="w-full space-y-8">
              {/* UK University Applicants */}
              <AccordionItem value="uk-applicants-mobile" className="border-b border-white/20">
                <AccordionTrigger className="text-2xl font-light text-white hover:text-white uppercase px-4 py-2 hover:no-underline data-[state=open]:text-rich-amber-accent gap-2 [&>svg]:w-8 [&>svg]:h-8">
                  UK University Applicants
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="mt-4 ml-4 space-y-3">
                    <li>
                      <a href="#" className="text-lg font-light text-white/80 hover:text-white hover:underline">
                        Undergraduate Applications
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-lg font-light text-white/80 hover:text-white hover:underline">
                        Postgraduate Applications
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-lg font-light text-white/80 hover:text-white hover:underline">
                        Application Guidance
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Oxbridge Applicants */}
              <AccordionItem value="oxbridge-mobile" className="border-b border-white/20">
                <AccordionTrigger className="text-2xl font-light text-white hover:text-white uppercase px-4 py-2 hover:no-underline data-[state=open]:text-rich-amber-accent gap-2 [&>svg]:w-8 [&>svg]:h-8">
                  Oxbridge Applicants
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="mt-4 ml-4 space-y-3">
                    <li>
                      <a href="#" className="text-lg font-light text-white/80 hover:text-white hover:underline">
                        Oxford Applications
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-lg font-light text-white/80 hover:text-white hover:underline">
                        Cambridge Applications
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-lg font-light text-white/80 hover:text-white hover:underline">
                        Interview Preparation
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* FREE RESOURCES */}
              <AccordionItem value="resources-mobile" className="border-b border-white/20">
                <AccordionTrigger className="text-2xl font-light text-white hover:text-white uppercase px-4 py-2 hover:no-underline data-[state=open]:text-rich-amber-accent gap-2 [&>svg]:w-8 [&>svg]:h-8">
                  FREE RESOURCES
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="mt-4 ml-4 space-y-3">
                    <li>
                      <a href="#" className="text-lg font-light text-white/80 hover:text-white hover:underline">
                        Application Guides
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-lg font-light text-white/80 hover:text-white hover:underline">
                        Sample Essays
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-lg font-light text-white/80 hover:text-white hover:underline">
                        Interview Tips
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* OUR SERVICES */}
              <AccordionItem value="services-mobile" className="border-b border-white/20">
                <AccordionTrigger className="text-2xl font-light text-white hover:text-white uppercase px-4 py-2 hover:no-underline data-[state=open]:text-rich-amber-accent gap-2 [&>svg]:w-8 [&>svg]:h-8">
                  OUR SERVICES
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <ul className="mt-4 ml-4 space-y-3">
                    <li>
                      <a href="#" className="text-lg font-light text-white/80 hover:text-white hover:underline">
                        Personal Statement Review
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-lg font-light text-white/80 hover:text-white hover:underline">
                        Mock Interviews
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-lg font-light text-white/80 hover:text-white hover:underline">
                        UCAS Application Help
                      </a>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* CONTACT US - Not in accordion */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-light text-white hover:text-accent hover:font-black hover:underline uppercase"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )}
    </>
  );
}
