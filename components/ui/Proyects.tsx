import { useTranslation } from "react-i18next"

export default function Proyects() {
  const { t } = useTranslation();

  return (
    <section className="container max-w-4xl mx-auto px-8 py-4 mt-10">
      <h2 className="text-xl font-medium">{t("proyects")}</h2>
    </section>
  )
}
