import React from "react";
import { IconType } from "react-icons";
import {
  FcBullish,
  FcShipped,
  FcConferenceCall,
  FcBusiness,
  FcDepartment,
  FcDataSheet
} from "react-icons/fc";

export const RouteSelect = () => {
  return (
    <div className="space-y-1">
      <Route Icon={FcDepartment} selected={true} title="Enterprise Performance" />
      <Route Icon={FcDataSheet} selected={false} title="AIP" />
      <Route Icon={FcBusiness} selected={false} title="Sector Performance" />
      <Route Icon={FcConferenceCall} selected={false} title="People" />
      <Route Icon={FcBullish} selected={false} title="Finance" />
      <Route Icon={FcShipped} selected={false} title="Supplier" />
    </div>
  );
};

const Route = ({
  selected,
  Icon,
  title,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
}) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-violet-500" : ""} />
      <span>{title}</span>
    </button>
  );
};
