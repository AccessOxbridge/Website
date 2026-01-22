import { redirect } from 'next/navigation';

export const metadata = {
  title: "Our Results | Access Oxbridge",
  description: "Discover our success statistics and hear from students who achieved their Oxbridge dreams with Access Oxbridge.",
};

export default function OurResultsPage() {
  redirect('/our-story#our-results');
}
