import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Product from './Product'
import Collection from './Collection'
import BestSeller from './BestSeller'
import NewsLetters from './NewsLetters'

function Home() {
  return (
    <div>
      <Banner/>
      <Category/>
      <Product/>
      <Collection/>
      <BestSeller/>
      <NewsLetters/>
    </div>
  )
}

export default Home