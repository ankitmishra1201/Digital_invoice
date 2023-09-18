import React from 'react'
import './servicePage.css'
import { useParams , useNavigate} from 'react-router-dom';

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getServicesDetails } from '../../redux/actions/serviceAction'
import { addToServiceCart } from '../../redux/actions/cartActions'


const ServicePage = () => {

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const serviceDetails = useSelector((state) => state.getServicesDetails);

  const {loading, error, service} = serviceDetails;

  useEffect(()=>{
    if(service && id!== service._id){
      dispatch(getServicesDetails(id));
    }
  },[dispatch,id,service])

  const addToCartHandler = () =>{
        dispatch(addToServiceCart(service._id, qty));
        navigate('/cart');
    } 

  return (
    <div className='service_screen'>
      {loading ? ( 
        <h2>Loading ...</h2>
      ): error ? (
        <h2>{error}</h2>
      ):(
        <>
        <div className="service_left">
        <div className="service_left_image">
          <img src= {service.imageUrl} alt={service.name}/>
        </div>
        <div className="service_left_info">
          <p className='service_left_name'>{service.name}</p>
          <p>${service.price} Only</p>
          <p>{service.description}</p>
        </div>
      </div>
      <div className="service_right">
        <div className='service_right_info'>
        <p>
            Price : <span>{service.price*qty} $</span>
           
            {service.price > 1000 && service.price <=8000 ? (
            <>
            <br />
            Tax : <span><br />{0.1*service.price} $</span> 
            <br />
            Sub Total : <span><br />{service.price*qty + 0.1*service.price} $</span>
            </>
            )
            :
            service.price > 8000 ? (
              <>
              <br />
            Tax :<span><br />{0.15*service.price} $</span>
            <br />
            Sub Total : <span><br />{service.price*qty + 0.15*service.price} $</span>
            </>
            )
            :(
            <>
            <br />
            Tax : <span><br />{100} $</span>
            <br />
            Sub Total : <span><br />{service.price*qty +100} $</span>
            </>
            )
          }
          <br />
        </p>
          <p>
            Status : <span>{service.countInStock > 0 ? <>In Stock</> : <>Not In Stock</>}</span>
          </p>
          <p >
          Qty :
            <select value={qty} onChange={(e)=> setQty(e.target.value)} >
              {[...Array(service.countInStock).keys()].map((x)=>(
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

export default ServicePage
