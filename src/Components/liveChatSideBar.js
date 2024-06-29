import React from "react";
import ChatsSideBar from "./chatsSideBar";

function liveChatSideBar({ open }) {
  return (
    <div
      className={` bg-blue-900 h-screen p-5 pt-8  duration-300  ${
        open ? "w-72" : "w-96"
      }`}
    >
      <div className=" h-20 bg-blue-900  -mt-8 -ml-5 -mr-5 items-center flex justify-between">
        <h1 className=" p-5 text-white font-bold">Company's Name</h1>
        <div className="flex  ">
          <img
            className={`bg-white h-14 w-14 rounded-xl object-cover  duration-300 ${
              !open ? "mt-1 -mr-3" : "mt-4 "
            }`}
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span className=" p-5 text-white">Admin's Name</span>
        </div>
      </div>
      <div className="flex justify-center -mt-0 -ml-5 -mr-5 h-10  border-blue-950">
        <input
          type={"search"}
          placeholder="Search"
          className={`  p-2 text-base bg-blue-900 w-full text-white focus:outline-none 
            
          `}
        />
      </div>
      <ChatsSideBar />
    </div>
  );
}

export default liveChatSideBar;
