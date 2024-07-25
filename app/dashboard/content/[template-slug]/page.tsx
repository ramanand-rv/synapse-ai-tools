"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import ResultSection from "../_components/ResultSection";
import { TEMPLATE } from "../../_component/TemplateListSection";
import { templates } from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";

interface PROPS {
  params: {
    "template-slug": string;
    aiResult: string
  };
}
const CreateNewContent = (props: PROPS) => {
  const selectedTemplate: any = templates.find(
    (item) => item.slug === props.params["template-slug"]
  );

  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState('');

  const GenerateAiContent = async (FormData: any) => {
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalApiPrompt = `${selectedPrompt}, ${JSON.stringify(FormData)}`

    const result = await chatSession.sendMessage(finalApiPrompt);

    setLoading(false);

    // console.log(result.response.candidates[0].content.parts[0].text);
    setAiResult(result?.response.candidates[0].content.parts[0].text);
  };
  return (
    <>
      <div className=" md:hidden lg:hidden sm:block">
        <Link href={'/dashboard'}>
          <Button className=" mt-5 ml-5">
            {" "}
            <ArrowLeft /> Back
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-5">
        {/* Form Section */}
        <div className=" grid grid-cols-1">
          <FormSection selectedTemplate={selectedTemplate}
          userFormInput={(v:any)=>GenerateAiContent(v)}
          loading={loading} />
        </div>

        {/* Result section */}
        <div className="col-span-2">
          <ResultSection aiResult = {aiResult} loading = {loading} />
        </div>
      </div>
    </>
  );
};

export default CreateNewContent;
