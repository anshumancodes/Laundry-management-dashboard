import React from "react";

const Selector = ({activeorders}) => {
  return (
    <div>
      <div className="bg-[#0C121C] justify-center flex gap-3 py-4 px-4 text-white w-[1000px]">
        <label htmlFor="label" className="font-bold">
          Outsourced agent:
        </label>
        <div >
          <form action="" className="flex gap-2">
            <select
              name="cars"
              id="cars"
              className="w-[200px] bg-white text-black outline-none"
            >
              <option value="volvo">select a outsourcer</option>
              <option value="saab">konkani summguler</option>
              <option value="opel">bangladeshi agent </option>
              <option value="audi">bismillah traders</option>
            </select>

            <select
              name="months"
              id="months"
              className="w-[200px] bg-blue-600 text-black outline-none"
            >
              <option value="select">Select month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </form>
        </div>
        <label htmlFor="active">Active:</label>
        <a href="">{activeorders}</a>
      </div>
    </div>
  );
};

export default Selector;
