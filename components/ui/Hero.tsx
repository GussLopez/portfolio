import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="container max-w-4xl mx-auto px-8 py-4">
      <div>
        <p className="opacity-80  leading-8 py-4 font-light">
          {t("im")} <span className="font-bold">Guss</span>, {t("currentStudy")} <a target="_blank" href={'https://utcancun.edu.mx'} className="pb-1 border-b border-transparent font-bold opacity-100 hover:border-foreground/60 transition-[border-color] duration-400">UT Cancún</a> {t("heroDescription")}
        </p>
      </div>
    </section>
  )
}
