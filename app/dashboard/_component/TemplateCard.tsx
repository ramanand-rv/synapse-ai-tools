import React from "react";
import { TEMPLATE } from "./TemplateListSection";
import Image from "next/image";
import Link from "next/link";

const TemplateCard = (item: TEMPLATE) => {
  return (
    <Link
      href={`/dashboard/content/${item?.slug}`}
      className=" bg-white h-fit group"
    >
      <div className=" lg:p-5 p-3  rounded-md bg-white flex flex-col cursor-pointer gap-3 hover:bg-black duration-150 hover:text-white">
        <div className=" flex items-center gap-2 sm:gap-1 group-hover:scale-110 group-hover:duration-200">
          <Image src={item.icon} alt="icon" width={50} height={50} className=" md:w-10 md:h-10 sm:w-7 sm:h-7 lg:w-12 lg:h-12
          group-hover:transition-opacity" />
          <h2 className="font-medium md:text-sm sm:text-sm lg:text-lg  ">{item.name}</h2>
          {/* <h2
            className="font-medium text-lg"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: item.name.length > 18 ? "ellipsis" : "visible",
            }}
          >
            {item.name}
          </h2> */}
        </div>
        <p className="group-hover:text-gray-300 line-clamp-3 text-sm sm:text-xs">
          {item.desc}
        </p>
      </div>
    </Link>
  );
};

export default TemplateCard;
