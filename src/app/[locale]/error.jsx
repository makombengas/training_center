"use client";
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

const Error = () => {
    const t = useTranslations('Error');
    useEffect(() => {
        console.error(error);
      }, []);
  return (
    <div>
         {t.rich('description', {
          p: (chunks) => <p className="mt-4">{chunks}</p>,
          retry: (chunks) => (
            <button
              className="text-white underline underline-offset-2"
              onClick={reset}
              type="button"
            >
              {chunks}
            </button>
          )
        })}
    </div>
  )
}

export default Error