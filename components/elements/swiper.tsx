import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import fun from "../../public/one.avif";
import test from "../../public/2222.jpg";
import okay from "../../public/111.jpg";
import mask from "../../public/ok.avif";
import "swiper/css";
import "swiper/css/effect-cards";
import "../../app/globals.css";
import { EffectCards } from "swiper/modules";
import useDate from "@/context/date";
import useImage from "@/context/images";

export default function TesterApp() {
  const { setDateGet, dateGet } = useDate();
  // const images = [fun, test, okay, mask];
  const { images, setImages } = useImage();
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper mb-10 "
      >
        {images &&
          images.map((each: any) => {
            return (
              <SwiperSlide
                key={each}
                className=" rounded-full bg-[#FFFAE6]  flex flex-col justify-start"
              >
                <Image
                  src={each}
                  alt="test"
                  width={180}
                  height={320}
                  className=" h-56 "
                />

                <div className=" flex justify-start items-center pt-2">
                  <h2 className=" text-Sidebar text-base text-start">
                    {dateGet}
                  </h2>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
