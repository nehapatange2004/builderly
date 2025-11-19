import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-[calc(100vh-120px)] w-full rounded-md">
      <div className="mb-2 px-2">
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm mb-2">{tag}</div>
            {/* <Separator className="my-2" /> */}
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}
