import React from "react";
import { Vortex } from "./ui/Vortex";
import { MagicBoarderButton } from "./ui/MagicBoarderButton";

const JoinUs = () => {
  const handleJoinNowClick = () => {
    window.open("https://forms.gle/Ki5KcqEmon7TU4cx6", "_blank"); // Replace with your actual link
  };

  return (
    <div
      className="w-full h-[30rem] overflow-hidden" // Full width to take up the entire screen
      id="join"
    >
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-4 md:px-10 py-8 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
          Join RSET CSI Student Branch
        </h2>
        <p className="text-white text-sm md:text-xl max-w-2xl mt-4 text-center">
          Be a part of the largest community of tech enthusiasts, innovators,
          and professionals at our college. Unlock opportunities for learning,
          networking, and professional growth with the CSI Student Branch!
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button
            onClick={handleJoinNowClick}
            className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#3848f1] hover:text-white dark:text-neutral-200 transition duration-200"
          >
            Join Now
          </button>
        </div>
      </Vortex>
    </div>
  );
};

export default JoinUs;
