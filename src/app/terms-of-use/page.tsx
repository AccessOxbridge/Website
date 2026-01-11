"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white text-accent">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-20 lg:pb-32">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center text-accent/60 hover:text-accent transition-colors mb-8"
            >
              ← Back to Home
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-serif leading-tight mb-6"
          >
            Terms of Use
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-accent/70 max-w-2xl leading-relaxed"
          >
            These terms govern your access to and use of Access Oxbridge's websites and services.
          </motion.p>
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="prose prose-lg max-w-none text-accent/80 leading-relaxed"
        >
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">1. About Access Oxbridge</h2>
            <p className="mb-4">
              These Terms of Use ("Terms") govern your access to and use of the websites, platforms, and online services operated by or on behalf of Access Oxbridge ("we", "us", or "our"), including any associated domains, subdomains, or successor sites (together, the "Website").
            </p>
            <p className="mb-4">
              By accessing or using any part of the Website, you agree to be bound by these Terms. If you do not agree, you must not access or use the Website.
            </p>
            <p>
              We may revise these Terms from time to time. Any changes will take effect once published on the Website. Your continued use of the Website constitutes acceptance of the updated Terms, and we encourage you to review them periodically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">2. Eligibility and User Accounts</h2>
            <p className="mb-4">Where parts of the Website require account creation, you agree to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate and current information;</li>
              <li>Maintain the confidentiality of your login details;</li>
              <li>Use only one account per individual;</li>
              <li>Notify us promptly of any unauthorised access or security issue.</li>
            </ul>
            <p>
              You are responsible for all activity carried out under your account. We are not liable for any loss arising from unauthorised use of your account where reasonable security measures have not been taken by you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">3. Educational and Informational Content</h2>
            <p className="mb-4">
              The Website provides general information about university admissions, mentoring, and related educational topics. All content is provided for informational purposes only and does not constitute legal, academic, or admissions advice.
            </p>
            <p className="mb-4">
              While we aim to ensure accuracy, we make no guarantees as to completeness or outcomes. Access Oxbridge does not guarantee admission to any university or course, including the University of Oxford or the University of Cambridge.
            </p>
            <p>
              Access Oxbridge is an independent organisation and is not affiliated with, endorsed by, or acting on behalf of any university or admissions body.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">4. Privacy and Data Protection</h2>
            <p>
              Your use of the Website is subject to our Privacy Policy and Cookie Policy, which explain how we collect, use, and protect personal data in accordance with UK data protection law, including the UK GDPR.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">5. International Access</h2>
            <p>
              The Website may be accessed from outside the United Kingdom. We make no representation that the content is appropriate or lawful in all jurisdictions. You are responsible for ensuring compliance with local laws applicable to your location.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">6. Intellectual Property</h2>
            <p className="mb-4">
              All content on the Website, including text, graphics, videos, logos, materials, and software, is owned by or licensed to Access Oxbridge and protected by UK and international intellectual property laws.
            </p>
            <p>
              You are granted a limited, non-exclusive, revocable licence to access and use the Website for personal, non-commercial purposes only. You must not reproduce, distribute, adapt, or exploit any content without our prior written consent, unless expressly permitted.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">7. Third-Party Links and Services</h2>
            <p className="mb-4">
              The Website may contain links to third-party websites or resources. These are provided for convenience only. We do not control and are not responsible for the content, policies, or practices of third-party sites.
            </p>
            <p>
              Accessing third-party services is at your own risk, and we disclaim liability for any loss arising from reliance on third-party content.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">8. Acceptable Use</h2>
            <p className="mb-4">You must not use the Website in any way that is unlawful, harmful, or interferes with others' use. Prohibited conduct includes, but is not limited to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Violating applicable laws or regulations;</li>
              <li>Infringing intellectual property rights;</li>
              <li>Uploading malicious software or harmful code;</li>
              <li>Attempting to gain unauthorised access to systems or accounts;</li>
              <li>Using automated tools to extract data without permission;</li>
              <li>Misrepresenting identity or affiliation.</li>
            </ul>
            <p>We reserve the right to suspend or terminate access where misuse is suspected.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">9. User Submissions</h2>
            <p>
              Where the Website permits user submissions, you agree not to post content that is unlawful, offensive, misleading, or infringing. Any feedback or suggestions you provide may be used by Access Oxbridge without obligation or compensation.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">10. Social Media</h2>
            <p className="mb-4">
              These Terms apply to interactions with our official social media channels. Content posted by users remains their responsibility and does not reflect our views. We may remove content that breaches these Terms, platform rules, or applicable law.
            </p>
            <p>
              By posting content on our channels, you grant us a non-exclusive, royalty-free licence to use and share that content for informational purposes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">11. Children</h2>
            <p>
              Access Oxbridge does not knowingly collect personal data from children under the age of 13. If you believe such data has been provided, please contact us so it can be removed.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">12. Changes, Suspension, and Termination</h2>
            <p>
              We may modify or discontinue any part of the Website at any time. We may suspend or terminate access where these Terms are breached or where required to protect users or comply with legal obligations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">13. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Access Oxbridge excludes liability for loss or damage arising from use of the Website, including indirect or consequential loss. Nothing in these Terms limits liability where it cannot be excluded under UK consumer law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">14. Indemnity</h2>
            <p>
              You agree to indemnify Access Oxbridge against claims or losses arising from your misuse of the Website or breach of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">15. Governing Law and Jurisdiction</h2>
            <p>
              These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mt-16 pt-8 border-t border-neutral-200">
            <h2 className="text-2xl font-bold text-accent mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <div className="text-accent/80">
              <p className="mb-2"><strong>Email:</strong> legal@accessoxbridge.com</p>
              <p className="mb-2"><strong>Phone:</strong> +61 421 307 998</p>
              <p><strong>Address:</strong> 263 Homebush Road, Strathfield South 2136</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}