function ExtensionCard({ name, version }) {
  return (
    <div className='flex max-w-sm w-full flex-col mx-auto justify-center items-center rounded-lg shadow-lg shadow-primary-soft-blue/30 mt-10 md:mt-28 py-6 md:px-2 lg:px-0 md:first:-translate-y-20 md:last:translate-y-20'>
      <img
        className='w-[30%]'
        src={`/images/logo-${name}.svg`}
        alt={`${name}_logo`}
      />
      <h2 className='font-bold mt-7 mb-2'>
        Add to <span className='capitalize'>{name}</span>
      </h2>
      <p className='text-neutral-grayish-blue text-sm mb-7'>
        Minimum version {version}
      </p>
      <img src='/images/bg-dots.svg' alt='dots' />
      <button className='text-white bg-primary-soft-blue mt-7 py-3 px-8 rounded-md shadow-lg border-2 hover:border-primary-soft-blue hover:text-primary-soft-blue hover:bg-white transition-colors'>
        Add & Install Extension
      </button>
    </div>
  )
}

export default ExtensionCard
