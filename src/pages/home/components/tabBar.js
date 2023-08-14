import React from "react";
import TabCircle from "./tabCircle";

const TabBar = () => {
  return (
    <section className="min-h-[25px] bg-tab-color flex items-center justify-between px-[10px]">
      <section className="flex items-center gap-[5px]">
        <TabCircle backgroundColor="#FD5E56" />
        <TabCircle backgroundColor="#FDBC2E" />
        <TabCircle backgroundColor="#40ca53" />
      </section>
      <section className="text-sm font-bold text-tab-title">
        911VN (831)
      </section>
      <section></section>
    </section>
  );
};

export default TabBar;
