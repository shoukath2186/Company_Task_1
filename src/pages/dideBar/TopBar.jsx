import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";

function TopBar() {
  return (
    <div className="w-full border-b-2 border-gray-300 flex items-center py-3 ">
                            <input
                                type="serch"
                                className="w-[400px] h-[33px]  bg-white bg-opacity-30 backdrop-blur-md border-none outline-none placeholder-gray-500 text-white p-2 pl-2 rounded-md"
                            />
                            <div className="bg-[#199FB1] p-[7px] rounded-r-md w-[60px] flex items-center justify-center cursor-pointer ml-[-1px]">
                                <IoSearch className="text-white text-lg" />
                            </div>
                            <div className="relative w-full ">
                                <div className="absolute right-0 flex items-center ">
                                    <FaBell className="text-white text-xl mr-[100px] cursor-pointer mt-[-20px]" />
                                    <div className="w-10 h-10 bg-gray-500 mr-[2px] rounded-full overflow-hidden mt-[-20px]">
                                        <img
                                            src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
                                            alt="Avatar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
  )
}

export default TopBar