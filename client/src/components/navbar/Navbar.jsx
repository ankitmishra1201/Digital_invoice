import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import './navbar.css'
const Navbar = ({click}) => {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;

  const getCartCount = () =>{
    return cartItems.reduce((qty,item)=> qty + Number(item.qty), 0);
  }
  return (
    <div>
      <nav className='navbar'>
        {/*logo*/}
        <div className="navbar_logo">
          <h2>DIGITAL INVOICE</h2>
        </div>
        {/*links*/}
        <ul className='navbar_links'>
          <li>
            <Link to = '/cart' className='cart_link'>
              <i className='fas fa-shopping-cart'></i>
              <span>
              Cart
              <span className='cartlogo_badge'>{getCartCount()}</span>
              </span>
            </Link>
          </li>

          <li>
            <Link to = '/'>
              Shop
            </Link>
          </li>
        </ul>
        {/*Hamburger*/}
        <div className="hamburger_menu" onClick={click}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
