import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";

interface PROPS {
  aiResult: string;
  loading: boolean;
}

const ResultSection = ({ aiResult, loading }: PROPS) => {
  const editorRef: any = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiResult);
  }, [aiResult]);

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    if (loading) {
      editorInstance.setMarkdown(
        "## Crafting your digital masterpiece. Like a sculptor meticulously shaping clay.💖"
      );
    }
  }, [loading]);

  const handleCopyAction = () =>{
    navigator.clipboard.writeText(aiResult);
    toast.success("Text copied to your clipboard");
  }

  return (
    <div className=" border rounded-lg bg-white p-2 shadow-md">
      <div className=" flex items-center justify-between p-1 my-1">
        <h2 className="ml-3 font-bold text-xl">Your Result</h2>
        <Button className=" mr-2 text-sm gap-1 "
        onClick={()=> handleCopyAction()}>
          <Copy /> Copy
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Unleash your creativity with our AI tools."
        // previewStyle="vertical"
        height="600px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        // onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
      />
    </div>
  );
};

export default ResultSection;
