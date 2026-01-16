import React from "react";

const CustomTitle = ({ title, children }) => {
  return (
    <h2 className=" font-semibold text-3xl sm:text-5xl md:text-[80px] py-0 px-4 sm:px-[30px] text-transparent bg-gradient-to-r from-pink-700 to-purple-300 bg-clip-text">
      {children || title}
    </h2>
  );
};

export default CustomTitle;
