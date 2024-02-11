import React from "react";

const Footer = () => {
  return (
    <section className="w-full flex justify-center bg-gray-100 py-10 ">
      <footer className=" flex-wrap flex flex-col ">
        <div className=" flex-col lg:flex-row flex gap-[3vw]">
          <div>
            <h3 className=" prose prose-neutral font-bold text-2xl text-blue-600">
              Shuddhi-शुद्धि{" "}
            </h3>
          </div>
          <div className="flex flex-col gap-[2vh]">
            <label htmlFor="FOLLOW US" className="font-bold">
              FOLLOW US
            </label>
            <a href="" className="prose prose-gray">
              Github
            </a>
          </div>
          <div className="flex flex-col gap-[2vh]">
            <label htmlFor="LEGAL" className="font-bold">
              LEGAL
            </label>

            <a href="" className="prose prose-gray">
              {" "}
              Privacy Policies
            </a>
            <a href="" className="prose prose-gray">
              Terms & Conditions
            </a>
          </div>
          <div className="flex flex-col gap-[2vh]">
            <label htmlFor="LEGAL" className="font-bold">
              RESOURCES
            </label>

            <a href="" className="prose prose-gray">
              blogs
            </a>
            <a href="" className="prose prose-gray">
              source code
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center lg:mt-[10vh] gap-2 mt-[5vh]"><a href="">{new Date().getFullYear()+" "}</a> <a href="">Shuddhi-शुद्धि  , All Rights Reserved.</a></div>
      </footer>
      
    </section>
  );
};

export default Footer;
