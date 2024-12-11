"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function StartPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/quiz");
  };

  return (
    <div className="w-full h-[90vh]">
      <Image
        src="/The sun.jpg"
        alt="background pic"
        fill={true}
        className="-z-50 object-cover pointer-events-none"
      />
      <div className="flex items-center justify-center h-[90vh]">
        <div className="text-center p-6 flex gap-4">
          <button
            className="bg-transparent text-4xl font-bold text-white px-5 hover:scale-105 hover:pr-16 hover:backdrop-blur-sm transition-transform"
            onClick={handleClick}
          >
            Descend into Madness →
          </button>
        </div>
      </div>
    </div>
  );
}
