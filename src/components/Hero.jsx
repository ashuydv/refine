import React from "react";
import Slider from "react-slick";
import "./Hero.css";

export const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <section class="text-gray-50 bg-gradient-to-tl from-black to-purple-900 body-font">
        <div class="first-cont-home">
          <div class="message-area">
            <div class="landing-left-side">
              <div class="landing-message">
              Debit that builds credit.
              </div>
              <div class="landing-message-det">
                With our secured credit card we give a portion of your existing
                bank balance to spend as credit ,we bear your bills for 24 hrs
                and later the same amount is deducted from your account .After
                30 days this transaction are reported to the credit bureau
              </div>
              <div
                class="landing-left-btns mob-hide"
                style={{ marginTop: "2rem" }}
              >
                <button
                  class="MuiButtonBase-root MuiButton-root MuiButton-text start-exp-btn"
                  tabindex="0"
                  type="button"
                  style={{ cursor: "pointer" }}
                >
                  <span class="MuiButton-label">Start Exploring</span>
                  <span class="MuiTouchRipple-root"></span>
                </button>
                <div class="tour-btn">
                  <button
                    class="MuiButtonBase-root MuiButton-root MuiButton-text tour-btn"
                    tabindex="0"
                    type="button"
                    style={{ marginBottom: "1rem", cursor: "pointer" }}
                  >
                    <span class="MuiButton-label">
                      <div class="d-flex align-items-center justify-content-center">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBjVBLTgJBFKxqhngM5iouTdzoRkNCbEg4gCfQIxhXrpgJiU7ihsToWryIgzfAA9DP97pn8IMEaib9rXpVrwHDfb+HPeE6074nWLuHQY1q4HcKVkQPAgqQkyzc40WByudbBQgg9KeOOokKPbuo3Wx0hdmm0CmMqDrj2ipBglyT7rXzNPK/BAHBiJopekDUJd4kaR6EBZ/HdevWREoEpm/twngYx5wH3Xe8jL1D1lS06nG53jb7OEtUuo45OP7pK0X8NrKDN1mFQxzdlZlrGJadbTinPdtbk5+CcInjSdmKs+CMu2GxROCtkm9wUi5/3mWpZtOsmBPnuhnidLLAP1BB+LDHEuFCgwxxNp1jJ6rzHHviC7xKYfGLjZDHAAAAAElFTkSuQmCC"
                          class="next-icon"
                          alt="next-icon"
                        />
                        <div class="px-1">Request Callback</div>
                      </div>
                    </span>
                    <span class="MuiTouchRipple-root"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="ll mob-hide carousel-area">
            <Slider {...settings}>
              <div
                data-index="-1"
                tabindex="-1"
                class="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "297px" }}
              >
                <div>
                  {" "}
                  <a
                    href="/idea/Road-Roller"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="landing-right-side mob-hide">
                      <div>
                        <img
                          class="logo-card"
                          src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/roadRoller.jpg"
                          alt="logo-card"
                        />
                      </div>
                      <div
                        class=" wht-clr"
                        style={{ marginTop: "0.5rem", fontSize: "1.75rem" }}
                      >
                        Road Roller
                      </div>
                      <div
                        class="light-wht-clr"
                        style={{
                          fontSize: "1rem",
                          textAlign: "center",
                          padding: "10px 0px",
                          height: "4rem",
                        }}
                      >
                        H.G. Infra Engineering Limited was incorporated in 2003
                        in Jodhpur, Rajasthan. It is primarily invol..
                      </div>
                      <div class="strat-card-bot">
                        <div class="card-bot">
                          <div class="wht-clr" style={{ fontSize: "1rem" }}>
                            P/L
                          </div>
                          <div
                            class=""
                            style={{
                              display: "flex",
                              fontSize: "1rem",
                              alignItems: "center",
                              marginTop: "0.5rem",
                            }}
                          >
                            <p
                              class="red-clr "
                              style={{ marginRight: "0.3rem" }}
                            >
                              -8.2 %
                            </p>
                            <svg
                              width="20"
                              height="14"
                              viewBox="0 0 32 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              transform="scale(1,-1)"
                            >
                              <path
                                d="M17.2666 3H29M29 3V14.7333M29 3L17.2666 14.7333L11.4 8.86667L2.59998 17.6667"
                                stroke="#FF5863"
                                stroke-width="4.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div class="card-bot">
                          <div class="wht-clr" style={{ fontSize: "1rem" }}>
                            NIFTY
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "1rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            <p class="grn-clr ">+8 %</p>
                            <img
                              src="/static/media/gain_homepage.3c973142.svg"
                              alt="stonk"
                              class="stonk-icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://stratzy.sng.link/Ae6sj/phhc/b023"
                    class="deks-hide mob-div1-card d-flex align-items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ marginRight: "1rem" }}>
                      <img
                        class="logo-card"
                        src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/roadRoller.jpg"
                        alt="logo-card"
                      />
                      <div class="d-flex mob-slide">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          class=" mob-slide-dot"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAHCAYAAABp0096AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACDSURBVHgBxdKxEYJQEATQXWbMLYGGtAVtAMEK9JfgaAF2QAI5JdABdEAF3PIH/hCQw3/RXbQ3s0cESf3IJb39eMb+ehkcrt8/Q/grhB9KwDOZB6lABCRyoixSnsYOkcwVsMoGHNP9Nr5dKoA5RCAzx3Wrs7t/hpu/KsXeqBaGDy6/ZgKNPimGPZR0IAAAAABJRU5ErkJggg=="
                          class="mob-slide-line"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          class=" mob-slide-dot"
                          alt="dot"
                        />
                      </div>
                    </div>
                    <div class="">
                      <div class="font-sz-20 wht-clr">Road Roller</div>
                      <div class="card-text-mob">
                        H.G. Infra Engineering Limited was incorporated in 2003
                        in Jodhpur, Rajasthan. It is primarily involved in
                        infrastructure development and the construction of ro..
                      </div>
                      <div class="d-flex">
                        <div class=" pr-2">
                          <div class="wht-clr px-2 cagr">5Y CAGR</div>
                          <div class="grn-clr px-2 py-1 perc">-8.2 %</div>
                        </div>
                        <div class="white-border">
                          <div class="wht-clr px-2 cagr">NIFTY</div>
                          <div class="grn-clr px-2 py-1 perc">+8%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                data-index="0"
                class="slick-slide"
                tabindex="-1"
                aria-hidden="true"
                style={{ outline: "none", width: "297px" }}
              >
                <div>
                  {" "}
                  <a
                    href="/idea/Fierce-Finance"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="landing-right-side mob-hide">
                      <div>
                        <img
                          class="logo-card"
                          src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/fierceFinance.png"
                          alt="logo-card"
                        />
                      </div>
                      <div
                        class=" wht-clr"
                        style={{ marginTop: "0.5rem", fontSize: "1.75rem" }}
                      >
                        Fierce Finance
                      </div>
                      <div
                        class="light-wht-clr"
                        style={{
                          fontSize: "1rem",
                          textAlign: "center",
                          padding: "10px 0px",
                          height: "4rem",
                        }}
                      >
                        IIFL Finance Ltd is one of the leading retail focused
                        diversified NBFCs in India, engaged in the bus..
                      </div>
                      <div class="strat-card-bot">
                        <div class="card-bot">
                          <div class="wht-clr" style={{ fontSize: "1rem" }}>
                            P/L
                          </div>
                          <div
                            class=""
                            style={{
                              display: "flex",
                              fontSize: "1rem",
                              alignItems: "center",
                              marginTop: "0.5rem",
                            }}
                          >
                            <p
                              class="grn-clr "
                              style={{ marginRight: "0.3rem" }}
                            >
                              +1.0 %
                            </p>
                            <svg
                              width="20"
                              height="14"
                              viewBox="0 0 32 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              transform="scale(1,1)"
                            >
                              <path
                                d="M17.2666 3H29M29 3V14.7333M29 3L17.2666 14.7333L11.4 8.86667L2.59998 17.6667"
                                stroke="#01C36D"
                                stroke-width="4.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div class="card-bot">
                          <div class="wht-clr" style={{ fontSize: "1rem" }}>
                            NIFTY
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "1rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            <p class="grn-clr ">+8 %</p>
                            <img
                              src="/static/media/gain_homepage.3c973142.svg"
                              alt="stonk"
                              class="stonk-icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://stratzy.sng.link/Ae6sj/phhc/b023"
                    class="deks-hide mob-div1-card d-flex align-items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ marginRight: "1rem" }}>
                      <img
                        class="logo-card"
                        src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/fierceFinance.png"
                        alt="logo-card"
                      />
                      <div class="d-flex mob-slide">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          class=" mob-slide-dot"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAHCAYAAABp0096AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACDSURBVHgBxdKxEYJQEATQXWbMLYGGtAVtAMEK9JfgaAF2QAI5JdABdEAF3PIH/hCQw3/RXbQ3s0cESf3IJb39eMb+ehkcrt8/Q/grhB9KwDOZB6lABCRyoixSnsYOkcwVsMoGHNP9Nr5dKoA5RCAzx3Wrs7t/hpu/KsXeqBaGDy6/ZgKNPimGPZR0IAAAAABJRU5ErkJggg=="
                          class="mob-slide-line"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          class=" mob-slide-dot"
                          alt="dot"
                        />
                      </div>
                    </div>
                    <div class="">
                      <div class="font-sz-20 wht-clr">Fierce Finance</div>
                      <div class="card-text-mob">
                        IIFL Finance Ltd is one of the leading retail focused
                        diversified NBFCs in India, engaged in the business of
                        loans and mortgages along with its subsidiaries.
                      </div>
                      <div class="d-flex">
                        <div class=" pr-2">
                          <div class="wht-clr px-2 cagr">5Y CAGR</div>
                          <div class="grn-clr px-2 py-1 perc">1.0 %</div>
                        </div>
                        <div class="white-border">
                          <div class="wht-clr px-2 cagr">NIFTY</div>
                          <div class="grn-clr px-2 py-1 perc">+8%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                data-index="-1"
                tabindex="-1"
                class="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "297px" }}
              >
                <div>
                  {" "}
                  <a
                    href="/idea/Road-Roller"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="landing-right-side mob-hide">
                      <div>
                        <img
                          class="logo-card"
                          src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/roadRoller.jpg"
                          alt="logo-card"
                        />
                      </div>
                      <div
                        class=" wht-clr"
                        style={{ marginTop: "0.5rem", fontSize: "1.75rem" }}
                      >
                        Road Roller
                      </div>
                      <div
                        class="light-wht-clr"
                        style={{
                          fontSize: "1rem",
                          textAlign: "center",
                          padding: "10px 0px",
                          height: "4rem",
                        }}
                      >
                        H.G. Infra Engineering Limited was incorporated in 2003
                        in Jodhpur, Rajasthan. It is primarily invol..
                      </div>
                      <div class="strat-card-bot">
                        <div class="card-bot">
                          <div class="wht-clr" style={{ fontSize: "1rem" }}>
                            P/L
                          </div>
                          <div
                            class=""
                            style={{
                              display: "flex",
                              fontSize: "1rem",
                              alignItems: "center",
                              marginTop: "0.5rem",
                            }}
                          >
                            <p
                              class="red-clr "
                              style={{ marginRight: "0.3rem" }}
                            >
                              -8.2 %
                            </p>
                            <svg
                              width="20"
                              height="14"
                              viewBox="0 0 32 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              transform="scale(1,-1)"
                            >
                              <path
                                d="M17.2666 3H29M29 3V14.7333M29 3L17.2666 14.7333L11.4 8.86667L2.59998 17.6667"
                                stroke="#FF5863"
                                stroke-width="4.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div class="card-bot">
                          <div class="wht-clr" style={{ fontSize: "1rem" }}>
                            NIFTY
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "1rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            <p class="grn-clr ">+8 %</p>
                            <img
                              src="/static/media/gain_homepage.3c973142.svg"
                              alt="stonk"
                              class="stonk-icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://stratzy.sng.link/Ae6sj/phhc/b023"
                    class="deks-hide mob-div1-card d-flex align-items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ marginRight: "1rem" }}>
                      <img
                        class="logo-card"
                        src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/roadRoller.jpg"
                        alt="logo-card"
                      />
                      <div class="d-flex mob-slide">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          class=" mob-slide-dot"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAHCAYAAABp0096AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACDSURBVHgBxdKxEYJQEATQXWbMLYGGtAVtAMEK9JfgaAF2QAI5JdABdEAF3PIH/hCQw3/RXbQ3s0cESf3IJb39eMb+ehkcrt8/Q/grhB9KwDOZB6lABCRyoixSnsYOkcwVsMoGHNP9Nr5dKoA5RCAzx3Wrs7t/hpu/KsXeqBaGDy6/ZgKNPimGPZR0IAAAAABJRU5ErkJggg=="
                          class="mob-slide-line"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          class=" mob-slide-dot"
                          alt="dot"
                        />
                      </div>
                    </div>
                    <div class="">
                      <div class="font-sz-20 wht-clr">Road Roller</div>
                      <div class="card-text-mob">
                        H.G. Infra Engineering Limited was incorporated in 2003
                        in Jodhpur, Rajasthan. It is primarily involved in
                        infrastructure development and the construction of ro..
                      </div>
                      <div class="d-flex">
                        <div class=" pr-2">
                          <div class="wht-clr px-2 cagr">5Y CAGR</div>
                          <div class="grn-clr px-2 py-1 perc">-8.2 %</div>
                        </div>
                        <div class="white-border">
                          <div class="wht-clr px-2 cagr">NIFTY</div>
                          <div class="grn-clr px-2 py-1 perc">+8%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                data-index="0"
                class="slick-slide"
                tabindex="-1"
                aria-hidden="true"
                style={{ outline: "none", width: "297px" }}
              >
                <div>
                  {" "}
                  <a
                    href="/idea/Fierce-Finance"
                    style={{ textDecoration: "none" }}
                  >
                    <div class="landing-right-side mob-hide">
                      <div>
                        <img
                          class="logo-card"
                          src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/fierceFinance.png"
                          alt="logo-card"
                        />
                      </div>
                      <div
                        class=" wht-clr"
                        style={{ marginTop: "0.5rem", fontSize: "1.75rem" }}
                      >
                        Fierce Finance
                      </div>
                      <div
                        class="light-wht-clr"
                        style={{
                          fontSize: "1rem",
                          textAlign: "center",
                          padding: "10px 0px",
                          height: "4rem",
                        }}
                      >
                        IIFL Finance Ltd is one of the leading retail focused
                        diversified NBFCs in India, engaged in the bus..
                      </div>
                      <div class="strat-card-bot">
                        <div class="card-bot">
                          <div class="wht-clr" style={{ fontSize: "1rem" }}>
                            P/L
                          </div>
                          <div
                            class=""
                            style={{
                              display: "flex",
                              fontSize: "1rem",
                              alignItems: "center",
                              marginTop: "0.5rem",
                            }}
                          >
                            <p
                              class="grn-clr "
                              style={{ marginRight: "0.3rem" }}
                            >
                              +1.0 %
                            </p>
                            <svg
                              width="20"
                              height="14"
                              viewBox="0 0 32 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              transform="scale(1,1)"
                            >
                              <path
                                d="M17.2666 3H29M29 3V14.7333M29 3L17.2666 14.7333L11.4 8.86667L2.59998 17.6667"
                                stroke="#01C36D"
                                stroke-width="4.4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div class="card-bot">
                          <div class="wht-clr" style={{ fontSize: "1rem" }}>
                            NIFTY
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "1rem",
                              marginTop: "0.5rem",
                            }}
                          >
                            <p class="grn-clr ">+8 %</p>
                            <img
                              src="/static/media/gain_homepage.3c973142.svg"
                              alt="stonk"
                              class="stonk-icon"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://stratzy.sng.link/Ae6sj/phhc/b023"
                    class="deks-hide mob-div1-card d-flex align-items-center"
                    style={{ textDecoration: "none" }}
                  >
                    <div style={{ marginRight: "1rem" }}>
                      <img
                        class="logo-card"
                        src="https://stratzy-public.s3.ap-south-1.amazonaws.com/ideaImages/fierceFinance.png"
                        alt="logo-card"
                      />
                      <div class="d-flex mob-slide">
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          class=" mob-slide-dot"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAHCAYAAABp0096AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACDSURBVHgBxdKxEYJQEATQXWbMLYGGtAVtAMEK9JfgaAF2QAI5JdABdEAF3PIH/hCQw3/RXbQ3s0cESf3IJb39eMb+ehkcrt8/Q/grhB9KwDOZB6lABCRyoixSnsYOkcwVsMoGHNP9Nr5dKoA5RCAzx3Wrs7t/hpu/KsXeqBaGDy6/ZgKNPimGPZR0IAAAAABJRU5ErkJggg=="
                          class="mob-slide-line"
                          alt="dot"
                        />
                        <img
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBdY69CsJAEIRnl6CGA39SpBQsLO18Ad+/MWBnYSGoiASDP1FzuXUXtNL7imV3GWaGoKxF+vcXxqHFgAEfGOW5i82CyCfFQdy1xgwfApDoyIcNnJ5LxggT/MPDrSrJ2GwRoe1opGXGBCzwJtjFBL0URz6l2Gup24/9A9sp0ZO+j+Iiufa35mhqlPOMKtvff2IwuENvrgAAAAAASUVORK5CYII="
                          class=" mob-slide-dot"
                          alt="dot"
                        />
                      </div>
                    </div>
                    <div class="">
                      <div class="font-sz-20 wht-clr">Fierce Finance</div>
                      <div class="card-text-mob">
                        IIFL Finance Ltd is one of the leading retail focused
                        diversified NBFCs in India, engaged in the business of
                        loans and mortgages along with its subsidiaries.
                      </div>
                      <div class="d-flex">
                        <div class=" pr-2">
                          <div class="wht-clr px-2 cagr">5Y CAGR</div>
                          <div class="grn-clr px-2 py-1 perc">1.0 %</div>
                        </div>
                        <div class="white-border">
                          <div class="wht-clr px-2 cagr">NIFTY</div>
                          <div class="grn-clr px-2 py-1 perc">+8%</div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};
