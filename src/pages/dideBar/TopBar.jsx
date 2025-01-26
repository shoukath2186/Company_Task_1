import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";

function TopBar() {
    return (
       
<div className="w-full border-b-2 border-gray-300 flex items-center py-3 px-2 relative">
            <div className="flex items-center flex-grow mr-4">
                <input
                    type="search"
                    placeholder=""
                    className="flex-grow min-w-[100px] max-w-[250px] h-[33px] bg-white bg-opacity-30 backdrop-blur-md border-none outline-none placeholder-gray-500 text-white p-2 pl-2 rounded-l-md"
                />
                <div className="bg-[#199FB1] p-[7px] rounded-r-md w-[60px] flex items-center justify-center cursor-pointer">
                    <IoSearch className="text-white text-lg" />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <FaBell className="text-white text-xl cursor-pointer md:mr-16" />
                <div className="w-10 h-10 bg-gray-500 rounded-full overflow-hidden">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
                        alt="Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default TopBar