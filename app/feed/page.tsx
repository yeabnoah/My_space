"use client";

import Image from "next/image";
import user from "../../public/tttj.jpg";
import {
  Settings,
  Rss,
  NotebookPen,
  BookLock,
  Pencil,
  PenBoxIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import useScreen from "@/context/screens";
import Feed from "@/components/screens/feed";
import SettingPage from "@/components/screens/settings";
import Secrets from "@/components/screens/secrets";
import MyDiaries from "@/components/screens/myDiaries";
import useAdd from "@/context/add";

export default function Dashboard() {
  const [postData, setPostData] = useState([]);
  const { screen, setScreen } = useScreen();

  const { isAdd, setIsAdd } = useAdd();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:3000/diary");

  //     const data = await response.data;

  //     console.log(data);
  //     setPostData(data);
  //   };

  //   fetchData();
  // }, []);

  const MainScreen = () => {
    switch (screen) {
      case "Feed":
        return <Feed />;
      case "Settings":
        return <SettingPage />;
      case "Secrets":
        return <Secrets />;
      case "MyDiaries":
        return <MyDiaries />;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="w-[100%] h-screen flex overflow-hidden courier-prime-regular">
      <div className=" md:hidden bg-Sidebar h-screen w-full flex justify-center">
        <div className=" mt-2">
          <div className=" flex justify-center items-center">
            <Image
              src={user}
              alt="her"
              className=" w-10 h-10 mt rounded-full border-2 border-pink"
            />
          </div>

          <div className=" mt-5">
            <Button
              onClick={() => {
                setScreen("Feed");
              }}
              className="  w-auto rounded-md bg-transparent mb-2"
            >
              <Rss className="text-white text-sm" size={18} />
            </Button>
            <Button
              onClick={() => {
                setScreen("MyDiaries");
              }}
              className="rounded-md flex bg-transparent mb-2"
            >
              <NotebookPen className="text-white" size={18} />
            </Button>
            <Button
              onClick={() => {
                setScreen("Secrets");
              }}
              className=" rounded-md flex bg-transparent mb-2"
            >
              <BookLock className="text-white" size={18} />
            </Button>
            <Button
              onClick={() => {
                setScreen("Settings");
              }}
              className=" rounded-md flex bg-transparent"
            >
              <Settings className="text-white" size={18} />
            </Button>
          </div>
        </div>
      </div>
      <div className="md:w-[19%] h-full bg-Sidebar hidden md:flex flex-col justify-between">
        <div className="text-primary text-lg text-center mt-5 courier-prime-regular">
          My_Space.com
        </div>

        <div className=" h-[350px] w-[100%] flex justify-center items-center">
          <div className="">
            <div className=" flex justify-center mt-5">
              <Image
                src={user}
                alt="her"
                className=" w-20 h-20 rounded-full border-2 border-pink"
              />
            </div>

            <div>
              <h2 className=" text-pink text-base text-center mt-3 courier-prime-regular">
                Alice t.
              </h2>
              <Button className="text-base flex courier-prime-regular gap-2 px-2 py-0 items-center bg-pink">
                Edit
                <Pencil className=" text-xs" style={{ fontSize: 12 }} />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-[80%] flex justify-start">
          <div>
            <Button className=" bg-setting w-auto py-2 rounded-md flex justify-start gap-3 mb-2">
              <Rss className="text-white text-sm" size={18} />
              <h2
                onClick={() => {
                  setScreen("Feed");
                }}
                className="text-white text-sm text-start courier-prime-regular"
              >
                Feed
              </h2>
            </Button>
            <Button
              onClick={() => {
                setScreen("MyDiaries");
              }}
              className=" bg-setting w-auto py-2 rounded-md flex justify-start gap-3 mb-2"
            >
              <NotebookPen className="text-white" size={18} />
              <h2 className="text-white text-sm text-start courier-prime-regular">
                My Diaries
              </h2>
            </Button>
            <Button
              onClick={() => {
                setScreen("Secrets");
              }}
              className=" bg-setting w-auto py-2 rounded-md flex justify-start gap-3 mb-2"
            >
              <BookLock className="text-white" size={18} />
              <h2 className="text-white text-sm text-start courier-prime-regular">
                Secrets
              </h2>
            </Button>
            <Button
              onClick={() => {
                setScreen("Settings");
              }}
              className=" bg-setting w-auto py-2 rounded-md flex justify-start gap-2"
            >
              <Settings className="text-white" size={18} />
              <h2 className="text-white text-sm text-start courier-prime-regular">
                Settings
              </h2>
            </Button>
          </div>
        </div>
      </div>

      {MainScreen()}
    </div>
  );
}
