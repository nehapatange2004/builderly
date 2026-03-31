"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useChatStore } from "@/store/ChatStore"
import axios from "axios";
import { useRef, useState } from "react";
import toast, { ToastBar } from "react-hot-toast";
export default function SendMessage(props: { cla?: string }) {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const mutation = useMutation({
    mutationFn: async (prompt: string) => { // Define prompt type as string
      console.log("send clicked")
      useChatStore.getState().addMessage({ content: prompt, user: 'user' });

      const response = await axios.post('/api/ai', { prompt }); // Post prompt as an object
      console.log("Data from the ai: ", response.data);
      return response.data; // Return the AI response
    },
    onSuccess: (data) => {
      // Add AI response to store on success
      useChatStore.getState().addMessage({ content: data.response.content, user: 'bot' });
      setInput(''); // Clear input field
      
      toast.success("sucess: " + data.response.content);
      inputRef.current?.focus(); // Focus the input field again
    },
    onError: (error) => {
      console.error("Mutation failed:", error);
      toast.error("Error occured" + error);
      // Handle error display if needed
    },
  });

  return (
    <div className={`flex w-full flex-col gap-4 mb-2 ${props.cla}`}>

      <InputGroup className="">

        {/* <div className="mb-2 px-2"> */}
        <InputGroupTextarea ref={inputRef} placeholder="Ask to build/modify..."
          onChange={(e) => setInput(e.target.value)}
          disabled={false}
          className="h-[74px] overflow-visible custom-scroll" />
        {/* </div> */}

        {/* <InputGroupTextarea placeholder="Ask to build/modify..." disabled={false} /> */}
        <InputGroupAddon className="absolute right-1 bottom-1 bg-violet-500 p-0 rounded-md">
          {mutation.isPending && <Spinner />}

          <InputGroupButton onClick={() => mutation.mutate(input)} disabled={mutation.isPending || !input.trim()} className="ml-auto cursor-pointer z-5 disabled:color-gray-200" variant="default" title="Send">
            {/* <ArrowUpIcon /> */}
            Send
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
