"use client"
import { useState } from "react";
import "@webcontainer/api"
export default function Preview() {
  
  return (

    <iframe
      src="http://localhost:3000/"
      id="preview-iframe"
      className="no-scrollbar border-none scale-90 " // Add the class here
      height={570}
      width={1490}
    ></iframe>
  );
}
