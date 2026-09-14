import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiBetterauth, SiDrizzle, SiExpress, SiShadcnui } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";

export const projects = [
  {
    title: "Lennsi",
    href: "https://lennsi.com",
    description:
      "NFC SaaS platform for restaurants with multi-branch management and analytics",
    slug: "lennsi",
    technologies: [
      {
        icon: RiNextjsFill,
        className: "",
        name: "Next.js",
      },
      {
        icon: RiSupabaseFill,
        className: "text-[#3FCF8E]",
        name: "Supabase",
      },
      {
        icon: RiTailwindCssFill,
        className: "text-[#06B6D4]",
        name: "Tailwind CSS",
      },
      {
        icon: SiShadcnui,
        className: "",
        name: "Shadcn UI",
      },
      {
        icon: TbBrandFramerMotion,
        className: "text-yellow-500 dark:text-yellow-300",
        name: "Motion",
      },
    ],
  },
  {
    title: "Hisgroup Company",
    href: "https://hisgroupcompany.com",
    description:
      "Business web platform that allows clients to browse supplier products and manage purchase orders.",
    slug: "hisgroup-company",
    technologies: [
      {
        icon: RiNextjsFill,
        className: "",
        name: "Next.js",
      },
      {
        icon: SiExpress,
        className: "",
        name: "Express",
      },
      {
        icon: BiLogoPostgresql,
        className: "text-[#4570f1]",
        name: "PostgreSQL",
      },
      {
        icon: RiTailwindCssFill,
        className: "text-[#06B6D4]",
        name: "Tailwind CSS",
      },
      {
        icon: SiShadcnui,
        className: "",
        name: "Shadcn UI",
      },
    ],
  },
  {
    title: "Surtio",
    href: "https://surtio.vercel.app",
    description:
      "Inventory and point-of-sale system developed to optimize product management, sales, and stock control.",
    slug: "surtio",
    technologies: [
      {
        icon: RiNextjsFill,
        className: "",
        name: "Next.js",
      },
      {
        icon: RiSupabaseFill,
        className: "text-[#3FCF8E]",
        name: "Supabase",
      },
      {
        icon: RiTailwindCssFill,
        className: "text-[#06B6D4]",
        name: "Tailwind CSS",
      },
      {
        icon: SiShadcnui,
        className: "",
        name: "Shadcn UI",
      },
    ],
  },
];

export const allProjects = [
  {
    title: "Lennsi",
    href: "https://lennsi.com",
    description:
      "A SaaS platform that connects restaurant guests to digital menus, Wi-Fi, reviews, and social media through NFC touchpoints, with multi-branch management and engagement analytics.",
    slug: "lennsi",
    quote:
      "One tap connects your table to your restaurant’s digital experience.",
    published: new Date(2026, 8, 20),
    preview: "/img/projects/lennsi-preview.webp",
    paragraphs: [
      "Lennsi is a SaaS platform designed to connect the physical restaurant experience with digital services through NFC technology. By tapping a compatible smartphone on a table’s NFC tag, guests can access a dedicated page with the restaurant’s menu, Wi-Fi details, review links, social media, and promotions.",
      "The platform brings these interactions together in a mobile-friendly interface, giving guests a convenient way to find useful information without installing an app. Each touchpoint has a unique URL associated with a branch or table, allowing restaurants to tailor the experience to different locations.",
      "For restaurant owners, Lennsi provides a centralized dashboard to manage multiple branches, organize tables, and configure digital touchpoints. Restaurant information and destination links can be updated while keeping the same NFC URL, reducing the need to replace physical materials when content changes.",
      "Engagement analytics help owners understand how guests interact with their digital content. By tracking touchpoint activity and actions such as opening the menu or visiting a review link, Lennsi provides insight into which resources guests use and how engagement varies across the restaurant.",
      "Built with Next.js, TypeScript, and Supabase, the application combines a responsive frontend with authentication, relational data storage, and restaurant-level data isolation. Tailwind CSS and shadcn/ui support a consistent interface across the management dashboard and public guest pages.",
      "The project focuses on making restaurant technology practical for everyday use, from onboarding and branch configuration to the experience of a guest tapping an NFC tag. It brings together product design, database modeling, access control, and analytics in a single application.",
    ],
    characteristics: [
      {
        characteristic: "NFC-powered guest experience",
        desc: "Give guests access to restaurant content by tapping a compatible smartphone on an NFC tag, with no app installation required.",
      },
      {
        characteristic: "Multi-branch management",
        desc: "Manage multiple locations within one restaurant account, with branch-specific tables, content, and touchpoints.",
      },
      {
        characteristic: "Table-specific touchpoints",
        desc: "Associate unique public URLs with individual tables or branches to organize and track guest interactions.",
      },
      {
        characteristic: "Digital menus",
        desc: "Make restaurant menus accessible from a mobile-friendly page and update them without replacing NFC tags.",
      },
      {
        characteristic: "Customizable guest actions",
        desc: "Bring together menu access, Wi-Fi details, Google review links, social media, WhatsApp, and promotions.",
      },
      {
        characteristic: "Engagement analytics",
        desc: "Track touchpoint activity and guest actions to understand which digital resources receive the most engagement.",
      },
      {
        characteristic: "Centralized content management",
        desc: "Update restaurant information and touchpoint destinations from a single dashboard.",
      },
      {
        characteristic: "Authentication and data isolation",
        desc: "Use Supabase authentication and row-level security policies to restrict access to each restaurant’s management data.",
      },
      {
        characteristic: "Responsive interface",
        desc: "Provide a mobile-first guest experience and a management dashboard that adapts to different screen sizes.",
      },
    ],
    technologies: [
      {
        icon: RiNextjsFill,
        className: "",
        name: "Next.js",
      },
      {
        icon: RiSupabaseFill,
        className: "text-[#3FCF8E]",
        name: "Supabase",
      },
      {
        icon: RiTailwindCssFill,
        className: "text-[#06B6D4]",
        name: "Tailwind CSS",
      },
      {
        icon: SiShadcnui,
        className: "",
        name: "shadcn/ui",
      },
      {
        icon: TbBrandFramerMotion,
        className: "text-yellow-500 dark:text-yellow-300",
        name: "Motion",
      },
    ],
  },
  {
    title: "Surtio",
    href: "https://surtio.vercel.app",
    description:
      "Inventory and point-of-sale system developed to optimize product management, sales, and stock control.",
    slug: "surtio",
    quote: "Manage your business and sales effortlessly.",
    published: new Date(2026, 4, 13),
    preview: "/img/projects/surtio-preview.webp",
    paragraphs: [
      "Surtio is a tool designed to manage your business inventory, generate sales, and create reports for data-driven decision-making. It is built to simplify management by providing intuitive interfaces and an efficient workflow that makes it easier to control products, customers, and sales activity in real time.",
      "The system helps optimize administrative processes, reduce manual errors, and provide key business insights through detailed reports and statistics.",
    ],
    characteristics: [
      {
        characteristic: "Sales management",
        desc: "Real-time sales registration and cancellation.",
      },
      {
        characteristic: "Multi-tenant architecture",
        desc: "Support for multiple businesses within a single platform.",
      },
      {
        characteristic: "Suppliers",
        desc: "Complete supplier management.",
      },
      {
        characteristic: "Roles and permissions",
        desc: "Access control for employees.",
      },
      {
        characteristic: "Inventory control",
        desc: "Product stock entries and exits.",
      },
    ],
    technologies: [
      {
        icon: RiNextjsFill,
        className: "",
        name: "Next.js",
      },
      {
        icon: RiSupabaseFill,
        className: "text-[#3FCF8E]",
        name: "Supabase",
      },
      {
        icon: RiTailwindCssFill,
        className: "text-[#06B6D4]",
        name: "Tailwind CSS",
      },
      {
        icon: SiShadcnui,
        className: "",
        name: "Shadcn UI",
      },
    ],
  },
  {
    title: "Hisgroup Company",
    href: "https://hisgroupcompany.com",
    description:
      "Business web platform that allows clients to browse supplier products and manage purchase orders.",
    slug: "hisgroup-company",
    published: new Date(2025, 5, 17),
    quote:
      "Order tracking and e-commerce management in a platform connected to multiple suppliers.",
    preview: "/img/projects/hisgroup-preview.webp",
    paragraphs: [
      "Hisgroup Company is an e-commerce platform focused on order management and tracking, designed to connect administrators and customers within a single system. The application allows products, categories, and purchase orders to be managed through an intuitive admin dashboard, making commercial operations easier to organize and control.",
      "The system integrates APIs from different suppliers to dynamically display products within the catalog, keeping information updated and scalable. In addition, customers can track the status of their orders in real time, improving the shopping experience and communication with the company.",
    ],
    characteristics: [
      {
        characteristic: "Admin dashboard",
        desc: "Management of products, categories, and purchase orders.",
      },
      {
        characteristic: "Order tracking",
        desc: "Real-time order status visualization.",
      },
      {
        characteristic: "API integrations",
        desc: "Product synchronization from multiple suppliers.",
      },
      {
        characteristic: "Catalog management",
        desc: "Creation and administration of products and categories.",
      },
      {
        characteristic: "E-commerce system",
        desc: "Complete shopping experience for customers.",
      },
    ],
    technologies: [
      {
        icon: RiNextjsFill,
        className: "",
        name: "Next.js",
      },
      {
        icon: SiExpress,
        className: "",
        name: "Express",
      },
      {
        icon: BiLogoPostgresql,
        className: "text-[#4570f1]",
        name: "PostgreSQL",
      },
      {
        icon: RiTailwindCssFill,
        className: "text-[#06B6D4]",
        name: "Tailwind CSS",
      },
      {
        icon: SiShadcnui,
        className: "",
        name: "Shadcn UI",
      },
    ],
  },
  {
    title: "Meeti",
    href: "#",
    description:
      "Web app for creating and managing in-person and virtual meetings with a modern and intuitive experience.",
    slug: "meeti",
    github: "https://github.com/GussLopez/meeti",
    published: new Date(2026, 5, 3),
    quote: "Organize meetings, build communities, and meet new people.",
    paragraphs: [
      "Meeti is a web application designed to create and manage in-person and virtual meetings through a modern, intuitive, and collaboration-focused experience. The platform allows users to organize events, manage communities, and participate in meetings easily from any device.",
      "Additionally, users can join communities, manage active sessions, and keep their activity synchronized across multiple devices. The project was built with a modern architecture using Next.js, Drizzle ORM, and Better Auth to provide a fast, secure, and scalable system.",
    ],
    characteristics: [
      {
        characteristic: "Meeting management",
        desc: "Creation and management of virtual and in-person meetings.",
      },
      {
        characteristic: "Communities",
        desc: "Create and participate in communities within the platform.",
      },
      {
        characteristic: "Active sessions",
        desc: "View and manage sessions opened on other devices.",
      },
      {
        characteristic: "Secure authentication",
        desc: "Modern authentication system using Better Auth.",
      },
      {
        characteristic: "Modern architecture",
        desc: "Built with Next.js and Drizzle ORM.",
      },
      {
        characteristic: "Responsive experience",
        desc: "Interface optimized for desktop and mobile devices.",
      },
    ],
    technologies: [
      {
        icon: RiNextjsFill,
        className: "",
        name: "Next.js",
      },
      {
        icon: SiDrizzle,
        className: "text-lime-600 dark:text-[#C5F74F]",
        name: "Drizzle ORM",
      },
      {
        icon: SiBetterauth,
        className: "",
        name: "Better Auth",
      },
      {
        icon: RiTailwindCssFill,
        className: "text-[#06B6D4]",
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Grupo Saimo",
    href: "https://gruposaimo.com",
    description:
      "Corporate website with multiple informational sections and a digital catalog focused on suppliers and customers.",
    slug: "grupo-saimo",
    published: new Date(2025, 9, 2),
    preview: "/img/projects/saimo-preview.webp",
    quote:
      "Dynamic catalog, advanced search, and a modern experience for exploring products and services.",
    paragraphs: [
      "Grupo Saimo is a corporate web application focused on showcasing products and services through a modern, dynamic, and intuitive experience. The platform allows users to browse a product catalog integrated from external supplier APIs, making real-time product discovery and navigation easier.",
      "In addition to the catalog, the website includes multiple informational sections about the company’s services and solutions. The landing page was designed with smooth animations using Motion to provide a more engaging, modern, and professional visual experience.",
    ],
    characteristics: [
      {
        characteristic: "Dynamic catalog",
        desc: "Products fetched from external supplier APIs.",
      },
      {
        characteristic: "Advanced search",
        desc: "Filter products by brands and categories.",
      },
      {
        characteristic: "Corporate information",
        desc: "Informational sections about services and solutions.",
      },
      {
        characteristic: "Interactive landing page",
        desc: "Modern animations built with Motion.",
      },
      {
        characteristic: "Responsive experience",
        desc: "Optimized design for mobile and desktop devices.",
      },
      {
        characteristic: "Scalable architecture",
        desc: "Structure prepared to integrate new suppliers.",
      },
    ],
    technologies: [
      {
        icon: RiNextjsFill,
        className: "",
        name: "Next.js",
      },
      {
        icon: SiExpress,
        className: "",
        name: "Express",
      },
      {
        icon: BiLogoPostgresql,
        className: "text-[#4570f1]",
        name: "PostgreSQL",
      },
      {
        icon: RiTailwindCssFill,
        className: "text-[#06B6D4]",
        name: "Tailwind CSS",
      },
      {
        icon: SiShadcnui,
        className: "",
        name: "Shadcn UI",
      },
    ],
  },
  {
    title: "Tacos Rigo",
    href: "https://tacosrigo.com",
    description:
      "Restaurant website in Cancun focused on showcasing the menu, business information, and contact channels.",
    slug: "tacos-rigo",
    preview: "/img/projects/rigo-preview.webp",
    quote:
      "Explore the menu, find locations, and discover the Tacos Rigo experience from any device.",
    published: new Date(2025, 8, 27),
    paragraphs: [
      "Tacos Rigo is a corporate website developed to showcase the restaurant’s identity, services, and food offerings through a modern and accessible experience. The platform allows users to explore the menu, discover available locations, and access relevant business information from any device. The website was designed with an attractive visual style aligned with the brand and a responsive approach to improve user experience and strengthen the restaurant’s digital presence.",
      "Additionally, it includes several informational sections designed to simplify navigation and promote the services offered by the brand.",
    ],
    characteristics: [
      {
        characteristic: "Menu showcase",
        desc: "Browse restaurant products and categories.",
      },
      {
        characteristic: "Locations",
        desc: "Information and locations of different branches.",
      },
      {
        characteristic: "Responsive design",
        desc: "Optimized experience for mobile and desktop.",
      },
      {
        characteristic: "Corporate information",
        desc: "Sections about restaurant services and details.",
      },
      {
        characteristic: "Digital presence",
        desc: "Website focused on improving the business’s online image.",
      },
    ],
    technologies: [
      {
        icon: RiNextjsFill,
        className: "",
        name: "Next.js",
      },
      {
        icon: RiTailwindCssFill,
        className: "text-[#06B6D4]",
        name: "Tailwind CSS",
      },
    ],
  },
];
