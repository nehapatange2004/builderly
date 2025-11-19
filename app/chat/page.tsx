import ChatArea from "../components/ChatArea";

export default function ChatPage() {
    return (
        <div className=" flex flex-col h-full justify-between items-center text-sm space-y-1 w-4/7 rounded-sm px-2 ">
            {/* <h1>Welcome to the Chat Page</h1> */}

            <ChatArea cla="px-20"/>
            {/* Chat interface components will go here */}
        </div>
    );
}   