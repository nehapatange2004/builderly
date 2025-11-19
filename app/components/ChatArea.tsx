import { ScrollAreaDemo } from "./ScrollAreaDemo";
import SendMessage from "./SendMessage";

export default function ChatArea() {
    return (
        <>
     {/* <div className=" flex flex-col h-full justify-between items-center text-sm space-y-1 w-2/7 rounded-sm px-2 "> */}
        <ScrollAreaDemo />
        <SendMessage />
    {/* </div> */}
    </>
    )
}