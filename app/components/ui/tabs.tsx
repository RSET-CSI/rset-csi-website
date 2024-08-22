// components/Tabs.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

type Tab = {
  title: string;
  value: string;
  content?: React.ReactNode;
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
      <div
        className={cn("flex items-center overflow-auto", containerClassName)}
      >
        {propTabs.map((tab) => (
          <button
            key={tab.title}
            onClick={() => setActive(tab)}
            className={cn(
              "px-4 py-2 rounded-full transition-colors duration-300",
              tabClassName,
              active.value === tab.value ? activeTabClassName : "text-gray-600"
            )}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <motion.div
        className={cn("mt-4", contentClassName)}
        key={active.value}
        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {active.content}
      </motion.div>
    </div>
  );
};
