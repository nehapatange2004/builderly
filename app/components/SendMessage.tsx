import { ArrowUpIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function SendMessage(props: { cla?: string }) {
  return (
    <div className={`flex w-full flex-col gap-4 mb-2 ${props.cla}`}>

      <InputGroup className="">

        {/* <div className="mb-2 px-2"> */}
        <InputGroupTextarea placeholder="Ask to build/modify..." disabled={false} className="h-[74px] overflow-visible custom-scroll" />
        {/* </div> */}

        {/* <InputGroupTextarea placeholder="Ask to build/modify..." disabled={false} /> */}
        <InputGroupAddon className="absolute right-1 bottom-1 bg-violet-500 p-0 rounded-md">
          {/* <Spinner /> Validating... */}
          <InputGroupButton className="ml-auto cursor-pointer z-5" variant="default">
            <ArrowUpIcon />
            {/* <span className="sr-only">Send</span> */}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
