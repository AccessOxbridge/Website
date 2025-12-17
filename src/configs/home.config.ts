import { HomeConfig } from './types';

export const homeConfig: HomeConfig = {
  hero: {
    slides: [
      {
        id: 1,
        subheading: "ELITE ADMISSIONS",
        headline: "Unlock Oxbridge: 62% Success Rate",
        buttons: [
          { label: "Free Consultation", href: "/consultation", variant: "primary" },
          { label: "Our Results", href: "#results", variant: "secondary" },
        ],
        type: "video",
        src: "https://www.astonmartin.com/-/media/models---db12-s/final-images/heros/home_page_16x9_edit_3.mp4?rev=a387b4fe1ca348fc89e2ffbefc061406",
      },
      {
        id: 2,
        subheading: "INSIGHTS & GUIDES",
        headline: "Achieving Dreams: The Cambridge Experience",
        buttons: [
          { label: "Download Free PDF", href: "/resources/ucas-guide", variant: "primary" },
          { label: "Explore Articles", href: "/blog", variant: "secondary" },
        ],
        type: "image",
        src: "/ppl2.jpeg",
      },
      {
        id: 3,
        subheading: "PARTNERSHIPS",
        headline: "Trusted for Oxford, Cambridge & G5 Excellence",
        buttons: [
          { label: "View Universities", href: "#partnerships", variant: "primary" },
          { label: "Boost Your Chances by 400%", href: "/success-stats", variant: "secondary" },
        ],
        type: "image",
        src: "https://www.astonmartin.com/-/media/top-gear-award-2026/tga-desk-still-new.jpg?mw=1920&rev=a7de10be96464e8a8b2cbc28245eab17&extension=webp",
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
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Furiosam eos dolorem consequuntur quisquam sunt eum numquam commodi accusamus.",
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
    "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/City-of-London-Boys.png",
    "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Wellington-College.png",
    "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/JAGs.png",
    "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Marlborough-College-1.png",
    "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Rugby-School.png",
    "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Cardiff-Sixth-Form-College-1.png",
    "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Wellington-College-Shanghai.png",
    "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Charterhouse-1.png",
    "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Surbiton-.png",
    "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/St-Marys-Ascot.png",
    "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/Francis-Holland-RP.png",
    "https://storage.googleapis.com/wp-static/oxbridgeapplications.com/St-Andrew-College-Cambridge.png",
  ],
  schoolLogos: {
    title: "We have exclusive partnerships with the best schools in the UK and around the world.",
    buttonText: "Find out more",
  },
  testimonialsSection: {
    buttonText: "Read Client reviews",
    title: "Testimonials",
  },
};