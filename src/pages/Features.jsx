import React from "react";
import Hijabi from "../assets/Hijabi.png";
const Features = () => {
  const data = [
    {
      title: "Verified Homes",
      desc: "Find safe, trusted and verified accomodations near your school.",
      color: "#FEEBDD",
    },
    {
      title: "Student Marketplace",
      desc: "Buy and sell campus essentials, gadgets and furniture - all verified.",
      color: "#D5CEEB",
    },
    {
      title: "Student Payment",
      desc: "Manage all your dues and payments in one place.No stress, no queues",
      img: "/assets/feature3.png",
      color: "#D5DAFF",
    },
  ];
  return (
    <section className="bg-gray-50 py-20 px-8 text-center">
      <h2 className="text-3xl font-bold mb-4">
        See how <span className="text-primary">CampusCrib</span> makes campus
        life enjoyable
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Beyond finding verified homes, we help students connect, trade, and
        thrive.
      </p>

      <div className="flex relative items-center justify-between">
        <div className="hidden  w-[460px] h-full bg-primary rounded-2xl lg:block lg:absolute"></div>
        <img
          src={Hijabi}
          alt="Hijabi smiling woman"
          className="hidden h-[400px] object-contain mt-44 z-10 lg:block"
        />

        <div className="grid md:grid-cols-1 gap-8">
          {data.map((f, i) => (
            <div style={{ backgroundColor: f.color }} key={i} className="rounded-2xl shadow-md p-8 border-[#B8B4B4] border-2">
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
