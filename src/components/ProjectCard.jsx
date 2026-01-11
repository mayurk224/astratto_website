import { ArrowUpRight } from "lucide-react";
import React from "react";

const ProjectCard = () => {
  return (
    <div className="space-y-5">
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/6157698/pexels-photo-6157698.jpeg"
          alt="Lighthouse"
          className="w-full h-112.5 object-cover rounded-3xl"
        />
        <div className="absolute top-5 right-5 bg-white rounded-full p-4 shadow-lg">
          <ArrowUpRight className="w-8 h-8" />
        </div>
        <div className="absolute bottom-5 left-5 bg-white rounded-full px-4 py-2 shadow-lg">
          <h4 className="text-md font-semibold ">2D Animation</h4>
        </div>
      </div>
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold text-purple-700">
          The Lighthouse
        </h1>
        <p className="text-gray-600">
          A lighthouse is a tower, platform, or other structure built on an
          isolated point of land or outcrop of rock, especially if the location
          is offshore or on a dangerous coast.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
