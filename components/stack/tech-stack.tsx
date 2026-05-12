'use client'

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image"
import { useEffect, useState } from "react";

const images = [
  { domain: "typescriptlang.org", },
  { domain: "next.org", },
  { domain: "vercel.com", },
  { domain: "tailwindcss.com", },
  { domain: "motion.dev", },
  { domain: "shadcn.com", variant: "/img/stack/shadcn.png", bgWhite: true },
  { domain: "express.png", variant: '/img/stack/express.png', bgWhite: true },
  { domain: "postgresql.org", variant: '/img/stack/postgresql.png', },
  { domain: "postman.com", variant: '/img/stack/postman.png' },
  { domain: "notion.com", },
  { domain: "figma.com", },
  { domain: "sequelize.org", },
  { domain: "supabase.com", },
  { domain: "tableplus.com", },
]

export default function TechStack() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;


  const LOGO_DEV_PUBLIC_KEY = process.env.NEXT_PUBLIC_LOGO_DEV_KEY || 'pk_JMZrCYTOT_m5lHGrHln_xg';
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-4">
      {images.map((item, i) => (
        <motion.div
          initial={{ opacity: 0, y: -6, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: .3,
            delay: .05 * i,
            type: "spring",
            stiffness: 300,
            damping: 15,
            mass: 1
          }}
          key={item.domain}
        >
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ y: -6 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              mass: 1
            }}
            className="p-4 border border-border rounded-md flex items-center justify-center bg-border/10 hover:bg-border/20 transition-colors duration-150 cursor-pointer"
          >
            <Image
              src={item.variant
                ? item.variant
                : `https://img.logo.dev/${item.domain}?token=${LOGO_DEV_PUBLIC_KEY}&format=png&theme=${theme}`}
              alt={`${item.domain} Logo`}
              width={128}
              height={128}
              className={`rounded-sm object-contain ${item.bgWhite && 'p-2 bg-white'}`}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
