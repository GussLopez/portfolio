import { ArrowUpRight, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const social = [
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/gusslopez' },
    { name: 'Github', link: 'https://github.com/GussLopez' },
    { name: 'Instagram', link: '#' },
  ]
  return (
    <footer className="container max-w-3xl mx-auto px-8 py-4 pb-40 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-5 border-t border-border">
        <div className="flex flex-col gap-3">
          <span className="uppercase text-xs text-muted-foreground font-semibold">Contacto:</span>
          <a
            href="mailto:gustavolopez819@gmail.com"
            className="w-fit text-sm text-white/80 hover:text-white transition-all duration-175">gustavolopez819@gmail.com</a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="uppercase text-xs text-muted-foreground font-semibold">Redes:</span>
          <ul className="flex flex-col space-y-2">
            {social.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  className="flex items-center gap-1.5 px-3 py-2 border border-border dark:border-muted text-sm uppercase rounded-[6px] hover:bg-border/40 dark:hover:bg-muted transition-all tracking-wide font-medium group"
                  target="_blank"
                >
                  {social.name}
                  <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 transition-transform"/>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-border pt-5 mt-18">
        <span
          className="font-gilda  tracking-wide"
        >
          Locked In.
        </span>

        <span className="text-muted-foreground tracking-wider text-xs">
          © {year} Gustavo López Alvarado
        </span>
      </div>
    </footer>
  )
}
