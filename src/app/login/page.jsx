'use client'
import {  signIn, useSession } from "next-auth/react";
import React from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const LoginPage = () => {
  const {data, status} = useSession()
console.log(data, status)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Welcome Back
        </h2>
        <form className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 focus:outline-none transition-colors duration-200"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Or sign in with:</p>
          <div className="flex justify-center space-x-6">
            <button
            onClick={()=>signIn('google')}
              className="text-red-500 hover:text-red-700 transform hover:scale-110 transition-transform duration-200"
              aria-label="Login with Google"
            >
              <FaGoogle size={28} />
            </button>
            <button
              className="text-gray-800 hover:text-black transform hover:scale-110 transition-transform duration-200"
              aria-label="Login with GitHub"
            >
              <FaGithub size={28} />
            </button>
            <button
              className="text-blue-700 hover:text-blue-900 transform hover:scale-110 transition-transform duration-200"
              aria-label="Login with Facebook"
            >
              <FaFacebook size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
