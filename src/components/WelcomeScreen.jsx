import React, { useState } from 'react'
import logoImg from '/src/assets/Logo.png'
import AddProfileForm from '../forms/AddProfileForm'

function WelcomeScreen({successData}) {
    const [success, setSuccess] = useState(false);
    
    return (
        <>

            <div className='w-[650px] bg-white h-[550px] rounded-xl flex flex-col items-center'>
                {success ?
                    <>
                     <AddProfileForm successData={successData}/>
                      
                    </>
                    :
                    <>
                        <img className='w-[300px] m-3' src={logoImg} alt="logo" />
                        <h1 className='text-[35px] font-bold mt-[-20px]'>Welcome</h1>
                        <h3 className='text-[20px] font-semibold text-orange-500'>to the Free Shops App Admin Panel</h3>
                        <p className='w-[500px] mt-8 text-gray-600 text-center'>Manage and monitor all aspects of your app seamlessly from one place. Use the tools below to get started.</p>
                        <div className="w-full flex items-center justify-center mt-6">
                            <button
                                onClick={() => setSuccess(true)}
                                className="w-[100px] h-[35px] text-[15px] font-bold rounded-[4px] bg-[#199fb1f5] text-white hover:bg-[#199fb1] mt-10"
                            >
                                Get Start
                            </button>
                        </div>
                    </>
                }
            </div>

        </>


    )
}

export default WelcomeScreen