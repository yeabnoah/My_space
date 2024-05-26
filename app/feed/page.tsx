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
      {/* <div className="md:w-[81%] h-full overflow-y-scroll pt-10 px-5 md:mx-10 hide_scroll_bar">
        <div className="flex items-center mb-5">
          <Input
            placeholder="Search a Journal/ Diary"
            className="bg-black justify-center md:text-lg md:w-96 md:py-6 px-5 mr-5 text-white placeholder-color border-[1px] border-white"
          />
          <Button>Search</Button>
        </div>
        <h3 className="text-white text-lg md:text-lg -mb-3">
          Diaries/Journals
        </h3>
        <div className="flex-col md:flex rounded-lg md:flex-row md:gap-5 overflow-x-scroll hide_scroll_bar">
          <div className="rounded-lg flex-col md:flex md:flex-row gap-5 md:gap-10 flex-wrap mb-10 hide_scroll_bar">
            {getDiaries.map((each) => {
              let bgColorClass = "";
              let textColorClass = "";

              switch (each.theme) {
                case "primary":
                  bgColorClass = "bg-primary";
                  textColorClass = "text-primary";
                  break;
                case "secondary":
                  bgColorClass = "bg-secondary";
                  textColorClass = "text-secondary";
                  break;
                case "pink":
                  bgColorClass = "bg-pink";
                  textColorClass = "text-pink";
                  break;
                case "success":
                  bgColorClass = "bg-success";
                  textColorClass = "text-success";
                  break;
                default:
                  bgColorClass = "";
                  textColorClass = "";
              }

              return (
                <div
                  key={each.id}
                  className={`w-auto md:w-[600px] h-auto flex rounded-lg mt-5 p-3 items-center ${bgColorClass}`}
                >
                  <div className="w-[20%] h-[100%] rounded-md flex items-center">
                    <Image
                      src={spring}
                      alt="test"
                      width={80}
                      height={80}
                      className="rounded-lg -ml-8 md:-ml-8"
                    />
                  </div>
                  <div className="w-[90%] h-auto rounded-md flex md:gap-5">
                    <div className="md:w-[60%]">
                      <div className="">
                        <div className="bg-black p-2 rounded-md -ml-8 md:-ml-12">
                          <h2
                            className={`${textColorClass} text-sm md:text-base`}
                          >
                            {each.mood}
                          </h2>
                        </div>
                        <h3 className="text-xs md:text-sm font-test courier-prime-bold my-2 -ml-8 md:-ml-12">
                          {each.content}
                        </h3>
                      </div>
                      <div className=" w-auto -ml-8 md:-ml-12 border-t-2 border-gray-500 flex">
                        <Button className="bg-transparent">{<Heart />}</Button>
                        <Button className="bg-transparent">
                          {<HeartOff />}
                        </Button>
                        <Button className="bg-transparent">
                          {<MessageSquareMore />}
                        </Button>
                      </div>
                    </div>
                    <Image
                      src={each.image}
                      alt="test"
                      width={260}
                      height={150}
                      className="rounded-lg hidden md:block w-[50%] h-[60%]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
}
