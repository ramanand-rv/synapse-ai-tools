import React from "react";
import SideNav from "./_component/SideNav";
import Header from "./_component/Header";
import { Toaster } from "react-hot-toast";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className=" bg-slate-200 h-fit">
      <Toaster />
      <div className=" md:w-48 fixed hidden md:block ">
        <SideNav />
      </div>
      <div className=" md:ml-48 ">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
