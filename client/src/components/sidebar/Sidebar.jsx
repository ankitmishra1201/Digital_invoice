import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = ({show,click}) => {
    const sideBarClass = ['sidebar']

    if(show){
        sideBarClass.push('show')
    }
  return (
    <div className={sideBarClass.join(" ")}>
      <ul className='sidebar_links' onClick={click}>
        <li>
            <Link className='Sidelink' to="/cart">
            <i className='fas fa-shopping-cart'></i>
            <span>
                Cart 
                <span className='sidebar_cartbadge'>0</span>
            </span>
            </Link>
        </li>
        <li>
            <Link className='Sidelink' to="/">
             Shop
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
