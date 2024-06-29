import React from "react";

const messages = ({ open }) => {
  return (
    <div className="bg-red-500 ">
      <img
        className="h-14 w-14 rounded-xl object-cover mt-2 ml-2"
        src="https://www.pexels.com/photo/woman-in-collared-shirt-774909/"
        alt=""
      />
      <span>just now</span>
    </div>
  );
};

export default messages;
