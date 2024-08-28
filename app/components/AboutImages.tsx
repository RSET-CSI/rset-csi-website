"use client";
import React from "react";
import { LayoutGrid } from "./ui/LayoutGrid";
import { thumbnails } from "../data";

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-sm md:text-4xl text-white">
        Last Meeting of Execom 2023
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-sm md:text-4xl text-white">
        Some Competition
      </p>
      <p className="font-normal text-xs md:text-base text-white"></p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-sm md:text-4xl text-white">Techy Showdown</p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-sm md:text-4xl text-white">Min To Win</p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 col-span-1",
    thumbnail: thumbnails[1],
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: thumbnails[2],
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: thumbnails[3],
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 col-span-1",
    thumbnail: thumbnails[4],
  },
];

export function AboutImages() {
  return (
    <div className="h-screen py-10 md:py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}
