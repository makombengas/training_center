import {useLocale, useTranslations} from 'next-intl';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import {locales} from '../../../../config.ts';
import LocalSwitcherSelect from '../localSwitcherSelect/LocalSwitcherSelect';

export default function LocaleSwitcher({setLangChanged}) {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocalSwitcherSelect defaultValue={locale} label={t('label')}>
      {locales.map((cur) => (
        <option  key={cur} value={cur} className='bg-[#143159] text-center text-gray-20 cursor-pointer border-none' onClick={() => setLangChanged(true)}>
        
         {t('locale', {locale: cur})}
         
   
          
        </option>
      ))}
         
    </LocalSwitcherSelect>
  );
}