import { Registration } from "@/components/custom/home";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between pt-32 bg-primary">
      <Registration />

      <div>
        <h2 className=" text-black font-inter mb-10">Minespace.com</h2>
      </div>
    </main>
  );
}
