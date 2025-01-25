import React, { useState } from 'react'

function SideBar({ sidBarItems, handileClick, activeItem }) {





    return (
        <div className='w-[20%] h-full my-10 flex items-center justify-center'>
            <div className='bg-white rounded-lg w-[210px] flex flex-col items-center'>
                <h1 className='text-[20px] font-semibold text-[#199FB1] py-2'>Logo</h1>
                {sidBarItems.map((item) => (
                    <div key={item} className='w-full flex justify-center border-t-[1.5px] border-[#c4cbcb] border-solid'>
                        <button onClick={() => handileClick(item)}
                            className={`${item == activeItem ? 'text-white text-left w-[180px] h-[40px] my-3  bg-[#199FB1]   rounded-xl pl-5' : 'text-[#199FB1] text-[15px]  w-[180px] h-[40px] m-1.5 pl-5  text-left'}`}
                        >
                            {item}
                        </button>

                    </div>
                ))}


            </div>
        </div>
    )
}

export default SideBar