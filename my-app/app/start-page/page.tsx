"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function StartPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/quiz");
  };

  return (
    <div className="relative w-full h-screen">
      <Image
        src="/1.png"
        alt="background pic"
        fill={true}
        objectFit="cover"
        className="-z-50"
      />
            <div className="flex items-center justify-center h-screen">
        <div className="text-center p-6 flex gap-4 hover:scale-105 transition-transform">
          
              <button className="bg-transparent text-4xl font-bold text-white px-5 hover:pr-8" onClick={handleClick}>
              Descend into Madness →
            </button>
         
        </div>
      </div>
    </div>
  );
}
