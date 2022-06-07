import { Disclosure, Transition } from '@headlessui/react'
import { useRef } from 'react'
import QuestionsData from './QuestionsData'

function Questions() {
  const openQuestion = useRef(false)

  function handleQuestion() {
    if (openQuestion.current.open) {
      console.log(openQuestion.current)
      return (openQuestion.current.open = true)
    }
    return (openQuestion.current.open = false)
  }

  return (
    <div className='flex flex-col gap-1 items-start text-left mt-20 md:mt-10'>
      {QuestionsData.map((question) => {
        return (
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex items-center w-full border-b-2 py-5 hover:text-primary-red transition-colors'>
                  {question.question}
                  <img
                    className={`${open ? 'ml-auto rotate-180' : 'ml-auto'}`}
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
        More Info
      </button>
    </div>
  )
}

export default Questions
