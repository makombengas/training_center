"use client";
import { usePathname } from '../../../navigation';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { useRouter } from '../../../navigation';
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { useState, useTransition } from 'react';
import { useTranslations } from 'next-intl';



const LocalSwitcherSelect = ({ children, defaultValue, label}) => {
  const [langChanged, setLangChanged] = useState(false);

    const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (e) => {
    e.preventDefault();
    const nextLocale = e.target.value;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });

    if(nextLocale === "en" ) {

      setLangChanged(true); //
  
    }else if(nextLocale === "de") {
      setLangChanged(true);
    }
  };
 const t = useTranslations('langFlags');

  return (
    <div className="bg-[#143159] border-none ">
      <div
            className={clsx(
              'relative text-gray-800 border-none flex right-5 sm:right-6 ',
              isPending && 'transition-opacity [&:disabled]:opacity-30 border-none'
            )}
          >
            <p className="sr-only text-center ">{label}</p>
            <select
              className="flex outline-none  justify-center appearance-none bg-transparent items-center py-3 pl-2 pr-2 sm:pr-3 text-[.8rem] sm:text-sm text-gray-200 bg-[#143159] border-none cursor-pointer"
              defaultValue={defaultValue}
              disabled={isPending}
              onChange={onSelectChange}
            >
              {children}
            </select>
          
            <span className={`${t("flag")}`} >
           
            </span>
     </div>
          {/* <span className={`   pointer-events-none absolute right-[.20rem] top-[-2rem] border-none z-10 text-white `}>5</span> */}
    </div>
  )
}

export default LocalSwitcherSelect