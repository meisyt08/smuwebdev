"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function StartPage() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/1.png"
        alt="background pic"
        fill={true}
        object-fit="cover"
        className="-z-50"
      />
      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-white p-6 flex gap-4">
          <Button className="bg-transparent text-4xl font-bold border border-white rounded-lg px-8 py-8 transition-transform hover:bg-transparent hover:scale-105">
            Descend into Madness →
          </Button>
        </div>
      </div>
    </div>
  );
}
