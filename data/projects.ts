import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiExpress, SiShadcnui } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const projects = [
  {
    title: "Flyzzio",
    href: "https://flyzzio.vercel.app/admin",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    technologies: [
      {
        icon: RiNextjsFill,
        className: "",
        name: 'Next.js'
      },
      {
        icon: RiSupabaseFill,
        className: "text-[#3FCF8E]",
        name: 'Supabase'
      },
      {
        icon: RiTailwindCssFill,
        className: "text-[#06B6D4]",
        name: 'TailwindCSS'
      },
      {
        icon: SiShadcnui,
        className: "",
        name: 'Shadcn UI'
      },
    ],
  },
  {
    title: "Hisgroup Company",
    href: "https://hisgroupcompany.com",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    technologies: [
      {
        icon: RiNextjsFill,
        className: "",
        name: 'Next.js'
      },
      {
        icon: SiExpress,
        className: "",
        name: 'Express'
      },
      {
        icon: BiLogoPostgresql,
        className: "text-[#4570f1]",
        name: 'PostgreSQL'
      },
      {
        icon: RiTailwindCssFill,
        className: "text-[#06B6D4]",
        name: 'TailwindCSS'
      },
      {
        icon: SiShadcnui,
        className: "",
        name: 'Shadcn UI'
      },
    ],
  },
  {
    title: "Grupo Saimo",
    href: "https://gruposaimo.com",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    technologies: [
      {
        icon: RiNextjsFill,
        className: "",
        name: 'Next.js'
      },
      {
        icon: SiExpress,
        className: "",
        name: 'Express'
      },
      {
        icon: BiLogoPostgresql,
        className: "text-[#4570f1]",
        name: 'PostgreSQL'
      },
      {
        icon: RiTailwindCssFill,
        className: "text-[#06B6D4]",
        name: 'TailwindCSS'
      },
      {
        icon: SiShadcnui,
        className: "",
        name: 'Shadcn UI'
      },
    ],
  },
];
