import React, { useRef, useState } from "react";
import { MdCameraAlt } from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../validation/Profil_validation";

function AddProfileForm({successData}) {
  const [showPassword, setShowPassword] = useState(false);
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState(successData);

  const fileInputRef = useRef(null);
  const navigation=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleUploadClick = () => {
    fileInputRef.current.click(); 
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile(URL.createObjectURL(file)); 
    }
  };
  const SkipPage=()=>{
    toast.success('Registration successful! Please log in to continue.');
    navigation('/login');
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation=validateForm(formData)
        if (validation.status) {
          toast.success('Registration successful! Please log in to continue.');
          navigation('/login');
          } else {
            for(let key in validation.data){
              toast.error(validation.data[key])
            }
            
            toast.error('Please fix the errors in the form');
          }
        };

  return (
    <div className="relative w-full flex flex-col items-center">
      <p className="text-gray-400 absolute right-6 mt-1 cursor-pointer" onClick={SkipPage}>Skip</p>
      <div className="mt-9">
        <label htmlFor="profile-upload">
          <div className="bg-gray-300 w-[80px] h-[80px] mt-1 rounded-full flex items-center justify-center relative cursor-pointer overflow-hidden">
            {profile ? (
              <img src={profile} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <MdCameraAlt className="text-gray-100 text-5xl" />
            )}
          </div>
        </label>
        <input
          type="file"
          id="profile-upload"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleProfileChange}
          className="hidden"
        />
      </div>
      <p className="text-[#199fb1f5] mt-5 hover:cursor-pointer" onClick={handleUploadClick}>Upload Profile Picture</p>
      <form onSubmit={handleSubmit}>
        <div className="w-[400px]">
          <p className="text-[11px] mt-[10px] font-bold text-gray-500 mb-[1px]">Your Name</p>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full h-[35px] border-2 border-gray-400 rounded-md p-2"
            
          />

          <p className="text-[11px] mt-[15px] font-bold mb-[1px] text-gray-500">Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-[30px] border-2 border-gray-400 rounded-md p-2"
            
          />

          <p className="text-[11px] mt-[15px] font-bold mb-[1px] text-gray-500">Phone Number</p>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-[30px] border-2 border-gray-400 rounded-md p-2"
            
          />

          <p className="text-[11px] mt-[15px] font-bold mb-[1px] text-gray-500">Password</p>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-[30px] border-2 border-gray-400 rounded-md p-2"
              
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-[7px] cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 text-[13px] mt-3 hover:cursor-pointer">
          Change Password
        </p>
        <div className="w-full flex items-center justify-center">
          <button
            type="submit"
            className="w-[130px] h-[35px] text-[15px] font-bold rounded-[4px] bg-[#199fb1f5] text-white hover:bg-[#199fb1] mt-10"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProfileForm;
