import React from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "../assets/Driving-logo.jpg";

function LoginPage() {
  const loginNavigate = useNavigate();

  const handleLogin = () => {
    loginNavigate("/sidenav");
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ">
      <div className="hidden sm:block mt-28 ml-10 h-screen w-full">
        <img className="scale-75" src={LoginImg} alt="Login Illustration" />
      </div>

      <div className=" flex flex-col mt-44 mr-44">
        <form
          className="max-w w-full mx-auto bg-white p-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <h1 className="text-4xl font-bold text-left py-2 text-blue-700">
            Log In
          </h1>
          <h2 className="text-blue-500 mr-24 mb-12">
            Hello, log in with the username and password that your advisor gave
            to you.
          </h2>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input
              className="border focus:outline-none focus:border-blue-700 p-2 focus:ring-1 focus:ring-blue-700 rounded-lg shadow-sm "
              type="text"
            />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border focus:outline-none focus:border-blue-700 p-2 focus:ring-1 focus:ring-blue-700 rounded-lg shadow-sm"
              type="password"
            />
          </div>
          <div className="flex justify-between">
            <p className="text-xs flex justify-items-center py-3 text-blue-700">
              <input className="mr-2" type="checkbox" />
              Remember me
            </p>
            <p className="text-sm font-bold text-left py-2 text-blue-700 cursor-pointer no-underline hover:underline">
              Forgot Password?
            </p>
          </div>
          <div className="flex flex-col items-center mt-4 drop-shadow-lg">
            <button
              className="border w-3/6 my-10 py-2 bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-lg hover:from-blue-600 hover:to-blue-950"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
