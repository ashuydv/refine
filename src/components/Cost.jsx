import React from "react";
import car from "../assets/car.png";
import emoji1 from "../assets/emoji1@2x.png";
import emoji2 from "../assets/emoji2@2x.png";
import emoji3 from "../assets/emoji3@2x.png";

export const Cost = () => {
  return (
    <div>
      <section className="text-gray-400 body-font bg-gradient-to-br from-purple-900 to-black">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              The Cost of Having Bad Credit
            </h1>
            <h2 className="sm:text-xl text-xl font-normal mb-4 text-white">
              Toyota Corolla / 72 months / $25,000
            </h2>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div>
            <img
              src={car}
              alt="Car"
              className=" flex mx-auto items-center justify-center text-center"
            />
          </div>
          <div className="flex flex-wrap -m-4 my-4">
            <div className="xl:w-1/2 md:w-1/2 p-4">
              <div className="backdrop-filter backdrop-blur p-6 rounded-lg border shadow-xl">
                <h2 className="text-lg relative text-white font-medium title-font mb-1 flex items-center justify-start">
                  <div className="">
                    <img
                      src={emoji1}
                      alt=""
                      className=" w-32 absolute -top-16 -left-10"
                    />
                  </div>
                  <div className=" pl-20">Person 2</div>
                </h2>
                <ul className=" mt-6">
                  <li className="flex items-center justify-between">
                    <div>Credit Score</div>
                    <div>600</div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>Interest Rate</div>
                    <div>11.33%</div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>Total Payments Mode</div>
                    <div>$34,566</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:w-1/2 md:w-1/2 p-4">
              <div className="backdrop-filter backdrop-blur p-6 rounded-lg border-2 border-cyan-400 shadow-xl">
                <h2 className="text-lg relative text-white font-medium title-font mb-1 flex items-center justify-start">
                  <div className="">
                    <img
                      src="https://assets.website-files.com/61c293aa98cb80a28661cc90/61c293aa98cb807d0961ccdb_memoji-2%20head.png"
                      alt=""
                      className=" w-32 absolute -top-16 -left-10"
                    />
                    <img
                      src={emoji3}
                      alt=""
                      className=" w-32 absolute -top-16 -left-10"
                    />
                  </div>
                  <div className=" pl-20">Person 2</div>
                </h2>
                <ul className=" mt-6">
                  <li className="flex items-center justify-between">
                    <div>Credit Score</div>
                    <div>600</div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>Interest Rate</div>
                    <div>11.33%</div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>Total Payments Mode</div>
                    <div>$34,566</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white backdrop-filter backdrop-blur shadow-lg py-2 px-8 focus:outline-none rounded text-lg">
            Person 2 ends up saving $6,000+ <br /> thanks to a better credit
            score!
          </button>
        </div>
      </section>
    </div>
  );
};
