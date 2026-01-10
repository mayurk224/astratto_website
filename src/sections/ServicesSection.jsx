import React from "react";
import ServiceCard from "../components/ServiceCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ServicesSection = () => {
  return (
    <div className="rounded-4xl border border-gray-400 p-10">
      <div className="serviceSection">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl font-semibold">Our Services</h1>
          <p className="text-gray-600 w-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            mollitia iusto minima accusamus animi, accusantium ipsam eos
            excepturi nobis amet!
          </p>
        </div>
        <div className="space-y-2">
          <div className="cardContainer flex gap-5">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <button className="border border-gray-600 rounded-full w-14 h-14 flex items-center justify-center">
                <ArrowLeft />
              </button>
              <button className="border border-gray-600 rounded-full w-14 h-14 flex items-center justify-center">
                <ArrowRight />
              </button>
            </div>
            <div className="flex gap-1">
              <div className="w-14 h-1 bg-gray-600 rounded-full"></div>
              <div className="w-7 h-1 bg-gray-600 rounded-full"></div>
              <div className="w-7 h-1 bg-gray-600 rounded-full"></div>
              <div className="w-7 h-1 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutSection h-[60vh] flex items-center justify-center">
        <div className=" flex items-center justify-center flex-col mx-auto space-y-5">
          <p className="flex items-center text-lg text-gray-600  gap-1">
            <hr className="border border-gray-600 w-6" />
            About Astratto
          </p>
          <div className="text-center flex items-center text-6xl flex-col space-y-3">
            <h1>
              Our <span className="text-gray-600">Visionary</span>{" "}
              <span className="text-orange-600">artisans</span> collaborate
            </h1>
            <div className="flex gap-3 items-center">
              <h1>
                <span className="text-purple-600">seamlessly</span> to craft
              </h1>
              <img src="/heroLogo.svg" alt="" className="w-14 h-14" />
              <h1>
                inspiring <span className="text-gray-600">experience</span>
              </h1>
            </div>
            <h1>
              <span className="text-orange-600">leaving</span> lasting{" "}
              <span className="text-gray-600">imprints</span> on{" "}
              <span className="text-purple-600">brands</span> <br /> and spaces.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
