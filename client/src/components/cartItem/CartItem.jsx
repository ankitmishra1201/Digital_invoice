import React from 'react'
import "./cartItem.css"
import { Link } from 'react-router-dom'
// import { useState } from 'react'
const CartItem = ({item, qtyChangeHandler,removeCartItem}) => {

  // const [price , setPrice] = useState(0);

  // const setPriceValue = (price)=>{

  //   if (price > 1000 && price <= 5000) {
  //     price = price + price*0.12;
  //     setPrice(price);
  //   }
  //   else if (price > 5000) {
  //     price = price + price*0.18;
  //     setPrice(price);
  //   }
  //   else{
  //     price = price + 200;
  //     setPrice(price);
  //   }
  // }

  // setPriceValue(item.price)

  return (
    <div className="cartitem">
    <div className='cartitem_image'>
       <img src={item.imageUrl} alt={item.name} /> 
    </div>

  {
     item.product ? (
      <Link to={`/product/${item.product}`} className='cartitem_name'>
        <p>{item.name}</p>
    </Link>
     )
     :
     (
      <Link to={`/service/${item.service}`} className='cartitem_name'>
        <p>{item.name}</p>
    </Link>
     )
  }
    { item.product ? (
      <p className='cartitem_price'>
      {item.price > 1000 && item.price <=5000 ? (
        <>${(item.price + 0.12*item.price)*(item.qty)}</>
      ) : item.price > 5000 ? 
      (
        <>${(item.price + item.price*0.18)*(item.qty)}</>
      ) :
      (
        <>
       $ {(item.price + 200)*(item.qty)}
        </>
      )
      }
    </p>
    ) : item.service ?
    (
    <p className='cartitem_price'>
      {item.price > 1000 && item.price <=8000 ? (
        <>${(item.price + 0.1*item.price)*(item.qty)}</>
      ) : item.price > 8000 ? 
      (
        <>${(item.price + item.price*0.15)*(item.qty)}</>
      ) :
      (
        <>
        ${(item.price + 100)*(item.qty)}
        </>
      )
      }
    </p>
    )
    : (
      <>
      can not display amount
      </>
    )
    }
    {item.product ? (
      <>
      <select className='cartitem_select' value={item.qty} onChange={(e)=> qtyChangeHandler(item.product,e.target.value)}>
        {[...Array(item.countInStock).keys()].map(x => (
          <option key={x+1} value={x+1}>{x+1}</option>
        ))}
    </select>
      </>
    ):
    <>
    <select className='cartitem_select' value={item.qty} onChange={(e)=> qtyChangeHandler(item.service,e.target.value)}>
        {[...Array(item.countInStock).keys()].map(x => (
          <option key={x+1} value={x+1}>{x+1}</option>
        ))
        }
    </select>
    </>
    }
    

    <button className='cartitem_delete' onClick={()=> removeCartItem(item.product)}>
        <i className='fas fa-trash'></i>
    </button>

    </div>
  )
}

export default CartItem
