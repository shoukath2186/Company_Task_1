import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { validateFormLogIn } from '../validation/Login_form_validation';
import { logInApi } from '../API_handling/Axios_api';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redex_store/slice_strore';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const navigation = useNavigate();
  const dispatch=useDispatch()


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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

    const validation = validateFormLogIn(formData)

    if (validation.status) {
      try {
        const res = await logInApi(formData)
         toast.success('Login Successfull');
        // console.log('success : ', res);
        dispatch(setUserData(res.data));
        navigation('/')
      } catch (error) {
        console.error('error1111==', error);
         toast.error(error.response.data.message);
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
        <h1 className="font-poppins font-bold text-[27px] pt-8 text-left">Log in</h1>
        <p className="text-[13px] mt-[-4px] text-gray-500">
          Welcome to Free shops App controller
        </p>

        <form onSubmit={handleSubmit}>
          <p className="text-[13px] mt-[50px] font-bold mb-[-3px] text-gray-700">Your Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-[35px] border-2 border-gray-400 rounded-md p-2"

          />

          <p className="text-[13px] mt-[25px] font-bold mb-[-3px] text-gray-700">Password</p>
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
          <p
            className="text-[14px] text-gray-500 mt-3 text-center hover:cursor-pointer"
            onClick={() => navigation('/forgot-password')}
          >
            Forgot Password
          </p>

          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="w-[100px] h-[35px] text-[15px] font-bold rounded-[4px] bg-[#199fb1f5] text-white hover:bg-[#199fb1] mt-10"
            >
              Log in
            </button>
          </div>
        </form>

        <p
          className="text-[14px] text-blue-500 mt-10 text-center mb-5 hover:cursor-pointer"
          onClick={() => navigation('/register')}
        >
          Create New Account
        </p>
      </div>
    </>
  );
}

export default LoginForm;
