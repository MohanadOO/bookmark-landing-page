function FeaturesTabs({ tab, title, body, info }) {
  return (
    <div id='features_tab'>
      <div className='md:flex md:items-center md:text-left rtl:md:text-right md:gap-24 lg:gap-0'>
        <div className='relative flex mb-10 md:mt-20 xl:px-36'>
          <div className='absolute min-h-[200px] max-w-[300px] w-full lg:max-w-[500px] lg:min-h-[300px] bg-primary-soft-blue ltr:left-0 rtl:right-0 rtl:rotate-180 top-5 md:top-auto md:bottom-0 ltr:-translate-x-10 rtl:translate-x-10 ltr:md:-translate-x-20 rtl:md:translate-x-20 md:translate-y-10  rounded-tr-full rounded-br-full'></div>
          <img
            className='z-10 drop-shadow-lg'
            src={`/images/illustration-features-tab-${tab}.svg`}
            alt={`feature_${tab}`}
          />
        </div>
        <div className='mt-12 md:mt-0 md:max-w-[300px] lg:max-w-[390px] xl:max-w-[500px] md:mx-auto'>
          <h2 className='text-2xl xl:text-3xl mb-3 font-bold'>{title}</h2>
          <p className='text-neutral-grayish-blue text-sm lg:text-base'>
            {body}
          </p>
          <button className='py-3 px-8 bg-primary-soft-blue rounded-md text-white shadow-lg self-center mt-5 hidden md:block border-2 hover:border-primary-soft-blue hover:text-primary-soft-blue hover:bg-white transition-colors'>
            {info}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturesTabs
