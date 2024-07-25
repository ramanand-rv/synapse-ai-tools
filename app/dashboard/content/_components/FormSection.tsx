"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_component/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: any;
  userFormInput?: any
  loading?: boolean
}
const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
  const formSubmit = (e: any) => {
    e.preventDefault();
    // console.log(formData);
    userFormInput(formData);
  };

  const [formData, setFormData] = useState<any>();
  const handleInputChange = (e: any) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value})
  }

  const targetPLChange = (e:any) =>{
    setFormData({ ...formData, ['Target programming language']: e });
  }

  return (
    <div className=" border rounded-lg bg-white p-3 shadow-md">
      <div className=" flex gap-2 items-center">
        {/* @ts-ignore */}
        <Image
          src={selectedTemplate?.icon}
          alt="icon"
          width={50}
          height={50}
          className=" sm:w-9 sm:h-9 md:w-10 md:h-10"
        />
        <h2 className=" ml-3 font-bold text-lg ">{selectedTemplate?.name}</h2>
      </div>

      <p className=" text-sm mt-3 sm:text-xs">{selectedTemplate?.desc}</p>

      <form className="mt-6" onSubmit={formSubmit}>
        {selectedTemplate?.form?.map((item: any, index: number) => (
          <div key={index}>
            <label className=" text-sm font-bold mt-2 ">{item.label}</label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item.required}
                className=" mb-5"
                onChange={handleInputChange}
              />
            ) : item.field === "textarea" ? (
              <Textarea
                name={item.name}
                required={item.required}
                className=" mb-5"
                onChange={handleInputChange}
              />
            ) : item.field === "select" ? (
              <Select name="target programming language" onValueChange={targetPLChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Target Language" />
                </SelectTrigger>
                <SelectContent >
                  {item?.options?.map((lang: string, idx: number) => (
                    <SelectItem key={idx} value={lang.toLowerCase()}>
                      {lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              ""
            )}
          </div>
        ))}
        <Button
          type="submit"
          className="w-full bg-primary text-white py-3  mt-10"
          disabled={loading}
        >
          {loading && <Loader2Icon className="animate-spin"/>}
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
