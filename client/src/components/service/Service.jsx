import React from 'react'
import { Link } from 'react-router-dom'
import './service.css'

const Service = ({imageUrl, name, price, description, productId}) => {
  return (
        <div className="service">
            <img src={imageUrl} alt={name}/>
            <div className="layer_service">
                <h3>{name}</h3>
                <p>{description.substring(0,100)}</p>
                <div className="layer_tags_service">
                    <div className="price_service">
                        ${price} 
                    </div>
                    <Link to={`/service/${productId}`} className="link_service">
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default Service
