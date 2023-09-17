import React from 'react'
import "./cartItem.css"
import { Link } from 'react-router-dom'

const CartItem = () => {
  return (
    <div className="cartitem">
    <div className='cartitem_image'>
       <img src="/logo192.png" alt="" /> 
    </div>

    <Link to={`/product/${121}ds`} className='cartitem_name'>
        <p>Product 1</p>
    </Link>
    <p className='cartitem_price'>$499.78</p>

    <select className='cartitem_select'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>

    <button className='cartitem_delete'>
        <i className='fas fa-trash'></i>
    </button>

    </div>
  )
}

export default CartItem
