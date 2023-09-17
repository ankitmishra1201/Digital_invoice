import React from 'react'
import './productpage.css'

const productpage = () => {
  return (
    <div className='product_screen'>
      <div className="product_left">
        <div className="left_image">
          <img src="/logo512.png" alt="Product name" />
        </div>
        <div className="left_info">
          <p className='left_name'>Product Name</p>
          <p>Price: $499.99</p>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio, numquam saepe corrupti quisquam earum, enim unde nisi dignissimos ut quo voluptatibus mollitia architecto eum.</p>
        </div>
      </div>
      <div className="product_right">
        <div className='right_info'>
          <p>
            Price : <span>$499.87</span>
          </p>
          <p>
            Status : <span>In Stock</span>
          </p>
          <p>
            Qty
            <select >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </p>
          <p>
            <button type='button'>Add To Cart</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default productpage
