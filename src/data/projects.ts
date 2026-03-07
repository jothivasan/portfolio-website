import { Project } from "../types";
import Images from "../assets/images/Image";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "TEETHEASE ACADEMY",
    category: "Online Course Platform - OnGoing",
    description:
      "A complete frontend implementation for an online NEET coaching platform featuring live classes, dashboards, and responsive landing pages.",
    role: "Frontend Developer",
    responsibilities: [
      "Delivered a production-ready frontend for a full-scale NEET coaching platform.",
      "Improved user experience through responsive design and clean UI architecture.",
      "Enabled seamless student onboarding via intuitive landing pages and contact workflows.",
    ],
    image: Images.ToothEaseImg,
    tags: ["ReactJS", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    link: "https://teetheaseacademy.com/",
  },
  {
    id: "2",
    title: "RIGHTBRAINS",
    category: "Digital Marketing Agency Website",
    description:
      "A responsive, highly animated interface for a digital marketing agency focused on user engagement.",
    role: "Frontend Developer",
    responsibilities: [
      "Delivered a responsive, animated interface using Framer Motion to significantly improve user engagement.",
      "Validated interactive lead capture forms to enhance input accuracy and streamline communication workflows.",
      "Implemented performance optimizations that reduced initial load times through asset lazy-loading.",
    ],
    image: Images.RightBrainImg,
    tags: [
      "ReactJS",
      "Tailwind CSS",
      "Framer Motion",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    link: "https://rightbrains.co.in/",
  },
  {
    id: "3",
    title: "SRI NAVALADIYAN FOODS",
    category: "Food E-commerce Website",
    description:
      "A complete, responsive brand website developed end-to-end for a traditional food business, focused on performance, usability, and clear product presentation.",
    role: "Frontend Developer",
    responsibilities: [
      "Designed and developed the entire website independently, delivering a fully responsive and production-ready frontend.",
      "Optimized page performance through efficient asset loading and responsive image handling for faster load times.",
      "Implemented clean navigation and content structure to improve user accessibility and browsing experience across devices.",
    ],
    image: Images.SrinavaladiyanImg,
    tags: ["HTML", "CSS", "TypeScript", "Tailwind CSS", "ReactJS", "Supabase"],
    link: "https://www.srinavaladiyanfoods.in/",
  },
  {
    id: "4",
    title: "GEETHANJALI BUILDERS",
    category: "Construction & Real Estate Website",
    description:
      "A responsive business website developed for a construction company to showcase projects, services, and company information with a clean and professional design.",
    role: "Frontend Developer",
    responsibilities: [
      "Developed a responsive website to present projects, services, and company details.",
      "Built reusable UI components and structured navigation for better user experience.",
      "Optimized performance and ensured smooth functionality across devices.",
    ],
    image: Images.GeethanjaliBuildersImg,
    tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "ReactJS", "Supabase"],
    link: "https://www.geethanjalibuilders.com/",
  },
];
