export default function AboutPage() {

  return (
    <main className="container max-w-3xl mx-auto p-8">
      <div>
        <h1 className="text-6xl font-gilda">Gus López</h1>
        <h2 className="text-6xl font-gilda">Student & Full Stack Developer</h2>
      </div>
      <div className="mt-14 space-y-6 text-muted-foreground font-light">

        <p>I'm a <span className="font-bold text-white">Full Stack Software Developer</span>, currently studying <span>Software Engineering</span> at {" "}
          <a target="_blank" href={'https://utcancun.edu.mx'} className="pb-1 border-b border-transparent font-bold hover:border-foreground/60 transition-all duration-400 hover:text-white">
            Universidad Tecnológica de Cancún
          </a> {" "}
          where I'm in my final four-month term before starting my professional internship.
        </p>

        <p>
          I've been working as a developer at {" "}
          <a target="_blank" href={'https://hisgroupcompany.com'} className="pb-1 border-b border-transparent font-bold hover:border-foreground/60 transition-all duration-400 hover:text-white">
            Hisgroup Company
          </a>{" "}
          for over a year, where I develop and maintain commercial web applications, work across both frontend and backend, and contribute to building solutions that help the company grow.
        </p>

        <p>I'm passionate about {" "}
          <span className="font-bold text-white">
            building software that is useful, maintainable, and enjoyable to use.
          </span>{" "}
          My main goal is to keep growing as a developer by learning new technologies, improving my problem-solving skills, and following good development practices.</p>
      </div>
    </main>
  )
}
