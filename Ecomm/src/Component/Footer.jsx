import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
    const currentYear = new Date().getFullYear();
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth();
  return (
    <div>
        <div className='max-w-screen-2xl container mx-auto lg:px-28 px-8'>
        <div className='mt-16 mb-14 flex flex-col  lg:flex-row items-center lg:items-start justify-between gap-8'>
            <div className='lg:w-[400px]'>
            <a href="/"><img src="/logo.png" alt="" className='w-32' /></a>
                    <p className='text-black/75 my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing 
                        elit. Magnam quidem quas inventore dignissimos,
                         illum adipisci commodi! Porro fugit molestiae
                          officia quasi! Ab modi magnam laudantium.</p>
                          <div className='flex gap-5 mt-6 items-center justify-center lg:items-start lg:justify-start'>
                            <a href="/" className='text-gray-500 transition-all duration-300 hover:text-orange-500' ><FaFacebook className='h-5 w-5'/></a>
                            <a href="/" className='text-gray-500 transition-all duration-300 hover:text-orange-500' ><FaTwitter className='h-5 w-5'/></a>
                            <a href="/" className='text-gray-500 transition-all duration-300 hover:text-orange-500' ><FaLinkedin className='h-5 w-5'/></a>
                            <a href="/" className='text-gray-500 transition-all duration-300 hover:text-orange-500' ><FaInstagram className='h-5 w-5'/></a>
                          </div>
            </div>
            <div>
                <p className=' font-bold my-2'>CATALOG</p>
                <ul className='space-y-2'>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Necklaces</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Hoodies</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Glasses</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Dresses</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Jewelry Box</a>
                    </li>
                </ul>
            </div>
            <div>
                <p className='font-bold my-2'>CUSTOMER SERVICES</p>
                <ul className='space-y-2'>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Contact Us</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Track Your Order</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Product CAre & Repair</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Book Appoinment</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Shipping & Return</a>
                    </li>
                </ul>
            </div>
            <div>
                <p className='font-bold my-2'>ABOUT US</p>
                <ul className='space-y-2'>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Our Producers</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Sitemap</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>FAQ</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>About Us</a>
                    </li>
                    <li>
                        <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>Terms & Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        <div className='bg-black/75 my-5'>
            <p className='text-white text-center items-center py-3'>© {currentDate}-{currentMonth}-{currentYear} Coral, Inc.</p>
        </div>
    </div>
  )
}

export default Footer
