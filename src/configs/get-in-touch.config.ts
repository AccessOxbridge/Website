import { GetInTouchConfig } from './types';

export const getInTouchConfig: GetInTouchConfig = {
  title: "What Happens in Your Free Consultation?",
  subtitle: "Schedule a free consultation with one of our specialised team members to discuss your tailored roadmap to success!",
  benefits: [
    {
      number: "01",
      description: "Get an idea of your acceptance chances to your dream school"
    },
    {
      number: "02",
      description: "Get personalized university and exam recommendations based on your needs"
    },
    {
      number: "03",
      description: "Learn what you can do now to build up your candidacy + get an eBook with essay examples and best practices"
    }
  ],
  form: {
    title: "Your Path to Your Dream University Starts Here!",
    description: "Fill in your details and express interest in a free education assessment, where you can get all your questions answered.",
    fields: [
      {
        id: "person_type__c",
        label: "Are you a student or a guardian?",
        type: "radio",
        required: true,
        options: [
          { label: "Student", value: "Student" },
          { label: "Guardian", value: "Guardian" }
        ]
      },
      {
        id: "firstName",
        label: "First Name",
        type: "text",
        placeholder: "Enter your first name",
        required: true
      },
      {
        id: "lastName",
        label: "Last Name",
        type: "text",
        placeholder: "Enter your last name",
        required: true
      },
      {
        id: "email",
        label: "Email",
        type: "email",
        placeholder: "Enter your email",
        required: true
      }
    ],
    submitButtonText: "Next"
  }
};
