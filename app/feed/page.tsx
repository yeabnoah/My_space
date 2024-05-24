import Image from "next/image";
import Link from "next/link";
import spring from "../../public/spring.png";
import her from "../../public/uuuu.jpg";
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

export default function Dashboard() {
  return (
    <div className=" bg-black  h-auto w-[100%] relative mt-10 overflow-x-hidden">
      <div className=" flex items-center">
        <Input
          placeholder="Search a Journal/ Diary"
          className=" bg-black w-64 py-5 px-5 mx-5 text-white placeholder-color border-[1px] border-white"
        />
        <Button>Search</Button>
      </div>
      <div className=" flex-col md:flex md:flex-row gap-5 overflow-y-scroll md:overflow-y-scroll mx-5">
        <div className="rounded-lg flex-col md:flex md:flex-row gap-5 ">
          <div className=" bg-[#cdeff1] w-auto md:w-[600px] h-auto flex rounded-lg my-5 p-3 items-center">
            <div className="  w-[20%]  h-[100%] rounded-md flex items-center">
              <Image
                src={spring}
                alt="test"
                width={80}
                height={80}
                className=" rounded-lg -ml-10 "
              />
            </div>
            <div className="  w-[90%]   h-auto rounded-md flex md:gap-5">
              <div className=" md:w-[60%]">
                <div className="">
                  <div className=" bg-black p-2 rounded-md -ml-10">
                    <h2 className=" text-secondary text-sm md:text-base">
                      Happy : 😁
                    </h2>
                  </div>
                  <h3 className=" text-xs md:text-sm font-test courier-prime-bold my-2 -ml-10">
                    Why do we use it?
                    <br></br>
                    <br></br>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using Content here, content here,
                  </h3>
                </div>
                <div className=" w-[100%] -ml-10 border-t-2 border-gray-500 flex ">
                  <Button className=" bg-transparent">{<Heart />}</Button>
                  <Button className=" bg-transparent">{<HeartOff />}</Button>
                  <Button className=" bg-transparent">
                    {<MessageSquareMore />}
                  </Button>
                </div>
              </div>

              <Image
                src={her}
                alt="test"
                width={260}
                height={150}
                className=" rounded-lg hidden md:block w-[50%] h-[60%]"
              />
            </div>
          </div>

          {getDiaries.map((each) => {
            return (
              <div
                key={each.id}
                className={` bg-[${each.theme}] w-auto md:w-[600px] h-auto flex rounded-lg my-5 p-3 items-center`}
              >
                <div className="  w-[20%]  h-[100%] rounded-md flex items-center">
                  <Image
                    src={spring}
                    alt="test"
                    width={80}
                    height={80}
                    className=" rounded-lg -ml-10 "
                  />
                </div>
                <div className="  w-[90%]   h-auto rounded-md flex md:gap-5">
                  <div className=" md:w-[60%]">
                    <div className="">
                      <div className=" bg-black p-2 rounded-md -ml-10">
                        <h2 className=" text-secondary text-sm md:text-base">
                          {each.mood}
                        </h2>
                      </div>
                      <h3 className=" text-xs md:text-sm font-test courier-prime-bold my-2 -ml-10">
                        {each.content}
                      </h3>
                    </div>
                    <div className=" w-[100%] -ml-10 border-t-2 border-gray-500 flex ">
                      <Button className=" bg-transparent">{<Heart />}</Button>
                      <Button className=" bg-transparent">
                        {<HeartOff />}
                      </Button>
                      <Button className=" bg-transparent">
                        {<MessageSquareMore />}
                      </Button>
                    </div>
                  </div>

                  <Image
                    src={each.image}
                    alt="test"
                    width={260}
                    height={150}
                    className=" rounded-lg hidden md:block w-[50%] h-[60%]"
                  />
                </div>
              </div>
            );
          })}

          {/* <div className=" bg-third w-auto md:w-[600px] h-auto flex rounded-lg my-5 p-3 items-center">
            <div className="  w-[20%]  h-[100%] rounded-md flex items-center">
              <Image
                src={spring}
                alt="test"
                width={80}
                height={80}
                className=" rounded-lg -ml-10 "
              />
            </div>
            <div className="  w-[90%]   h-auto rounded-md flex md:gap-5">
              <div className=" md:w-[60%]">
                <div className="">
                  <div className=" bg-black p-2 rounded-md -ml-10">
                    <h2 className=" text-third text-sm md:text-base">
                      Happy : 😁
                    </h2>
                  </div>
                  <h3 className=" text-xs md:text-sm font-test courier-prime-bold my-2 -ml-10">
                    Why do we use it?
                    <br></br>
                    <br></br>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using Content here, content here,
                  </h3>
                </div>
                <div className=" w-[100%] -ml-10 border-t-2 border-gray-500 flex ">
                  <Button className=" bg-transparent">{<Heart />}</Button>
                  <Button className=" bg-transparent">{<HeartOff />}</Button>
                  <Button className=" bg-transparent">
                    {<MessageSquareMore />}
                  </Button>
                </div>
              </div>

              <Image
                src={her}
                alt="test"
                width={260}
                height={150}
                className=" rounded-lg hidden md:block w-[50%] h-[60%]"
              />
            </div>
          </div>

          <div className=" bg-test w-[600px] h-auto flex rounded-lg my-5 p-3 items-center">
            <div className="  w-[13%]  h-[100%] rounded-md flex items-center">
              <Image
                src={spring}
                alt="test"
                width={80}
                height={80}
                className=" rounded-lg -ml-10 "
              />
            </div>
            <div className=" w-[90%]  h-auto rounded-md flex gap-5">
              <div className=" w-[60%] ">
                <div className=" bg-black p-2 rounded-md -ml-10">
                  <h2 className=" text-test">Happy : 😁</h2>
                </div>
                <h3 className=" text-sm font-test courier-prime-bold my-2 -ml-10">
                  Why do we use it?
                  <br></br>
                  <br></br>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here,
                </h3>
              </div>

              <Image
                src={her}
                alt="test"
                width={260}
                height={150}
                className=" rounded-lg w-[50%] h-[60%]"
              />
            </div>
          </div>

          <div className=" bg-forth w-[600px] h-auto flex rounded-lg my-5 p-3 items-center">
            <div className="  w-[13%]  h-[100%] rounded-md flex items-center">
              <Image
                src={spring}
                alt="test"
                width={80}
                height={80}
                className=" rounded-lg -ml-10 "
              />
            </div>
            <div className=" w-[90%]  h-auto rounded-md flex gap-5">
              <div className=" w-[60%] ">
                <div className=" bg-black p-2 rounded-md -ml-10">
                  <h2 className=" text-forth">Happy : 😁</h2>
                </div>
                <h3 className=" text-sm font-test courier-prime-bold my-2 -ml-10">
                  Why do we use it?
                  <br></br>
                  <br></br>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here,
                </h3>
              </div>

              <Image
                src={her}
                alt="test"
                width={260}
                height={150}
                className=" rounded-lg w-[50%] h-[60%]"
              />
            </div>
          </div>

          <div className=" bg-primary w-[600px] h-auto flex rounded-lg my-5 p-3 items-center">
            <div className="  w-[13%]  h-[100%] rounded-md flex items-center">
              <Image
                src={spring}
                alt="test"
                width={80}
                height={80}
                className=" rounded-lg -ml-10 "
              />
            </div>
            <div className=" w-[90%]  h-auto rounded-md flex gap-5">
              <div className=" w-[60%] ">
                <div className=" bg-black p-2 rounded-md -ml-10">
                  <h2 className=" text-primary">Happy : 😁</h2>
                </div>
                <h3 className=" text-sm font-test courier-prime-bold my-2 -ml-10">
                  Why do we use it?
                  <br></br>
                  <br></br>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here,
                </h3>
              </div>

              <Image
                src={her}
                alt="test"
                width={260}
                height={150}
                className=" rounded-lg w-[50%] h-[60%]"
              />
            </div>
          </div>

          <div className=" bg-secondary w-[600px] h-auto flex rounded-lg my-5 p-3 items-center">
            <div className="  w-[13%]  h-[100%] rounded-md flex items-center">
              <Image
                src={spring}
                alt="test"
                width={80}
                height={80}
                className=" rounded-lg -ml-10 "
              />
            </div>
            <div className=" w-[90%]  h-auto rounded-md flex gap-5">
              <div className=" w-[60%] ">
                <div className=" bg-black p-2 rounded-md -ml-10">
                  <h2 className=" text-secondary">Happy : 😁</h2>
                </div>
                <h3 className=" text-sm font-test courier-prime-bold my-2 -ml-10">
                  Why do we use it?
                  <br></br>
                  <br></br>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here,
                </h3>
              </div>

              <Image
                src={her}
                alt="test"
                width={260}
                height={150}
                className=" rounded-lg w-[50%] h-[60%]"
              />
            </div>
          </div> */}
        </div>
        {/* <div className="  w-[20%] rounded-md absolute h-screen"></div> */}
      </div>
    </div>
  );
}
