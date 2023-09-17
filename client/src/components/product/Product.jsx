import React from 'react'
import { Link } from 'react-router-dom'
import './product.css'
const Product = () => {
  return (
    <>
        <div className="product">
            <img src="logo192.png" alt="" />
            <div className="layer">
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed cupiditate ex, tempore provident nulla impedit esse sequi laudantium harum quia possimus dolorem quidem facere doloribus.</p>
                <div className="layer_tags">
                    <div className=" price">
                        499$ 
                    </div>
                    <Link to={`product/${122}dc`} className="link">
                        Buy Now
                    </Link>
                </div>
                
            </div>
        </div>
        <div className="product">
            <img src="logo192.png" alt="" />
            <div className="layer">
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed cupiditate ex, tempore provident nulla impedit esse sequi laudantium harum quia possimus dolorem quidem facere doloribus.</p>
                <div className="layer_tags">
                    <div className=" price">
                        499$ 
                    </div>
                    <Link className="link">
                        Buy Now
                    </Link>
                </div>
                
            </div>
        </div>
        <div className="product">
            <img src="logo192.png" alt="" />
            <div className="layer">
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed cupiditate ex, tempore provident nulla impedit esse sequi laudantium harum quia possimus dolorem quidem facere doloribus.</p>
                <div className="layer_tags">
                    <div className=" price">
                        499$ 
                    </div>
                    <Link className="link">
                        Buy Now
                    </Link>
                </div>
                
            </div>
        </div>
        <div className="product">
            <img src="logo192.png" alt="" />
            <div className="layer">
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed cupiditate ex, tempore provident nulla impedit esse sequi laudantium harum quia possimus dolorem quidem facere doloribus.</p>
                <div className="layer_tags">
                    <div className=" price">
                        499$ 
                    </div>
                    <Link to={`product/${122}dc`} className="link">
                        Buy Now
                    </Link>
                </div>
            </div>
        </div>
        <div className="product">
            <img src="logo192.png" alt="" />
            <div className="layer">
                <h3>Heading</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed cupiditate ex, tempore provident nulla impedit esse sequi laudantium harum quia possimus dolorem quidem facere doloribus.</p>
                <div className="layer_tags">
                    <div className=" price">
                        499$ 
                    </div>
                    <Link className="link">
                        Buy Now
                    </Link>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Product
