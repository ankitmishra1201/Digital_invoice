import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
const Product = ({imageUrl, name, price, description, productId}) => {
  return (
        <div className="product">
            <img src={imageUrl} alt={name} />
            <div className="layer">
                <h3>{name}</h3>
                <p>{description.substring(0,100)}...</p>
                <div className="layer_tags">
                    <div className=" price">
                        ${price} 
                    </div>
                    <Link to={`product/${productId}`} className="link">
                        Buy Now
                    </Link>
                </div>
                
            </div>
        </div>
  )
}

export default Product
