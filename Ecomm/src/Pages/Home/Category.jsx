import React from 'react'
import bannerImg1 from '../../../public/images/Company/brand1.png'
import bannerImg2 from '../../../public/images/Company/brand2.png'
import bannerImg3 from '../../../public/images/Company/brand3.png'
import bannerImg4 from '../../../public/images/Company/brand4.png'
import bannerImg5 from '../../../public/images/Company/brand5.png'
import { Link, NavLink } from 'react-router-dom'
import categoryIMG1 from '../../../public/images/category/image1.png'
import categoryIMG2 from '../../../public/images/category/image2.png'
import categoryIMG3 from '../../../public/images/category/image3.png'
import categoryIMG4 from '../../../public/images/category/image4.png'
import categoryIMG5 from '../../../public/images/category/image5.png'


function Category() {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-20'>
    {/* brand logo */}
    <div className='lg:mx-10 mx-3'>
      <NavLink className="flex items-center justify-around flex-wrap gap-4 py-5">
        <img src={bannerImg1} alt="" />
        <img src={bannerImg2} alt="" />
        <img src={bannerImg3} alt="" />
        <img src={bannerImg4} alt="" />
        <img src={bannerImg5} alt="" />
      </NavLink>
    </div>

    {/* category section */}
      <div className='lg:mx-8 mx-5 mt-7 flex flex-col md:flex-row items-center gap-4'>
          <p className='font-semibold uppercase md:-rotate-90 text-center bg-black text-white md:p-1.5 p-2 rounded-sm inline-flex'>Explore new and popular styles</p>
          <div>
            <Link to="/"><img src={categoryIMG1} alt="" className='w-full hover:scale-105 transition-all duration-200' /></Link>
          </div>
          <div className=''>
              <div className='grid grid-cols-2 gap-2'>
              <img src={categoryIMG2} alt="" className='w-full hover:scale-105 transition-all duration-200' />
              <img src={categoryIMG3} alt="" className='w-full hover:scale-105 transition-all duration-200' />
              <img src={categoryIMG4} alt="" className='w-full hover:scale-105 transition-all duration-200' />
              <img src={categoryIMG5} alt="" className='w-full hover:scale-105 transition-all duration-200'/>
              </div>
          </div>
      </div>
  </div>
  )
}

export default Category
