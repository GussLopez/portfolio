import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiBetterauth, SiDrizzle, SiExpress, SiShadcnui } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const projects = [
  {
    title: "Flyzzio",
    href: "https://flyzzio.vercel.app/admin",
    description:
      "Sistema de inventario y punto de venta desarrollado para optimizar la gestión de productos, ventas y control de stock.",
    slug: "flyzzio",
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
        name: "TailwindCSS",
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
      "Plataforma web empresarial que permite a los clientes visualizar productos de proveedores y gestionar órdenes de compra.",
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
        name: "TailwindCSS",
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
      "Aplicación web para crear y administrar reuniones presenciales y virtuales con una experiencia moderna e intuitiva.",
    slug: "meeti",
    technologies: [
      {
        icon: RiNextjsFill,
        className: "",
        name: "Next.js",
      },
      {
        icon: SiDrizzle,
        className: "text-[#C5F74F]",
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
        name: "TailwindCSS",
      },
    ],
  },
];

export const allProjects = [
  {
    title: "Flyzzio",
    href: "https://flyzzio.vercel.app/admin",
    description:
      "Sistema de inventario y punto de venta desarrollado para optimizar la gestión de productos, ventas y control de stock.",
    slug: "flyzzio",
    quote: "Gestiona tu negocio y tus ventas sin esfuerzo.",
    published: new Date(2026, 4, 13),
    preview: "/img/projects/flyzzio-preview.webp",
    p1: "es una herramienta para gestionar el inventario de tu negocio, generar ventas y reportes para tomar decisiones basadas en datos. Está diseñada para que la gestión sea más simple, proporcionando interfaces intuitivas y un flujo de trabajo eficiente que facilita el control de productos, clientes y movimientos de ventas en tiempo real.",
    p2: "El sistema permite optimizar procesos administrativos, reducir errores manuales y obtener información clave del negocio mediante reportes y estadísticas detalladas.",
    characteristics: [
      {
        characteristic: "Gestión de ventas",
        desc: "Registro y cancelación de ventas en tiempo real.",
      },
      {
        characteristic: "Arquitectura multitenant",
        desc: "Soporte para múltiples negocios en una sola plataforma.",
      },
      {
        characteristic: "Proveedores",
        desc: "Administración completa de proveedores.",
      },
      {
        characteristic: "Roles y permisos",
        desc: "Control de acceso para empleados.",
      },
      {
        characteristic: "Control de inventario",
        desc: "Entradas y salidas de productos.",
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
        name: "TailwindCSS",
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
      "Plataforma web empresarial que permite a los clientes visualizar productos de proveedores y gestionar órdenes de compra.",
    slug: "hisgroup-company",
    published: new Date(2025, 5, 17),
    quote:
      "Seguimiento de pedidos y gestión e-commerce en una plataforma conectada con múltiples proveedores.",
    preview: "/img/projects/hisgroup-preview.webp",
    p1: "es una plataforma e-commerce enfocada en la gestión y seguimiento de pedidos, diseñada para conectar a administradores y clientes en un solo sistema. La aplicación permite administrar productos, categorías y órdenes de compra mediante un panel administrativo intuitivo, facilitando la organización y control de operaciones comerciales.",
    p2: "El sistema integra APIs de distintos proveedores para mostrar productos dinámicamente dentro del catálogo, permitiendo mantener información actualizada y escalable. Además, los clientes pueden visualizar el estado y seguimiento de sus pedidos en tiempo real, mejorando la experiencia de compra y la comunicación con la empresa.",
    characteristics: [
      {
        characteristic: "Panel administrativo",
        desc: "Gestión de productos, categorías y órdenes de compra.",
      },
      {
        characteristic: "Seguimiento de pedidos",
        desc: "Visualización del estado de pedidos en tiempo real.",
      },
      {
        characteristic: "Integración de APIs",
        desc: "Sincronización de productos desde múltiples proveedores.",
      },
      {
        characteristic: "Gestión de catálogo",
        desc: "Creación y administración de productos y categorías.",
      },
      {
        characteristic: "Sistema e-commerce",
        desc: "Experiencia de compra completa para clientes.",
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
        name: "TailwindCSS",
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
      "Aplicación web para crear y administrar reuniones presenciales y virtuales con una experiencia moderna e intuitiva.",
    slug: "meeti",
    github: "https://github.com/GussLopez/meeti",
    published: new Date(2026, 5, 3),
    quote: "Organiza reuniones, crea comunidades y conoce nuevas personas.",
    p1: "es una aplicación web diseñada para crear y administrar reuniones presenciales y virtuales mediante una experiencia moderna, intuitiva y enfocada en la colaboración. La plataforma permite a los usuarios organizar eventos, administrar comunidades y participar en reuniones de manera sencilla desde cualquier dispositivo.",
    p2: "Además, los usuarios pueden unirse a comunidades, gestionar sus sesiones activas y mantener sincronizada su actividad entre diferentes dispositivos. El proyecto fue desarrollado con una arquitectura moderna utilizando Next.js, Drizzle ORM y Better Auth para ofrecer un sistema rápido, seguro y escalable.",
    characteristics: [
      {
        characteristic: "Gestión de reuniones",
        desc: "Creación y administración de reuniones virtuales y presenciales.",
      },
      {
        characteristic: "Comunidades",
        desc: "Creación y participación en comunidades dentro de la plataforma.",
      },
      {
        characteristic: "Sesiones activas",
        desc: "Visualización y control de sesiones abiertas en otros dispositivos.",
      },
      {
        characteristic: "Autenticación segura",
        desc: "Sistema de autenticación moderno usando Better Auth.",
      },
      {
        characteristic: "Arquitectura moderna",
        desc: "Desarrollado con Next.js y Drizzle ORM.",
      },
      {
        characteristic: "Experiencia responsive",
        desc: "Interfaz optimizada para escritorio y dispositivos móviles.",
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
        className: "text-[#C5F74F]",
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
        name: "TailwindCSS",
      },
    ],
  },
  {
    title: "Grupo Saimo",
    href: "https://gruposaimo.com",
    description:
      "Sitio web corporativo con múltiples secciones informativas y catálogo digital orientado a proveedores y clientes.",
    slug: "grupo-saimo",
    published: new Date(2025, 9, 2),
    preview: "/img/projects/saimo-preview.webp",
    quote:
      "Catálogo dinámico, búsqueda avanzada y una experiencia moderna para explorar productos y servicios.",
    p1: "es una aplicación web corporativa enfocada en la visualización de productos y servicios mediante una experiencia moderna, dinámica e intuitiva. La plataforma permite a los usuarios explorar un catálogo de productos integrado desde APIs de proveedores externos, facilitando la búsqueda y navegación de información en tiempo real.",
    p2: "Además del catálogo, el sitio incluye múltiples secciones informativas sobre los servicios y soluciones que ofrece la empresa. La landing page fue diseñada con animaciones fluidas utilizando Motion para brindar una experiencia visual más atractiva, moderna y profesional.",
    characteristics: [
      {
        characteristic: "Catálogo dinámico",
        desc: "Productos obtenidos desde APIs de proveedores externos.",
      },
      {
        characteristic: "Búsqueda avanzada",
        desc: "Filtrado de productos por marcas y categorías.",
      },
      {
        characteristic: "Información corporativa",
        desc: "Secciones informativas sobre servicios y soluciones.",
      },
      {
        characteristic: "Landing interactiva",
        desc: "Animaciones modernas desarrolladas con Motion.",
      },
      {
        characteristic: "Experiencia responsive",
        desc: "Diseño optimizado para dispositivos móviles y escritorio.",
      },
      {
        characteristic: "Arquitectura escalable",
        desc: "Estructura preparada para integrar nuevos proveedores.",
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
        name: "TailwindCSS",
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
      "Página web para restaurante en Cancún enfocada en mostrar el menú, información del negocio y canales de contacto.",
    slug: "tacos-rigo",
    preview: "/img/projects/rigo-preview.webp",
    quote:
      "Explora el menú, encuentra sucursales y descubre la experiencia de Tacos Rigo desde cualquier dispositivo.",
    published: new Date(2025, 8, 27),
    p1: "es una página web corporativa desarrollada para presentar la identidad, servicios y oferta gastronómica del restaurante mediante una experiencia moderna y accesible. La plataforma permite a los usuarios explorar el menú, conocer las sucursales disponibles y obtener información relevante sobre el negocio desde cualquier dispositivo. El sitio fue diseñado con un enfoque visual atractivo con relación a la marca y responsive para mejorar la experiencia del usuario y fortalecer la presencia digital del restaurante.",
    p2: "Además, incluye distintas secciones informativas orientadas a facilitar la navegación y promover los servicios ofrecidos por la marca.",
    characteristics: [
      {
        characteristic: "Visualización de menú",
        desc: "Exploración de productos y categorías del restaurante.",
      },
      {
        characteristic: "Sucursales",
        desc: "Información y ubicación de las diferentes sucursales.",
      },
      {
        characteristic: "Diseño responsive",
        desc: "Experiencia optimizada para móviles y escritorio.",
      },
      {
        characteristic: "Información corporativa",
        desc: "Secciones sobre servicios y datos del restaurante.",
      },
      {
        characteristic: "Presencia digital",
        desc: "Sitio orientado a mejorar la imagen online del negocio.",
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
        name: "TailwindCSS",
      },
    ],
  },
];
