
import { useTranslations } from 'next-intl';



const ProjectPage = () => {
  const project = useTranslations('Navigation')
  
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      {project('project')}
    </div>
  )
}

export default ProjectPage