"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-accent/70 max-w-2xl leading-relaxed"
          >
            Access Oxbridge is committed to protecting your privacy and handling personal data responsibly and transparently.
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
            <h2 className="text-2xl font-bold text-accent mb-6">1. Introduction</h2>
            <p className="mb-4">
              Access Oxbridge ("we", "us", or "our") is committed to protecting your privacy and handling personal data responsibly and transparently. This Privacy Policy explains how we collect, use, store, and protect personal information when you interact with our website, services, and communications.
            </p>
            <p>
              We process personal data in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and other applicable UK data protection laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">2. Who We Are</h2>
            <p>
              Access Oxbridge is an independent educational mentoring organisation based in the United Kingdom. For data protection purposes, Access Oxbridge is the <strong>data controller</strong> of any personal data collected through our website or services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">3. Personal Data We Collect</h2>
            <p className="mb-4">We may collect and process the following categories of personal data:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Identity information:</strong> name, age, date of birth (where relevant)</li>
              <li><strong>Contact information:</strong> email address, phone number</li>
              <li><strong>Educational information:</strong> academic interests, school or educational background, application-related details voluntarily provided</li>
              <li><strong>Account information:</strong> login details if you create an account</li>
              <li><strong>Communications:</strong> messages sent via contact forms, email, or other correspondence</li>
              <li><strong>Technical data:</strong> IP address, browser type, device information, and usage data collected via cookies or analytics tools</li>
            </ul>
            <p>We only collect personal data that is necessary for legitimate educational, administrative, or operational purposes.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">4. How We Use Your Data</h2>
            <p className="mb-4">We use personal data for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To provide and manage our services and mentoring programmes</li>
              <li>To respond to enquiries and communicate with users</li>
              <li>To administer accounts and bookings</li>
              <li>To improve our website, resources, and user experience</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To protect our rights, users, and systems</li>
            </ul>
            <p>We do <strong>not</strong> sell personal data to third parties.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">5. Legal Bases for Processing</h2>
            <p className="mb-4">Under UK GDPR, we rely on one or more of the following lawful bases:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Consent:</strong> where you have given clear permission</li>
              <li><strong>Contract:</strong> where processing is necessary to provide services you request</li>
              <li><strong>Legitimate interests:</strong> for operational, educational, or security purposes, where these interests are not overridden by your rights</li>
              <li><strong>Legal obligation:</strong> where required by law</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">6. Cookies and Analytics</h2>
            <p>
              Our website may use cookies and similar technologies to improve functionality and analyse usage. You can manage cookie preferences through your browser settings. Further details are set out in our Cookie Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">7. Data Sharing</h2>
            <p className="mb-4">We may share personal data only where necessary, including with:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Trusted service providers who support website hosting, communications, or analytics</li>
              <li>Professional advisers or regulators where legally required</li>
            </ul>
            <p>All third parties are required to respect data protection laws and process data securely.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">8. International Transfers</h2>
            <p>
              Where personal data is transferred outside the UK, we ensure appropriate safeguards are in place, such as adequacy regulations or standard contractual clauses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">9. Data Retention</h2>
            <p>
              We retain personal data only for as long as necessary for the purposes for which it was collected, including legal, accounting, or safeguarding requirements. Data is securely deleted or anonymised when no longer needed.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">10. Data Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect personal data against unauthorised access, loss, misuse, or disclosure. However, no system can be guaranteed to be completely secure.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">11. Your Rights</h2>
            <p className="mb-4">Under UK data protection law, you have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (subject to legal limits)</li>
              <li>Object to or restrict certain processing</li>
              <li>Withdraw consent where applicable</li>
              <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
            </ul>
            <p>Requests can be made by contacting us using the details above.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">12. Children's Data</h2>
            <p>
              We do not knowingly collect personal data from children under the age of 13 without appropriate consent. Where services involve minors, data is processed responsibly and proportionately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">13. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-accent mb-6">14. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and continued use of our services indicates acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mt-16 pt-8 border-t border-neutral-200">
            <h2 className="text-2xl font-bold text-accent mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="text-accent/80">
              <p className="mb-2"><strong>Email:</strong> privacy@accessoxbridge.com</p>
              <p className="mb-2"><strong>Phone:</strong> +61 421 307 998</p>
              <p><strong>Address:</strong> 263 Homebush Road, Strathfield South 2136</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}