import { templates } from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  options: any;
  label: string;
  field: string;
  name: string;
  required?: boolean;
}
const TemplateListSection = ({ userSearchInput }: any) => {
  const [templateList, setTemplateList] = useState(templates);
  useEffect(() => {
    if (userSearchInput) {
      const filterData = templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    }
    else{
        setTemplateList(templates)
    }
  }, [userSearchInput]);
  return (
    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-3 mt-4 mr-3 ">
      {templateList.map((item: any, index: number) => (
        <div
          key={index}
          className=" hover:scale-105 ease-out duration-100 hover:shadow-xl border rounded-md h-fit "
        >
          <TemplateCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default TemplateListSection;
