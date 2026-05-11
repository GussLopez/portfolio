'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Separator } from "./separator";
import { Brackets, ChevronsUpDown, Code, House, Languages, Layers, Moon, Settings, Sun, User } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./dropdown-menu";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const activePath = usePathname();

  const links = [
    {
      link: 'Inicio',
      path: '/',
      icon: <House className="size-4.5 group-focus/dropdown-menu-item:stroke-white" />
    },
    {
      link: 'About',
      path: '/about',
      icon: <User className="size-4.5 group-focus/dropdown-menu-item:stroke-white" />

    },
    {
      link: 'Proyectos',
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
    <div className="fixed bottom-6 right-1/2 translate-x-1/2 rounded-[3px] text-sm border border-input bg-muted">
      <div className="block md:hidden">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-1.5 p-1.5">
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
            className="min-w-65 rounded-[3px]"
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
                    className={`flex w-full items-center justify-between px-3 py-2 text-[15px] font-medium duration-150 rounded-[3px] hover:text-white!`}
                  >
                    {link.link}
                    {link.icon}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-0"
              >
                <span className="flex w-full items-center justify-between px-3 py-2 text-[15px] font-medium rounded-[3px] hover:text-white!">
                  Tema
                  {theme === 'dark' ? (
                    <Sun className="size-4.5 group-focus/dropdown-menu-item:stroke-white" />
                  ) : (
                    <Moon className="size-4.5 group-focus/dropdown-menu-item:stroke-white" />
                  )}
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0">
                <span className="flex w-full items-center justify-between px-3 py-2 text-[15px] font-medium rounded-[3px] hover:text-white!">
                  Idioma
                  <Languages className="size-4.5 group-focus/dropdown-menu-item:stroke-white" />
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
            className={`rounded-[3px] px-3 py-1.5 text-sm font-medium hover:text-foreground 
               ${isActive(link.path) ? 'bg-brand! text-white!' : ''}
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
