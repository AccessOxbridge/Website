import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { ResultsPageContent } from "@/components/pages/results-page-content";

export const metadata = {
  title: "Our Results | Access Oxbridge",
  description: "Discover our success statistics and hear from students who achieved their Oxbridge dreams with Access Oxbridge.",
};

export default function OurResultsPage() {
  return (
    <main className="min-h-screen">
      <ResultsPageContent />
    </main>
  );
}
