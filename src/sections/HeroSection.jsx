import { CheckCheck, WandSparkles } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col h-[85vh] relative">
        <p className="text-2xl font-semibold text-gray-400">
          Ignite the Spark of Inspiration
        </p>
        <div className="flex items-center justify-center flex-col text-center text-8xl font-semibold">
          <h1 className=" tracking-wider leading-snug">Unleash Your</h1>
          <div className="flex items-center justify-center gap-5 z-20">
            Brand{" "}
            <div className="rounded-full p-1 h-30 w-30">
              <img
                src="/heroLogo.svg"
                alt=""
                srcset=""
                className="object-cover animate-spin "
              />
            </div>{" "}
            With Our
          </div>
          <h1 className="text-8xl font-semibold tracking-wider leading-snug">
            Magic Design
          </h1>
        </div>
        <div className="absolute top-10 left-10 w-80 h-96 bg-gray-900/50 -rotate-12  rounded-b-full overflow-hidden">
          <img
            src="/heroLeft.png"
            alt=""
            className="object-cover rotate-12 h-full w-full scale-125"
          />
        </div>
        <div className="absolute bottom-10 right-10 w-80 h-96 bg-gray-900/50 rotate-12  rounded-t-full overflow-hidden">
          <img
            src="/heroLeft.png"
            alt=""
            className="object-cover -rotate-12 h-full w-full scale-125"
          />
        </div>
        <div className="absolute bottom-10 left-10 flex font-semibold">
          <button className="border border-amber-600 rounded-full px-5 py-2">
            Create Magic
          </button>
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-700 text-white">
            <WandSparkles />
          </div>
        </div>
        <div className="absolute top-10 right-10 text-white flex flex-col gap-2 items-end">
          <div className="rounded-full px-2 py-1 bg-purple-700">
            <p className="flex items-center gap-2">
              For designers and creators <CheckCheck className="w-4 h-4" />
            </p>
          </div>
          <div className="rounded-full px-2 py-1 bg-purple-700 w-fit">
            <p className="flex items-center gap-2">
              Unlock your creativity <CheckCheck className="w-4 h-4" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
