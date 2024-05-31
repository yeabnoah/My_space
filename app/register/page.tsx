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
import { register } from "@/middleware/authService";
import { useRouter } from "next/navigation";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);
  const router = useRouter();

  

  const handleSubmit = async () => {
    const success = await register(name, username, password);

    if (success) {
      router.push("/");
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
            <h1 className="text-3xl font-bold">Register</h1>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">name</Label>
              <Input
                onChange={(event) => {
                  setShowError(false);
                  setName(event.target.value);
                }}
                id="name"
                type="text"
                placeholder="yeabsra"
                required
              />
            </div>
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
              Register
            </Button>
            <Link
              href="/"
              className="underline items-center justify-center text-center"
            >
              continue as a guest
            </Link>

            {showError && (
              <h3 className=" text-red-500 text-center courier-prime-regular text-sm">
                Please fill all the fields correctly !!
              </h3>
            )}
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
