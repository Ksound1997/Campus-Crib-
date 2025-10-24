import { useNavigate } from "react-router-dom";
import Heros from "../assets/Hero.png";

const Hero = () => {

  const navigate=useNavigate()
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-[#6679FF1A] min-h-screen">
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Everything You Need for{" "}
          <span className="text-primary">Campus Life</span> – In One Place
        </h1>
        <p className="text-gray-600 mb-6">
          Find your space. Buy what you need. Pay without stress – your
          all-in-one platform for student housing, marketplace, and dues
          payment.
        </p>
        <div className="flex w-full justify-center md:justify-start space-x-4">
          <button onClick={()=>navigate('/signup')} className="bg-primary flex-1 text-white px-5 py-3 rounded-lg">
            Get Started
          </button>
          <button className="border flex-1 border-primary bg-white shadow-md text-primary px-5 py-3 rounded-lg">
            View Live Demo
          </button>
        </div>
      </div>

      <div className="relative flex items-center justify-center">
      
      <div className="absolute mt-10 w-[500px] h-[500px] bg-blue-400 rounded-full -z-10"></div>

      
      <img
        src={Heros}
        alt="Surprised lady"
        className="h-[550px] object-contain rounded-full"
      />
    </div>

    {/* <div className="bg-red-500">
         
      <img
        src={Heros}
        alt="Surprised lady"
        className="h-[550px]  object-cover rounded-full"
      />
    </div> */}
    </section>
  );
};

export default Hero;
