import { useEffect } from 'react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Nav() {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'navigation' })
  const [language, setLanguage] = useState(i18n.resolvedLanguage)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    document.documentElement.dir = i18n.dir()
    document.documentElement.lang = i18n.resolvedLanguage || 'en'
  }, [])

  function handleLanguage() {
    if (language === 'ar') {
      setLanguage('en')
      document.documentElement.dir = 'ltr'
      document.documentElement.lang = 'en'
      return i18n.changeLanguage('en')
    }
    setLanguage('ar')
    document.documentElement.dir = 'rtl'
    document.documentElement.lang = 'ar'
    return i18n.changeLanguage('ar')
  }

  return (
    <nav
      className='absolute top-0 z-50 w-full p-6 overflow-hidden rtl:font-medium'
      id='main_nav'
    >
      <ul className='flex items-center md:hidden'>
        {!openMenu ? (
          <>
            <li className='cursor-pointer'>
              <img src='/images/logo-bookmark.svg' alt='logo_bookmark' />
            </li>
            <li
              onClick={() => setOpenMenu(true)}
              className='cursor-pointer ltr:ml-auto rtl:mr-auto'
            >
              <img src='/images/icon-hamburger.svg' alt='hamburger_icon' />
            </li>
          </>
        ) : (
          <div className='fixed flex flex-col gap-8 items-center  uppercase h-full w-full top-0 left-0  bg-neutral-very-dark-blue/90 z-50 p-14 text-white'>
            <li className='flex items-center w-full relative justify-between after:w-full after:h-[1px] after:absolute after:bg-neutral-grayish-blue/80  after:mt-16'>
              <img src='/images/logo-bookmark_footer.svg' alt='logo_bookmark' />
              <img
                className='cursor-pointer'
                onClick={() => setOpenMenu(false)}
                src='/images/icon-close.svg'
                alt='icon_close'
              />
            </li>
            <li className='w-full text-center text-lg mt-5'>
              <a href='#'>{t('features')}</a>
              <hr className='border-neutral-grayish-blue/80 mt-5' />
            </li>
            <li className='w-full text-center text-lg'>
              <a href='#'>{t('price')}</a>
              <hr className='border-neutral-grayish-blue/80 mt-5' />
            </li>
            <li className='w-full text-center text-lg'>
              <a href='#'>{t('contact')}</a>
              <hr className='border-neutral-grayish-blue/80 mt-5' />
            </li>
            <li className='w-full text-center text-lg'>
              <button className='uppercase border-4 rounded-lg py-3 px-28 font-bold text-lg'>
                {t('login')}
              </button>
            </li>
            <li>
              <button onClick={handleLanguage}>
                {language === 'ar' ? 'EN' : 'AR'}
              </button>
            </li>
            <li className='flex gap-7 mt-auto'>
              <img src='/images/icon-facebook.svg' alt='facebook_icon' />
              <img src='/images/icon-twitter.svg' alt='twitter_icon' />
            </li>
          </div>
        )}
      </ul>

      <ul className='hidden md:flex md:items-center md:gap-8 text-neutral-grayish-blue text-sm mx-10 xl:px-28 xl:my-4'>
        <li className='cursor-pointer  hover:text-primary-red transition-colors'>
          <a href='#'>
            <img src='/images/logo-bookmark.svg' alt='logo_bookmark' />
          </a>
        </li>
        <li className='ltr:ml-auto rtl:mr-auto uppercase  hover:text-primary-red transition-colors'>
          <a href='#'>{t('features')}</a>
        </li>
        <li className='uppercase  hover:text-primary-red transition-colors'>
          <a href='#'>{t('price')}</a>
        </li>
        <li className='uppercase  hover:text-primary-red transition-colors'>
          <a href='#'>{t('contact')}</a>
        </li>
        <li className='uppercase'>
          <button className='py-2 px-7 bg-primary-red text-white shadow-md rounded-md hover:bg-white border-2 border-primary-red hover:text-primary-red transition-colors'>
            {t('login')}
          </button>
        </li>
        <li>
          <button
            className='py-2 px-2 bg-primary-soft-blue text-white shadow-md rounded-md hover:bg-white border-2 hover:text-primary-soft-blue hover:border-primary-soft-blue transition-colors'
            onClick={handleLanguage}
          >
            {language === 'ar' ? 'EN' : 'AR'}
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
