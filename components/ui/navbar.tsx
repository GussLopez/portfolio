'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Separator } from "./separator";
import { Brackets, ChevronsUpDown, Code, House, Languages, Layers, Moon, Settings, Sun, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";
import { useTheme } from "next-themes";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const activePath = usePathname();

  const links = [
    {
      link: 'Home',
      path: '/',
      icon: <House className="size-4.5 group-focus/dropdown-menu-item:stroke-white" />
    },
    /*  {
       link: 'About',
       path: '/about',
       icon: <User className="size-4.5 group-focus/dropdown-menu-item:stroke-white" />
 
     }, */
    {
      link: 'Projects',
      path: '/projects',
      icon: <Code className="size-4.5 group-focus/dropdown-menu-item:stroke-white" />

    },
    {
      link: 'Stack',
      path: '/stack',
      icon: <Layers className="size-4.5 group-focus/dropdown-menu-item:stroke-white" />

    }
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return activePath === '/';
    }

    return activePath.startsWith(path);
  };
  const currentLink = links.find((link) => {
    if (link.path === '/') {
      return activePath === '/';
    }

    return activePath.startsWith(link.path);
  });
  return (
    <div className="fixed bottom-6 right-1/2 translate-x-1/2 rounded-[6px] text-sm border border-input bg-muted">
      <div className="block md:hidden">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-1.5 p-1.5 z-99">
              <div className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-foreground">
                <Brackets className="size-4 text-brand stroke-3" />
                {currentLink?.link}
              </div>
              <Separator orientation="vertical" />
              <div className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-muted-foreground">
                Menú
                <ChevronsUpDown className="size-4 stroke-3" />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            sideOffset={12}
            side="top"
            align="center"
            className="min-w-65 rounded-[6px]"
          >
            <DropdownMenuGroup>
              {links.map((link, i) => (
                <DropdownMenuItem
                  asChild
                  key={i}
                  className={` ${isActive(link.path) ? 'bg-brand! text-white!' : ''}`}
                >
                  <Link
                    href={link.path}
                    className={`flex w-full items-center justify-between px-3 py-2 text-[15px] font-medium duration-150 rounded-[6px] hover:text-white!`}
                  >
                    {link.link}
                    {link.icon}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="p-0">
                <span className="flex w-full items-center justify-between px-3 py-2 text-[15px] font-medium rounded-[6px] hover:text-white!">
                  Github
                  <FaGithub className="size-4.5 text-black/80 group-focus/dropdown-menu-item:fill-white" />
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <span className="flex w-full items-center justify-between px-3 py-2 text-[15px] font-medium rounded-[6px] hover:text-white!">
                  LinkedIn
                  <FaLinkedin className="size-4.5 text-black/80 group-focus/dropdown-menu-item:fill-white" />
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-0"
              >
                <span className="flex w-full items-center justify-between px-3 py-2 text-[15px] font-medium rounded-[6px] hover:text-white!">
                  Theme
                  {theme === 'dark' ? (
                    <Sun className="size-4.5 text-black/80 group-focus/dropdown-menu-item:stroke-white" />
                  ) : (
                    <Moon className="size-4.5 text-black/80 group-focus/dropdown-menu-item:stroke-white" />
                  )}
                </span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hidden md:flex items-center gap-1.5 p-1.5">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`rounded-[6px] px-3 py-1.5 text-sm font-medium hover:text-foreground 
               ${isActive(link.path) ? 'bg-brand! text-white!' : ''}
              }`}
          >
            {link.link}
          </Link>
        ))}
        <Separator orientation="vertical" className="bg-input/40" />
        <a
          href="https://www.linkedin.com/in/gusslopez"
          target="_blank"
          className="p-2 cursor-pointer text-muted-foreground rounded-[6px] duration-150 hover:text-foreground"
        >
          <FaLinkedin className="size-4" />
          <span className="sr-only">Open LinkedIn</span>
        </a>
        <a
          href="https://github.com/GussLopez"
          target="_blank"
          className="p-2 cursor-pointer text-muted-foreground rounded-[6px] duration-150 hover:text-foreground"
        >
          <FaGithub className="size-4" />
          <span className="sr-only">Change theme</span>
        </a>
        <button
          className="p-2 cursor-pointer text-muted-foreground rounded-[6px] duration-300 hover:text-foreground hover:rotate-25"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="hidden dark:block size-4" />
          <Moon className="block dark:hidden size-4" />
          <span className="sr-only">Change theme</span>
        </button>
      </div>
    </div>
  )
}
