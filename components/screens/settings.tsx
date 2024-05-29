import React from "react";
import Image from "next/image";
import useLoginData from "@/context/loggedIn";
import useUserStore from "@/context/myDetails";
import { Button } from "../ui/button";
import avatar from "../../public/avatar.jpg";
import { Edit, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { logout } from "@/middleware/authService";
import useScreen from "@/context/screens";

function SettingPage() {
  const { isLoggedIn, setIsLoggedIn } = useLoginData();
  const router = useRouter();
  const { setScreen, screen } = useScreen();
  const { user, setUser } = useUserStore();
  const test =
    "https://images.unsplash.com/photo-1714779573259-216b0cf746be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="md:w-[80%] w-[90%]  h-full overflow-y-scroll pt-10 px-5 md:mx-10 hide_scroll_bar">
      <h1 className="text-white text-xl">Settings</h1>

      {isLoggedIn && user ? (
        <div>
          <div className="flex justify-center">
            <div className="text-center">
              <Image
                src={user.profilePicture}
                alt="test"
                width={100}
                height={100}
                className="h-32 w-32 rounded-full m-5 border-2 border-primary"
              />
            </div>
          </div>
          <div className=" flex justify-center">
            <Button
              onClick={() => {
                setScreen("Edit");
              }}
              className={`text-sm flex mx-3 justify-center text-center mt-2 courier-prime-regular gap-2 px-2 py-0 items-center bg-${user.theme} hover:bg-gray-500`}
            >
              Edit
              <Edit className="text-xs" size={16} style={{ fontSize: 12 }} />
            </Button>
            <Button
              onClick={() => {
                logout();
              }}
              className={`text-sm flex mx-3 justify-center text-center mt-2 courier-prime-regular gap-2 px-2 py-0 items-center bg-${user.theme} hover:bg-gray-500`}
            >
              Logout
              <LogIn className="text-xs" size={16} style={{ fontSize: 12 }} />
            </Button>
          </div>
          <div className=" text-center">
            <div className="text-primary">Name: {user.name}</div>
            <div className="text-primary">Username: @{user.username}</div>
          </div>
          <div className="border-1 border-white">
            <div className="text-white text-base mt-10 flex gap-32 items-center">
              <h2>My-Theme</h2>
              <div className={`h-4 w-10 bg-${user.theme}`}></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center w-[100%]">
            <div className="text-center">
              <Image
                src={avatar}
                alt="test"
                width={20}
                height={30}
                className="h-28 w-28 rounded-full m-5 border-2 border-gray-400"
              />
              <div className=" items-center justify-center flex">
                <div>
                  <div className="text-gray-400">
                    <h2>Not Logged In</h2>
                  </div>
                  <Button
                    onClick={() => {
                      router.push("/login");
                    }}
                    className="text-sm flex mx-3 justify-center text-center mt-2 courier-prime-regular gap-2 px-2 py-0 items-center bg-gray-400 hover:bg-gray-500"
                  >
                    Login
                    <LogIn
                      className="text-xs"
                      size={16}
                      style={{ fontSize: 12 }}
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <div>hello</div> */}
    </div>
  );
}

export default SettingPage;
