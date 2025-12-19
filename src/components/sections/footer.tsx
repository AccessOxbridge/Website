import Link from "next/link";
import { Search, ChevronUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-neutral-900 font-sans antialiased border-t border-neutral-200">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 py-16">
        <div className="mb-6">
          <h2 className="text-[13px] font-bold tracking-widest uppercase text-black">
            Access Oxbridge
          </h2>
        </div>

        <div className="w-full h-px bg-neutral-200 mb-10"></div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 mb-24">
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm text-neutral-900 font-normal mb-1">Our World</h3>
            <ul className="flex flex-col space-y-3">
              <li><Link href="#" className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors">Models</Link></li>
              <li><Link href="#" className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors">Owners</Link></li>
              <li><Link href="#" className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors">F1 Team</Link></li>
              <li><Link href="#" className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors">Preowned</Link></li>
              <li><Link href="#" className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors">Experiences</Link></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-sm text-neutral-900 font-normal mb-1">Dealers</h3>
            <ul className="flex flex-col space-y-3">
              <li><Link href="#" className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors">Enquiry</Link></li>
              <li><Link href="#" className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors">Contact us</Link></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-sm text-neutral-900 font-normal mb-1">Corporate</h3>
            <ul className="flex flex-col space-y-3">
              <li><Link href="#" className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors">Media</Link></li>
              <li><Link href="#" className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-xs text-neutral-600 hover:text-[#1b8a7a] hover:underline transition-colors">Investors</Link></li>
            </ul>
          </div>

          {/* <div className="flex flex-col space-y-4 lg:pl-10">
            <h3 className="text-sm text-neutral-900 font-normal mb-1">Sign up for our newsletter</h3>
            <div className="relative w-full max-w-[300px]">
              <input
                type="text"
                placeholder="Email"
                className="w-full border-b border-neutral-300 py-2 text-sm text-neutral-900 placeholder:text-neutral-500 bg-transparent focus:outline-none focus:border-[#1b8a7a] transition-colors pr-8"
              />
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
            </div>
          </div> */}
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pt-4">
            <div className="flex items-center gap-5 text-neutral-500">
              <Link href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </Link>
              <Link href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              <Link href="#" className="hover:text-accent transition-colors" aria-label="X">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[17px] h-[17px]">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-accent transition-colors" aria-label="YouTube">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </Link>
              <Link href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
            </div>
          <div className="flex flex-col items-start lg:items-end gap-6 w-full lg:w-auto">

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-neutral-500">
              <Link href="#" className="hover:text-accent transition-colors">Terms & Conditions</Link>
              <Link href="#" className="hover:text-accent transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-accent transition-colors">Cookies</Link>
              <span className="text-neutral-400">© Access Oxbridge 2025</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
