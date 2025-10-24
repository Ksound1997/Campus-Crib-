import React from "react";
import man from "../assets/Coffee man.png";

const Pay = () => {
  return (
    <section className="py-20 px-8  bg-gray-50">
      <div>
        <h2 className="text-3xl font-bold mb-4 text-gray-800 text-center">
          Pay As You Go
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Pay only when you need it – no subscriptions, no hidden charges.
        </p>
      </div>

      <div className="flex flex-col gap-7  p-11 md:flex-row md:py-11 md:justify-between">
        <div className="block md:hidden">
          <img src={man} alt="student" className="w-[400px] h-[450px]" />
        </div>

        <div className="self-center">
          <p className="text-gray-600  mb-6 w-[350px]">
            Whether you're booking accommodation, paying your dues, or shopping
            in the marketplace - you only pay for what you use.
          </p>
          <button className="bg-primary text-white px-5 py-3 rounded-lg">
            Get Started
          </button>
        </div>

        <img src={man} alt="student" className="hidden w-[400px] h-[450px] md:block" />
      </div>
    </section>
  );
};

export default Pay;
