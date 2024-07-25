'use client'
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuList = [
  {
    name: "Home",
    icon: Home,
    path: "/dashboard",
  },
  {
    name: "History",
    icon: FileClock,
    path: "/dashboard/history",
  },
  {
    name: "Billing",
    icon: WalletCards,
    path: "/dashboard/billing",
  },
  {
    name: "Setting",
    icon: Settings,
    path: "/dashboard/setting",
  },
];

const SideNav = () => {
    const pathname = usePathname();
  return (
    <div className=" h-screen p-5 shadow-md border bg-white">
      <div className=" flex justify-center items-center gap-1 hover:scale-110 ease-in-out duration-100 hover:bg-gradient-to-r from-indigo-600 to-yellow-600 bg-clip-text hover:text-transparent">
        <Image
          src={"/logo.svg"}
          width={50}
          height={50}
          alt="Logo"
          className=" hover:animate-pulse "
        />
        <h1 className=" font-extrabold text-2xl ">Synapse</h1>
      </div>
      <div className=" mt-10">
        {MenuList.map((menu, index) => (
            <div key={index} className=" mt-2 my-3">
              <Link href={menu.path} className={` flex gap-5 p-3 mb-2
              ${menu.path === pathname && 'bg-primary text-white'} rounded-lg hover:bg-slate-800 hover:text-white `}>
              <menu.icon />
              <h2>{menu.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
