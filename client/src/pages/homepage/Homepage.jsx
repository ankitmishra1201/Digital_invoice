import React from 'react'

import './homepage.css'
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Component
import Product from '../../components/product/Product';

//Actions
import { getProducts as listProducts} from '../../redux/actions/productActions';

const Homepage = () => {

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const {products, loading, error} = getProducts;

  useEffect(()=>{
    dispatch(listProducts())
  },[dispatch])

  return (
    <div className='homescreen'>
      <h2 className='homescreen_title'>Latest Products</h2>
      <div className="homescreen_products">
      {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product 
            key={product._id}
            productId = {product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Homepage
