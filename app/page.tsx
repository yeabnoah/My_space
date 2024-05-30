"use client";

import Image from "next/image";
import usert from "../public/tttj.jpg";
import {
  Settings,
  Rss,
  NotebookPen,
  BookLock,
  Pencil,
  PenBoxIcon,
  LogOut,
  LogIn,
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
import "./globals.css";
import { getAuthToken, logout } from "@/middleware/authService";
import useUserStore from "@/context/myDetails";
import { log } from "console";
import avatar from "../public/avatar.png";
import { useRouter } from "next/navigation";
import useLoginData from "@/context/loggedIn";
import { splitText } from "@/components/elements/sliceText";
import { EditUser } from "@/components/screens/edit";

export default function Dashboard() {
  const [postData, setPostData] = useState([]);
  const { screen, setScreen } = useScreen();
  const { user, setUser } = useUserStore();
  const { isLoggedIn, setIsLoggedIn } = useLoginData();

  const { isAdd, setIsAdd } = useAdd();
  const router = useRouter();

  const whoAmI = async () => {
    const token = await getAuthToken();

    const response = await axios.get(
      "https://myspace.nerdspacer.com/user/whoami/",
      {
        headers: {
          Authorization: token,
        },
      }
    );

    setUser(response?.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = getAuthToken();
      try {
        if (token) {
          setIsLoggedIn(true);
          whoAmI();
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setUser, user, isLoggedIn]);

  const handleLogout = () => {
    logout();
    setUser({
      _id: "",
      name: "notLoggedIn",
      profilePicture: "",
      username: "",
      password: "",
      diaries: [],
      theme: "",
      __v: 0,
    });
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
      case "Edit":
        return <EditUser />;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="w-[100%] h-screen flex overflow-hidden courier-prime-regular bg-background">
      <div className=" md:hidden bg-Sidebar h-screen w-fit flex justify-center pt-2">
        <div className=" bg-2 w-red-200">
          <div className=" flex justify-center items-center">
            {isLoggedIn && user && user.profilePicture ? (
              <Image
                onClick={() => {
                  setScreen("Feed");
                }}
                src={user.profilePicture}
                alt="User Profile Picture"
                width={100}
                height={100}
                className={`w-10 h-10 rounded-full border-2 border-${user.theme}`}
              />
            ) : (
              <Image
                onClick={() => {
                  setScreen("Feed");
                }}
                src={avatar}
                alt="Default Avatar"
                width={100}
                height={100}
                className="w-10 h-10 rounded-full border-2 border-gray-400"
              />
            )}
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
      <div className="md:w-[16.5%] h-full bg-Sidebar hidden md:flex flex-col justify-between">
        <div className="text-primary text-lg text-center mt-5 courier-prime-regular">
          MySpace
        </div>

        <div className="h-[350px] w-[100%] flex justify-center items-center">
          <div className="">
            <div className="flex justify-center mt-5">
              {isLoggedIn && user && user.profilePicture ? (
                <Image
                  onClick={() => {
                    setScreen("Feed");
                  }}
                  src={user.profilePicture}
                  alt="User Profile Picture"
                  width={100}
                  height={100}
                  className={`w-20 h-20 rounded-full border-2 border-${user.theme}`}
                />
              ) : (
                <Image
                  onClick={() => {
                    setScreen("Feed");
                  }}
                  src={avatar}
                  alt="Default Avatar"
                  width={100}
                  height={100}
                  className="w-20 h-20 rounded-full border-2 border-gray-400"
                />
              )}
            </div>

            {isLoggedIn && user ? (
              <div>
                <h2
                  className={`text-${user.theme} text-sm text-center mt-3 courier-prime-regular`}
                >
                  {user.username}
                </h2>
                <h2
                  className={`text-${user.theme} text-sm text-center courier-prime-regular`}
                >
                  {user.name}
                </h2>
                <Button
                  onClick={handleLogout}
                  className={`text-base mt-2 flex courier-prime-regular gap-2 px-2 py-0 items-center bg-${user.theme}`}
                >
                  Logout
                  <LogOut
                    className="text-xs"
                    size={16}
                    style={{ fontSize: 12 }}
                  />
                </Button>
              </div>
            ) : (
              <div>
                <h2 className="text-gray-400 text-sm text-center mt-3 courier-prime-regular">
                  not Logged in
                </h2>
                <Button
                  onClick={() => {
                    router.push("/login");
                  }}
                  className="text-sm flex justify-center mt-2 courier-prime-regular gap-2 px-2 py-0 items-center bg-gray-400 hover:bg-gray-500"
                >
                  Login
                  <LogIn
                    className="text-xs"
                    size={16}
                    style={{ fontSize: 12 }}
                  />
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="mt-[80%] flex justify-start">
          <div>
            <Button
              onClick={() => {
                setScreen("Feed");
              }}
              className=" bg-setting w-auto py-2 rounded-md flex justify-start gap-3 mb-2"
            >
              <Rss className="text-white text-sm" size={18} />
              <h2 className="text-white text-sm text-start courier-prime-regular">
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
