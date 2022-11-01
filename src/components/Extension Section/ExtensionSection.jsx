import { useTranslation } from 'react-i18next'
import ExtensionCard from './ExtensionCard'

function ExtensionSection() {
  const { t } = useTranslation('translation', { keyPrefix: 'extension' })
  return (
    <div className='text-center mt-24 mx-3'>
      <h2 className='text-2xl xl:text-3xl font-bold mb-3'>{t('title')}</h2>
      <p className='text-neutral-grayish-blue md:max-w-[500px] md:mx-auto text-sm md:text-base xl:text-lg leading-6 '>
        {t('body')}
      </p>
      <div className='md:flex md:mx-auto md:gap-10 md:max-w-[1000px]'>
        <ExtensionCard name={'chrome'} version={62} />
        <ExtensionCard name={'firefox'} version={55} />
        <ExtensionCard name={'opera'} version={46} />
      </div>
    </div>
  )
}

export default ExtensionSection
