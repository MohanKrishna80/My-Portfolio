
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit
} from "react-icons/si";


export const skills = [
  {
    name: "React",
    level: "80%",
    icon: <SiReact className="w-6 h-6 text-[#61DAFB]" />
  },
  {
    name: "Node.js",
    level: "75%",
    icon: <SiNodedotjs className="w-6 h-6 text-[#339933]" />
  },
  {
    name: "Express.js",
    level: "75%",
    icon: <SiExpress className="w-6 h-6 text-white" />
  },
  {
    name: "MongoDB",
    level: "75%",
    icon: <SiMongodb className="w-6 h-6 text-[#47A248]" />
  },
  {
    name: "JavaScript",
    level: "85%",
    icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />
  },
  {
    name: "TypeScript",
    level: "75%",
    icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" />
  },
  {
    name: "Tailwind CSS",
    level: "80%",
    icon: <SiTailwindcss className="w-6 h-6 text-[#38BDF8]" />
  },
  {
    name: "Redux",
    level: "75%",
    icon: <SiRedux className="w-6 h-6 text-[#764ABC]" />
  },
  {
    name: "Git",
    level: "75%",
    icon: <SiGit className="w-6 h-6 text-[#F05032]" />
  }
];



export const projects = [
  {
    title: "Food Delivery Platform",
    desc: "Full-stack MERN food delivery app with Stripe payments, admin dashboard, and order tracking system.",
    live: "https://food-delivery-app-frontend-3a54.onrender.com",
    github: "https://github.com/MohanKrishna80/Food-Delivery-App",
  },
  {
    title: "AI Resume Builder",
    desc: "SaaS-style resume builder with templates, PDF export, and AI-powered content suggestions.",
    live: "https://resume-builder-frontend-nye5.onrender.com",
    github: "https://github.com/MohanKrishna80/Resume-Builder",
  },
  {
    title: "Employee Management System",
    desc: "Employee management system with full CRUD operations.",
    live: "https://employee-management-system-seven-ashen.vercel.app/",
    github: "#",
  },
  {
    title: "ShowFlix",
    desc: "Modern movie streaming UI with API integration.",
    live: "https://show-flix-black.vercel.app/",
    github: "#",
  },
  {
    title: "Smart Bazaar",
    desc: "E-commerce frontend with cart and filtering functionality.",
    live: "https://smart-bazaar-inky.vercel.app/",
    github: "#",
  },
];
