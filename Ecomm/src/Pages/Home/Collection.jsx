import React from 'react'


function Collection() {
  return (
    <div className='bg-[url("/images/collection-bg.png")] bg-cover bg-center bg-no-repeat lg:px-28 px-4'>
      <div className='h-[550px] flex justify-between md:flex-row items-center'>
            <div className='md:w-1/2'></div>
            <div className='md:w-1/2'>
                <img src="/public/images/zara-logo.png" alt="" className=''/>
                <p className='text-lg text-white my-8 md:w-2/3 leading-[32px]'>Lustrous yet understated. The New Evening Wear Collection Exclusively Offered At The Reopened Giorgio Armani Boutique in Los Angeles </p>
                <button className='px-6 py-2 bg-white text-black rounded-sm capitalize font-semibold'>see collections</button>
            </div>
      </div>
    </div>
  )
}

export default Collection
