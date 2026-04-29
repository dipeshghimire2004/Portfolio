import { SOCIAL_MEDIA_LINKS } from '../constants'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <div className=' m-20 '>
        <div className='flex items-center '>
            {SOCIAL_MEDIA_LINKS.map((link, index)=>(
                <a className="px-3" key={index} href={link.href} target="_blank"
                rel='noopener noreferrer'>
                    {link.icon}
                    
                </a>
            ))}
        </div>
        <p className='mt-8'>&#169; {t('footer.rights')}</p>
    </div>
  )
}

export default Footer