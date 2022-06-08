import { useState } from 'react'

function Nav() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <nav
      className='absolute top-0 z-50 w-full p-6 overflow-hidden'
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
              className=' cursor-pointer ml-auto'
            >
              <img src='/images/icon-hamburger.svg' alt='hamburger_icon' />
            </li>
          </>
        ) : (
          <div className='fixed flex flex-col gap-8 items-center  uppercase h-full w-full top-0 left-0  bg-neutral-very-dark-blue/90 z-50 p-14 text-white'>
            <li className='flex items-center w-full relative justify-between after:w-full after:h-[1px] after:absolute after:bg-neutral-grayish-blue/80  after:mt-16'>
              <img src='/images/logo-bookmark_footer.svg' alt='logo_bookmark' />
              <img
                onClick={() => setOpenMenu(false)}
                src='/images/icon-close.svg'
                alt='icon_close'
              />
            </li>
            <li className='w-full text-center text-lg mt-5'>
              <a href='#'>Features</a>
              <hr className='border-neutral-grayish-blue/80 mt-5' />
            </li>
            <li className='w-full text-center text-lg'>
              <a href='#'>Pricing</a>
              <hr className='border-neutral-grayish-blue/80 mt-5' />
            </li>
            <li className='w-full text-center text-lg'>
              <a href='#'>Contact</a>
              <hr className='border-neutral-grayish-blue/80 mt-5' />
            </li>
            <li className='w-full text-center text-lg'>
              <button className='uppercase border-4 rounded-lg py-3 px-28 font-bold text-lg'>
                Login
              </button>
            </li>
            <li className='flex gap-7 mt-auto'>
              <img src='/images/icon-facebook.svg' alt='facebook_icon' />
              <img src='/images/icon-twitter.svg' alt='twitter_icon' />
            </li>
          </div>
        )}
      </ul>

      <ul className='hidden md:flex md:items-center md:gap-10 text-neutral-grayish-blue text-sm mx-10 xl:px-28 xl:my-4'>
        <li className='cursor-pointer  hover:text-primary-red transition-colors'>
          <a href='#'>
            <img src='/images/logo-bookmark.svg' alt='logo_bookmark' />
          </a>
        </li>
        <li className='ml-auto uppercase  hover:text-primary-red transition-colors'>
          <a href='#'>Features</a>
        </li>
        <li className='uppercase  hover:text-primary-red transition-colors'>
          <a href='#'>Pricing</a>
        </li>
        <li className='uppercase  hover:text-primary-red transition-colors'>
          <a href='#'>Contact</a>
        </li>
        <li className='uppercase'>
          <button className='py-2 px-9 bg-primary-red text-white shadow-md rounded-md hover:bg-white border-2 border-primary-red hover:text-primary-red transition-colors'>
            Login
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
