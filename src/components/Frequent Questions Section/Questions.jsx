import { Disclosure, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

function Questions() {
  const { t } = useTranslation(['questions', 'common'])
  const questionsData = t('questionsArr', { returnObjects: true })
  return (
    <div className='flex flex-col gap-1 items-start ltr:text-left rtl:text-right mt-20 md:mt-10'>
      {questionsData.map((question, index) => {
        return (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center w-full border-b-2 py-5 hover:text-primary-red transition-colors'>
                  {question.question}
                  <img
                    className={`${
                      open ? 'rotate-180' : ''
                    } ltr:ml-auto rtl:mr-auto`}
                    src={`${
                      !open
                        ? '/images/icon-arrow.svg'
                        : '/images/icon-arrow_red.svg'
                    }`}
                    alt='arrow_icons'
                  />
                </Disclosure.Button>
                <Transition
                  enter='transition duration-100 ease-out'
                  enterFrom='transform scale-95 opacity-0'
                  enterTo='transform scale-100 opacity-100'
                  leave='transition duration-75 ease-out'
                  leaveFrom='transform scale-100 opacity-100'
                  leaveTo='transform scale-95 opacity-0'
                >
                  <Disclosure.Panel className='text-gray-500 mt-5 leading-8'>
                    {question.answer}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        )
      })}
      <button className='py-3 px-8 bg-primary-soft-blue rounded-md text-white shadow-lg self-center my-16 border-2 hover:border-primary-soft-blue hover:text-primary-soft-blue hover:bg-white transition-colors'>
        {t('common:infoBtn')}
      </button>
    </div>
  )
}

export default Questions
