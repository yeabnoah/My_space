"use client";

import Image from "next/image";
import Link from "next/link";
import spring from "../../public/spring.png";
import her from "../../public/uuuu.jpg";
import user from "../../public/tttj.jpg";
import {
  ChevronLeft,
  Heart,
  HeartOff,
  Home,
  LineChart,
  MessageSquareMoreIcon,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Search,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
  MessageSquareMore,
  Rss,
  NotebookPen,
  BookLock,
  Pencil,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import getDiaries from "@/utils/dummy";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/diary");

      const data = await response.data;

      console.log(data);
      setPostData(data);
    };

    fetchData();
  }, []);
  return (
    <div className="w-[100%] h-screen flex overflow-hidden">
      <div className="md:w-[19%] h-full bg-Sidebar hidden md:flex flex-col justify-between">
        <div className="text-primary text-xl text-center mt-5">
          My_Space.com
        </div>

        <div className=" h-[350px] w-[100%] flex justify-center items-center">
          <div className="">
            <div className=" flex justify-center mt-5">
              <Image
                src={user}
                alt="her"
                className=" w-32 h-36 rounded-full border-2 border-pink"
              />
            </div>

            <div>
              <h2 className=" text-pink text-2xl text-center mt-5">Alice t.</h2>
              <Button className="text-xl flex gap-5 items-center bg-pink">
                Edit
                <Pencil />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-[80%] flex justify-start">
          <div>
            <Button className=" bg-setting w-auto py-6 rounded-md flex justify-start gap-5 mb-3">
              <Rss className="text-white" />
              <h2 className="text-white text-xl text-start">Feed</h2>
            </Button>
            <Button className=" bg-setting w-auto py-6 rounded-md flex justify-start gap-5 mb-3">
              <NotebookPen className="text-white" />
              <h2 className="text-white text-xl text-start">My Diaries</h2>
            </Button>
            <Button className=" bg-setting w-auto py-6 rounded-md flex justify-start gap-5 mb-3">
              <BookLock className="text-white" />
              <h2 className="text-white text-xl text-start">Secrets</h2>
            </Button>
            <Button className=" bg-setting w-auto py-6 rounded-md flex justify-start gap-5">
              <Settings className="text-white" />
              <h2 className="text-white text-xl text-start">Settings</h2>
            </Button>
          </div>
        </div>
      </div>

      <div className="md:w-[81%] h-full overflow-y-scroll pt-10 px-5 md:mx-10 hide_scroll_bar">
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
      </div>
    </div>
  );
}
