import React from 'react'
import bannerIMG from '../../../public/images/Banner.png'
import { FaShoppingBag } from 'react-icons/fa'

function Banner() {
  return (
    <div className='bg-Primary py-12 xl:px-28 px-4'>
      <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-10'>

         {/* img */}
         <div className='md:w-1/2'>
            <img src={bannerIMG} alt="" className='w-72 lg:w-96' />
        </div>
        <div className='md:w-1/2 lg:mx-16 mx-16 '>
            <h1 className='text-5xl font-light mb-5'>Collections</h1>
            <p className='text-xl mb-7'>You can explore and shop many different collection from various brands here.</p>
            <button className='bg-black hover:bg-orange-500 px-5 py-2 text-white font-semibold rounded-sm flex items-center gap-2'><FaShoppingBag className='inline-flex'/>Shop Now</button>
        </div>
       
      </div>
    </div>
  )
}

export default Banner
