import React from "react";
import SideNavBar from "../Components/SideNavBar";
import * as faIcons from "react-icons/fa";

const userInfo = () => {
  return (
    <div className="flex bg-slate-300">
      <SideNavBar />
      <div className="flex h-40 w-full bg-white rounded-xl mr-5 ml-5 mt-5 shadow-lg">
        <img
          className="h-32 ml-4 mt-4 rounded shadow-2xl"
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
        />

        <div className="ml-4 mt-4">
          <span className="font-medium">Josh Tommy Aegon</span>
          <div className="flex items-center space-x-1 mt-5">
            <faIcons.FaMale />
            <h1
              className="text-sm font-normal
             text-gray-500 "
            >
              Male
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userInfo;
