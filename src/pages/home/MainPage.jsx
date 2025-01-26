import React from 'react'
// import { useSelector } from 'react-redux'
import Alienation from './Alienation'

function MainPage() {


  return (
    <div className='w-screen h-full bg-[#EAEAEB] fixed overflow-auto'>
    <div 
      className="absolute bg-gradient-to-r from-[#FF8553] via-[#E25845] to-[#E25845] "
      style={{
        width: '100%',
        height: '380px',
        top: '-10px',
        left: '0',
        opacity: 1
      }}
    >
      <svg 
        className="absolute bottom-[-1px] left-0 w-full" 
        viewBox="0 0 1000 320" 
        preserveAspectRatio="none"
      >
        <path 
          fill="#EAEAEB" 
          fillOpacity="1" 
          d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,186.7C672,171,768,181,864,197.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <div className='relative'>
        <Alienation/>
      </div>
    </div>
  </div>
  )
}

export default MainPage