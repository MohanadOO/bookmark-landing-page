import React from 'react'
import Questions from './Questions'

function FrequentQuestions() {
  return (
    <div className='text-center mt-32 md:mt-48 md:max-w-[500px] md:mx-auto'>
      <h2 className='text-2xl xl:text-3xl font-bold mb-3'>
        Frequently Asked Questions
      </h2>
      <p className='text-neutral-grayish-blue xl:text-lg'>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <Questions />
    </div>
  )
}

export default FrequentQuestions
