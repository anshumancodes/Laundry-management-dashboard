import React from "react";
import "../../index.css";
import Badges from "../global/Badges";
import Footer from "../global/Footer";

const Home = () => {
  return (
    <div>
      <section className="flex flex-col items-center gap-8">
        <div className="flex flex-col gap-5  mt-10 w-full justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <p className="text-sm prose prose-gray">
              seamless laundry management solution
            </p>
            <h1 className="text-3xl lg:text-6xl font-bold prose prose-neutral Zodiak">
              Shuddhi शुद्धि{" "}
            </h1>
            <p className="prose prose-gray text-gray-600 text-center">
              Your Spotless Solution for Kapda-Cleaning Convenience!
            </p>
          </div>
          <div className="flex gap-5">
            <a
              href=""
              className="text-center bg-[#0C121C] px-5 py-2 font-bold text-[#f5f5f5]"
            >
              <button>Get started</button>
            </a>
            <a
              href=""
              className="text-center bg-[#0C121C] px-5  py-2  font-bold text-[#f5f5f5]"
            >
              <button>Explore blog</button>
            </a>
          </div>
        </div>
        {/* img */}
        <div>
          <img src="/imgs/landing_page_1.jpg" alt="" className=" w-[300px] md:w-[450px] lg:w-[700px]" />
        </div>

        <div className="mt-[10vh]">
          <div>
            <h2 className="text-3xl font-bold prose prose-neutral Zodiak text-center">
              Built exclusively for you!
            </h2>
            <p className="prose prose-gray text-center">
              Doesn't matter how large your organization is, Shuddhi शुद्धि is
              your personalized laundry management solution
            </p>
          </div>
          <div className="flex gap-5 mt-[5vh] flex-wrap sm:justify-center">
            <Badges badgetext="Inventory management" bordercolor="blue-600" />
            <Badges badgetext="Billing" bordercolor="blue-600" />
            <Badges badgetext="Payment solutions" bordercolor="blue-600" />
            <Badges badgetext="Support" bordercolor="blue-600" />
          </div>
        </div>
        {/*  */}
        <div className="mt-[10vh]">
          <section class="relative overflow-hidden bg-gray-100 py-12 sm:py-16 lg:py-20">
            <div class="absolute h-72 w-72 scale-125 -right-8 -bottom-10">
              <div class="absolute h-60 w-60 rounded-2xl border-4 border-blue-600"></div>
              <div class="absolute h-60 w-60 translate-x-3 translate-y-3 rounded-2xl border-4 border-blue-600"></div>
              <div class="absolute h-60 w-60 translate-x-6 translate-y-6 rounded-2xl border-4 border-blue-600"></div>
            </div>
            <div class="mx-auto px-4 sm:px-6 lg:px-8">
              <div class="sm:text-center">
                <h2 class="text-3xl font-semibold leading-7 text-gray-900 sm:text-4xl xl:text-5xl">
                  Conviently manage
                  <br class="sm:hidden" />, track all activities
                </h2>
                <hr class="mt-4 h-1.5 w-32 border-none bg-blue-600 sm:mx-auto sm:mt-8" />
              </div>

              <div class="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
                <div class="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
                  <p class="relative text-5xl font-black text-blue-600">
                    seamless payments
                  </p>
                  <img
                    src="/imgs/upi-1.webp"
                    alt="upi"
                    className="w-[90px] mt-4"
                  />
                  <p class="relative mt-5 text-gray-600">
                    Built in Upi integration,Effortlessly manage payments with our built-in UPI integration. Seamlessly accept payments, process transactions, and ensure secure transactions directly from your customers' bank accounts.
                  </p>
                </div>

                <div class="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
                  <p class="relative text-5xl font-black text-blue-600">
                    Manage and track order
                  </p>
                  <p class="relative mt-5 text-gray-600">
                    Track , add and manage N number of orders Conviently from
                    single dashboard
                  </p>
                </div>

                <div class="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
                  <p class="relative m-0 text-5xl font-black text-blue-600">
                    Built-in Customer suport
                  </p>
                  <p class="relative mt-5 text-gray-600">
                    Handle customer complaints, get feedback, and provide timely
                    assistance with our comprehensive support system.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer/>
      </section>

    </div>
  );
};

export default Home;
