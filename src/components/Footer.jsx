import { Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-162.5">
        {/* <!-- Content Area --> */}
        <div class="grow flex flex-col items-center justify-center px-6 pt-20 pb-12 relative w-full z-10">
          {/* <!-- Floating Sparkles (Top Left) --> */}
          {/* <!-- Using custom SVG for the diamond star shape seen in image --> */}
          <div class="absolute top-16 left-6 lg:left-24 hidden md:flex flex-col items-center gap-1 transform -rotate-12">
            <div class="relative">
              {/* <!-- Large Star --> */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="#FACC15"
                class="text-yellow-400 drop-shadow-sm"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
              {/* <!-- Small Star Top Right --> */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#FACC15"
                class="text-yellow-400 absolute -top-3 -right-3"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
              {/* <!-- Small Star Bottom Left --> */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#FACC15"
                class="text-yellow-400 absolute bottom-0 -left-4"
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </div>
          </div>

          {/* <!-- Preheading --> */}
          <h2 class="text-fuchsia-500 font-medium text-lg md:text-xl mb-7 tracking-normal text-center">
            Open the door to forging your brand's story
          </h2>

          {/* <!-- Main Title --> */}
          <div class="relative max-w-6xl mx-auto z-20">
            <h1 class="text-4xl md:text-6xl lg:text-[4.5rem] font-medium text-center tracking-tight text-slate-900 leading-[1.15] md:leading-[1.1]">
              Embark on a Transformative Journey <br class="hidden lg:block" />
              Shaping
              {/* <!-- Highlighted Text --> */}
              <span class="relative inline-block mx-1 align-bottom">
                <span class="absolute inset-0 bg-amber-400 rounded-full transform -rotate-1 scale-105 origin-center -z-10 shadow-sm"></span>
                <span class="relative text-white px-2 md:px-4 py-1 block">
                  Your Brand's Destiny
                </span>
              </span>
              Through Our <br class="hidden lg:block" />
              Dedicated Partnership
            </h1>

            {/* <!-- Rotating Badge Sticker --> */}
            <div className="absolute bottom-10 right-0 w-32 h-32 rounded-full bg-purple-700 flex items-center justify-center shadow-xl border-4 border-white">
                {/* Rotating Text Path */}
                <svg
                  className="absolute w-full h-full p-1"
                  viewBox="0 0 100 100"
                  style={{
                    animation: "spin 12s linear infinite",
                  }}
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                  </defs>
                  <text className="fill-white text-[11px] font-bold uppercase tracking-[0.18em]">
                    <textPath xlinkHref="#circlePath" startOffset="0%">
                      Let's get started • Let's get started •
                    </textPath>
                  </text>
                </svg>

                {/* Center Star Icon */}
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="#FACC15"
                  className="relative z-10"
                >
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
                <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
              </div>
          </div>

          {/* <!-- Body Description --> */}
          <p class="mt-10 text-slate-400 text-lg md:text-xl font-normal text-center max-w-3xl leading-relaxed mx-auto">
            Join us on a transformative journey to shape your brand's destiny
            through our dedicated partnership, crafting a narrative that
            resonates
          </p>
        </div>

        {/* <!-- Footer --> */}
        <div class="w-full px-8 md:px-16 pb-10 z-20">
          {/* <!-- Divider --> */}
          <div class="h-px bg-slate-100 w-full mb-8"></div>

          <div class="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm font-normal space-y-6 md:space-y-0">
            {/* <!-- Address --> */}
            <div class="text-center md:text-left min-w-50">
              Via della Creatività, 23, 20121 Milano
            </div>

            {/* <!-- Social Icons --> */}
            <div class="flex items-center justify-center space-x-8">
              {/* <!-- X / Twitter Icon (Custom SVG for brand accuracy) --> */}
              <a
                href="#"
                class="hover:text-slate-600 transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                class="hover:text-slate-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                class="hover:text-slate-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            {/* <!-- Legal / Copyright --> */}
            <div class="flex items-center justify-end space-x-6 min-w-50">
              <a
                href="#"
                class="hover:text-slate-600 transition-colors duration-200"
              >
                Privacy & Cookie Policy
              </a>
              <span class="opacity-70">Astratto © 2023</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
