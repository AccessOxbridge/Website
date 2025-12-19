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
        type: "image",
        src: "https://dukeseducation.com/wp-content/uploads/2019/09/Eaton-Square-edited-e1568717984986.jpg",
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
        src: "/dukes.png",
      },
    ],
  },
  boxes: [
    {
      title: 'UK University Admissions',
      button: 'Enquire Now',
      description: 'When Dukes Education was first founded in 2015, Aatif asked the team, “What makes your hearts sing?” His love for developing young people had led him to found Dukes Education. In our collection of schools and colleges, we have brought together teams of individuals who are driven by the same purpose. Today, the Dukes Education family is home to some of the UK’s best schools and brightest people, all united in their passion for nurturing students.'
    },
    {
      title: 'Oxbridge Admissions',
      button: 'Enquire Now',
      description: 'We set out to build a collection of schools who could share and learn from each other, while still having the freedom to do what they do best. Today, the Dukes Education family is home to some of the UK’s finest independent nurseries, schools, and colleges, as well as summer schools, day camps, and consultancy services — all united in their passion for nurturing students and helping them thrive. We’re proud of how far we’ve come, but we’re excited to go further.'
    },
  ],
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
    title: "Here's what our clients say about us!",
  },
  faqs: [
    {
      title: "UCAS PERSONAL STATEMENT FAQs",
      faqs: [
        {
          question: "What makes a UK personal statement strong?",
          answer: "A strong UK personal statement is focused, reflective, and tailored to the chosen subject. Universities want to see academic interest, relevant experience, and evidence of independent thinking. Specific examples are more effective than general claims. Clear structure and concise writing are important. The statement should show motivation for the course and readiness for university level study rather than simply listing achievements."
        },
        {
          question: "When should I start writing my UCAS personal statement?",
          answer: "It is best to start writing your personal statement at least three to six months before the UCAS deadline. Early preparation gives you time to explore your subject, draft thoughtfully, and edit carefully. Starting early also reduces stress and leads to a stronger, more confident final statement."
        }
      ]
    },
    {
      title: "OXBRIDGE INTERVIEW FAQs",
      faqs: [
        {
          question: "How are Oxford and Cambridge interviews different from normal interviews?",
          answer: "Oxbridge interviews are academic rather than personal. Instead of asking about hobbies or career goals, tutors ask subject based questions and explore your thinking. You may be asked to solve problems, analyse texts, or discuss unfamiliar ideas. Interviewers want to see curiosity, logical reasoning, and how you approach challenges, not polished or rehearsed answers."
        },
        {
          question: "How many interviews will I have at Oxford or Cambridge?",
          answer: "Most applicants have one to three interviews, sometimes with different colleges or tutors. Some candidates may be interviewed by more than one college through the pooling process. Each interview usually lasts between twenty and thirty minutes. Having multiple interviews is normal and does not mean anything negative."
        },
        {
          question: "How should I prepare for an Oxbridge interview?",
          answer: "Preparation should focus on understanding your subject deeply rather than memorising answers. Review key concepts, practise thinking aloud, and be ready to discuss topics from your personal statement. Reading beyond the syllabus and practising with sample questions or mock interviews can help build confidence. Good preparation helps you stay calm and engaged during the interview."
        },
        {
          question: "How much weight do interviews carry in Oxbridge admissions decisions?",
          answer: "Interviews carry significant weight in Oxbridge admissions. Once you are invited to interview, tutors rely heavily on your performance to decide whether you are offered a place. Interviews help them assess academic potential and suitability for the teaching system. Strong interviews can sometimes outweigh weaker parts of an application."
        }
      ]
    },
    {
      title: "OXBRIDGE ASSESSMENT TEST FAQs",
      faqs: [
        {
          question: "Which courses usually require admissions tests?",
          answer: "Admissions tests are commonly required for Medicine, Dentistry, Law, Economics, Engineering, Mathematics, and some Humanities courses. Oxford and Cambridge use tests for many subjects, while other universities may require tests such as the UCAT or LNAT. Each course sets its own requirements, so students should check university websites carefully."
        },
        {
          question: "How should students prepare for admissions tests?",
          answer: "Effective preparation includes practising past papers, learning question types, working under timed conditions, and reviewing mistakes. Students should focus on reasoning skills rather than memorising content. Many tests reward clear thinking and problem solving. Mock tests and structured practice plans can greatly improve results."
        },
        {
          question: "How do admissions tests fit into the overall application process?",
          answer: "Admissions tests are one part of a wider application that includes grades, personal statements, references, and interviews. For competitive universities, test scores often play a major role in shortlisting. Performing well helps tutors identify students with strong academic potential. Success comes from balanced preparation across all parts of the application."
        }
      ]
    }
  ]
};