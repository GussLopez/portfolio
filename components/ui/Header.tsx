import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="container max-w-3xl mx-auto px-8 py-4 flex items-center justify-between bg-background">
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

          {theme === 'dark' ? (
            <Sun className="size-5.5 transition-transform duration-500 group-hover:rotate-32" />
          ) : (
            <Moon className="size-5.5 transition-transform duration-500 group-hover:rotate-32" />
          )}
        </Button>
      </div>
    </nav>
  )
}
