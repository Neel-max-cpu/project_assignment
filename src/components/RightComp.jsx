
import React from 'react'
import { TabsDemo } from './Tabsdemo'
import img1 from "../assets/img/CodeAnt Ai.png"
const RightComp = () => {
  return (
    <div>
      <div className='flex flex-col items-center my-3 bg-white rounded-lg shadow-md'>
        <img src={img1} alt="" />
        <h1 className='text-2xl mb-3 font-bold'>Welcome to CodeAnt AI</h1>
        <TabsDemo />
      </div>
      <div className="flex justify-center items-center my-3">
        <span>By signing up you agree to <strong>Privacy Policy.</strong></span>
      </div>
    </div>
  )
}

export default RightComp
