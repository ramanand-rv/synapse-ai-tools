import { Search } from 'lucide-react';
import React from 'react'

const SearchSection = ({onSearchInput}: any) => {
  return (
    <div
      className="p-5 
    bg-gradient-to-br from-purple-500 via-purple-600 to-slate-700
     justify-center text-white flex flex-col items-center
    "
    >
      <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 via-sky-400 to-red-300 bg-clip-text text-transparent">
        Browse All Templates
      </h2>
      <p>Create something amazing today.</p>
      <div className=" w-full justify-center flex">
        <div className=" flex gap-2 items-center justify-center border rounded-md px-2 bg-white text-black my-4 w-[50%]">
          <Search />
          <input
            type="text"
            placeholder="...Search Templates"
            className=" bg-transparent outline-none p-1 w-full"
            onChange={(e)=>onSearchInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection