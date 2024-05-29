"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useUserStore from "@/context/myDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { getAuthToken } from "@/middleware/authService";
import { useRouter } from "next/navigation";
import useScreen from "@/context/screens";

const cloudName = "dsaitxphg";
const preset_key = "ccelrtz4";

export function EditUser() {
  const { user, setUser } = useUserStore();
  const router = useRouter();
  const { setScreen } = useScreen();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.username || "");
      setName(user.name || "");
      setImage(user.profilePicture || "");
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const token = getAuthToken();
      const response = await axios.patch(
        "http://localhost:3000/user/update-profile",
        {
          username,
          name,
          profilePicture: image,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data);
      setScreen("Settings");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFile = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", preset_key);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData
        );
        const url = response.data.secure_url;
        console.log(url);
        setImage(url);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="h-screen w-screen flex justify-start items-center text-white">
      <Card className="mx-auto max-w-sm mt-[1%] border-0 border-transparent">
        <CardHeader>
          <CardTitle className="text-xl">Edit Account</CardTitle>
          <CardDescription>Enter your information here</CardDescription>
        </CardHeader>
        <CardContent>
          {image && (
            <Image src={image} alt="userImage" height={300} width={300} />
          )}
          <div className="flex-wrap mt-2 flex">
            <div className="flex-col w-max">
              <div className="flex items-start">
                <input
                  type="file"
                  className="hidden"
                  id="fileInput"
                  onChange={handleFile}
                />
                <label
                  htmlFor="fileInput"
                  className="bg-blue-300 cursor-pointer w-auto text-black font-Montserrat rounded px-4 py-2 border border-gray-300 hover:bg-blue-400"
                >
                  Choose Images
                </label>
              </div>
            </div>
          </div>
          <div className="grid gap-4 mt-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">Name</Label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="first-name"
                  placeholder="Max"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  id="username"
                  placeholder="Robinson"
                  required
                />
              </div>
            </div>
            <Button
              onClick={handleSubmit}
              variant="outline"
              className={`w-full bg-${user && user.theme} text-Sidebar`}
            >
              Edit info
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
