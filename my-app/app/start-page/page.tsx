// "use client";

// import Image from "next/image";
// import { useRouter } from "next/navigation";

// export default function StartPage() {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push("/quiz");
//   };



//   return (
//     <div className="w-full h-[90vh]">
//       <Image
//         src="/The sun.jpg"
//         alt="background pic"
//         fill={true}
//         className="-z-50 object-cover pointer-events-none"
//       />
//       <div className="flex items-center justify-center h-[90vh]">
//         <div className="text-center p-6 flex gap-4">
//           <button
//             className="bg-transparent text-4xl font-bold text-white px-5 hover:scale-105 hover:pr-16 hover:backdrop-blur-sm transition-all"
//             onClick={handleClick}
//           >
//             Descend into Madness →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function StartPage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/quiz");
  };

  return (
    <div className="w-full h-screen relative group">
      {/* Background image with blur effect on hover */}
      <Image
        src="/The sun.jpg"
        alt="background pic"
        layout="fill"
        className="-z-50 object-cover pointer-events-none transition-all group-hover:backdrop-blur-lg"
      />
      {/* Content area */}
      <div className="flex items-center justify-center h-screen">
        <div className="text-center p-6 flex gap-4">
          {/* Button to trigger the hover effect */}
          <button
            className="bg-transparent text-4xl font-bold text-white px-5 hover:scale-105 hover:pr-16 hover:backdrop-blur-sm transition-all"
            onClick={handleClick}
            aria-label="Start the quiz"
          >
            Descend into Madness →
          </button>
        </div>
      </div>
    </div>
  );
}
