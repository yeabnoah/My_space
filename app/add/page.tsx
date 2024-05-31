"use client";

import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js for navigation
import spring from "../../public/ff.png";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import useScreen from "@/context/screens";
import Feed from "@/components/screens/feed";
import SettingPage from "@/components/screens/settings";
import Secrets from "@/components/screens/secrets";
import MyDiaries from "@/components/screens/myDiaries";
import { useRouter } from "next/navigation"; // Corrected import statement
import ColorPicker from "@/components/elements/colorpiscker";
import useColor from "@/context/color";
import { DatePickerWithPresets } from "@/components/ui/DatePickerWithPresets";
import useDate from "@/context/date";
import MoodPicker from "@/components/elements/moodPicker";
import useMood from "@/context/mood";
import { Textarea } from "@/components/ui/textarea";
import { BookHeartIcon, Globe, Lock, NotebookPen } from "lucide-react";
import axios from "axios";
import pin from "../../public/uuu.png";
import test from "../../public/uuuu.jpg";
import { Input } from "@/components/ui/input";
import Draggable from "react-draggable";
import TesterApp from "@/components/elements/swiper";
import useImage from "@/context/images";
import useLoginData from "@/context/loggedIn";
import { getAuthToken } from "@/middleware/authService";
import { headers } from "next/headers";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const cloudName = "dsaitxphg";
const preset_key = "ccelrtz4";

export default function Dashboard() {
  // Receive onSelect as a prop
  const { screen } = useScreen();
  const router = useRouter();
  const { dateGet, setDateGet } = useDate();
  const { setColor, color } = useColor();
  const { mood, setMood } = useMood();
  const [text, setText] = useState("talk to your little diary ...");
  const { images, setImages, resetImages } = useImage();
  const [diaryStatus, setDiaryStatus] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useLoginData();

  // const [isPublic, setIsPublic] = useState(false);

  const [profilePic, setProfilePic] = useState<string[]>([]); // Specify string[] for profilePic state

  const cancelHandler = () => {
    resetImages();
    router.push("/");
  };

  const handleSubmit = async () => {
    const token = getAuthToken();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/diary`,
        {
          date: dateGet,
          theme: color,
          mood: mood,
          content: text,
          picture: images,
          isPublic: diaryStatus,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      router.push("/");
    } catch (error: any) {
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = getAuthToken();
      try {
        if (token) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          router.push("/login");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isLoggedIn]);

  function handleFile1(event: any) {
    const files = event.target.files;
    if (files) {
      const formDataArray: FormData[] = [];

      for (let i = 0; i < files.length; i++) {
        const formData = new FormData();
        formData.append("file", files[i]);
        formData.append("upload_preset", preset_key);
        formDataArray.push(formData);
      }

      Promise.all(
        formDataArray.map((formData) =>
          axios.post(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            formData
          )
        )
      )
        .then((responses) => {
          const urls = responses.map((res) => res.data.secure_url);

          setImages([...urls]);
        })
        .catch((err) => console.error(err));
    }
  }

  const handleTextChange = (e: any) => {
    setText(e.target.value);
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
      default:
        return <Feed />;
    }
  };

  return (
    <div className="w-full h-screen md:h-screen flex flex-col md:flex md:flex-row overflow-hidden courier-prime-regular bg-Sidebar">
      <div
        className={`bg-${color} md:flex-[3] flex-[.6]  h-[30%] md:h-screen rounded-r-md flex mx-5 md:mx-0 mt-2 md:mt-0`}
      >
        <Image
          src={spring}
          alt="spring"
          width={100}
          height={100}
          className="md:h-auto w-12 md:w-24 md:-ml-[49px] -ml-6 mt-2"
        />
        <div className="w-full h-full overflow-y-scroll hide_scroll_bar flex flex-col">
          <h1 className="courier-prime text-xl md:text-2xl md:mt-10 mt-7">
            Date: {dateGet}
          </h1>
          <div>
            <div
              className={`bg-Sidebar text-${color} py-1 w-max px-2 rounded-sm md:mt-5 mt-2 mb-2 text-sm md:text-base `}
            >
              {mood}
            </div>
          </div>
          <p className="text-sm text-start mr-5 md:mr-5 mt-5 whitespace-pre-line flex-wrap text-wrap underline-offset-2">
            {text}
          </p>

          <div className=" md:hidden hide_scroll_bar md:first-line:h-screen mr-10 mt-10">
            <div className=" justify-end">
              <TesterApp />
            </div>
          </div>

          {/* <div className="flex-grow"></div> */}
        </div>

        <div className=" hidden hide_scroll_bar md:first-line:h-screen mr-10 md:flex md:flex-col md:justify-end">
          <div className=" justify-end">
            <TesterApp />
          </div>
        </div>
      </div>

      <div className="minor md:h-screen minor flex flex-col bg-Sidebar  overflow-y-scroll hide_scroll_bar">
        <div className="h-14 w-full md:flex justify-end items-center hidden ">
          <Link href="/">
            <Button className="mx-2 bg-red-400 text-Sidebar hover:bg-red-500">
              Cancel ❌
            </Button>
          </Link>
        </div>

        <div className="flex justify-start md:justify-center mx-5 md:mx-0 items-center">
          <div className="  w-[100%] md:w-auto">
            <ColorPicker />
            <DatePickerWithPresets />

            <Textarea
              value={text}
              onChange={handleTextChange}
              placeholder="Write what is in your mind..."
              className={`text-${color} pt-1 mt-2`}
              rows={3}
            />

            <MoodPicker />

            <div className="mt-2 flex gap-3">
              <Button
                onClick={() => {
                  setDiaryStatus(true);
                }}
                className={`${
                  diaryStatus
                    ? `bg-blue-300 text-sm`
                    : `bg-gray-500 py-1 text-sm`
                } `}
              >
                <Globe className="mr-2" size={18} /> Public
              </Button>

              <Button
                onClick={() => {
                  setDiaryStatus(false);
                }}
                className={`${
                  diaryStatus
                    ? ` text-sm bg-gray-500`
                    : ` bg-red-300 py-1 text-sm`
                }`}
              >
                <Lock className="mr-2" size={18} /> Private
              </Button>
            </div>

            <div className="flex-wrap mt-2 flex">
              <div className="flex-col w-max">
                <h2 className=" italic text  text-white text-sm text-wrap">
                  (use portrait image 😊)
                </h2>
                <div className="flex items-start">
                  <input
                    type="file"
                    className="hidden" // Hide the default file input
                    id="fileInput" // Add an id for label association
                    onChange={handleFile1}
                    multiple
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

            <div className=" flex gap-4 items-center">
              <Button
                onClick={handleSubmit}
                className={`my-3 text-sm bg-${color}`}
              >
                <NotebookPen size={18} className="mx-2 " />
                Create Diary
              </Button>

              <Button
                onClick={cancelHandler}
                className={`my-2 text-sm bg-red-400`}
              >
                {/* < size={18} className="mx-2 " /> */}
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
