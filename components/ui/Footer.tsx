
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container flex justify-between max-w-4xl mx-auto px-8 py-4 mt-10">
      <span
        className="text-lg font-gilda font-medium tracking-wide"
      >
        Locked In.
      </span>

      <span className="text-muted-foreground tracking-wider text-xs">
        © {year} Gustavo López Alvarado
      </span>
    </footer>
  )
}
