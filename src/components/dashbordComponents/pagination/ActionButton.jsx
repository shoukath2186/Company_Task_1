import React, { useEffect, useRef } from 'react';

function ActionButton({ id, setActionClick }) {
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {

            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActionClick(null);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [setActionClick]);


    return (
        <div
            ref={dropdownRef}
            className="absolute mt-2 bg-white border rounded-lg shadow-lg w-[150px] z-10"
        >
            <div
                onClick={() => setActionClick(null)}
                className="pt-2 pl-4 cursor-pointer text-gray-500 hover:text-gray-800 transition-colors"
            >
                ✕
            </div>
            <div className=" transition-colors cursor-pointer hover:bg-[#199FB1] mx-3 my-3 rounded-md ">
                <p className="px-4 py-3 text-sm font-medium text-gray-800 hover:text-white">
                    View Profile
                </p>
            </div>
            <div className=" transition-colors cursor-pointer hover:bg-[#199FB1] mx-3 my-3 rounded-md">
                <p className="px-4 py-3 text-sm font-medium text-red-600 hover:text-white ">
                    Delete User
                </p>
            </div>
        </div>
    );
}

export default ActionButton;
