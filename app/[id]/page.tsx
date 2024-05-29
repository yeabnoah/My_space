"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js for navigation
import spring from "../../public/ff.png";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
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
import axios from "axios";
import pin from "../../public/uuu.png";
import test from "../../public/uuuu.jpg";
import { Input } from "@/components/ui/input";
import Draggable from "react-draggable";
import TesterApp from "@/components/elements/swiper";
import useImage from "@/context/images";
import useLoginData from "@/context/loggedIn";
import { getAuthToken } from "@/middleware/authService";
import { headers } from "next/headers";
import useDiaryState from "@/context/diaryDetail";

const cloudName = "dsaitxphg";
const preset_key = "ccelrtz4";

export default function Details({ params }: { params: { id: string } }) {
  // Receive onSelect as a prop
  const { screen } = useScreen();
  const router = useRouter();
  const { dateGet, setDateGet } = useDate();
  const { setColor, color } = useColor();
  const { mood, setMood } = useMood();
  const [text, setText] = useState("talk to your little diary ...");
  const { images, setImages } = useImage();
  const [diaryStatus, setDiaryStatus] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useLoginData();
  const { diary, setDiary, resetDiary } = useDiaryState();
  // const { images, setImages } = useImage();

  const fetchDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/free/${params.id}`
      );

      setDiary(response.data);
      setImages(response.data.picture);
    } catch (error: any) {}
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div
      className={`w-full bg-${
        diary && diary.theme
      } h-auto md:h-screen flex-col md:flex md:flex-row overflow-hidden courier-prime-regular bg-Sidebar`}
    >
      <div className=" md:hidden flex justify-end w-screen">
        <Button
          onClick={() => {
            setImages([]);
            router.push("/");
          }}
          className=" items-end justify-end sticky bg-primary hover:bg-primary text-Sidebar  -mb-10 mt-5 mx-5"
        >
          Back
        </Button>
      </div>

      <div
        className={`bg-${
          diary && diary.theme
        } md:flex-[4] flex-[1]  h-[80%] md:h-screen rounded-r-md flex mx-5 md:mx-0 mt-2 md:mt-0`}
      >
        <Image
          src={spring}
          alt="spring"
          width={100}
          height={100}
          className="md:h-auto w-14 md:w-24 md:-ml-[49px] -ml-12 mt-2"
        />
        <div className="w-full h-full overflow-y-scroll hide_scroll_bar flex flex-col">
          <h1 className="courier-prime text-xl md:text-2xl md:mt-10 mt-7">
            Date: {diary && diary.date}
          </h1>
          <div>
            <div
              className={`bg-Sidebar text-${color} py-1 w-max px-2 rounded-sm md:mt-5 mt-2 mb-2 text-sm md:text-base `}
            >
              {diary && diary.mood}
            </div>
          </div>
          <p className="text-sm text-start  md:mr-10 mt-5 whitespace-pre-line flex-wrap text-wrap underline-offset-2">
            {diary && diary.content}
          </p>
        </div>
      </div>
      <Button
        onClick={() => {
          router.push("/");
        }}
        className=" hidden md:block items-start justify-start sticky top-0 bg-primary hover:bg-primary mt-10 text-white"
      >
        Back
      </Button>
      <div
        className={`bg-${
          diary && diary.theme
        }minor hide_scroll_bar md:first-line:h-screen mr-10 md:flex md:flex-col md:justify-end mt-5 md:mt-0`}
      >
        <div className=" justify-end">
          <TesterApp />
        </div>
      </div>
    </div>
  );
}
