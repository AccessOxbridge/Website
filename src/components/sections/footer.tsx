import Link from "next/link";
import { Globe, Instagram, Facebook, Youtube, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Our Services",
      links: [
        { label: "US Admissions Consulting", href: "#" },
        { label: "UK Admissions Consulting", href: "#" },
        { label: "European Admissions Consulting", href: "#" },
        { label: "University Prep for 11-14 Year Olds", href: "#" },
        { label: "Former Admission Officers Review", href: "#" },
        { label: "SAT Tutoring", href: "#" },
      ],
    },
    {
      title: "About Access Oxbridge",
      links: [
        { label: "Our Consultants", href: "#" },
        { label: "Our Results", href: "#" },
        { label: "Our Story", href: "#" },
        { label: "Access Oxbridge in the News", href: "#" },
        { label: "Join Our Admissions Team", href: "#" },
        { label: "US College Sports Recruitment", href: "#" },
        { label: "Postgrad Admissions Consulting", href: "#" },
        { label: "All Careers", href: "#" },
        { label: "Our Scholarships", href: "#" },
      ],
    },
    {
      title: "Admission Resources",
      links: [
        { label: "Articles", href: "#" },
        { label: "SAT Practice Tests", href: "#" },
        { label: "ACT Practice Tests", href: "#" },
        { label: "A-Level & IB to GPA Calculator", href: "#" },
      ],
    },
    {
      title: "Events",
      links: [
        { label: "Upcoming Events", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "X" },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.88-.6-4.13-1.46-.24 4.18-.73 8.35-1.93 12.39-1.2 4.03-3.08 7.37-7.42 8.65-4.34 1.28-9.05-.18-11.85-3.69C-1.89 22.38-3.09 17.53-2.6 13.06c.49-4.47 2.85-8.52 6.64-10.87 3.79-2.35 8.7-2.73 12.82-1.02.1-.03.2-.06.3-.09-.1.3-.2.6-.3.9z" />
          <path d="M19.505 13.25c.02-.11.04-.21.05-.32.01-.1.02-.21.03-.31.01-.11.02-.21.02-.32 0-.11-.01-.22-.01-.32 0-.11-.01-.22-.02-.33-.01-.11-.02-.22-.03-.32-.01-.11-.03-.22-.04-.33-.02-.11-.04-.21-.06-.32zM12.525.02c-.1.03-.2.06-.3.09 4.12 1.71 9.03 1.33 12.82 3.68 3.79 2.35 6.15 6.4 6.64 10.87.49 4.47-.71 9.32-4.51-12.81-2.8-3.51-7.51-4.97-11.85-3.69-4.34 1.28-6.22 4.62-7.42 8.65-1.2 4.04-1.69 8.21-1.93 12.39-1.25.86-2.69 1.29-4.13 1.46V6c1.54-.17 3.12-.68 4.24-1.79 1.12-1.08 1.67-2.64 1.75-4.17 1.3.01 2.6.02 3.91.02l-.3.92z" />
        </svg>
      ),
      href: "#",
      label: "TikTok",
    },
  ];

  return (
    <footer className="w-full bg-white text-accent font-sans antialiased border-t border-neutral-100 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {footerSections.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-lg font-bold mb-6 text-accent opacity-90">
                {section.title}
              </h3>
              <ul className="flex flex-col space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className="text-[15px] font-medium text-accent/80 hover:text-accent hover:underline transition-all duration-200 decoration-1 underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col">
            <h3 className="text-lg font-bold mb-6 text-accent opacity-90">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-12 border-t border-neutral-100">
          <div className="mb-8 md:mb-0">
            <button className="flex items-center gap-3 px-6 py-4 border border-accent rounded-md text-accent font-bold text-sm hover:bg-neutral-50 transition-colors">
              <Globe className="w-5 h-5" strokeWidth={1.5} />
              English (United Kingdom)
            </button>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-xs font-semibold text-accent/70">
            <div className="flex flex-wrap gap-x-4 gap-y-2 mb-2">
              <Link href="/terms-of-use" className="underline decoration-1 underline-offset-2 hover:text-accent">Terms Of Use</Link>
              <span className="text-neutral-300">|</span>
              <Link href="/privacy-policy" className="underline decoration-1 underline-offset-2 hover:text-accent">Privacy Policy</Link>
            </div>
            <p className="mb-1 italic">© 2026 Access Oxbridge Education. All rights reserved.</p>
            <p className="max-w-2xl text-[10px] md:text-right leading-relaxed font-normal opacity-60">
              Access Oxbridge Education is not sponsored by, affiliated, or associated with any university, college, or education(al) institution mentioned on this website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
