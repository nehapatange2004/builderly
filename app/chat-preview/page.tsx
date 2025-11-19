import { Separator } from "@/components/ui/separator";
import ChatArea from "../components/ChatArea";

export default function Chat_PreviewPage() {
  return (
    <div className="flex flex-row w-screen h-[calc(100vh-40px)] justify-center items-start ">
            <div className=" flex flex-col h-full justify-between items-center text-sm space-y-1 w-2/7 rounded-sm px-2 ">
            <ChatArea/>
            </div>
            <Separator className="" orientation="vertical" />
            <div className="flex items-center justify-center text-sm h-full w-5/7 border-gray-400 z-1">
                
                jdkjfkjk

            </div>
        </div>
  )
}