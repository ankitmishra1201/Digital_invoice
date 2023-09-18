import React from 'react'
import './productpage.css'
import { useParams , useNavigate} from 'react-router-dom';

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getProductsDetails } from '../../redux/actions/productActions'
import { addToCart } from '../../redux/actions/cartActions'


const Productpage = () => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const productDetails = useSelector((state) => state.getProductsDetails);

  const {loading, error, product} = productDetails;

  useEffect(()=>{
    if(product && id!== product._id){
      dispatch(getProductsDetails(id));
    }
  },[dispatch,id,product])

  const addToCartHandler = () =>{
        dispatch(addToCart(product._id, qty));
        navigate('/cart');
    } 

  return (
    <div className='product_screen'>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
        <div className="product_left">
        <div className="left_image">
          <img src={product.imageUrl}alt={product.name} />
        </div>
        <div className="left_info">
          <p className='left_name'>{product.name}</p>
          <p>${product.price} Only</p>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="product_right">
        <div className='right_info'>
          <p>
            Price : <span>${product.price}</span>
          </p>
          <p>
            Status : <span>{product.countInStock > 0 ? <>In Stock</> : <>Not In Stock</>}</span>
          </p>
          <p >
            Qty :
            <select value={qty} onChange={(e)=> setQty(e.target.value)} >
              {[...Array(product.countInStock).keys()].map((x)=>(
                <option key={x+1} value={x+1}>{x+1}</option>
              ))}
            </select>
          </p>
          <p>
            <button type='button' onClick={addToCartHandler}>Add To Cart</button>
          </p>
        </div>
      </div>
        </>
      )}
      
    </div>
  )
}

export default Productpage
