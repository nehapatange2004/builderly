import { ScrollAreaDemo } from "./ScrollAreaDemo";
import SendMessage from "./SendMessage";

export default function ChatArea(props: { cla?: string }) {
    return (
        <>
     {/* <div className=" flex flex-col h-full justify-between items-center text-sm space-y-1 w-2/7 rounded-sm px-2 "> */}
        <ScrollAreaDemo />
        <SendMessage cla={props.cla}/>
    {/* </div> */}
    </>
    )
}