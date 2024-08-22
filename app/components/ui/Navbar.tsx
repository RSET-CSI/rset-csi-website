"use client";

import React from "react";
import Link from "next/link";
import { cn } from "../../../utils/cn";
import { smoothScrollTo } from "@/utils/smoothscroll";

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    e.preventDefault();
    smoothScrollTo(link);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-[5000] py-4",
        className
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/csi_logo.png" // Replace with your logo URL
            alt="Logo"
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold text-neutral-600 dark:text-neutral-50">
            CSI Student Branch
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-2 text-sm font-medium text-neutral-600 dark:text-neutral-50 hover:text-neutral-500 dark:hover:text-neutral-300"
              )}
              onClick={(e) => handleLinkClick(e, navItem.link)}
            >
              <span>{navItem.icon}</span>
              <span>{navItem.name}</span>
            </a>
          ))}
          <button className="border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <a href="#join">
              <span>Join Us</span>
            </a>
            {/* <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" /> */}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
