
import axiosInstance from "./Axios_interSepter";

const User='/api/v1/user'

export const logInApi=async (formData)=>{
  console.log('form datas',formData);
  return axiosInstance.post(`${User}/login`,formData);
}
export const registerApi=async (formData)=>{
   // console.log('form datas',formData);
   return await axiosInstance.post(`${User}/registration`,formData);
}