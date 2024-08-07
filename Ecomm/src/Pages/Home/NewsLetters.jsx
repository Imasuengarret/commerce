import React from 'react'
import { Link } from 'react-router-dom'

function NewsLetters() {
  return (
    <div className='bg-[#1E2832] bg-opacity-5 lg:px-28 px-4 py-16'>
        <h2 className='title mb-5'>follow products and discounts on instagram</h2>

        {/* insta grid */}
        <div className='flex lg:flex-row flex-col gap-4 items-center justify-center mb-20'>
            <Link to="/">
                <img src="/images/Instagram/IMG1.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/images/Instagram/IMG2.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/images/Instagram/IMG3.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/images/Instagram/IMG4.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/images/Instagram/IMG5.png" alt="" />
            </Link>
            <Link to="/">
                <img src="/images/Instagram/IMG6.png" alt="" />
            </Link>
        </div>

        {/* News letterd */}
        <div className=''>
            <h2 className='title mb-8'>or subscribe to the newsletter</h2>
            <form className='md:w-1/2 mx-auto text-center'>
                <input type="email" name='email' id='email' placeholder='Email address...' className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/75 mr-4' />
                <input type="submit" value={"submit"}  className='bg-black text-white rounded-sm py-2 px-6'/>
            </form>
        </div>

    </div>
  )
}

export default NewsLetters