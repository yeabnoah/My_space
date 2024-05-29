"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js for navigation
import spring from "../../../public/ff.png";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import useScreen from "@/context/screens";
import Feed from "@/components/screens/feed";
import SettingPage from "@/components/screens/settings";
import Secrets from "@/components/screens/secrets";
import MyDiaries from "@/components/screens/myDiaries";
import { useRouter } from "next/navigation"; // Corrected import statement
import ColorPicker from "@/components/elements/colorpiscker";
import useColor from "@/context/color";
import { DatePickerWithPresets } from "@/components/ui/DatePickerWithPresets";
import useDate from "@/context/date";
import MoodPicker from "@/components/elements/moodPicker";
import useMood from "@/context/mood";
import { Textarea } from "@/components/ui/textarea";
import { BookHeartIcon, Globe, Lock, NotebookPen } from "lucide-react";

export default function Dashboard() {
  // Receive onSelect as a prop
  const { screen } = useScreen();
  const router = useRouter();
  const { dateGet, setDateGet } = useDate();
  const { setColor, color } = useColor();
  const { mood, setMood } = useMood();
  const [text, setText] = useState("talk to your little diary ...");

  // true = public
  // false = private
  const [diaryStatus, setDiaryStatus] = useState(false);

  const handleTextChange = (e: any) => {
    setText(e.target.value);
  };

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
    <div className="w-full major h-screen md:h-screen flex flex-col md:flex md:flex-row overflow-hidden courier-prime-regular bg-Sidebar">
      <div
        className={`bg-${color} major h-[30%] md:h-screen rounded-r-md flex mx-5 md:mx-0 mt-2 md:mt-0`}
      >
        <Image
          src={spring}
          width={100}
          height={100}
          alt="spring"
          className="md:h-auto w-12 md:w-24 md:-ml-[49px] -ml-6 mt-2"
        />
        <div className=" w-[100%]  overflow-y-scroll hide_scroll_bar">
          <h1 className="courier-prime text-xl md:text-2xl md:mt-10 mt-7">
            Date: {dateGet}
          </h1>
          <div>
            <div
              className={`bg-Sidebar text-${color} py-1 w-max px-2 rounded-sm md:mt-5 mt-2 mb-2 text-sm md:text-base `}
            >
              {mood}
            </div>
          </div>
          <p className="text-sm text-start mr-5 md:mr-16 mt-5 whitespace-pre-line flex-wrap text-wrap underline-offset-2">
            {text}
          </p>
        </div>
      </div>
      <div className="minor md:h-screen minor flex flex-col bg-Sidebar">
        <div className="h-14 w-full md:flex justify-end items-center hidden ">
          <Link href="/feed">
            <Button className="mx-2 bg-red-400 text-Sidebar hover:bg-red-500">
              Cancel ❌
            </Button>
          </Link>
        </div>

        <div className="flex justify-start md:justify-center mx-5 md:mx-0 items-center">
          <div className="  w-[100%] md:w-auto">
            <ColorPicker />
            <DatePickerWithPresets />

            <Textarea
              value={text}
              onChange={handleTextChange}
              placeholder="Write what is in your mind..."
              className={`text-${color} pt-1 mt-2`}
              rows={3}
            />

            <MoodPicker />

            <div className="mt-2 flex gap-3">
              <Button
                onClick={() => {
                  setDiaryStatus(true);
                }}
                className={`${
                  diaryStatus
                    ? `bg-blue-300 text-sm`
                    : `bg-gray-500 py-1 text-sm`
                } `}
              >
                <Globe className="mr-2" size={18} /> Public
              </Button>

              <Button
                onClick={() => {
                  setDiaryStatus(false);
                }}
                className={`${
                  diaryStatus
                    ? ` text-sm bg-gray-500`
                    : ` bg-red-300 py-1 text-sm`
                }`}
              >
                <Lock className="mr-2" size={18} /> Private
              </Button>
            </div>

            <Button
              onClick={() => {
                router.push("/feed");
              }}
              className={`my-3 text-sm bg-${color}`}
            >
              <NotebookPen size={18} className="mx-2 " />
              Create Diary
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
