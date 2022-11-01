import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import FeaturesTabs from './FeaturesTabs'

function Features() {
  const { t } = useTranslation(['translation', 'common'])

  const [tab, setTab] = useState('simple')

  const activeTab =
    'underline decoration-primary-red underline-offset-[15px] decoration-4 hover:text-primary-red transition-colors'
  const inactiveTab =
    'text-neutral-grayish-blue hover:text-primary-red transition-colors'

  return (
    <div id='features' className='text-center mt-24 mx-3 md:mx-0 '>
      <div className='md:max-w-[500px] md:mx-auto'>
        <h2 className='text-2xl lg:text-3xl font-bold mb-3'>
          {t('features.title')}
        </h2>
        <p className='text-neutral-grayish-blue text-sm md:text-base lg:text-lg leading-6 md:mb-14'>
          {t('features.body')}
        </p>
        <ul className='my-10 md:mt-10 md:mb-0 flex flex-col md:flex-row md:gap-0 md:justify-between gap-5'>
          <hr className='md:hidden' />
          <li onClick={() => setTab('simple')}>
            <a
              className={tab === 1 ? activeTab : inactiveTab}
              href='#features-tab'
            >
              {t('features.simple.tab')}
            </a>
            <hr className='mt-4 md:hidden' />
          </li>
          <li onClick={() => setTab('speedy')}>
            <a
              className={tab === 2 ? activeTab : inactiveTab}
              href='#features-tab'
            >
              {t('features.speedy.tab')}
            </a>
            <hr className='mt-4 md:hidden' />
          </li>
          <li onClick={() => setTab('easy')}>
            <a
              className={tab === 3 ? activeTab : inactiveTab}
              href='#features-tab'
            >
              {t('features.easy.tab')}
            </a>
            <hr className='mt-4 md:hidden' />
          </li>
        </ul>
        <hr className='hidden md:block mt-4' />
      </div>
      <FeaturesTabs
        tab={tab}
        title={t(`features.${tab}.title`)}
        body={t(`features.${tab}.body`)}
        info={t('common:infoBtn')}
      />
    </div>
  )
}

export default Features
