import React from "react";
import SideBar from "../global/SideBar";
import Selector from "../global/Selector";
import BillingForm from "./BillingForm";

const Billing = ({ActiveOrders}) => {
  return (
    <div>
      <div className="flex gap-[4vw]">
        <SideBar />

        <div className="mt-[4vh] flex flex-col gap-[4vh]">
          <Selector activeorders={ActiveOrders} />

          <div className="bg-[#0C121C] flex flex-col gap-2 items-center justify-center" >
            <div className="bg-[#7148FC] w-[400px] px-4 py-2 font-bold text-white mt-5 text-center">Create New Order</div>
            <form action="POST">
              <BillingForm/>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Billing;
