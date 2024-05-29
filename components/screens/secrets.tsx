import Image from "next/image";
import React from "react";
import rain from "../../public/thunderstorm-lightning-clip-art-thunder-removebg-preview.png";

function Secrets() {
  return (
    <div className="md:w-[81%] h-full overflow-y-scroll pt-10 px-5 md:mx-10 hide_scroll_bar courier-prime-regular flex justify-center items-center">
      <div>
        {/* <h3 className=" text-center text-white  text-base">
          Secret pages
        </h3> */}
        <Image
          src={rain}
          alt="fature_rain"
          height={300}
          width={300}
          className=" md:ml-32"
        />
        <h3 className=" text-center text-white  text-base">
          Feature rain coming soon !!
        </h3>
        <h3 className=" text-center text-white  text-base">
          For any info use @Technerd345 on telegram
        </h3>

        <h4 className=" text-center text-white  text-base">
          For any one curious this is anonymous secrete sharing page
        </h4>
      </div>
    </div>
  );
}

export default Secrets;
