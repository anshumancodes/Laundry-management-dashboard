import React from "react";
import SideBar from "../global/SideBar";
import Selector from "../global/Selector";

const Inventory = () => {
  return (
    <div>
      <div className="flex gap-2 flex-col lg:flex-row">
        <SideBar />
        <div className="mt-5 flex flex-col  w-full">
          <Selector activeorders="78" />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
