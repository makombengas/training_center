import { useTranslations } from "next-intl"





const AboutPage = () => {
  const t = useTranslations('Navigation')
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      {t('about')}
    </div>
  )
}

export default AboutPage