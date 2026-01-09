import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-16 bg-accent">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">
        Need Personalised Guidance?
      </h2>
      <p className="text-blue-100 text-lg mb-8">
        Our expert consultants can provide tailored advice for your specific situation and goals.
      </p>
      <Link
        href="/consultation"
        className="inline-flex items-center px-8 py-3 bg-white text-black font-semibold rounded-lg 
        hover:text-accent hover:shadow-lg hover:scale-105 duration-200 ease-in-out"
      >
        Book a Consultation
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  </section>    
  );
}