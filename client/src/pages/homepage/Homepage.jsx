import React from 'react'
import Product from '../../components/product/Product'
import './homepage.css'

const homepage = () => {
  return (
    <div className='homescreen'>
      <h2 className='homescreen_title'>Latest Products</h2>

      <div className="homescreen_products">
        <Product/>
      </div>
    </div>
  )
}

export default homepage
