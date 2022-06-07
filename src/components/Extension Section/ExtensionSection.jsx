import ExtensionCard from './ExtensionCard'

function ExtensionSection() {
  return (
    <div className='text-center mt-24 mx-3'>
      <h2 className='text-2xl font-bold mb-3'>Download the extension</h2>
      <p className='text-neutral-grayish-blue md:max-w-[500px] md:mx-auto text-sm md:text-base leading-6 '>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
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
