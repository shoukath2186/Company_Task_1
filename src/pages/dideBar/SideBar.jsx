import React, { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

function SideBar({ sidBarItems, handileClick, activeItem }) {
    const [isOpen, setIsOpen] = useState(false)
    const modalRef = useRef(null)

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const onItemClick = (item) => {
        handileClick(item)
        setIsOpen(false)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpen])

    return (
        <>
            {/* small display */}
            <div className='lg:hidden bg-red-800 flex  items-center justify-center'>
                {/* Side Modal */}
                {isOpen ? (
                    <div className='fixed inset-0 z-40'>
                        <div
                            ref={modalRef}
                            className='absolute left-0 top-0 h-full bg-white  w-[210px] flex flex-col items-center shadow-lg overflow-auto'
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div 
                            className='absolute right-[5px] top-[5px] cursor-pointer' 
                            onClick={toggleModal}
                        >
                            <X size={27} color="#000" />
                        </div>

                            <h1 className='text-[20px] font-semibold text-[#199FB1] py-2'>Logo</h1>
                            {sidBarItems.map((item) => (
                        <div key={item} className='w-full flex justify-center border-t-[1.5px] border-[#c4cbcb] border-solid'>
                            <button onClick={() => onItemClick(item)}
                                className={`${item == activeItem ? 'text-white text-left w-[180px] h-[40px] my-3  bg-[#199FB1]   rounded-xl pl-5' : 'text-[#199FB1] text-[15px]  w-[180px] h-[40px] m-1.5 pl-5  text-left'}`}
                            >
                                {item}
                            </button>

                        </div>
                    ))}
                        </div>
                    </div>
                ) : <>
                    <button
                        onClick={toggleModal}
                        className='fixed top-4 left-4 z-50 bg-[#199FB1] p-2 rounded-md text-white'
                    >
                        <Menu size={24} />
                    </button>
                </>}
            </div>

            <div className='hidden lg:w-[20%] h-full my-10 lg:flex  items-center justify-center'>
                <div className='bg-white rounded-lg w-[210px] flex flex-col items-center '>
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
        </>
    )
}

export default SideBar