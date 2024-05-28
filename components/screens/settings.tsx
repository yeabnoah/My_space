import React from "react";
import Image from "next/image";
// import { div } from "../ui/div";

function SettingPage() {
  // const {}
  const test =
    "https://images.unsplash.com/photo-1714779573259-216b0cf746be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="md:w-[80%] h-full overflow-y-scroll pt-10 px-5 md:mx-10 hide_scroll_bar">
      <h1 className=" text-white text-xl">Settings</h1>

      <div className=" flex justify-center">
        {/* <h1 className=" text-white text-base mt-10">my Profile</h1> */}
        <div className=" text-center">
          <Image
            src={test}
            alt="test"
            width={20}
            height={30}
            className=" h-32 w-32 rounded-full m-5 border-2 border-primary"
          />
          <div>
            <div className=" text-primary">Tech Nerd</div>
            <div className=" text-primary">@technerd345</div>
          </div>
        </div>
      </div>

      {/* <hr className=" mt-10 font-thin" /> */}

      <div className=" border-1 border-white">
        <div className=" text-white text-base mt-10 flex gap-32 items-center">
          <h2>App Theme</h2>
          <div className=" h-4 w-10 bg-primary"></div>
        </div>
      </div>
    </div>
  );
}

export default SettingPage;
