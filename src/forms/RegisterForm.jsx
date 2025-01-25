import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { validateForm } from '../validation/Register_form_validation';
import { registerApi } from '../API_handling/Axios_api';

function RegisterForm({  setComplete ,setSuccessData}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  // const [errors, setErrors] = useState({});

  const navigation = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateForm(formData)
    if (validation.status) {

      try {
        const res = await registerApi(formData)
        toast.success(res.data.message);
        setSuccessData(formData);
        setComplete(true)

      } catch (error) {
        console.error('error1111==', error);
        if (error.response.data.message = 'Already Exist') {
          toast.error('The User Already Exists');
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
          })

        } else {
          toast.error(error.response.data.message);
        }

      }

    } else {
      for (let key in validation.data) {
        toast.error(validation.data[key])
      }

      toast.error('Please fix the errors in the form');
    }
  };

  return (
    <>
      <div className="w-full px-10">
        <h1 className="font-poppins font-bold text-[27px] pt-4 text-left">
          Create New Account
        </h1>
        <p className="text-[13px] mt-[-4px] text-gray-500">
          Welcome to Free shops App controller
        </p>

        <form onSubmit={handleSubmit}>
          <p className="text-[13px] mt-[20px] font-bold mb-[-3px] text-gray-700">
            Your Name
          </p>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full h-[35px] border-2 border-gray-400 rounded-md p-2"
          />

          <p className="text-[13px] mt-[15px] font-bold mb-[-3px] text-gray-700">
            Email
          </p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-[35px] border-2 border-gray-400 rounded-md p-2"
          />

          <p className="text-[13px] mt-[15px] font-bold mb-[-3px] text-gray-700">
            Phone Number
          </p>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-[35px] border-2 border-gray-400 rounded-md p-2"
          />

          <p className="text-[13px] mt-[15px] font-bold mb-[-3px] text-gray-700">
            Password
          </p>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-[35px] border-2 border-gray-400 rounded-md p-2"
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-[10px] cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <p className="text-[13px] mt-[15px] font-bold mb-[-3px] text-gray-700">
            Confirm Password
          </p>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full h-[35px] border-2 border-gray-400 rounded-md p-2"
            />
            <div
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-[10px] cursor-pointer"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="w-[160px] h-[35px] text-[15px] font-bold rounded-[4px] bg-[#199fb1f5] text-white hover:bg-[#199fb1] mt-10"
            >
              Create Account
            </button>
          </div>
        </form>

        <p
          className="text-[13px] text-blue-500 mt-3 text-center mb-7 hover:cursor-pointer"
          onClick={() => navigation('/login')}
        >
          Already have an account?
        </p>
      </div>
    </>
  );
}

export default RegisterForm;
