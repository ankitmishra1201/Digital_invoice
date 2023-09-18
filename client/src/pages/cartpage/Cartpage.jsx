import React from 'react'

import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './cartpage.css'

//Component
import CartItem from '../../components/cartItem/CartItem'

//Actions
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'

const Cartpage = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id,qty) =>{
    dispatch(addToCart(id,qty));
  }

  const removeCartItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () =>{
    return cartItems.reduce((qty,item)=> Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () =>{
    return cartItems.reduce((price,item)=> (item.price* item.qty) + price,0);
  }

  return (
    <div className='cartscreen'>
      <div className='cartscreen_left'>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                item={item}
                qtyChangeHandler = {qtyChangeHandler}
                removeCartItem = {removeCartItem}
              />
            ))
          )}
      </div>
      <div className='cartscreen_right'>
        <div className="cartscreen_info">
          <p>SubTotal ({getCartCount()}) items</p>
          <p>${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cartpage
