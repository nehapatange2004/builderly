"use client"
import React, { useEffect, useRef, useState } from "react";

import SendMessage from "./SendMessage";
import {ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useChatStore } from "@/store/ChatStore";

export default function ChatArea(props: { cla?: string }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [useChatStore((state)=> state.messages)]);
    
    return (
        <>
            {/* <div className=" flex flex-col h-full justify-between items-center text-sm space-y-1 w-2/7 rounded-sm px-2 "> */}
            <ScrollArea className="h-[calc(100vh-130px)] w-full rounded-md">
                <div className="">
                    {useChatStore((state)=> state.messages)?.map((message, idx) => (
                        <React.Fragment key={idx}>
                            <div className={`flex ${message.user === "user" ? "ml-4 justify-end" : "mr-4 justify-start"} border-pink-200`}>
                                <p className={`max-w-[70%] flex flex-wrap text-sm mb-2 p-2 border-4 rounded-2xl ${message.user === "user" ? "rounded-tr-xs" : "rounded-tl-xs"}`}>
                                    {message.content}
                                </p>

                            </div>
                            {/* <Separator className="my-2" /> */}
                        </React.Fragment>
                    ))}
                    <div id="scroll-anchor" ref={scrollRef}></div>
                </div>
            </ScrollArea>
            
            <SendMessage cla={props.cla}/>
            {/* </div> */}
        </>
    )
}