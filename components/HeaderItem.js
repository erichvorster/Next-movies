import React from "react";

const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-sky-500">
      <Icon className="h-8 group-hover:animate-bounce" />
      <p className="opacity-0 tracking-widest group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
