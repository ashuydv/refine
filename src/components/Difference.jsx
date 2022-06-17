import React, { useState } from "react";
import Select from "react-select";

export const Difference = () => {
  const options = [
    {
      value: "Credit Card",
      title: "Credit Card",
      para: "A credit card is a payment card issued to users (cardholders) to enable the cardholder to pay a merchant for goods and services based on the cardholder's accrued debt ",
      src: "https://assets.website-files.com/61c293aa98cb80a28661cc90/61c293aa98cb80586561cd27_credit-card.svg",
      li1: "list 1",
      li2: "list 2",
      li3: "list 3",
      li4: "list 4",
      li5: "list 5",
    },
    {
      value: "Debit Card",
      title: "Debit Card",
      para: "A debit card (also known as a bank card, plastic card or check card) is a payment card that can be used in place of cash to make purchases.",
      src: "https://assets.website-files.com/61c293aa98cb80a28661cc90/61c293aa98cb80439761cd28_debit-card.svg",
      li1: "list 1",
      li2: "list 2",
      li3: "list 3",
      li4: "list 4",
      li5: "list 5",
    },
    {
      value: "Secured Card",
      title: "Secured Card",
      para: " If you have bad credit or no credit history at all, a secured credit card can be a good way to create a positive payment history and build up your credit score.",
      src: "https://assets.website-files.com/61c293aa98cb80a28661cc90/61c293aa98cb807c8461cd2a_secured-card.svg",
      li1: "list 1",
      li2: "list 2",
      li3: "list 3",
      li4: "list 4",
      li5: "list 5",
    },
  ];

  const [card, setCard] = useState(options[0]);
  const onchangeSelect = (item) => {
    setCard(item);
  };

  return (
    <div>
      <section class="text-gray-400 body-font bg-gradient-to-tr from-purple-900 to-black">
        <div class="container px-5 py-24 mx-auto w-5/6 ">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              What’s the Difference?
            </h1>
          </div>
          <div class="flex flex-wrap w-5/6 mx-auto">
            <div class="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-gray-50">
              <Select
                value={card}
                onChange={onchangeSelect}
                options={options}
                getOptionValue={(option) => option.value}
                getOptionLabel={(option) => option.value}
                className=" bg-black mb-4"
              />
              <img
                src={card.src}
                className="rounded w-1/2 mx-auto my-6"
                alt=""
              />
              <h2 class="text-lg sm:text-xl text-white font-medium title-font mb-2">
                {card.title}
              </h2>
              <p class="leading-relaxed text-base mb-4">{card.para}</p>
              <ul>
                <li>
                  <a>
                    <span class="bg-red-700 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <i class="fa-solid fa-xmark text-xs"></i>
                    </span>
                    {card.li1}
                  </a>
                </li>{" "}
                <li>
                  <a>
                    <span class="bg-red-700 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <i class="fa-solid fa-xmark text-xs"></i>
                    </span>
                    {card.li2}
                  </a>
                </li>{" "}
                <li>
                  <a>
                    <span class="bg-red-700 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <i class="fa-solid fa-xmark text-xs"></i>
                    </span>
                    {card.li3}
                  </a>
                </li>{" "}
                <li>
                  <a>
                    <span class="bg-red-700 text-white w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                      <i class="fa-solid fa-xmark text-xs"></i>
                    </span>
                    {card.li4}
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
