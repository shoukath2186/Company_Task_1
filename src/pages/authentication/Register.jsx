import React, { useState } from 'react'
import logoImg from '/src/assets/Logo.png'
import backgroundImg from '/src/assets/Log_inBag.jpeg'
import RegisterForm from '../../forms/RegisterForm'
import WelcomeScreen from '../../components/WelcomeScreen'

function Register() {

  const [complete, setComplete] = useState(false)
  const [successData,setSuccessData]=useState(null)


  return (
    <>
      <div
        className="w-full min-h-screen flex items-center justify-center mb-[-30px]"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >

        <div className="w-full max-w-[1250px] min-h-[650px] bg-slate-300 flex flex-col md:flex-row items-center bg-opacity-40 justify-center rounded-xl backdrop-blur-md p-4" >
          {complete ?
            <>
             <WelcomeScreen successData={successData}/>
            </>
            :
            <>
              <div className="w-full md:w-[50%]  md:h-[600px] flex items-center justify-center relative md:border-r-[3px] border-red-500">
                <div className="absolute top-0 right-[-7.5px] w-3 h-3 rounded-full bg-red-500 hidden md:block"></div>
                <div className="absolute bottom-0 right-[-7.5px] w-3 h-3 rounded-full bg-red-500 hidden md:block"></div>
                <img src={logoImg} alt="Logo" className="max-w-full h-auto" />
              </div>
              <div className='w-full md:w-[80%] lg:w-[50%] flex items-center justify-center mt-4 md:mt-0'>
                <div className='bg-white w-full md:w-[70%] rounded-xl'>
                <RegisterForm  setComplete={setComplete}  setSuccessData={setSuccessData} />
                </div>
              </div>
            </>
          }
        </div>

      </div>
    </>
  )
}

export default Register