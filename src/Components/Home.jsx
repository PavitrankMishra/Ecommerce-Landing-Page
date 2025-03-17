import React from "react";
import chair from "../assets/chair.jpg";
import bed1 from "../assets/bed1.jpg";
import hall1 from "../assets/hall1.jpg";
import kitchen1 from "../assets/kitchen1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="font-sans bg-red-200 min-h-screen flex justify-center px-4 md:px-10 lg:px-20">
      <div className="bg-white max-w-screen-xl w-full flex flex-wrap flex-col shadow-lg rounded-lg">
        <header className="flex flex-wrap justify-between items-center w-full py-5 px-4 md:px-25 border-2 border-black">
          <FontAwesomeIcon
            icon={faHouse}
            size="2xl"
            style={{ color: "#ff944d" }}
          />

          {/* Navigation */}
          <nav className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center w-full md:w-auto mt-4 md:mt-0">
            <div className="flex flex-col md:flex-row gap-6">
              {["Home", "Product", "About", "Contact"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-semibold text-orange-500"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Type here"
                className="px-4 py-2 rounded-full border bg-orange-300 w-full md:w-auto"
                style={{
                  backgroundColor: "#f9f2e8",
                  outline: "none",
                  border: "none",
                  color: "#ff944d",
                }}
              />
              <button
                className="absolute right-2 top-2"
                style={{ color: "#ff944d" }}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>

            {/* User Icon */}
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full"
              style={{ color: "white", backgroundColor: "#ff944d" }}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>
          </nav>
        </header>

        <main className="flex items-center lg:flex-row md:flex-row flex-col">
          <div className="w-1/3 border-2 border-b-black items-center ml-25 mt-20">
            <h1
              className="text-6xl md:text-5xl sm:text-4xl font-bold text-pink-400"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              e-commerce
            </h1>
            <h1
              className="text-6xl md:text-5xl sm:text-4xl font-bold text-pink-400"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Website
            </h1>
            <p
              className="text-xl md:text-lg sm:text-base text-orange-500 tracking-widest my-8"
              style={{ letterSpacing: "0.4em" }}
            >
              SUPPORT LOCAL EVERYTHING
            </p>

            <div className="flex-col bg-orange-100 w-fit px-4 py-2 rounded-lg ">
              <div>
                <p className="text-orange-400 text-lg sm:text-base">
                  Choose your
                </p>
              </div>
              <div className="py-2 flex items-center gap-2 mx-2">
                {/* Decrease size on smaller screens */}
                <div
                  className="w-6 h-6 sm:w-5 sm:h-5 bg-amber-950 rounded-full flex items-center justify-center"
                  style={{ color: "#d89e6f", backgroundColor: "#f4af90" }}
                >
                  <button>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="text-sm sm:text-xs"
                    />
                  </button>
                </div>

                <div>
                  <span
                    className="bg-white text-orange-400 px-3 py-1 rounded-full text-center text-lg sm:text-sm"
                    style={{ color: "#d89e6f" }}
                  >
                    2
                  </span>
                </div>

                <div
                  className="w-6 h-6 sm:w-5 sm:h-5 rounded-full flex items-center justify-center"
                  style={{ color: "#d89e6f", backgroundColor: "#f4af90" }}
                >
                  <button>
                    <FontAwesomeIcon
                      icon={faAngleUp}
                      className="text-sm sm:text-xs"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="flex items-center py-2 w-fit my-5 rounded-full px-2"
              style={{ backgroundColor: "#cc9c5e" }}
            >
              <span className="bg-orange-100 text-orange-300 px-3 py-1 rounded-full w-10 h-10 flex items-center justify-center">
                <FontAwesomeIcon icon={faCartArrowDown} />
              </span>
              <span className="px-4 text-white">BUY NOW</span>
            </div>
          </div>

          <div className="relative w-1/2 border-2 border-amber-400 mr-25 mt-20 ">
            <div className="relative bg-orange-100 rounded-full w-[100%] h-[50%] min-w-[10rem] min-h-[10rem] max-w-[30rem] max-h-[30rem] flex items-center justify-center overflow-hidden">
              <img src={chair} alt="Chair" className="w-full h-full" />
            </div>
            <div
              className="absolute top-8 left-[54%] bg-white shadow-lg rounded-full px-6 py-3 w-[10rem]"
              style={{ color: "#dbd1a5", letterSpacing: "0.1em" }}
            >
              Minimalistic
            </div>

            <div
              className="absolute bottom-10 left-[-2%] bg-white shadow-lg rounded-full px-6 py-3"
              style={{ color: "#dbd1a5", letterSpacing: "0.1em" }}
            >
              Super Cozy
            </div>

            <div className="absolute left-[80%] top-[1%] shadow-lg rounded-full flex items-center justify-center overflow-hidden w-[25%] h-[25%] min-w-[5rem] min-h-[5rem] max-w-[8rem] max-h-[8rem]">
              <img
                src={kitchen1}
                alt="Kitchen1"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="absolute left-[80%] top-[32%] shadow-lg rounded-full flex items-center justify-center overflow-hidden w-[25%] h-[25%] min-w-[5rem] min-h-[5rem] max-w-[8rem] max-h-[8rem]">
              <img
                src={hall1}
                alt="Hall1"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="absolute left-[90%] top-[75%] translate-x-[-50%] translate-y-[-50%] shadow-lg rounded-full flex items-center justify-center overflow-hidden w-[25%] h-[25%] min-w-[5rem] min-h-[5rem] max-w-[8rem] max-h-[8rem]">
              <img
                src={bed1}
                alt="Bed1"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div
              className="absolute left-[70%] top-[90%] flex flex-row items-center gap-2"
              style={{ color: "#ff944d" }}
            >
              <span>
                Continue Shopping{" "}
                <FontAwesomeIcon icon={faArrowRightLong} size="lg" />
              </span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
