import React from 'react'
import './backdrop.css'
const backdrop = ({show, click}) => {
  return show && (
    <div className='backdrop' onClick={click}>
      
    </div>
  )
}

export default backdrop
