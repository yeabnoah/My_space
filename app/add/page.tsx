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

export default function Dashboard() {
  // Receive onSelect as a prop
  const { screen } = useScreen();
  const router = useRouter();

  const [selectedColor, setSelectedColor] = useState<string>("black");
  const colors: string[] = ["primary", "secondary", "success", "pink"];

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
        className={`bg-${selectedColor} major h-[50%] md:h-screen rounded-r-sm flex`}
      >
        <Image
          src={spring}
          alt="spring" //
          className="md:h-screen w-14 md:w-24 md:-ml-11 -ml-6"
        />
      </div>
      <div className="minor md:h-screen flex flex-col">
        <div className="h-14 w-full flex justify-end items-center">
          <Link href="/feed">
            {/* Use Link for navigation */}
            <Button className="mx-2 bg-setting text-white">Cancel ❌</Button>
          </Link>
        </div>

        <ColorPicker colors={colors} selectedColor={selectedColor} />
      </div>
    </div>
  );
}
