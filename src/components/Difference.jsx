import React from "react";

export const Difference = () => {
  return (
    <div>
      <section class="text-gray-400 body-font bg-gradient-to-tr from-purple-900 to-black">
        <div class="container px-5 py-24 mx-auto w-5/6 ">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              What’s the Difference?
            </h1>
          </div>
          <div class="flex flex-wrap">
            <div class="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-gray-50">
              <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
                The Catalyzer
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <ul>
                <li>
                  <a>
                    <span class="bg-red-700 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <i class="fa-solid fa-xmark text-xs"></i>
                    </span>
                    Security Deposit Required
                  </a>
                </li>{" "}
                <li>
                  <a>
                    <span class="bg-red-700 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <i class="fa-solid fa-xmark text-xs"></i>
                    </span>
                    Up to 17% Interest
                  </a>
                </li>{" "}
                <li>
                  <a>
                    <span class="bg-red-700 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <i class="fa-solid fa-xmark text-xs"></i>
                    </span>
                    Hard Credit Checks
                  </a>
                </li>{" "}
                <li>
                  <a>
                    <span class="bg-red-700 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <i class="fa-solid fa-xmark text-xs"></i>
                    </span>
                    Frustrating Customer Support
                  </a>
                </li>
              </ul>
            </div>
            <div class="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-50">
              <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
                Shooting Stars
              </h2>
              <p class="leading-relaxed text-base mb-4">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
              <ul>
                <li>
                  <a>
                    <span class="bg-green-700 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <i class="fa-solid fa-check text-xs"></i>
                    </span>
                    Debit that build credit1
                  </a>
                </li>{" "}
                <li>
                  <a>
                    <span class="bg-green-700 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <i class="fa-solid fa-check text-xs"></i>
                    </span>
                    No Security Deposit
                  </a>
                </li>{" "}
                <li>
                  <a>
                    <span class="bg-green-700 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <i class="fa-solid fa-check text-xs"></i>
                    </span>
                    No Credit Checks
                  </a>
                </li>{" "}
                <li>
                  <a>
                    <span class="bg-green-700 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <i class="fa-solid fa-check text-xs"></i>
                    </span>
                    24/7 White Glove Concierge Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button class="flex mx-auto mt-16 text-white bg-gradient-to-b from-purple-800 to-gray-900 shadow border-0 py-2 px-8 focus:outline-none hover:shadow-2xl rounded text-lg">
            Join Waitlist
          </button>
        </div>
      </section>
    </div>
  );
};
