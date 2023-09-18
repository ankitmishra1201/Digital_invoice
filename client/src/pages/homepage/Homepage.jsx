import React from 'react'

import './homepage.css'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Component
import Product from '../../components/product/Product';
import Service from '../../components/service/Service';

//Actions
import { getProducts as listProducts } from '../../redux/actions/productActions';
import { getServices as listServices } from '../../redux/actions/serviceAction';

const Homepage = () => {

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const getServices = useSelector((state)=> state.getServices);


  const { products, loading, error } = getProducts;
  const { services , Serviceloading , Serviceerror} = getServices;

  useEffect(() => {
    dispatch(listProducts())
    dispatch(listServices())
  }, [dispatch])

  return (
    <div className='homescreen'>
      <h2 className='homescreen_title'>Our Products</h2>
      <div className="homescreen_items">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={product.imageUrl}
            />
          ))
        )}
      </div>
      <h2 className='homescreen_title'>Our Services</h2>
      <div className="homescreen_items">
        {Serviceloading ? (
          <h2>Loading ...</h2>
        ) : Serviceerror ? (
          <h2>{Serviceerror}</h2>
        ) : (
          services.map((service)=>(
            <Service
              key={service._id}
              productId={service._id}
              name={service.name}
              price={service.price}
              description={service.description}
              imageUrl={service.imageUrl}
            />
          ))
        )}        
      </div>
    </div>
  )
}

export default Homepage
