
import { useTranslations } from 'next-intl';



const ContactPage = () => {
  const project = useTranslations('Navigation')
  
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      {project('contact')}
    </div>
  )
}

export default ContactPage