import React from 'react'
import img1 from "../assets/img/left_copy.png"

const LeftComp = () => {
  return (
    <div className="max-w-full max-h-full overflow-hidden">
      <img src={img1} alt="" className='object-contain w-full h-auto' />
    </div>
  )
}

export default LeftComp
