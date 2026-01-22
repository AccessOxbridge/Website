import { HomeConfig } from './types';

export const homeConfig: HomeConfig = {
  hero: {
    slides: [
      {
        id: 1,
        subheading: "ELITE ADMISSIONS",
        headline: "Achieving Dreams: The Cambridge Experience",
        buttons: [
          { label: "Our Results", href: "/our-story#our-results", variant: "primary" },
          { label: "Book Free Consultation →", href: "/consultation", variant: "secondary" },
        ],
        type: "image",
        src: "/landing/3.jpeg",
      },
      {
        id: 2,
        subheading: "Tailored Pathways",
        headline: "Securing Futures: Bespoke UCAS Support",
        buttons: [
          { label: "Our Results", href: "/our-story#our-results", variant: "primary" },
          { label: "Boost Your Chances by 400% →", href: "/success-stats", variant: "secondary" },
        ],
        type: "image",
        src: "/landing/1.webp",
      },
      {
        id: 3,
        subheading: "Partnerships",
        headline: "Trusted for Oxford, Cambridge & G5 Excellence",
        buttons: [
          { label: "Admissions Resources", href: "/admissions-resources", variant: "primary" },
          { label: "Speak to a Specialist →", href: "/consultation", variant: "secondary" },
        ],
        type: "image",
        src: "/landing/2.jpg",
      },
    ],
  },
  stats: [
    {
      value: "10,000+",
      title: "Oxbridge offers",
      subtitle: "10x more than our closest competitor",
    },
    {
      value: "73%",
      title: "Oxbridge success rate",
      subtitle: "Highest in the industry",
    },
    {
      value: "1 in 5",
      title: "Oxbridge applicants",
      subtitle: "Use our guidance and resources",
    },
  ],
  expertise: {
    logo: {
      src: '/logo.webp',
      alt: 'Oxbridge Applications Logo',
      width: 120,
      height: 120,
    },
    description: "Building Futures",
    items: [
      {
        icon: "GraduationCap",
        title: "Deep Expertise",
        text: "Our Senior Consultants interview ten times more applicants each year than a real tutor. <strong>Over 73% of our students win an offer</strong> to Oxford or Cambridge, with <strong>100%</strong> receiving offers",
      },
      {
        icon: "User",
        title: "Expert Admissions Test Tuition",
        text: "Our admissions test tuition helps candidates significantly improve performance. On average, students see a <strong>20% improvement after just six hours</strong> of targeted tuition.",
      },
      {
        icon: "BookMarked",
        title: "65+ Oxbridge Courses",
        text: "Oxbridge-educated tutors specialising in every course offered by Oxford and Cambridge. We provide guides for every course, admissions test, and interview — using the same <strong>Canvas</strong> learning platform as Oxford.",
      },
      {
        icon: "Check",
        title: "3,000 Mock Interviews Per Year",
        text: "We conduct over <strong>3,000 subject-specific mock interviews</strong> annually, run by Oxbridge graduates and delivered in environments that closely mirror real Oxford and Cambridge interviews.",
      },
      {
        icon: "Star",
        title: "The Premier Service",
        text: "Our highest level of support, offered to 200 students annually. Participants are <strong>50% more likely</strong> to secure an Oxford interview, with <strong>90%</strong> of Cambridge applicants invited to interview.",
      },
      {
        icon: "School",
        title: "1,000+ School Partners",
        text: "Trusted by <strong>82% of the Times Top 50</strong> Independent Schools in the UK. Partner schools see an average <strong>30% uplift</strong> in Oxbridge offers, with ~90% rebooking annually.",
      },
    ],
  },
  testimonials: [
    {
      name: "Pun Pum",
      description: "Sharing her thoughts on the care and quality of the service.",
      video: "https://player.vimeo.com/video/1098412383",
    },
    {
      name: "Time",
      description: "Sharing his great experience with our service.",
      video: "https://player.vimeo.com/video/1098411923",
    },
    {
      name: "Riddhi",
      description: "Guidance on courses and events",
      video: "https://player.vimeo.com/video/1098477835",
    },
    {
      name: "Cornelius Patrick",
      description: "Support with fast UK admissions",
      video: "https://player.vimeo.com/video/1098477917",
    },
    {
      name: "Andrea",
      description: "Guidance on visa, funds, housing",
      video: "https://player.vimeo.com/video/1098478059"
    },
    {
      name: "Hema",
      description: "Tailored advice for every question",
      video: "https://player.vimeo.com/video/1098478267"
    },
    {
      name: "Mahi",
      description: "Insightful fairs on overseas education",
      video: "https://player.vimeo.com/video/1098478374"
    },
    {
      name: "Hitashi",
      description: "Supportive team and education fairs",
      video: "https://player.vimeo.com/video/1098412536"
    },
  ],
  logos: [
    "/bristol.png",
    "/cambridge.png",
    "/durham.png",
    "/edinburgh.png",
    "/kings.png",
    "/lse.png",
    "/manchester.png",
    "/oxford.png",
    // "/queeneli.png",
    "/scientia.png",
    "/ucl.png",
  ],
  schoolLogos: {
    title: "Partnerships and Destinations",
    buttonText: "Find out more",
  },
  testimonialsSection: {
    buttonText: "Read Client reviews",
    title: "Testimonials and Results",
  },
  faqs: [
    {
      faqs: [
        {
          question: "How can Access Oxbridge help me with my University Application?",
          answer: "Access Oxbridge offers focused, academically driven support for students applying to Oxford, Cambridge, and the UK's most competitive universities, including:\n\n– **Personalised Academic Strategy:** A tailored roadmap covering subject preparation, supercurricular development, admissions tests, and application milestones.\n\n– **Expert Oxbridge Insight:** Guidance from experienced mentors who understand how Oxford and Cambridge assess candidates at subject level.\n\n– **Application and Personal Statement Development:** Structured support to help articulate academic motivation, intellectual curiosity, and subject readiness with clarity and depth.\n\n– **Interview Preparation:** Targeted practice designed to develop confident academic thinking, clear reasoning, and effective communication under pressure.\n\n– **UK University Admissions Support:** Broader guidance on UCAS strategy, course selection, entry requirements, offer management, and results day decisions across leading UK universities."
        },
        {
          question: "Can international students apply to Oxford or Cambridge?",
          answer: "Yes! International students can absolutely apply to Oxbridge, and both universities welcome qualified applicants from around the world through the normal UCAS process, provided they meet the academic and admissions test requirements and complete any interview stages just like UK applicants."
        },
        {
          question: "How Many International Students Study at Oxbridge",
          answer: "**University of Oxford:**\n\n* Around **35 % of the student body is international**, meaning students from outside the UK make up roughly one‑third of all Oxford students.\n\n**University of Cambridge:**\n\n* Around **32 % of students at Cambridge are international**, placing the university's international presence on a par with other leading UK institutions."
        },
        {
          question: "How much does support from Access Oxbridge cost?",
          answer: "We offer a range of support options designed to suit different levels of preparation and commitment. Details are discussed individually to ensure guidance is aligned with each student's goals and circumstances."
        },
        {
          question: "How do I get started with Access Oxbridge?",
          answer: "Book a free consultation with one of our Academic Advisors to explore your ambitions and see how our guidance can support your success."
        }
      ]
    }
  ]
};