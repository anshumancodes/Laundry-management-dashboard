import React from "react";

const BillingForm = () => {
  return (
    <div>
      <form class="relative space-y-3 rounded-md bg-white p-6 shadow-xl lg:p-10  border-gray-400 border-[4px] m-10">
        <div>
          <label class=""> Customer Name </label>
          <input
            type="text"
            placeholder="Username"
            class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>
        <div class="">
          <label class=""> Email Address </label>
          <input
            type="email"
            placeholder="Info@example.com"
            class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>
        <div>
          <label class=""> phone Number </label>
          <input
            type="phone"
            placeholder="+91 "
            class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>
        <div>
          <label class="">Date of order </label>
          <input
            type="date"
            placeholder="dd/mm/yy"
            class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring text-gray-400"
          />
        </div>
        <div>
          <label class="">month of order </label>
          <input
            type="month"
            placeholder="dd/mm/yy"
            class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring text-gray-400"
          />
        </div>
        <div>
          <label class=""> Garment Type </label>
          <input
            type="select"
            placeholder=" garment type"
            class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
          />
        </div>

        <div className="w-full">
          <select
            name="cars"
            id="cars"
            className=" text-black outline-none w-full px-2 py-3"
          >
            <option value="volvo">select a outsourcer</option>
            <option value="saab">konkani summguler</option>
            <option value="opel">bangladeshi agent </option>
            <option value="audi">bismillah traders</option>
          </select>
        </div>
        <div>
          <button
            type="button"
            class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring"
          >
            Create order
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;
