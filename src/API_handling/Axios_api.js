
import axiosInstance from "./Axios_interSepter";

const User='/api/v1/admin'

export const logInApi=async (formData)=>{
  //console.log('form datas',formData);
  return axiosInstance.post(`${User}/login`,formData);
}
export const registerApi=async (formData)=>{
   // console.log('form datas',formData);
   return await axiosInstance.post(`${User}/registration`,formData);
}
export const dashbordUser=async (page,limit)=>{
  return await axiosInstance.get(`${User}/getAllUsers?page=${page}&limit=${limit}`)

}
export const SearchUser=async (page,limit,key)=>{
  return await axiosInstance.get(`${User}/getAllUsers?keyword=${key}&userStatus=&page=${page}&limit=${limit}`)
}

export const UserManegement=async (page,limit)=>{
  return await axiosInstance.get(`${User}/getAllUsers?page=${page}&limit=${limit}`)
}

export const SearchInRaitingAndReview=async (page,limit,key)=>{
  return await axiosInstance.get(`${User}/getAllUsers?keyword=${key}&userStatus=&page=${page}&limit=${limit}`)
}

