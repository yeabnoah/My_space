"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import getDiaries from "@/utils/dummy";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import spring from "../../public/spring.png";
import { Heart, HeartOff, MessageSquareMore } from "lucide-react";
import { useRouter } from "next/navigation";
import useAdd from "@/context/add";
import axios from "axios";

export default function Feed() {
  const router = useRouter();
  const [DiaryList, setDiaryList] = useState<any>([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000");

    setDiaryList(response.data);
    console.log("thihs is 777777777777777", DiaryList);
  };

  useEffect(() => {
    const fetchCountriesInterval = setInterval(() => {
      fetchData();
    }, 2000);

    return () => clearInterval(fetchCountriesInterval);
  }, []);

  const { isAdd, setIsAdd } = useAdd();

  return (
    <div className="md:w-[81%] h-full overflow-y-scroll pt-5 px-5 md:mx-10 hide_scroll_bar">
      <div className="flex items-center mb-5">
        <Input
          placeholder="Search a Journal/ Diary"
          className="bg-black justify-center courier-prime-regular md:text-sm md:w-80 md:py-3 px-5 mr-5 text-white placeholder-color border-[1px] border-white"
        />
        <Button
          onClick={() => {
            fetchData();
          }}
          className=" text-sm courier-prime-regular"
        >
          Search
        </Button>
      </div>
      <h3 className="text-white text-lg md:text-base -mb-3 courier-prime-regular">
        Diaries/Journals
      </h3>
      {/* {DiaryList &&
        DiaryList.map((test: any) => {
          return (
            <div key={test._id} className=" text-white">
              hello world
            </div>
          );
        })} */}
      <div className="flex-col md:flex rounded-lg md:flex-row md:gap-5 overflow-x-scroll hide_scroll_bar">
        <div className="rounded-lg flex-col md:flex md:flex-row md:gap-2 flex-wrap hide_scroll_bar">
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
                className={`w-auto md:w-[440px] h-auto flex rounded-lg mt-5 p-3 md:mr-5  md:gap-0 items-center ${bgColorClass}`}
              >
                <div className="w-[20%] h-[100%] rounded-md flex items-center">
                  <Image
                    src={spring}
                    alt="test"
                    className="rounded-lg h-56 md:h-auto w-16 md:w-13 -ml-7 md:-ml-7"
                  />
                </div>
                <div className="w-[90%] h-auto rounded-md flex md:gap-5">
                  <div className="md:w-[60%]">
                    <div className="">
                      <div className="bg-black p-2 rounded-md -ml-8 md:-ml-12">
                        <h2
                          className={`${textColorClass} text-sm md:text-sm courier-prime-regular`}
                        >
                          {each.mood}
                        </h2>
                      </div>
                      <h3 className="text-xs md:text-xs font-test courier-prime-bold my-2 -ml-8 md:-ml-12">
                        {each.content}
                      </h3>
                    </div>
                    <div className=" w-auto -ml-8 md:-ml-12 border-t-2 border-gray-500 flex">
                      <Button className="bg-transparent">
                        {<Heart size={20} />}
                      </Button>
                      <Button className="bg-transparent">
                        {<HeartOff size={20} />}
                      </Button>
                      <Button className="bg-transparent">
                        {<MessageSquareMore size={20} />}
                      </Button>
                    </div>
                  </div>

                  {each.image.length > 0 && (
                    <div className="image-container h-[100%] hidden md:block">
                      <Image
                        key={each.image[0]}
                        src={each.image[0]}
                        alt="test"
                        layout="fill"
                        className="image"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          <div className="fixed bottom-4 right-4">
            <div className="relative w-11 h-11  md:w-14 md:h-14">
              <div className="pulse-ring"></div>
              <button
                onClick={() => {
                  router.push("/add");
                }}
                className="bg-Sidebar text-white p-1 rounded-full shadow-lg hover:bg-primary transition duration-300 w-full h-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto stroke-primary hover:stroke-Sidebar"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    // stroke-linecap="round"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    // stroke-linejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
