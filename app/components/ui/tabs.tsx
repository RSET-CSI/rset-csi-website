// components/Tabs.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
  imageUrl?: string; // Assuming tabs might have images
};

interface TabsProps {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);

  return (
    <div className="relative">
      {/* Tab Buttons */}
      <div
        className={cn(
          "flex overflow-x-auto md:overflow-visible whitespace-nowrap md:flex-row items-center",
          containerClassName
        )}
      >
        {propTabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActive(tab)}
            className={cn(
              "px-6 py-3 md:py-2 md:px-4 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
              tabClassName,
              active.value === tab.value ? activeTabClassName : "text-gray-600"
            )}
          >
            {tab.imageUrl && (
              <img
                src={tab.imageUrl}
                alt={`${tab.title} image`}
                className="w-6 h-6 md:w-10 md:h-10 mr-2" // Smaller on mobile, larger on desktop
              />
            )}
            {tab.title}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className={cn(
            "mt-4 rounded-xl p-8 bg-[rgba(17,25,40,0.4)] backdrop-blur-lg backdrop-saturate-150 border border-[rgba(255,255,255,0.125)]",
            contentClassName
          )}
          key={active.value}
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {active.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
