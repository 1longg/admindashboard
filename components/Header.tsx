'use client'

import BellIcon from "@Icon/Bell";
import MoonIcon from "@Icon/Moon";
import SunIcon from "@Icon/Sun";
import Image from "next/image";
import SideBar from "./SideBar";
import MagnifyIcon from "@Icon/Magnify";
import { useState } from "react";


export default function Header() {
  const [inputValue, setInputValue] = useState('')
  return (
      <header className="sticky top-0 z-40 bg-backgroundMain py-2 h-16 flex w-full">
        <div className="flex px-16 items-center justify-center w-full">
          <div className="h-10 w-10 rounded-y rounded-l flex items-center justify-center bg-backgroundMain text-slate-400 border-y border-l">
          <MagnifyIcon className="w-4 h-4 "/>
          </div>
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="bg-backgroundMain rounded-y rounded-r w-full h-10 max-w-[500px] py-2 px-4  outline-none border-y border-r text-white" placeholder="Search for project"/>
        </div>
        <div className="flex items-center">
          <div className="flex">
            <SunIcon className="w-6 h-6 mr-4" />
            <MoonIcon classname="w-6 h-6 mr-4" />
            <BellIcon className="w-6 h-6 mr-4"/>
          </div>
          <div className="border rounded-full overflow-hidden w-8 h-8 mr-4">
            <Image
              src="/images/Logo.png"
              width={32}
              height={32}
              alt="avatar"
              className="object-cover"
            />
          </div>
        </div>
      </header>
  );
}
