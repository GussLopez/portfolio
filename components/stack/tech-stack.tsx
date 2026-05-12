'use client'

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image"
import { useEffect, useState } from "react";
import Dialog from "../smoothui/dialog";
import { Button } from "../ui/button";
import { images } from "@/data/stack";
import { ExternalLink } from "lucide-react";

interface SelectedTechData {
  img: string;
  name: string;
  link: string;
  description: string;
  bgWhite?: boolean
}

export default function TechStack() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedTech, setSelectedTech] = useState<SelectedTechData | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const LOGO_DEV_PUBLIC_KEY = process.env.NEXT_PUBLIC_LOGO_DEV_KEY || 'pk_JMZrCYTOT_m5lHGrHln_xg';
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-4">
      {images.map((item, i) => (
        <motion.div
          key={item.domain}
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
            onClick={() => {
              setSelectedTech({
                img: item.variant
                  ? item.variant
                  : `https://img.logo.dev/${item.domain}?token=${LOGO_DEV_PUBLIC_KEY}&format=png&theme=${theme}`,
                link: item.link,
                name: item.name,
                description: item.description,
                bgWhite: item.bgWhite
              })
              setOpen(true);
            }}
            className="p-4 border border-border rounded-md flex items-center justify-center bg-border/10 hover:bg-border/20 transition-colors duration-150 cursor-pointer"
          >
            <Image
              src={item.variant
                ? item.variant
                : `https://img.logo.dev/${item.domain}?token=${LOGO_DEV_PUBLIC_KEY}&format=png&theme=${theme}`}
              alt={`${item.domain} Logo`}
              loading="eager"
              width={128}
              height={128}
              className={`rounded-sm object-contain ${item.bgWhite && 'p-2 bg-white'}`}
            />
          </motion.div>
        </motion.div>
      ))}

      <Dialog
        footer={
          <Button
            className="w-full"
            variant={'outline'}
            onClick={() => setOpen(false)}
            asChild
          >
            <a
              href={selectedTech?.link}
              target="_blank"
            >
              <ExternalLink />
              Ver web
            </a>
          </Button>
        }
        onOpenChange={setOpen}
        open={open}
        title={selectedTech?.name}
        description={selectedTech?.description}
        img={selectedTech?.img}
        bgWhite={selectedTech?.bgWhite}
      >
      </Dialog>
    </div>
  )
}
