import React from "react";
import ProjectCard from "../components/ProjectCard";
import { ArrowUpRight } from "lucide-react";

const ProjectSection = () => {
  return (
    <div className="p-10">
      <section class="">
        {/* <!-- Header Section --> */}
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <h2 class="text-4xl md:text-5xl font-medium tracking-tight text-gray-900">
                Recent Projects
            </h2>
            <p class="text-lg text-gray-500 max-w-sm leading-relaxed md:text-right">
                Step into the world of our most recent projects, a showcase of our unwavering commitment to progressive design.
            </p>
        </div>

        {/* <!-- Grid Container --> */}
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            
            {/* <!-- Left Column --> */}
            <div class="flex flex-col gap-16">
                
                {/* <!-- Project 1 --> */}
                <article class="group cursor-pointer">
                    <div class="relative overflow-hidden rounded-4xl aspect-4/3 w-full">
                        <img src="https://images.pexels.com/photos/6157698/pexels-photo-6157698.jpeg" alt="Lighthouse 3D Illustration" class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"/>
                        
                        {/* <!-- Top Right Icon --> */}
                        <div class="absolute top-6 right-6 bg-white w-15 h-15 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 shadow-sm">
                            <ArrowUpRight className="w-6 h-6 text-gray-900" />
                        </div>
                        
                        {/* <!-- Bottom Left Tag --> */}
                        <div class="absolute bottom-6 left-6 bg-white px-5 py-2.5 rounded-full shadow-sm">
                            <span class="text-sm font-medium text-gray-900 block">2D Animation</span>
                        </div>
                    </div>
                    <div class="mt-8 space-y-3">
                        <h3 class="text-3xl font-medium tracking-tight text-fuchsia-500 group-hover:text-fuchsia-600 transition-colors">
                            The Lighthouse
                        </h3>
                        <p class="text-lg text-gray-500 leading-relaxed max-w-md">
                            Adding a new dimension to projects through thoughtfully designed 2D animations
                        </p>
                    </div>
                </article>

                {/* <!-- Project 3 --> */}
                <article class="group cursor-pointer">
                    <div class="relative overflow-hidden rounded-4xl aspect-4/3 w-full">
                        <img src="https://images.pexels.com/photos/8828312/pexels-photo-8828312.jpeg" alt="Compass 3D Illustration" class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"/>
                        
                        <div class="absolute top-6 right-6 bg-white w-15 h-15 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 shadow-sm">
                            <ArrowUpRight className="w-6 h-6 text-gray-900" />
                        </div>
                        
                        <div class="absolute bottom-6 left-6 bg-white px-5 py-2.5 rounded-full shadow-sm">
                            <span class="text-sm font-medium text-gray-900 block">Motion Graphics</span>
                        </div>
                    </div>
                    <div class="mt-8 space-y-3">
                        <h3 class="text-3xl font-medium tracking-tight text-fuchsia-500 group-hover:text-fuchsia-600 transition-colors">
                            Navigating Possibilities
                        </h3>
                        <p class="text-lg text-gray-500 leading-relaxed max-w-md">
                            Motion graphics breathe life into the project, blending direction and creativity
                        </p>
                    </div>
                </article>

            </div>

            {/* <!-- Right Column (Staggered) --> */}
            <div class="flex flex-col gap-16 md:pt-32">
                
                {/* <!-- Project 2 --> */}
                <article class="group cursor-pointer">
                    <div class="relative overflow-hidden rounded-4xl aspect-4/3 w-full">
                        <img src="https://images.pexels.com/photos/1740175/pexels-photo-1740175.jpeg" alt="House 3D Illustration" class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"/>
                        
                        <div class="absolute top-6 right-6 bg-white w-15 h-15 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 shadow-sm">
                            <ArrowUpRight className="w-6 h-6 text-gray-900" />
                        </div>
                        
                        <div class="absolute bottom-6 left-6 bg-white px-5 py-2.5 rounded-full shadow-sm">
                            <span class="text-sm font-medium text-gray-900 block">Visual Identity</span>
                        </div>
                    </div>
                    <div class="mt-8 space-y-3">
                        <h3 class="text-3xl font-medium tracking-tight text-fuchsia-500 group-hover:text-fuchsia-600 transition-colors">
                            Snowscape Haven
                        </h3>
                        <p class="text-lg text-gray-500 leading-relaxed max-w-md">
                            Crafting a visual identity that mirrors the serenity and allure of a winter sanctuary
                        </p>
                    </div>
                </article>

                {/* <!-- Project 4 --> */}
                <article class="group cursor-pointer">
                    <div class="relative overflow-hidden rounded-4xl aspect-4/3 w-full">
                        <img src="https://images.pexels.com/photos/34411122/pexels-photo-34411122.jpeg" alt="Window 3D Illustration" class="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"/>
                        
                        <div class="absolute top-6 right-6 bg-white w-15 h-15 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 shadow-sm">
                            
                            <ArrowUpRight className="w-6 h-6 text-gray-900" />
                        </div>
                        
                        <div class="absolute bottom-6 left-6 bg-white px-5 py-2.5 rounded-full shadow-sm">
                            <span class="text-sm font-medium text-gray-900 block">3D Animation</span>
                        </div>
                    </div>
                    <div class="mt-8 space-y-3">
                        <h3 class="text-3xl font-medium tracking-tight text-fuchsia-500 group-hover:text-fuchsia-600 transition-colors">
                            Nocturnal Symphony
                        </h3>
                        <p class="text-lg text-gray-500 leading-relaxed max-w-md">
                            Through 3D artistry, we orchestrate an animated ode to the evening, a dance of shadows and dreams
                        </p>
                    </div>
                </article>

            </div>
        </div>
    </section>
    </div>
  );
};

export default ProjectSection;
