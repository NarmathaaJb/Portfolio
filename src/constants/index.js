import {
  backend,
  carrent,
  codecortex,
  creator,
  css,
  figma,
  git,
  google,
  hackathon_logo,
  html,
  javascript,
  jobit,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  threejs,
  tripguide,
  web
} from "../assets";



export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
      id: "tech",
      title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Mobile App Developer",
        icon: mobile,
    },
    {
        title: "Machine Learning Engineer",
        icon: backend,
    },
    {
        title: "UI UX Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Figma",
        icon: figma,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
];

const experiences = [
    {
        title: "Machine Learning Engineer",
        company_name: " Tri-Nit Hackathon’24",
        icon: hackathon_logo,
        iconBg: "#E6DEDD",
        date: "November 2023",
        points: [
        "Automated road damage detection for infrastructure maintenance using MACHINE LEARNING",
        "Collaborated with a four-person team to design and develop a Convolutional Neural Network (CNN) model.",
        "Guided the implementation of real-time object detection using You Only Look Once (YOLO).",
        "Achieved an accuracy of 81% in detecting and categorizing road damage.",
      ],
    },
    {
      title: "Mobile App Developer",
      company_name: "Google's Gemini API Developer Competition",
      icon: google,
      iconBg: "#E6DEDD",
      date: "Jun 2024 - Aug 2024",
      points: [
        "Story Generation App for Kids Using Gemini AI",
        "Designed a user-friendly Flutter UI , enhancing the experience for both kids and parents with intuitive navigation and engaging visuals.",
        "Developed dynamic story generation features using the Gemini API, allowing children to explore various genres.",
        "Integrated a read-aloud feature to support young readers, making stories accessible through narration and improving overall engagement by 30%."
      ],
    },
    {
      title: "Participant - VIT Hackathon",
      company_name: "Vellore Institute of Technology (VIT)",
      icon:  codecortex,// You can replace this with the actual icon variable or image URL
      iconBg: "#000000", // Customize the background color as needed
      date: "Sept 2024",
      points: [
        "Created FarmLink, a mobile app connecting farmers, consumers, and retailers, reducing reliance on intermediaries.",
        "Designed an intuitive and visually engaging interface with Flutter, ensuring seamless performance and usability across platforms.",
        "Engineered a Node.js backend with Firebase for real-time data and secure authentication.",
        "Implemented advanced search and filtering to connect users by location and product type efficiently.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { experiences, projects, services, technologies, testimonials };
