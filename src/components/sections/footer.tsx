import Link from "next/link";
import { Globe, Linkedin } from "lucide-react";
import { headerConfig } from "@/configs/header.config";

export default function Footer() {
  // Generate footer sections from headerConfig to mirror the header structure
  const footerSections = headerConfig.navigation
    .filter((item) => item.hasDropdown && item.dropdownItems)
    .map((item) => ({
      title: item.title,
      links: item.dropdownItems!.map((dropdownItem) => ({
        label: dropdownItem.title,
        href: dropdownItem.href,
      })),
    }));

  // Add non-dropdown items as a separate section
  const contactSection = headerConfig.navigation
    .filter((item) => !item.hasDropdown)
    .map((item) => ({
      title: item.title,
      links: [{ label: "Get in Touch", href: item.href }],
    }));

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/access-oxbridge-6a6294349",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="w-full bg-white text-accent border-t border-neutral-100 pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
          {/* Main navigation sections from header */}
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

          {/* Contact section from header's non-dropdown items */}
          {contactSection.map((section, idx) => (
            <div key={`contact-${idx}`} className="flex flex-col">
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

          {/* Social Links */}
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
