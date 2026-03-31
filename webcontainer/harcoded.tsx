"use client"
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { useState } from "react";

export default () => {
  const [visibility, setVisibility] = useState<Boolean>(false);
  return (

  <SandpackProvider template="react">
    <SandpackLayout>
      
      <button type="button" onClick={()=> setVisibility((prev) => !prev)} > {visibility? "hide editor": "show editor"}</button>
      <br />
      { visibility && <SandpackCodeEditor />}
      <SandpackPreview />
    </SandpackLayout>
  </SandpackProvider>
)};
