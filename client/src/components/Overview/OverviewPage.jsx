import React from "react";
import Nav from "../global/Nav";

const OverviewPage = () => {
  const cardsData = [
    {
      key: 1,
      text: "Your Orders",
      bgColor: "#8EC5FC",
      backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
      page:"/dashboard/inventory"
    },
    {
      key: 2,
      text: "Support",
      bgColor: "#4158D0",
      backgroundImage: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      page:"/support"
    },
    {
      key: 3,
      text: "Payments",
      bgColor: "#FBAB7E",
      backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
      page:"/dashboard/payment"
    },
    {
        key: 4,
        text: "Getting started",
        bgColor: "#00DBDE",
        backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
    

        page:"/"
      },
  ];

  return (
    <div>
      <main className="flex flex-col w-full justify-center items-center">
        <Nav />
        <h1 className="font-bold text-black text-2xl lg:text-3xl mt-10">
          Welcome to the Shuddhi-शुद्धि platform
        </h1>
        <div className="flex gap-4 lg:w-[800px] flex-wrap mt-5">
          {cardsData.map((card) => (
            <a href={card.page}>
                <div
              key={card.key}
              className={`rounded-lg p-4 m-2 bg-${card.bgColor} `}
              style={{ backgroundImage: card.backgroundImage }}
            >
              <h3 className="pt-16 pb-2 pr-32 pl-2 text-white font-extrabold text-2xl">{card.text}</h3>
            </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;

