"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";
import { headerConfig } from "@/configs/header.config";
import { Logo } from "../logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

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
      <header className={`fixed top-0 z-1002 w-full shadow-sm transition-all duration-300 backdrop-blur-md bg-accent/85 
        text-white`}>
        <div className="mx-auto h-18 max-w-[1440px] px-4 md:px-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            {/* Mobile hamburger menu */}
            <button
              aria-label="Navigation Menu"
              className={`md:hidden group flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10 text-white`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
          
          <NavigationMenu className="hidden md:flex flex-1 justify-start tracking-tighter" viewport={false}>
            <NavigationMenuList className="flex items-center justify-start gap-2">
              {headerConfig.navigation.map((item) => (
                item.hasDropdown && item.dropdownItems ? (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger
                      onClick={(e) => {
                        e.preventDefault();
                        router.push(item.href);
                      }}
                      className="text-base font-bold text-white hover:text-rich-amber-accent transition-colors
                      px-2 py-1 cursor-pointer tracking-tight"
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white rounded-md shadow-lg border border-gray-200 capitalize">
                      <ul className="grid gap-1 p-2 w-56">
                        {item.dropdownItems.map((dropdownItem) => (
                          <li key={dropdownItem.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={dropdownItem.href}
                                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors rounded-sm"
                              >
                                {dropdownItem.title}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href} className="text-base font-bold text-white hover:text-rich-amber-accent transition-colors tracking-wider px-2 py-1">
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>


          <div className="flex items-center shrink-0 gap-2">
            <Link href="https://aoportal.vercel.app/signup" className="text-sm font-medium text-white
            hover:text-rich-amber-accent hover:underline
            transition-colors tracking-wider px-2 py-1 w-28 overflow-hidden whitespace-nowrap">
              Login / Signup
            </Link>
            <Link
              href={headerConfig.cta.href}
              className={`
                py-2 px-4 text-base font-bold border whitespace-nowrap
                transition-all rounded-md
                bg-white text-black hover:bg-rich-amber-accent
                hover:text-accent hover:shadow-lg hover:scale-105
                duration-200 ease-in-out
              `}
              style={{ textTransform: "none" }}
            >
              {headerConfig.cta.text}
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
                {headerConfig.navigation.map((item, index) => (
                  item.hasDropdown && item.dropdownItems ? (
                    <AccordionItem key={item.title} value={`mobile-${index}`} className="border-b border-white/20">
                      <AccordionTrigger className="text-2xl font-medium text-white hover:text-white px-4 py-2 hover:no-underline gap-2 [&>svg]:w-8 [&>svg]:h-8">
                        <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="hover:text-white">
                          {item.title}
                        </Link>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4">
                        <ul className="mt-4 ml-4 space-y-3">
                          {item.dropdownItems.map((dropdownItem) => (
                            <li key={dropdownItem.title}>
                              <Link href={dropdownItem.href} onClick={() => setIsMenuOpen(false)} className="text-lg font-light text-white/80 capitalize hover:text-white hover:underline">
                                {dropdownItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ) : null
                ))}
              </Accordion>

              {/* Contact Us - Not in accordion */}
              <div className="mt-6 pt-6 border-t border-white/20">
                {headerConfig.navigation
                  .filter(item => !item.hasDropdown)
                  .map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-medium text-white hover:text-accent hover:font-bold hover:underline"
                    >
                      {item.title}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
