
import React, { useEffect, useRef, useState } from 'react'
import { Star } from 'lucide-react';
import { UserManegement,SearchInRaitingAndReview } from '../../API_handling/Axios_api';
import PaginationSection from '../dashbordComponents/pagination/PaginationSection';
import LoadingSpinner from '../dashbordComponents/LoadingSpinner';
import { Check, X } from 'lucide-react';






function RatingAndReview() {

  const [data, setData] = useState()
  const [user, setUser] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [actionClick, setActionClick] = useState(null)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState(false);

  const searchRef = useRef(null)

  const takeAllUserData = async () => {
    setLoading(true);
    try {
      const res = await UserManegement(pageNo, 8);
      setUser(res.data.data.docs);
      console.log('API response:', res.data);
      setData(res.data)

    } catch (error) {
      console.log('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {


    takeAllUserData();


  }, [pageNo])

  const handleActionClick = (userId) => {
    setActionClick(actionClick === userId ? null : userId);
  };
  const ClickSearchUser = async () => {
    const searchValue = searchRef.current?.value?.trim();
    if (searchValue) {
      try {
        const res = await SearchInRaitingAndReview(1, 10, searchValue)
        // console.log(res);
        setUser(res.data.data.docs);
        setData(res.data)
        setSearch(true)

      } catch (error) {
        console.log(error);

      }
    } else if (search) {
      setSearch(false)
      takeAllUserData()
    }
  }

  function formatDate(inputDate) {
    const date = new Date(inputDate);
  
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true, // To use am/pm format
    };
  
    return date.toLocaleString('en-US', options);
  }
  return (
    <>
      <p className='text-gray-100 p-2'>List of reviews with ratings, comments, and user details</p>
      <div className='w-full   bg-white rounded-xl pb-4'>
        <div className='w-full h-[65px] flex items-center justify-between'>
          <div>
            <p className='text-[15px] text-gray-500 ml-5'>{`All ( ${data?.data.totalDocs ? data?.data.totalDocs : 0} )`}</p>
          </div>
          <div className=' w-[280px] h-[30px] mr-10 flex'>
            <input type="text" ref={searchRef} className='h-full w-[75%] border border-gray-600 rounded-lg px-2 text-[13px] bg-gray-300' placeholder='Search ' />
            <div className='w-[25%] bg-[#199FB1] ml-[-8px] rounded-lg flex items-center justify-center cursor-pointer' onClick={() => ClickSearchUser()}>
              <p className='text-white text-[12px]'>Search</p>
            </div>
          </div>
        </div>

        <div className="w-full bg-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[768px]">
              <thead className="bg-white sticky top-0 border-y-[2px] border-y-[#199FB1]">
                <tr className=''>
                  <th className="px-3 w-10">
                    <input type="checkbox" className="h-4 w-4" />
                  </th>
                  <th className="px-4 py-3 pl-16 text-gray-1000 font-thin text-[15px] text-left border-b w-[300px]">Name</th>
                  <th className="px-4 py-3 text-gray-1000 font-thin text-[15px] text-left border-b w-[120px]">Camment</th>
                  <th className="px-4 py-3 text-gray-1000 font-thin text-[15px] text-left border-b w-[140px]">Ratings</th>
                  <th className="px-4 py-3 text-gray-1000 font-thin text-[15px] text-left border-b w-[140px]">Date & Time</th>
                  <th className="px-4 py-3 text-gray-1000 font-thin text-[15px] text-left border-b w-[100px]">Actions</th>
                </tr>
              </thead>


              <tbody className='border-b-[2px] border-b-[#199FB1]'>

                {loading ? (<>
                  <tr>
                    <td colSpan="6">
                      <div className='h-[800px] w-full flex items-center justify-center'>
                        <LoadingSpinner />
                      </div>
                    </td>
                  </tr>
                </>) :
                  (user.length > 0 ? (
                    user.map((item, i) =>
                    (<tr
                      key={item._id}
                      className={`${i % 2 !== 0 ? 'bg-white' : 'bg-gray-100'} hover:bg-gray-200 transition-colors`}
                    >
                      {/* Checkbox */}
                      <td className="px-4 py-3 align-middle text-center">
                        <input type="checkbox" className="h-4 w-4" />
                      </td>
                
                      {/* User Info */}
                      <td className="px-4 py-3 align-middle">
                        <div className="flex items-center">
                          <img
                            src={
                              item.image
                                ? item.image
                                : 'https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg'
                            }
                            alt="user avatar"
                            className="w-10 h-10 rounded-full mr-4"
                          />
                          <div>
                            <p className="text-[17px] font-medium truncate">{item.fullName}</p>
                            <p className="text-gray-500 text-[13px] truncate">{item.email}</p>
                            <p className="text-gray-500 text-[13px] truncate">{item.phone}</p>
                          </div>
                        </div>
                      </td>
                
                      {/* Placeholder Column */}
                      <td className="px-4 py-3 align-middle text-center">
                        <p className='text-gray-500 text-[12px]'>Looks Awesome</p>
                      </td>
                
                      {/* Star Ratings */}
                      <td className="px-4 py-3 align-middle">
                        <div className="flex justify-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <Star className="w-4 h-4 text-gray-300" />
                        </div>
                      </td>
                
                      {/* Created At */}
                      <td className="px-4 py-3 align-middle text-center">
                        <p className='text-gray-500 text-[12px]'>{formatDate(item.createdAt)}</p>
                      </td>
                
                      {/* Status Actions */}
                      <td className="px-4 py-3 align-middle text-center">
                        {item.status == 'Pending' ? (
                          <div className="flex justify-center gap-6">
                            <div className="bg-[#FFCC40] w-8 h-8 rounded-lg flex items-center justify-center">
                              <Check size={20} color="white" />
                            </div>
                            <div className="bg-[#FF0838] w-8 h-8 rounded-lg flex items-center justify-center">
                              <X size={20} color="white" />
                            </div>
                          </div>
                        ) : (
                          <button className="text-gray-700 hover:text-gray-900 bg-red-200 px-2 rounded-lg transition-colors">
                            {item.status}
                          </button>
                        )}
                      </td>
                    </tr>

                    ))) : (
                    <tr>
                      <td colSpan="6" className="text-center py-4">
                        No users found
                      </td>
                    </tr>
                  ))
                }


              </tbody>


            </table>
          </div>
        </div>
        <div className='h-[60px] flex justify-between items-center '>
          <div>
            <p className='text-gray-400 ml-6 hover:cursor-pointer'>Delete</p>
          </div>
          <PaginationSection setPageNo={setPageNo} data={data} page={pageNo} limit={8} />
        </div>

      </div>
    </>
  )
}

export default RatingAndReview