import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer class=" text-white bg-gradient-to-t from-gray-800 to-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-bold items-baseline md:justify-start justify-center text-white">
              <img src="" alt="" className="img-header" />
              Tailblocks
            </a>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="md:w-1/4 w-full px-3">
              <h2 class="title-font font-bold text-white tracking-widest text-md mb-3 text-left">
                Company
              </h2>
              <nav class="list-none mb-10 text-left">
                <li>
                  <a
                    target="_blank"
                    class="text-white"
                    href="https://discord.gg/Nc8S5PtygK"
                  >
                    Discord Server
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    class="text-white"
                    href="https://chat.whatsapp.com/Cf7QS5vT6lpB4eEaCzjLwF"
                  >
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a target="_blank" class="text-white" href="#">
                    Euphoria(Coming Soon){" "}
                  </a>
                </li>
                <li class="text-white">
                  <a id="vNP9UKDQ">Work with us</a>
                </li>
                <li>
                  <a
                    target="_blank"
                    class="text-white"
                    href="https://www.instagram.com/geniegradz/"
                  >
                    Gamified Learning
                  </a>
                </li>
                <li class="text-white">
                  <a id="HVMPhJwm" className="text-left">
                    Students Developer Program
                  </a>
                </li>
              </nav>
            </div>
            <div class="md:w-1/4 w-full px-3">
              <h2 class="title-font font-bold text-white tracking-widest text-md mb-3 text-left">
                Products
              </h2>
              <nav class="list-none mb-10 text-left">
                <li>
                  <a
                    target="_blank"
                    class="text-white"
                    href="https://drive.google.com/drive/folders/17GnHECDg3C0MOTO95HUM9xnEKHp_6V6W?usp=sharing"
                  >
                    Meme Cheatsheets
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    class="text-white"
                    href="https://drive.google.com/drive/folders/1bt_HGGKR5VClorXPmc7m6ZAbZSfKIIi9?usp=sharing"
                  >
                    Interactive Classes
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    class="text-white"
                    href="https://calendly.com/brainzeo-edtech/brainzeo-walkthrough-30-mins?month=2021-09"
                  >
                    Book A Walk Through
                  </a>
                </li>
                <li class="text-white">
                  <a id="CrjTHkbZ">Newsletters</a>
                </li>
                <li>
                  {/* <Link target="_blank" to="/periodic">Periodic Table</Link> */}
                  <a
                    target="_blank"
                    href="/periodic"
                    className="text-white cursor-pointer"
                  >
                    Periodic Table
                  </a>
                </li>
              </nav>
            </div>
            <div class="md:w-1/4 w-full px-3">
              <h2 class="title-font font-bold text-white tracking-widest text-md mb-3 text-left">
                About
              </h2>
              <nav class="list-none mb-10 text-left">
                <li>
                  <a
                    target="_blank"
                    href="/Privacy"
                    className="text-white cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="/Services"
                    className="text-white cursor-pointer"
                  >
                    Live Mentorship T&C
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    exact
                    href="/Guidelines"
                    className="text-white cursor-pointer"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    exact
                    href="/Refund"
                    className="text-white cursor-pointer"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    exact
                    href="/Code"
                    className="text-white cursor-pointer"
                  >
                    Code of Conduct
                  </a>
                </li>
              </nav>
            </div>
            <div class="md:w-1/4 w-full px-3">
              <h2 class="title-font font-bold text-white tracking-widest text-md mb-3 text-left">
                Contact Us
              </h2>
              <nav class="list-none mb-10 text-left">
                <li>
                  <a
                    target="_blank"
                    href="support@geniegradz.com"
                    className="text-white cursor-pointer"
                  >
                    support@geniegradz.com
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    24, Shreemant Niwas, <br />
                    Jay Bhavani Nagar, Majiwada, <br />
                    Thane(W) - 400601
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    +91 9702841901
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div class="bg-gray-900">
          <div class="container mx-auto pt-6 pb-2 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-white text-md text-center sm:text-left copyright">
              © Copyrights 2021 —
              <a
                href="https://www.instagram.com/brainzeo/"
                rel="noopener noreferrer"
                class="text-white ml-1"
                target="_blank"
              >
                @Refine
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start footer-medias ">
              <a
                target="_blank"
                class="ml-3 mb-3 text-white footer-media"
                href="https://www.facebook.com/profile.php?id=100071618354062"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                target="_blank"
                class="ml-3 mb-3 text-white footer-media"
                href="https://twitter.com/GenieGradz"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                target="_blank"
                class="ml-3 mb-3 text-white footer-media"
                href="https://www.instagram.com/geniegradz/"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                target="_blank"
                class="ml-3 mb-3 text-white footer-media"
                href="https://www.linkedin.com/in/geniegradz/"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
