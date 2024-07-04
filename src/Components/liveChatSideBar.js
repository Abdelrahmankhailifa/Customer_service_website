import React from "react";
import ChatsSideBar from "./chatsSideBar";

function liveChatSideBar({ open }) {
  return (
    <div
      className={` bg-blue-900 h-screen p-5 pt-8  duration-300  ${
        open ? "w-72" : "w-96"
      }`}
    >
      <div className=" h-28 bg-blue-900  -mt-8 -ml-5 -mr-5 items-center flex justify-between">
        <h1
          className={` p-5 text-gray-300 font-bold text-xl ${
            open ? " ml-2" : "ml-5"
          }`}
        >
          {" "}
          Abdelrahman
        </h1>
        <div className={`flex  mr-3${!open ? "mt-1 mr-10" : "mt-4 mr-2"}`}>
          <img
            className={`bg-white h-20 w-20 rounded-full object-cover  duration-300 ${
              !open ? "mt-1 -mr-2" : "mt-4 "
            }`}
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center -mt-0 -ml-5 -mr-5 h-10  border-blue-950">
        <input
          type={"search"}
          placeholder="Search"
          className={`  p-2 text-base bg-blue-900 w-full text-gray-300 focus:outline-none 
            
          `}
        />
      </div>
      <ChatsSideBar />
    </div>
  );
}

export default liveChatSideBar;
