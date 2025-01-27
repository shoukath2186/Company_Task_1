import React from 'react'
import { FaStar } from "react-icons/fa";

function UserManagement() {
  const data = [
    {
      name: 'Yeray Rosalos',
      email: 'yeray.rosalos@gmail.com',
      phone: '+91-9087856432',
      userDeal: {
        sold: 2,
        bought: 1
      },
      blockUnblock: 'Block',
      ratings: 5,
      actions: '...'
    },
    {
      name: 'Talah Cotton',
      email: 'talahcotton@gmail.com',
      phone: '+91-9087856432',
      userDeal: {
        sold: 0,
        bought: 5
      },
      blockUnblock: 'Unblock',
      ratings: 3,
      actions: '...'
    },
    {
      name: 'Yeray Rosalos',
      email: 'yeray.rosalos@gmail.com',
      phone: '+91-9087856432',
      userDeal: {
        sold: 2,
        bought: 1
      },
      blockUnblock: 'Block',
      ratings: 3,
      actions: '...'
    },
    {
      name: 'Talah Cotton',
      email: 'talahcotton@gmail.com',
      phone: '+91-9087856432',
      userDeal: {
        sold: 0,
        bought: 5
      },
      blockUnblock: 'Unblock',
      ratings: 3,
      actions: '...'
    },
    {
      name: 'Talah Cotton',
      email: 'talahcotton@gmail.com',
      phone: '+91-9087856432',
      userDeal: {
        sold: 0,
        bought: 5
      },
      blockUnblock: 'Unblock',
      ratings: 5,
      actions: '...'
    },
    {
      name: 'Yeray Rosalos',
      email: 'yeray.rosalos@gmail.com',
      phone: '+91-9087856432',
      userDeal: {
        sold: 2,
        bought: 1
      },
      blockUnblock: 'Block',
      ratings: 3,
      actions: '...'
    },
    {
      name: 'Talah Cotton',
      email: 'talahcotton@gmail.com',
      phone: '+91-9087856432',
      userDeal: {
        sold: 0,
        bought: 5
      },
      blockUnblock: 'Unblock',
      ratings: 4,
      actions: '...'
    },
    {
      name: 'Talah Cotton',
      email: 'talahcotton@gmail.com',
      phone: '+91-9087856432',
      userDeal: {
        sold: 0,
        bought: 5
      },
      blockUnblock: 'Unblock',
      ratings: 3,
      actions: '...'
    }
  ];
  return (
    <div className='w-full  mt-8 bg-white rounded-xl pb-4'>
      <div className='h-[60px]'>

      </div>
      
      <div className="w-full bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border-b">Name</th>
              <th className="px-4 py-2 text-left border-b">User Deal</th>
              <th className="px-4 py-2 text-left border-b">Block / Unblock</th>
              <th className="px-4 py-2 text-left border-b">Ratings</th>
              <th className="px-4 py-2 text-left border-b">Actions</th>
            </tr>
          </thead>
          {/* <div><p className=''>Showing 10 of 5556 total users</p></div> */}
          <tbody>
            <tr className='bg-gray-100' >
              <td className="px-4 py-3 border-b ">
                <div className="flex items-center ml-[-23px]">
                  <img
                    src="https://via.placeholder.com/40"
                    alt='ameen'
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <div className="text-[17px] my-[-5px] font-medium">user Name</div>
                    <div className="text-gray-500 text-[13px] mt-1">user email</div>
                    <div className="text-gray-500 text-[13px] mb-[-10px]">user Phone</div>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3 border-b">
                <div>
                  <div><p className='text-red-600'>Sold: </p></div>
                  <div><p className='text-green-600'>Bought:</p></div>
                </div>
              </td>
              <td className="px-4 py-3 border-b">
                <div
                  className='px-4 py-1 w-[100px] rounded-md'
                >
                  blockUnblock
                </div>
              </td>
              <td className=" pt-[27px]  flex items-center gap-1">
                stars
              </td>
              <td className="px-4 py-3 border-b text-[#199FB1] pl-[40px] pb-3 text-[30px]">actions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserManagement