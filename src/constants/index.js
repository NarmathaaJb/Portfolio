import {
  backend,
  codecortex,
  creator,
  css,
  farmlink,
  figma,
  git,
  google,
  hackathon_logo,
  happytales,
  html,
  javascript,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  stayzen,
  tailwind,
  threejs,
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
  
  const achievements = [
    {
      title: "Elite Certification",
      organization: "NPTEL Exam",
      date: "Jul. 2023 - Oct. 2023",
      description:
        "Received Elite certification in the following NPTEL exams: The Joy of Computing Using Python and Introduction to Industry 4.0 and Industrial Internet of Things.",
    },
    {
      title: "Infosys Springboard",
      organization: "Certification",
      date: "Jul. 2024",
      description:
        "Earned Artificial Intelligence Primer Certification and Artificial Intelligence Foundation Certification.",
    },
  ];
  
  
  const projects = [
    {
      name: "StayZen",
      description:
        "A MERN stack booking app that streamlines booking for destinations and venues. It offers an intuitive interface for users to search, book, and manage their plans. Designed for a seamless and hassle-free experience.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: stayzen,
      source_code_link: "https://github.com/NarmathaaJb/StayZen",
    },
    {
      name: "HappyTales",
      description:
        "A Flutter-based story generating app using the Gemini API, designed for children. Features include genre selection, parental login, read-aloud functionality, and Firebase authentication.",
      tags: [
        {
          name: "flutter",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "geminiapi",
          color: "blue-text-gradient",
        },
      ],
      image: happytales,
      source_code_link: "https://github.com/",
    },
    {
      name: "FarmLink",
      description:
        "A mobile app connecting farmers directly with consumers and retailers. It enables farmers to list produce, negotiate prices, and manage transactions, promoting fair trade and sustainable agriculture.",
      tags: [
        {
          name: "flutter",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "uiux",
          color: "blue-text-gradient",
        },
      ],
      image: farmlink,
      source_code_link: "https://github.com/NarmathaaJb/FarmLink",
    },
  ];
  
  export { achievements, experiences, projects, services, technologies };

