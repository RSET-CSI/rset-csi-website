// import React from "react";

// export const MagicBoarderButton = ({
//   text,
//   icon,
//   position,
//   handleClick,
//   otherClasses,
// }: {
//   text: string;
//   icon: React.ReactNode;
//   position: string;
//   handleClick?: () => void;
//   otherClasses?: string;
// }) => {
//   return (
//     <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none  w-full md:w-60 md:mt-10 ">
//       <span
//         className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#87CEFA_0%,#1E90FF_50%,#87CEFA_100%)]
// "
//       />
//       <span
//         className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black-100 px-7  text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
//       >
//         {position === "left" && icon}
//         {text}
//         {position === "right" && icon}
//       </span>
//     </button>
//   );
// };

import React from "react";

export const MagicBoarderButton = ({
  text,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  text: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none w-full md:w-60 md:mt-10 cursor-pointer"
      onClick={() => console.log("clicked")}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ef43cf_0%,#3848f1_50%,#ef43cf_100%)] rounded-full" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-7 text-sm font-medium text-white gap-2 ${otherClasses}`}
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)", // Add this for Safari support
        }}
      >
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </span>
    </button>
  );
};
