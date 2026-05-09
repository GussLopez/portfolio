'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Separator } from "./separator";
import { Languages, Moon, Settings, Sun } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "./dropdown-menu";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const activePath = usePathname();

  const links = [
    { link: 'Inicio', path: '/' },
    { link: 'About', path: '/about' },
    { link: 'Proyectos', path: '/projects' },
    { link: 'Stack', path: '/stack' }
  ]

  return (
    <div className="fixed bottom-6 right-1/2 translate-x-1/2 rounded-[3px] text-sm border border-input bg-muted">
      <div className="flex items-center gap-1.5 p-1.5">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`rounded-[3px] px-3 py-1.5 text-sm font-medium duration-150 focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none t transition-colorsext-muted-foreground hover:text-foreground ${activePath === link.path && 'bg-brand! text-white!'
              }`}
          >
            {link.link}
          </Link>
        ))}
        <Separator orientation="vertical" className="bg-input/40" />
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <button className="p-2 cursor-pointer text-muted-foreground rounded-[3px] duration-150 focus-visible:outline-none hover:text-foreground">
              <Settings className="size-4" />
              <span className="sr-only">Abrir menu de configuración</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-42 rounded-[3px]"
            align="end"
            side="top"
            sideOffset={13}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="flex px-3 justify-between items-center py-2 focus:text-white"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                Tema
                {theme === 'dark' ? (
                  <Sun className="size-4.5 text-muted-foreground group-focus/dropdown-menu-item:stroke-white transition-colors" />
                ) : (
                  <Moon className="size-4.5 text-muted-foreground group-focus/dropdown-menu-item:stroke-white transition-colors" />
                )}
              </DropdownMenuItem>
              <DropdownMenuItem className="flex px-3 justify-between items-center py-2 focus:text-white">
                Idioma
                <Languages className="size-4.5 text-muted-foreground group-focus/dropdown-menu-item:stroke-white transition-colors" />
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
