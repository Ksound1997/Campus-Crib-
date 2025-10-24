import React from "react";
import man from "../assets/Man with cash.png";

const Workwithus = () => {
  return (
    <section className="py-20 px-8 flex flex-col justify-between items-center bg-blue-950  text-white md:flex-row">
      <h2 className="text-3xl font-bold w-[300px] mb-4 text-center md:hidden">
        Would Love to Work With Us?
      </h2>
      <img src={man} alt="" className="w-[300px]" />

      <div>
        <h2 className="hidden text-3xl font-bold w-[300px] mb-4 md:block">
          Would Love to Work With Us?
        </h2>

        <div className="flex flex-col items-center">
          <p className="text-gray-300 mt-4 text-center mb-8 w-[400px] mx-auto">
            Join a fast-growing community making life easier for students. Earn,
            grow, and smile doing what you love.
          </p>
          <button className="bg-white text-primary px-6 py-3  rounded-lg md:w-full md:bg-primary md:text-white">
            Work With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Workwithus;
