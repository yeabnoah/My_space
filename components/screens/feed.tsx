"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import getDiaries from "@/utils/dummy";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import spring from "../../public/spring.png";
import { Ban, Heart, HeartOff, MessageSquareMore } from "lucide-react";
import { useRouter } from "next/navigation";
import useAdd from "@/context/add";
import axios from "axios";
import spinner from "../../public/spinner.svg";
import { getAuthToken } from "@/middleware/authService";
import useLoginData from "@/context/loggedIn";
import { splitText } from "../elements/sliceText";
import useDiaryState from "@/context/diaryDetail";
import useImage from "@/context/images";
import { error } from "console";

export default function Feed() {
  const router = useRouter();
  const [DiaryList, setDiaryList] = useState<any>([]);
  const { isLoggedIn, setIsLoggedIn } = useLoginData();
  const [loading, setLoading] = useState(false);
  const { diary, setDiary } = useDiaryState();
  const { images, setImages } = useImage();
  const [imageLiked, setImageLiked] = useState(false);
  const [imageDisliked, setImageDisliked] = useState(false);
  const [imageReported, setImageReported] = useState(false);

  const fetchData = async () => {
    const response = await axios.get("http://127.0.0.1:3000");
    // const response = await axios.get("http://5.75.159.92/");

    setDiaryList(response.data);
  };

  const fetchDetail = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/free/${id}`);

      setDiary(response.data);
      setImages(response.data.picture);

      router.push(`/${id}`);
    } catch (error: any) {
      router.push("/");
    }
  };

  useEffect(() => {
    const fetchCountriesInterval = setInterval(() => {
      fetchData();
    }, 2000);

    return () => clearInterval(fetchCountriesInterval);
  }, []);

  const { isAdd, setIsAdd } = useAdd();

  const addHandler = async () => {
    const token = getAuthToken();

    if (token) {
      setIsLoggedIn(true);
      setImages([]);
      router.push("/add");
    } else {
      setIsLoggedIn(false);
      router.push("/login");
    }
  };

  const handleLike = async (
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    try {
      const token = getAuthToken();

      if (token) {
        const response = await axios.post(
          `http://localhost:3000/diary/like/${id}`,
          {},
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.data.message === "Like added") {
          setImageLiked(true);
        } else if (response.data.message === "Like removed") {
          setImageLiked(false);
        }
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error liking the diary entry:", error);
    }
  };

  const handleDislike = async (
    id: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    try {
      const token = getAuthToken();

      if (token) {
        const response = await axios.post(
          `http://localhost:3000/diary/dislike/${id}`,
          {},
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.data.message === "Dislike added") {
          setImageLiked(true);
        } else if (response.data.message === "Dislike removed") {
          setImageLiked(false);
        }
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error liking the diary entry:", error);
    }
  };

  const handleReport = (id: string) => {};

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

      <div className="flex-col md:flex rounded-lg md:flex-row md:gap-5 overflow-x-scroll hide_scroll_bar">
        <div className="rounded-lg flex-col md:flex md:flex-row md:gap-2 flex-wrap hide_scroll_bar">
          {!DiaryList || DiaryList.length === 0 ? (
            <div className="  md:w-[900px] md:h-[500px] mt-[50%] md:mt-0 flex justify-center items-center">
              <div>
                <Image
                  src={spinner}
                  width={100}
                  height={400}
                  alt="test"
                  className=""
                />
                <h3 className=" text-gray-200 text-center">Loading ...</h3>
              </div>
            </div>
          ) : (
            DiaryList.map((each: any) => {
              const splitedText = splitText(each.content);
              let bgcolorClass = "";
              let textColorClass = "";
              switch (each.theme) {
                case "primary":
                  bgcolorClass = "bg-primary";
                  textColorClass = "text-primary";
                  break;
                case "secondary":
                  bgcolorClass = "bg-secondary";
                  textColorClass = "text-secondary";
                  break;
                case "success":
                  bgcolorClass = "bg-success";
                  textColorClass = "text-success";
                  break;
                case "pink":
                  bgcolorClass = "bg-pink";
                  textColorClass = "text-pink";
                  break;
                case "color1":
                  bgcolorClass = "bg-color1";
                  textColorClass = "text-color1";
                  break;
                case "color2":
                  bgcolorClass = "bg-color2";
                  textColorClass = "text-color2";
                  break;
                case "color3":
                  bgcolorClass = "bg-color3";
                  textColorClass = "text-color3";
                  break;
                case "color4":
                  bgcolorClass = "bg-color4";
                  textColorClass = "text-color4";
                  break;
                case "color5":
                  bgcolorClass = "bg-color5";
                  textColorClass = "text-color5";
                  break;
                case "color6":
                  bgcolorClass = "bg-color6";
                  textColorClass = "text-color6";
                  break;
                case "color7":
                  bgcolorClass = "bg-color7";
                  textColorClass = "text-color7";
                  break;
                case "color8":
                  bgcolorClass = "bg-color8";
                  textColorClass = "text-color8";
                  break;
                case "color9":
                  bgcolorClass = "bg-color9";
                  textColorClass = "text-color9";
                  break;
                case "color10":
                  bgcolorClass = "bg-color10";
                  textColorClass = "text-color10";
                  break;
                case "color11":
                  bgcolorClass = "bg-color11";
                  textColorClass = "text-color11";
                  break;
                case "color12":
                  bgcolorClass = "bg-color12";
                  textColorClass = "text-color12";
                  break;
                case "color13":
                  bgcolorClass = "bg-color13";
                  textColorClass = "text-color13";
                  break;
                case "color14":
                  bgcolorClass = "bg-color14";
                  textColorClass = "text-color14";
                  break;
                case "color15":
                  bgcolorClass = "bg-color15";
                  textColorClass = "text-color15";
                  break;
                case "color16":
                  bgcolorClass = "bg-color16";
                  textColorClass = "text-color16";
                  break;
                case "color17":
                  bgcolorClass = "bg-color17";
                  textColorClass = "text-color17";
                  break;
                case "color18":
                  bgcolorClass = "bg-color18";
                  textColorClass = "text-color18";
                  break;
                default:
                  bgcolorClass = "bg-primary";
                  textColorClass = "text-primary";
              }

              return (
                <div
                  onClick={() => {
                    fetchDetail(each._id);
                  }}
                  key={each._id}
                  className={`w-auto md:w-[440px] h-max flex rounded-lg mt-5 p-3 md:mr-5 hover:cursor-pointer  md:gap-0 items-center ${bgcolorClass}`}
                >
                  <div className="w-[20%] h-[100%] rounded-md flex items-center">
                    <Image
                      src={spring}
                      width={100}
                      height={100}
                      alt="test"
                      className="rounded-lg h-max md:h-auto w-16 md:w-13 -ml-7 md:-ml-7"
                    />
                  </div>
                  <div className="w-[90%] h-max rounded-md flex md:gap-5">
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
                          {splitedText}
                        </h3>
                      </div>
                      <div className=" w-auto -ml-8 md:-ml-12 border-t-2 border-gray-500 flex">
                        {/* {imageLiked ? (
                          <Button
                            onClick={(event) => {
                              handleLike(each._id, event);
                            }}
                            className="bg-transparent"
                          >
                            {<Heart size={20} fill="red" />}
                          </Button>
                        ) : (
                          <Button
                            onClick={(event) => {
                              handleLike(each._id, event);
                            }}
                            className="bg-transparent"
                          >
                            {<Heart size={20} />}
                          </Button>
                        )}
                         */}
                        <div>
                          <Button
                            onClick={(event) => {
                              handleLike(each._id, event);
                            }}
                            className="bg-transparent flex items-center justify-center"
                          >
                            <h2 className=" text-xl mx-1">
                              {each.likes.length}
                            </h2>
                            <Heart size={20} fill="red" />
                          </Button>
                        </div>

                        <Button
                          onClick={(event) => {
                            handleDislike(each._id, event);
                          }}
                          className="bg-transparent flex items-center justify-center"
                        >
                          <h2 className=" text-xl mx-1">
                            {each.dislikes.length}
                          </h2>
                          <HeartOff size={20} fill="black" />
                        </Button>

                        {/* <Button
                          onClick={() => {
                            handleReport(each._id);
                          }}
                          className="bg-transparent"
                        >
                          <h2 className=" text-xl mx-1">
                            {each.reports.length}
                          </h2>
                          <Ban size={20} fill="#7864f6" />
                        </Button> */}
                      </div>
                    </div>

                    {each.picture.length > 0 && (
                      <div className="image-container h-[100%] hidden md:block">
                        {loading && (
                          <div className=" text-white">image loading ...</div>
                        )}
                        <Image
                          onLoad={(e) => {
                            setLoading(true);
                          }}
                          key={each.picture[0]}
                          src={each.picture[0]}
                          alt="test"
                          layout="fill"
                          className="image"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })
          )}

          <div className="fixed bottom-4 right-4">
            <div className="relative w-11 h-11  md:w-14 md:h-14">
              <div className="pulse-ring"></div>
              <button
                onClick={addHandler}
                className="bg-Sidebar text-white p-1 rounded-full shadow-lg hover:bg-primary transition duration-300 w-full h-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto stroke-primary hover:stroke-Sidebar"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
