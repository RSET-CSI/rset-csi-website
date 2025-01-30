"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  if (!isVisible) return null;

  return (
    <div className="fixed top-[4.5rem] left-0 right-0 z-50 mx-auto px-4 py-3 bg-white/40 backdrop-blur-md border-b border-white/10">
      {/* <div className="fixed top-[4.5rem] left-0 right-0 z-50 mx-auto px-4 py-3 bg-black/40 backdrop-blur-md border-b border-white/10"> */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1 text-center md:text-left">
          <p className="text-black text-sm md:text-base">
            Join us for{" "}
            <span className="font-bold text-[#3848f1]">Incubate 2025</span> -
            Transform your innovative ideas into reality! 🚀
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/ideathon")}
            className="px-4 py-1.5 text-sm text-white hover:text-[#3848f1] border border-white/20 rounded-full transition-colors"
          >
            Know More
          </button>
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSf6ONxz4NcmXVbX9TCOf2G6GlB1NXEJJwKtULKkoGUzade0tQ/viewform?usp=header",
                "_blank"
              )
            }
            className="px-4 py-1.5 text-sm bg-[#3848f1] hover:bg-[#2d3ac2] text-white rounded-full transition-colors"
          >
            Register Now
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1.5 text-white hover:text-[#ef43cf] rounded-full transition-colors"
            aria-label="Close banner"
          >
            <IoMdClose size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
