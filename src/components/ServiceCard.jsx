import React from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ServiceCard = () => {
  return (
    <div className="border border-purple-500 w-md rounded-3xl p-5 space-y-5 hover:rounded-bl-full overflow-hidden">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          Motion <br /> Graphics
        </h1>
        <button className="rounded-full w-14 h-14 flex items-center justify-center bg-purple-700 text-white">
          <ArrowUpRight />
        </button>
      </div>
      <hr className="border border-purple-600" />
      <div className="flex flex-col space-y-5 overflow-hidden">
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
          mollitia iusto minima accusamus animi,
        </p>
        <img
          src="/heroLeft.png"
          alt=""
          className="w-full h-55 object-cover rounded-2xl overflow-hidden"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
