export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container max-w-3xl mx-auto px-8 py-4 pb-10 mt-10">
      <div className="flex justify-between items-center">
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
