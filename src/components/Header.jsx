import React from 'react'
import { useTranslation } from 'react-i18next'

function Header() {
  const { t } = useTranslation('translation', { keyPrefix: 'header' })
  return (
    <header id='header' className='mt-20 md:mt-32 mx-2 relative text-center'>
      <div className='md:flex md:flex-row-reverse md:items-center ltr:md:text-left rtl:md:text-right md:gap-10'>
        <div className='relative flex mb-10'>
          <div className='absolute min-h-[200px] max-w-[300px] w-full lg:max-w-[500px] lg:min-h-[300px] bg-primary-soft-blue ltr:right-0 rtl:left-0 rtl:rotate-180 top-5 ltr:translate-x-10 rtl:-translate-x-10 rounded-tl-full rounded-bl-full md:bottom-5 md:top-auto ltr:md:translate-x-[88px] rtl:md:-translate-x-[88px]'></div>
          <img
            className='z-10 drop-shadow-lg'
            src='/images/illustration-hero.svg'
            alt='hero_icon'
          />
        </div>
        <div className='md:mx-auto md:max-w-[850px] lg:max-w-[450px]'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-3 z-10'>
            {t('title')}
          </h1>
          <p className='text-neutral-grayish-blue mx-5 md:mx-0 text-sm md:text-base lg:text-lg leading-6'>
            {t('body')}
          </p>
          <div className='flex justify-center ltr:md:justify-start rtl:md:justify-end md:mt-8 md:gap-5 gap-3 mt-5'>
            <button className='p-3 bg-primary-soft-blue rounded-md text-white shadow-lg md:border-2 hover:bg-white hover:text-primary-soft-blue hover:border-primary-soft-blue transition-colors '>
              {t('chromeBtn')}
            </button>
            <button className='p-3 bg-black/5 rounded-md text-neutral-very-dark-blue shadow-lg md:border-2 hover:bg-white hover:text-neutral-very-dark-blue hover:border-neutral-very-dark-blue transition-colors '>
              {t('fireFoxBtn')}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
