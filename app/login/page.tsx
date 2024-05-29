"use client";
import Image from "next/image";
import Link from "next/link";
import community from "../../public/111.jpg";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { getAuthToken, login } from "@/middleware/authService";
import { useRouter } from "next/navigation";
import useUserStore from "@/context/myDetails";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const { setUser, user } = useUserStore();
  const router = useRouter();

  const whoAmI = async () => {
    const token = await getAuthToken();
    const response = await axios.get("http://localhost:3000/user/whoami/", {
      headers: {
        Authorization: token,
      },
    });

    setUser(response?.data);
  };

  const TOKEN_COOKIE_NAME = "jwtTokenLoggedIn";

  const handleSubmit = async () => {
    const success = await login(username, password);

    if (success) {
      router.push("/");
      whoAmI();
      alert(`welcome ${user.name}`);
    } else {
      setShowError(true);
      router.push("/login");
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] xl:min-h-screen text-white courier-prime-regular ">
      <div className="flex items-center justify-center py-12 z-30">
        <div className="mx-auto grid w-[350px] gap-6  p-5 rounded-lg">
          <div className="grid gap-2 text-center ">
            <h1 className="text-3xl font-bold">Login</h1>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">username</Label>
              <Input
                onChange={(event) => {
                  setShowError(false);
                  setUsername(event.target.value);
                }}
                id="username"
                type="text"
                placeholder="technerd345"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">password</Label>
              <Input
                onChange={(event) => {
                  setShowError(false);
                  setPassword(event.target.value);
                }}
                id="password"
                type="password"
                placeholder="password"
                required
              />
            </div>

            <Button
              onClick={handleSubmit}
              type="submit"
              className="w-full bg-gray-400 hover:bg-gray-400 text-Sidebar"
            >
              Login
            </Button>
            <Link
              href="/"
              className="underline items-center justify-center text-center"
            >
              continue as a guest
            </Link>

            {showError && (
              <h3 className=" text-red-500 text-center courier-prime-regular text-sm">
                Enter correct username or password
              </h3>
            )}
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
