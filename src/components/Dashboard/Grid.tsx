import React from "react";
import { StatCards } from "./StatCards";
import { LineGraph } from "./LineGraph";
import { UsageRadar } from "./UsageRadar";
import { RecentTransactions } from "./RecentTransactions";
import { ActivityGraph } from "./ActivityGraph"

export const Grid = () => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <StatCards />
      <LineGraph />
      <ActivityGraph />
      <UsageRadar />
      <RecentTransactions />
    </div>
  );
};
