import React from 'react'

function Header() {
  return (
    <header id='header' className='mt-20 md:mt-32 mx-2 relative text-center'>
      <div className='md:flex md:flex-row-reverse md:items-center md:text-left md:gap-10'>
        <div className='relative flex mb-10'>
          <div className='absolute min-h-[200px] max-w-[300px] w-full lg:max-w-[500px] lg:min-h-[300px] bg-primary-soft-blue right-0 top-5 translate-x-10 rounded-tl-full rounded-bl-full md:bottom-5 md:top-auto md:translate-x-24'></div>
          <img
            className='z-10 drop-shadow-lg'
            src='/images/illustration-hero.svg'
            alt='hero_icon'
          />
        </div>
        <div className='md:mx-auto md:max-w-[850px] lg:max-w-[450px]'>
          <h1 className='text-2xl md:text-3xl font-medium mb-3 z-10'>
            A Simple Bookmark Manger
          </h1>
          <p className='text-neutral-grayish-blue mx-5 md:mx-0 text-sm md:text-base leading-6'>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className='flex justify-center md:justify-start md:mt-8 md:gap-5 gap-3 mt-5'>
            <button className='p-3 bg-primary-soft-blue rounded-md text-white shadow-lg md:border-2 hover:bg-white hover:text-primary-soft-blue hover:border-primary-soft-blue transition-colors '>
              Get it on Chrome
            </button>
            <button className='p-3 bg-black/5 rounded-md text-neutral-very-dark-blue shadow-lg md:border-2 hover:bg-white hover:text-neutral-very-dark-blue hover:border-neutral-very-dark-blue transition-colors '>
              Get it on FireFox
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
