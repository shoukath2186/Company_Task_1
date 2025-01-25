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
              <th><input type="checkbox" className='m-3 mt-4 ml-3' /></th>
              <th className="px-4 py-2 text-left border-b">Name</th>
              <th className="px-4 py-2 text-left border-b">User Deal</th>
              <th className="px-4 py-2 text-left border-b">Block / Unblock</th>
              <th className="px-4 py-2 text-left border-b">Ratings</th>
              <th className="px-4 py-2 text-left border-b">Actions</th>
            </tr>
          </thead>
          {/* <div><p className=''>Showing 10 of 5556 total users</p></div> */}
          <tbody>

            {data.map((user, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td><input type="checkbox" className='m-3 ml-6  mt-8' /></td>
                <td className="px-4 py-3 border-b ">

                  <div className="flex items-center ml-[-23px]">
                    <img
                      src="https://via.placeholder.com/40"
                      alt={user.name}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div>
                      <div className="text-[17px] my-[-5px] font-medium">{user.name}</div>
                      <div className="text-gray-500 text-[13px] mt-1">{user.email}</div>
                      <div className="text-gray-500 text-[13px] mb-[-10px]">{user.phone}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b">
                  <div>
                    <div><p className='text-red-600'>Sold: {user.userDeal.sold}</p></div>
                    <div><p className='text-green-600'>Bought: {user.userDeal.bought}</p></div>
                  </div>
                </td>
                <td className="px-4 py-3 border-b">
                  <div
                    className={`px-4 py-1 w-[100px] rounded-md ${user.blockUnblock === 'Block'
                        ? 'text-red-700  border-red-700 border-2'
                        : '  bg-red-500 text-white'
                      }`}
                  >
                    {user.blockUnblock}
                  </div>
                </td>
                <td className=" pt-[27px]  flex items-center gap-1">
                {Array.from({ length: user.ratings }, (_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </td>
                <td className="px-4 py-3 border-b text-[#199FB1] pl-[40px] pb-3 text-[30px]">{user.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserManagement