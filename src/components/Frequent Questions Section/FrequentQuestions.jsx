import React from 'react'
import { useTranslation } from 'react-i18next'
import Questions from './Questions'

function FrequentQuestions() {
  const { t } = useTranslation('translation', {
    keyPrefix: 'frequentQuestions',
  })
  return (
    <div className='text-center mt-32 md:mt-48 md:max-w-[500px] md:mx-auto'>
      <h2 className='text-2xl xl:text-3xl font-bold mb-3'>{t('title')}</h2>
      <p className='text-neutral-grayish-blue xl:text-lg'>{t('body')}</p>
      <Questions />
    </div>
  )
}

export default FrequentQuestions
