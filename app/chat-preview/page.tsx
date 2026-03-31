import { Separator } from "@/components/ui/separator";
import ChatArea from "../components/ChatArea";
import Preview from "../components/Preview";
import WebContainerComponent from "@/webcontainer/harcoded";

export default function Chat_PreviewPage() {

  return (
    <div className="flex flex-col sm:flex-row w-screen h-[calc(100vh-40px)] justify-center items-start ">
      <div className=" flex flex-col h-full justify-between items-center text-sm space-y-1 w-[30%] rounded-sm px-2 ">
        <ChatArea />
      </div>
      <Separator orientation="vertical" />
      <div className="flex items-center  justify-center text-sm h-full w-[70%] border-gray-4 z-1 ">

        {/* <Preview /> */}
        <WebContainerComponent />

      </div>
    </div>
  )
}