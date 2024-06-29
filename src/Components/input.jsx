import React from "react";
import * as mdIcons from "react-icons/md";

const input = () => {
  return (
    <div className="p-4 flex items-center bg-gray-500 mt-44">
      <input
        className="p-2  placeholder-white outline-none border-2 border-blue-500 focus:border-blue-300 rounded flex-grow"
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
        <button className="bg-blue-500 ">Send</button>
      </div>
    </div>
  );
};

export default input;
