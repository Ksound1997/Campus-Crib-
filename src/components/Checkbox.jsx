import React from "react";

const Checkbox = () => {
  return (
    <>
      <button
        onClick={() => setActive(!active)}
        className={`relative w-11 h-6 flex items-center rounded-full transition ${
          active ? "bg-orange-500" : "bg-gray-300"
        }`}
      >
        <span
          className={`absolute left-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
            active ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </>
  );
};

export default Checkbox;
