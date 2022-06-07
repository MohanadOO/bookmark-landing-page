import { useState } from 'react'
import { TwitterIcon, FacebookIcon } from '../components/icons'

function Footer() {
  const [emailInput, setEmailInput] = useState('')
  const [wrongEmail, setWrongEmail] = useState(null)

  function handleForm(e) {
    console.log('h')
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
        <p className='font-light text-sm tracking-[0.25em] uppercase'>
          35,000+ already joined
        </p>
        <h3 className='font-bold text-xl md:text-2xl md:max-w-[350px] mt-2 mb-5 md:my-10'>
          Stay up-to-date with what we’re doing
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
              placeholder='Enter your email address'
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
                  Whoops, make sure it's an email
                </p>
              </>
            ) : (
              ''
            )}
          </div>
          <button className='bg-primary-red p-3 rounded-md md:px-7 border-2 border-primary-red hover:text-primary-red hover:bg-white transition-colors'>
            Contact Us
          </button>
        </form>
      </div>
      <ul className='text-white/80 text-sm font-light tracking-wider flex flex-col md:flex-row md:items-center  gap-5 text-center uppercase bg-neutral-very-dark-blue py-8 md:px-44 md:gap-12'>
        <li className='self-center mb-3 md:mb-0 cursor-pointer'>
          <img src='/images/logo-bookmark_footer.svg' alt='logo_bookmark' />
        </li>
        <li className='cursor-pointer hover:text-primary-red transition-colors'>
          Features
        </li>
        <li className='cursor-pointer hover:text-primary-red transition-colors'>
          Pricing
        </li>
        <li className='cursor-pointer hover:text-primary-red transition-colors'>
          Contact
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
