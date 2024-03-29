import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TwitterIcon, FacebookIcon } from '../components/icons'

function Footer() {
  const { t } = useTranslation(['translation', 'common'])

  const tNavigation = (translate) => t(`navigation.${translate}`)
  const tFooter = (translate) => t(`footer.${translate}`)

  const [emailInput, setEmailInput] = useState('')
  const [wrongEmail, setWrongEmail] = useState(null)

  function handleForm(e) {
    e.preventDefault()
    if (emailInput.match(/^\w+@\w+\.\w+$/g)) {
      setWrongEmail(true)
    } else {
      setWrongEmail(false)
    }
  }

  return (
    <footer>
      <div className='bg-primary-soft-blue text-white py-16 px-10 md:px-52 text-center md:flex flex-col items-center'>
        <p className='font-light text-sm xl:text-base tracking-[0.25em] uppercase'>
          {tFooter('title')}
        </p>
        <h3 className=' text-xl md:text-2xl xl:text-3xl md:max-w-[350px] mt-2 mb-5 md:my-10'>
          {tFooter('subTitle')}
        </h3>
        <form
          className='flex flex-col md:flex-row md:items-center gap-5'
          onSubmit={handleForm}
        >
          <div className='relative flex md:w-72'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder={t('common:inputEmail')}
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className={`${
                wrongEmail === null
                  ? 'p-3 rounded-md text-black w-full'
                  : !wrongEmail
                  ? 'border-[3px] border-primary-red p-3 rounded-md text-black w-full mb-5'
                  : 'border-[3px] border-green-500 p-3 rounded-md text-black w-full'
              } `}
            />
            {wrongEmail === false ? (
              <>
                <img
                  className='absolute bottom-[65%] translate-y-[50%] right-5'
                  src='/images/icon-error.svg'
                  alt='icon_error'
                />
                <p className='absolute bottom-0 italic text-xs font-light p-1 bg-primary-red w-full  rounded-bl-md rounded-br-md'>
                  {t('common:inputEmailError')}
                </p>
              </>
            ) : (
              ''
            )}
          </div>
          <button className='bg-primary-red p-3 rounded-md md:px-7 border-2 border-primary-red hover:text-primary-red hover:bg-white transition-colors'>
            {t('common:contactBtn')}
          </button>
        </form>
      </div>
      <ul className='text-white text-sm font-light tracking-wider flex flex-col md:flex-row md:items-center  gap-5 text-center uppercase bg-neutral-very-dark-blue py-8 md:px-44 md:gap-12'>
        <li className='self-center mb-3 md:mb-0 cursor-pointer'>
          <img src='/images/logo-bookmark_footer.svg' alt='logo_bookmark' />
        </li>
        <li className='cursor-pointer hover:text-primary-red transition-colors'>
          {tNavigation('features')}
        </li>
        <li className='cursor-pointer hover:text-primary-red transition-colors'>
          {tNavigation('price')}
        </li>
        <li className='cursor-pointer hover:text-primary-red transition-colors'>
          {tNavigation('contact')}
        </li>
        <div className='flex self-center gap-8 items-center mt-4 md:mt-0 md:ml-auto'>
          <li>
            <FacebookIcon
              className={
                'hover:fill-primary-red cursor-pointer transition-colors'
              }
            />
          </li>
          <li>
            <TwitterIcon
              className={
                'hover:fill-primary-red cursor-pointer transition-colors'
              }
            />
          </li>
        </div>
      </ul>
    </footer>
  )
}

export default Footer
