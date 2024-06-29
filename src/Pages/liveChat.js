import React, { useState } from "react";
import SideNavBar from "../Components/SideNavBar";
import LiveChatSideBar from "../Components/liveChatSideBar";
import TopBarChat from "../Components/topBarChat";
import Messages from "../Components/messages";
import Input from "../Components/input";
import * as io5Icons from "react-icons/io5";
import * as mdIcons from "react-icons/md";

const LiveChat = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <SideNavBar open={open} setOpen={setOpen} />
      <LiveChatSideBar open={open} />
      <div className="flex flex-col w-[70%] bg-blue-300 h-full">
        <div
          className={`flex bg-blue-700 ${
            !open ? " w-[1073px] space-x-[970px]" : " w-[982px] space-x-[890px]"
          } text-xl duration-300`}
        >
          <span className=" p-2 font-bold mt-1 text-white ">Josh</span>

          <io5Icons.IoInformationCircleOutline className=" cursor-pointer text-3xl mt-3 text-white" />
        </div>
        <div>
          <div className=" flex justify-items">
            <img
              className="h-14 w-14 rounded-xl object-cover mt-2 ml-2"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span className="ml-4 bg-white flex mt-5 h-10 p-4 rounded-bl-lg rounded-tr-lg">
              <p className="-mt-2 font-bold">
                Hello, welcome in the first design
              </p>
            </span>
          </div>
          <span className=" ml-1 text-gray-600">Just now</span>

          <div className=" flex justify-items flex-row-reverse">
            <img
              className="h-14 w-14 rounded-xl object-cover mt-2 ml-2 mr-2"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <span className="ml-4 bg-white flex mt-5 h-10 p-4 rounded-bl-lg rounded-tr-lg">
              <p className="-mt-2 font-bold">
                Hello, welcome in the first design
              </p>
            </span>
          </div>
          <span className=" ml-1 mr-1 text-gray-600 flex flex-row-reverse">
            Just now
          </span>
        </div>
        <div className=" flex justify-items">
          <img
            className="h-14 w-14 rounded-xl object-cover mt-2 ml-2"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span className="ml-4 bg-white flex mt-5 h-10 p-4 rounded-bl-lg rounded-tr-lg">
            <p className="-mt-2 font-bold">
              Hello, welcome in the first design
            </p>
          </span>
        </div>
        <span className=" ml-1 text-gray-600">Just now</span>
        <div className=" flex justify-items flex-row-reverse">
          <img
            className="h-14 w-14 rounded-xl object-cover mt-2 ml-2 mr-2"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span className="ml-4 bg-white flex mt-5 h-10 p-4 rounded-bl-lg rounded-tr-lg">
            <p className="-mt-2 font-bold">
              Hello, welcome in the first design
            </p>
          </span>
        </div>
        <span className=" ml-1 mr-1 text-gray-600 flex flex-row-reverse">
          Just now
        </span>

        <div className="p-4 flex items-center bg-white mt-[254px]">
          <input
            className="  p-2  placeholder-gray-500 outline-none border-2 border-blue-500 focus:border-none rounded flex-grow"
            placeholder="Enter text here..."
          />
          <mdIcons.MdAddPhotoAlternate
            className=" ml-2 mr-1 cursor-pointer"
            size={30}
          />
          <mdIcons.MdOutlineAttachFile
            className=" ml-2 mr-2 cursor-pointer
      "
            size={30}
          />
          <div>
            <button className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-400 text-white p-2 rounded-md">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
