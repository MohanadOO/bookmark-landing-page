import { useState } from 'react'
import FeaturesTabs from './FeaturesTabs'

function Features() {
  const [tab, setTab] = useState(1)

  const activeTab =
    'underline decoration-primary-red underline-offset-[15px] decoration-4 hover:text-primary-red transition-colors'
  const inactiveTab =
    'text-neutral-grayish-blue hover:text-primary-red transition-colors'

  return (
    <div id='features' className='text-center mt-24 mx-3 md:mx-0'>
      <div className='md:max-w-[500px] md:mx-auto'>
        <h2 className='text-2xl font-bold mb-3'>Features</h2>
        <p className='text-neutral-grayish-blue text-sm md:text-base leading-6 md:mb-14'>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <ul className='my-10 md:mt-10 md:mb-0 flex flex-col md:flex-row md:gap-0 md:justify-between gap-5'>
          <hr className='md:hidden' />
          <li onClick={() => setTab(1)}>
            <a
              className={tab === 1 ? activeTab : inactiveTab}
              href='#features-tab'
            >
              Simple Bookmarking
            </a>
            <hr className='mt-4 md:hidden' />
          </li>
          <li onClick={() => setTab(2)}>
            <a
              className={tab === 2 ? activeTab : inactiveTab}
              href='#features-tab'
            >
              Speedy Searching
            </a>
            <hr className='mt-4 md:hidden' />
          </li>
          <li onClick={() => setTab(3)}>
            <a
              className={tab === 3 ? activeTab : inactiveTab}
              href='#features-tab'
            >
              Easy Sharing
            </a>
            <hr className='mt-4 md:hidden' />
          </li>
        </ul>
        <hr className='hidden md:block mt-4' />
      </div>
      <FeaturesTabs tab={tab} />
    </div>
  )
}

export default Features
