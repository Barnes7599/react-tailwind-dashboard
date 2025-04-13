import React from "react";
import { IconName } from "react-icons/fc";
import {
  FcCalendar
} from "react-icons/fc";

const today = new Date().toLocaleDateString();

export const TopBar = () => {
  return (
    <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-sm font-bold block">🚀 Good morning, Jason!</span>
          <span className="text-xs block pt-1 text-stone-500">
            {today}
          </span>
        </div>
        <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded">
          <FcCalendar />
          <span>Prev 6 Months</span>
        </button>
      </div>
    </div>
  );
};
