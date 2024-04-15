import GoogleSvg from "@/assets/google.svg" 
import Logo from "@/assets/logo.png" 
import Image from "next/image";

import React from 'react';

const LoginForm = () => {
  return (
    <div className="form-section w-full bg-white py-10 px-4 md:px-0 md:w-1/2">
      <div className="form-wrapper max-w-md mx-auto">
        <div className="logo-container mb-8">
          <a href="#">
          <Image src={Logo} alt="Logo " />
          </a>
        </div>

        <h2 className="text-2xl font-semibold mb-2">Welcome Back! 👋🏻</h2>
        <p className="text-gray-500 mb-6">Enter your credentials to access your account.</p>

        <div className="input-container">
          <div className="form-group">
            <label htmlFor="email" className="text-gray-700">ERP ID</label>
            <input type="email" id="email" className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mt-1" autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="text-gray-700">Password</label>
            <input type="password" id="password" className="block w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-3 mt-1" />
          </div>
        </div>

        <div className="remember-forgot flex items-center justify-between mb-6">
          <div className="remember-me flex items-center">
            <input type="checkbox" id="remember-me" className="mr-2" />
            <label htmlFor="remember-me" className="text-gray-700">Remember me</label>
          </div>
          <a href="#" className="text-primary hover:text-primary-dark">Forgot password?</a>
        </div>

        <button className="login-btn w-full bg-primary text-white font-semibold py-2 px-4 rounded-md mb-4 transition duration-300 hover:bg-primary-dark">Log In</button>

        <div className="or-divider text-gray-500 mb-4 relative">
          <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-20 h-[1px] bg-gray-300"></span>
          <span className="px-2">or</span>
          <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-20 h-[1px] bg-gray-300"></span>
        </div>

        <button className="google-signin flex items-center justify-center w-full border border-gray-300 rounded-md py-2 px-4 mb-6 transition duration-300 hover:bg-gray-100">
        <Image src={GoogleSvg} alt="Google Logo" className="w-6 h-6 mr-2" />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
