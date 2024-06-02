"use client";

import TesterApp from "@/components/elements/swiper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useColor from "@/context/color";
import useDate from "@/context/date";
import useDiaryState from "@/context/diaryDetail";
import useImage from "@/context/images";
import useLoginData from "@/context/loggedIn";
import useMood from "@/context/mood";
import useScreen from "@/context/screens";
import { getAuthToken } from "@/middleware/authService";
import axios from "axios";
import { ArrowLeft, SendIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js for navigation
import { useRouter } from "next/navigation"; // Corrected import statement
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import spring from "../../public/ff.png";
import useUserStore from "@/context/myDetails";

const cloudName = "dsaitxphg";
const preset_key = "ccelrtz4";

interface Comment {
  _id: string;
  content: string;
  userId: {
    _id: string;
    name: string;
    profilePicture: string;
    username: string;
    password: string;
    diaries: string[];
    theme: string;
    __v: 0;
  };
  diaryId: string;
  __v: number;
}

export default function Details({ params }: { params: { id: string } }) {
  // Receive onSelect as a prop
  const router = useRouter();
  const { screen } = useScreen();
  const queryClient = useQueryClient();
  const { dateGet, setDateGet } = useDate();
  const { setColor, color } = useColor();
  const { mood, setMood } = useMood();
  const [text, setText] = useState("talk to your little diary ...");
  const { images, setImages, resetImages } = useImage();
  const [diaryStatus, setDiaryStatus] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useLoginData();
  const { diary, setDiary, resetDiary } = useDiaryState();
  const { data: comments, isLoading } = useQuery({
    queryKey: ["comments", params.id],
    queryFn: async () => {
      const token = getAuthToken();
      const commentResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/diary/comments/${params.id}`,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      return commentResponse.data.comments;
    },
  });
  const [comment, setComment] = useState("");

  const fetchDetail = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/free/${params.id}`,
      );

      // console.log("this is comments :", commentResponse.data.comments);
      setDiary(response.data);
      setImages(response.data.picture);
    } catch (error: any) {}
  };

  const useUser = useUserStore((state) => state.user);

  const commentMutation = useMutation({
    async mutationFn(comment: string) {
      const token = getAuthToken();

      return axios.post(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/diary/comment/${params.id}`,
        {
          content: comment,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );
    },
    onSuccess(_, comment) {
      queryClient.setQueryData<Comment[]>(["comments", params.id], (p) => {
        if (!p) {
          return [];
        }
        return [
          ...p,
          {
            _id: Date.now().toString(),
            content: comment,
            userId: { ...useUser, __v: 0 },
            diaryId: params.id,
            __v: Date.now(),
          },
        ];
      });
    },
  });

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <div
      className={`w-full bg-${
        diary && diary.theme
      } h-auto md:h-screen flex-col md:flex md:flex-row overflow-hidden courier-prime-regular bg-Sidebar`}
    >
      <div className=" md:hidden  flex justify-end w-screen">
        <Button
          onClick={() => {
            resetImages();
            router.push("/");
          }}
          className=" items-end justify-end sticky bg-red-400 hover:bg-red-500 text-Sidebar  -mb-10 mt-5 mx-5"
        >
          Back
        </Button>
      </div>

      <div
        className={`bg-${
          diary && diary.theme
        } md:flex-[3] flex-[1]  h-[80%] md:h-screen rounded-r-md flex mx-5 md:mx-0 mt-2 md:mt-0`}
      >
        <Image
          src={spring}
          alt="spring"
          width={100}
          height={100}
          className="md:h-auto w-14 md:w-24 md:-ml-[49px] -ml-12 mt-2"
        />
        <div className="w-full h-full overflow-y-scroll hide_scroll_bar flex flex-col">
          <h1 className="courier-prime text-xl md:text-2xl md:mt-10 mt-7">
            Date: {diary && diary.date}
          </h1>

          <div>
            <div
              className={`bg-Sidebar text-${color} py-1 w-max px-2 rounded-sm md:mt-5 mt-2 mb-2 text-sm md:text-base `}
            >
              {diary && diary.mood}
            </div>
          </div>
          <p className="text-sm text-start  w-full md:mr-10 mt-5 whitespace-pre-line flex-wrap text-wrap underline-offset-2">
            {diary && diary.content}
          </p>
        </div>
        <div
          className={`bg-${
            diary && diary.theme
          }minor hide_scroll_ba md:flex md:flex-col r md:first-line:h-screen mr-10 md:justify-end mt-5 md:mt-0`}
        >
          <Button
            onClick={() => {
              resetImages();
              router.push("/");
            }}
            className=" hidden items-start sticky top-0 bg-primary hover:bg-primary mt-10 text-white"
          >
            Back
          </Button>

          <div className="  hidden md:block justify-end">
            <TesterApp />
          </div>
        </div>
      </div>

      <div className=" mt-5 md:hidden justify-end">
        <TesterApp />
      </div>

      <div className="minor sticky mb-0 md:h-screen minor flex flex-col bg-Sidebar  overflow-y-scroll hide_scroll_bar">
        <div className="h-14 w-full md:flex justify-end items-center hidden ">
          <Link href="/">
            <Button className="mx-2 bg-red-400 text-Sidebar hover:bg-red-500">
              Back
              <ArrowLeft />
            </Button>
          </Link>
        </div>

        <div className="flex justify-start md:justify-center mx-3 md:mx-0 items-center">
          <div className="  w-full md:w-auto">
            <div className=" flex justify-center items-center mt-5 ">
              <div className=" flex items-center gap-4">
                <Input
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  className=" text-white w-full"
                  placeholder=" comments here .."
                />

                <Button
                  onClick={() => commentMutation.mutate(comment)}
                  className={`my-3 text-sm bg-${color}`}
                >
                  <SendIcon size={18} className="" />
                </Button>
              </div>
            </div>

            <hr className=" bg-gray-400 mb-5" />

            <div className=" mx-5 overflow-y-scroll hide_scroll_bar mb-10">
              {comments.map((each: Comment) => {
                return (
                  <div
                    key={each._id}
                    className={` bg-gray-400 bg-${
                      diary && diary.theme
                    } mt-2 px-5 py-2 rounded-md flex gap-4 `}
                  >
                    <Image
                      src={each.userId.profilePicture}
                      alt="commenter"
                      height={30}
                      width={30}
                      className="rounded-full w-max border-black border-[1px]"
                    />
                    <h2 className=" text-Sidebar text-xs ">{each.content}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
