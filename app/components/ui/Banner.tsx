/*

This Banner component was created for incubate. 
This component can be reused for all coming events. 
Remember to change the colors and data accordingly.

*/

// "use client";
// import React, { useState, useEffect } from "react";
// import { IoMdClose } from "react-icons/io";
// import { useRouter } from "next/navigation";

// const Banner = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [timeRemaining, setTimeRemaining] = useState(0);
//   const router = useRouter();

//   const targetDate = new Date("February 10, 2025 18:00:00 GMT+0530").getTime();

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const currentTime = new Date().getTime();
//       setTimeRemaining(targetDate - currentTime);
//     }, 1000);

//     return () => clearInterval(intervalId);
//   }, [targetDate]);

//   const calculateTimeLeft = (time: number) => {
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((time % (1000 * 60)) / 1000);

//     return { days, hours, minutes, seconds };
//   };

//   const { days, hours, minutes, seconds } = calculateTimeLeft(timeRemaining);

//   if (!isVisible) return null;

//   return (
//     <div className="fixed top-[4.5rem] left-0 right-0 z-50 mx-auto px-4 py-3 bg-white/40 backdrop-blur-md border-b border-white/10">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
//         <div className="flex-1 text-center md:text-left">
//           <p className="text-black text-sm md:text-base">
//             Join us for{" "}
//             <span className="font-bold text-red-600">Incubate 2025</span> -
//             Transform your innovative ideas into reality! 🚀 [Registerations are
//             closed !!]
//           </p>

//           {/* <div className="text-black text-sm mt-2">
//             <span className="font-bold text-red-600">{days}</span> d{" "}
//             <span className="font-bold text-red-600">{hours}</span> h{" "}
//             <span className="font-bold text-red-600">{minutes}</span> min{" "}
//             <span className="font-bold text-red-600">{seconds}</span> sec
//             remaining
//           </div> */}
//         </div>

//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => router.push("/ideathon")}
//             className="px-4 py-1.5 text-sm text-white hover:text-red-600 border border-white/20 rounded-full transition-colors"
//           >
//             Know More
//           </button>
//           {/* <button
//             onClick={() =>
//               window.open(
//                 "https://docs.google.com/forms/d/e/1FAIpQLSf6ONxz4NcmXVbX9TCOf2G6GlB1NXEJJwKtULKkoGUzade0tQ/viewform?usp=header",
//                 "_blank"
//               )
//             }
//             className="px-4 py-1.5 text-sm bg-red-600 hover:bg-red-800 text-white rounded-full transition-colors"
//           >
//             Register Now
//           </button> */}
//           <button
//             onClick={() => setIsVisible(false)}
//             className="p-1.5 text-white hover:text-[#ef43cf] rounded-full transition-colors"
//             aria-label="Close banner"
//           >
//             <IoMdClose size={20} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
