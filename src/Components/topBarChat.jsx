import React from "react";
import * as io5Icons from "react-icons/io5";

const topBarChat = ({ open }) => {
  return (
    <div
      className={`flex bg-blue-700 ${
        !open ? " w-[1100px] space-x-[975px]" : " w-[1000px] space-x-[860px]"
      } text-xl duration-300`}
    >
      <span className=" p-2 font-bold mt-1 text-white ">Josh</span>

      <io5Icons.IoInformationCircleOutline className=" cursor-pointer text-3xl mt-3 text-white" />
    </div>
  );
};

export default topBarChat;
