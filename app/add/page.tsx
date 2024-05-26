"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js for navigation
import spring from "../../public/spring.png";
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

export default function Dashboard() {
  // Receive onSelect as a prop
  const { screen } = useScreen();
  const router = useRouter();
  const { dateGet, setDateGet } = useDate();

  const [selectedColor, setSelectedColor] = useState<string>("black");
  const { setColor, color } = useColor();
  const colors: string[] = ["primary", "secondary", "success", "pink"];
  const moods: string[] = [
    "Happy :😁",
    "Sad :😢",
    "Excited :😃",
    "Angry :😠",
    "Surprised :😲",
    "Confused :😕",
    "Bored :😐",
    "Nervous :😰",
    "Relaxed :😌",
    "Frustrated :😤",
    "Anxious :😟",
    "Hopeful :😊",
    "Grateful :🙏",
    "Curious :🤔",
    "Embarrassed :😳",
    "Proud :😏",
    "Disappointed :😞",
    "Scared :😨",
    "Lonely :😔",
    "Content :😌",
  ];

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
    <div className="w-full h-screen md:h-screen flex flex-col md:flex md:flex-row overflow-hidden courier-prime-regular">
      <div
        className={`bg-${color} major h-[50%] md:h-screen rounded-r-sm flex`}
      >
        <Image
          src={spring}
          alt="spring" //
          className="md:h-screen w-14 md:w-24 md:-ml-11 -ml-6"
        />
        <div className="  w-full">
          <h1 className="courier-prime-bold text-2xl mt-2">Date: {dateGet}</h1>
          <div>
            <div
              className={` bg-Sidebar text-${color} py-1 w-max px-2 rounded-md mt-5 mb-2`}
            >
              Happy : 😁
            </div>
          </div>
          <p className=" text-base text-balance text-start mr-5 mt-5">
            Do you think your living an ordinary life? You are so mistaken its
            difficult to even explain. The mere fact that you exist makes you
            extraordinary. The odds of you existing are less than winning the
            lottery, but here you are. Are you going to let this extraordinary
            opportunity pass? Indescribable oppression, which seemed to generate
            in some unfamiliar part of her consciousness, filled her whole being
            with a vague anguish. It was like a shadow, like a mist passing
            across her souls summer day. It was strange and unfamiliar; it was a
            mood. She did not sit there inwardly upbraiding her husband,
            lamenting at Fate, which had directed her footsteps to the path
            which they had taken. She was just having a good cry all to herself.
            The mosquitoes made merry over her, biting her firm, round arms and
            nipping at her bare insteps. It was like a shadow, like a mist
            passing across her souls summer day. It was strange and unfamiliar;
            it was a mood.
            <br />
            <br />
            She did not sit there inwardly upbraiding her husband, lamenting at
            Fate, which had directed her footsteps to the path which they had
            taken. She was just having a good cry all to herself. The mosquitoes
            made merry over her, biting her firm, round arms and nipping at her
            bare insteps.
          </p>
        </div>
      </div>
      <div className="minor md:h-screen flex flex-col">
        <div className="h-14 w-full flex justify-end items-center">
          <Link href="/feed">
            <Button className="mx-2 bg-setting text-white">Cancel ❌</Button>
          </Link>
        </div>

        <div className=" flex justify-center">
          <div>
            <ColorPicker />
            <DatePickerWithPresets />
            <MoodPicker />
          </div>
        </div>
      </div>
    </div>
  );
}
