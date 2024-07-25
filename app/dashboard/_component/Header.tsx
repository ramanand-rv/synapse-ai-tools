import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className=" p-2 shadow-sm border-b-2 flex items-center justify-between bg-white">
      <div className=" flex gap-2 max-w-md items-center rounded-lg hover:border border-black  px-2 py-1 ">
        <Search />
        <input
          type="text"
          placeholder="...Search"
          className=" outline-none max-w-md bg-transparent"
        />
      </div>

      <div className=" bg-primary rounded-2xl text-white px-2 py-1 hover:scale-105 ease-in-out duration-100 cursor-pointer">
        <h2>
          <span className="line-through text-red-400">Join membership @ just ₹69 per month</span>
          <span className=" text-green-400 font-bold"> Free Early Access</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
