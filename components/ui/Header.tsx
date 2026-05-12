import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import * as motion from 'motion/react-client'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.nav
    initial={{ opacity: 0, y: -5, filter: "blur(4px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{ duration: .3, ease: "easeIn" }}
      className="container max-w-3xl mx-auto px-8 py-4 flex items-center justify-between bg-background"
    >
      <Link
        href={'/'}
        className="font-semibold opacity-70 hover:opacity-100 transition-all"
      >
        guslopez.dev
      </Link>

      <div className="flex items-center space-x-1">
        <Button
          asChild
          variant={'ghost'}
          size={'icon'}
          className="size-10 opacity-70 hover:opacity-100"
        >
          <a href="https://linkedin.com/in/gusslopez">
            <FaLinkedin className="size-5.5" />
          </a>
        </Button>
        <Button
          asChild
          variant={'ghost'}
          size={'icon'}
          className="size-10 opacity-70 hover:opacity-100"
        >
          <a href="https://github.com/GussLopez" target="_blank">
            <FaGithub className="size-5.5" />
          </a>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="size-10 opacity-70 hover:opacity-100 group cursor-pointer"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="block dark:hidden size-5.5 transition-transform duration-500 group-hover:rotate-32" />
          <Moon className="hidden dark:block size-5.5 transition-transform duration-500 group-hover:rotate-32" />
        </Button>
      </div>
    </motion.nav>
  )
}
