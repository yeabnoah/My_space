import { Registration } from "@/components/custom/home";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between pt-32 bg-secondary">
      <Registration />

      <div className=" flex-col md:flex md:flex-row mb-5">
        <h2
          className=" text-primary text-sm md:text-base text-center md:mb-10"
          style={{ fontFamily: "verdana" }}
        >
          Minespace.com
        </h2>
        <h2 className=" md:mx-2 hidden md:block text-primary text-sm md:text-base text-center font-inter md:mb-10">
          |
        </h2>
        <h2 className=" text-primary text-sm md:text-base text-center font-inter md:mb-10">
          Powered by TechNerd
        </h2>
      </div>
    </main>
  );
}
