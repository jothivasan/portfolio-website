import { Project } from "../types";
import Images from "../assets/images/Image";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "RIGHTBRAINS",
    category: "Agency Website",
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
    link: "https://rightbrains.io/",
  },
  {
    id: "2",
    title: "SRI NAVALADIYAN FOODS",
    category: "Brand Website",
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
];
