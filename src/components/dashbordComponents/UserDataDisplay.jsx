import React, { useEffect, useState } from 'react'
import { Star } from 'lucide-react';
import { dashbordUser } from '../../API_handling/Axios_api';
import PaginationSection from './pagination/PaginationSection';
import ActionButton from './pagination/ActionButton';




function UserDataDisplay() {

  const [data, setData] = useState()
  const [user, setUser] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [actionClick,setActionClick]=useState(null)

  

  const takeAllUserData = async () => {
    try {
      const res = await dashbordUser(pageNo, 5); 
      setUser(res.data.data.docs); 
      console.log('API response:', user);
      setData(res.data)

    } catch (error) {
      console.log('Error fetching user data:', error);
    }
  };


  useEffect(() => {


    takeAllUserData();


  }, [pageNo])

  const handleActionClick = (userId) => {
    setActionClick(actionClick === userId ? null : userId); 
  };

  return (
    <>
      <div className='w-full  mt-8 bg-white rounded-xl pb-4'>
        <div className='p-2'>
          <p className='text-[18px] text-gray-500'>User Management</p>
        </div>

        <div className="w-full bg-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[768px]">
              <thead className="bg-white sticky top-0 border-b-[2px] border-b-[#199FB1]">
                <tr className=''>
                  <th className="px-3 w-10">
                    <input type="checkbox" className="h-4 w-4" />
                  </th>
                  <th className="px-4 py-3 pl-16 text-gray-1000 font-thin text-[15px] text-left border-b w-[300px]">Name</th>
                  <th className="px-4 py-3 text-gray-1000 font-thin text-[15px] text-left border-b w-[120px]">User Deal</th>
                  <th className="px-4 py-3 text-gray-1000 font-thin text-[15px] text-left border-b w-[140px]">Block/Unblock</th>
                  <th className="px-4 py-3 text-gray-1000 font-thin text-[15px] text-left border-b w-[140px]">Ratings</th>
                  <th className="px-4 py-3 text-gray-1000 font-thin text-[15px] text-left border-b w-[100px]">Actions</th>
                </tr>
              </thead>


              <tbody className='border-b-[2px] border-b-[#199FB1]'>


                {user.length > 0 ? (
                  user.map((item,i) =>
                  (<tr key={item._id} className={ `${'bg-white'} hover:bg-gray-100 transition-colors `}>
                    <td className="pl-4 align-top">
                      <input type="checkbox" className="h-4 w-4 mt-8" />
                    </td>
                    <td className="px-4 py-3 border-b">
                      <div className="flex items-center pl-4 ml-[-23px]">
                        <img
                          src={`${item.image?item.image:'https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg'}`}
                          alt="user avatar"
                          className="w-10 h-10 rounded-full mr-4 flex-shrink-0"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="text-[17px] -mt-1 font-medium truncate">{item.fullName}</div>
                          <div className="text-gray-500 text-[13px] mt-1 truncate">{item.email}</div>
                          <div className="text-gray-500 text-[13px] -mb-2 truncate">{item.phone}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b align-top">
                      <div className="mt-2">
                        <div><p className="text-red-600 whitespace-nowrap">{3} Sold</p></div>
                        <div><p className="text-green-600 whitespace-nowrap">{5} Bought</p></div>
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b align-top">
                      <div className="mt-2">
                        <button className="px-4 py-1 w-[100px] rounded-md border-[2px] border-red-400 text-red-600 hover:bg-red-200 transition-colors whitespace-nowrap">
                          Block
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3 border-b align-top">
                      <div className="flex items-center gap-1 mt-4">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        <Star className="w-4 h-4 text-gray-300 flex-shrink-0" />
                      </div>
                    </td>
                    <td className="px-4 py-4 border-b align-top">
                      <div className="mt-[-7px] cursor-pointer" >
                        <button className="text-[#199FB1] text-[30px] m-0 hover:text-blue-800" onClick={() => handleActionClick(item._id)}>
                         ...
                        </button>
                        {actionClick === item._id&&(
                          <ActionButton id={item._id} setActionClick={setActionClick}/>
                        )}
                      </div>
                    </td>
                  </tr>
                  
                  ))) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      No users found
                    </td>
                  </tr>
                )}



              </tbody>


            </table>
          </div>
        </div>
        <div className='h-[60px] flex justify-between items-center '>
         <div>
             <p className='text-gray-400 ml-6 hover:cursor-pointer'>Delete</p>
         </div>
         <PaginationSection setPageNo={setPageNo} data={data} page={pageNo} limit={5}/>
        </div>

      </div>
    </>
  )
}

export default UserDataDisplay