import { Instagram, Linkedin } from "lucide-react";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const easePremium = [0.16, 1, 0.3, 1];

const footerWrap = {
  hidden: { opacity: 0, y: 26, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easePremium },
  },
};

const stagger = (delayChildren = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren } },
});

const item = {
  hidden: { opacity: 0, y: 16, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easePremium },
  },
};

const Footer = () => {
  const reduce = useReducedMotion();

  return (
    <motion.footer
      variants={footerWrap}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div
        className="
          rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden
          flex flex-col justify-between
          min-h-auto md:min-h-162.5
        "
      >
        <div className="grow flex flex-col items-center justify-center px-5 sm:px-6 pt-14 md:pt-20 pb-10 md:pb-12 relative w-full z-10">
          <motion.div
            className="absolute top-16 left-6 lg:left-24 hidden md:flex flex-col items-center gap-1 transform -rotate-12"
            initial={
              reduce ? false : { opacity: 0, y: 10, filter: "blur(8px)" }
            }
            whileInView={
              reduce ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: easePremium }}
            animate={
              reduce
                ? undefined
                : {
                    y: [0, -6, 0],
                    rotate: [-12, -10, -12],
                  }
            }
            style={
              reduce ? undefined : { transition: "transform 6s ease-in-out" }
            }
          >
            <motion.div
              className="relative"
              animate={
                reduce ? undefined : { y: [0, -5, 0], scale: [1, 1.03, 1] }
              }
              transition={
                reduce
                  ? undefined
                  : { duration: 4.5, ease: "easeInOut", repeat: Infinity }
              }
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#FACC15">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>

              <motion.svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="#FACC15"
                className="absolute -top-3 -right-3"
                animate={reduce ? undefined : { rotate: [0, 12, 0] }}
                transition={
                  reduce
                    ? undefined
                    : { duration: 3.5, ease: "easeInOut", repeat: Infinity }
                }
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </motion.svg>

              <motion.svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#FACC15"
                className="absolute bottom-0 -left-4"
                animate={reduce ? undefined : { y: [0, 4, 0] }}
                transition={
                  reduce
                    ? undefined
                    : { duration: 3.2, ease: "easeInOut", repeat: Infinity }
                }
              >
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </motion.svg>
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger(0.05)}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: true, amount: 0.6 }}
            className="w-full"
          >
            <motion.h2
              variants={item}
              className="text-fuchsia-500 font-medium text-base sm:text-lg md:text-xl mb-6 md:mb-7 tracking-normal text-center"
            >
              Open the door to forging your brand's story
            </motion.h2>

            <div className="relative max-w-6xl mx-auto z-20">
              <motion.h1
                variants={item}
                className="
                  text-3xl sm:text-4xl md:text-6xl lg:text-[4.5rem]
                  font-medium text-center tracking-tight text-slate-900
                  leading-[1.2] md:leading-[1.1]
                "
              >
                Embark on a Transformative Journey{" "}
                <br className="hidden lg:block" />
                Shaping{" "}
                <span className="relative inline-block mx-1 align-bottom">
                  <motion.span
                    initial={reduce ? false : { scaleX: 0, opacity: 0 }}
                    whileInView={reduce ? {} : { scaleX: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15,
                      ease: easePremium,
                    }}
                    className="absolute inset-0 bg-amber-400 rounded-full transform -rotate-1 scale-105 origin-left -z-10 shadow-sm"
                  />
                  <span className="relative text-white px-2 md:px-4 py-1 block">
                    Your Brand's Destiny
                  </span>
                </span>
                Through Our <br className="hidden lg:block" />
                Dedicated Partnership
              </motion.h1>

              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 0.9, y: 10 }}
                whileInView={reduce ? {} : { opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.75, delay: 0.2, ease: easePremium }}
                whileHover={reduce ? {} : { scale: 1.03 }}
                className="
                  absolute
                  -bottom-16 right-1/2 translate-x-1/2
                  md:bottom-10 md:right-0 md:translate-x-0
                  w-28 h-28 sm:w-32 sm:h-32
                  rounded-full bg-purple-700 flex items-center justify-center
                  shadow-xl border-4 border-white
                "
              >
                {!reduce && (
                  <motion.svg
                    className="absolute w-full h-full p-1"
                    viewBox="0 0 100 100"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 12,
                      ease: "linear",
                      repeat: Infinity,
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
                  </motion.svg>
                )}

                <motion.svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="#FACC15"
                  className="relative z-10"
                  animate={
                    reduce
                      ? undefined
                      : { rotate: [0, 6, 0], scale: [1, 1.03, 1] }
                  }
                  transition={
                    reduce
                      ? undefined
                      : { duration: 2.6, ease: "easeInOut", repeat: Infinity }
                  }
                >
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </motion.svg>
              </motion.div>
            </div>

            <motion.p
              variants={item}
              className="mt-16 md:mt-10 text-slate-400 text-base sm:text-lg md:text-xl font-normal text-center max-w-3xl leading-relaxed mx-auto"
            >
              Join us on a transformative journey to shape your brand's destiny
              through our dedicated partnership, crafting a narrative that
              resonates
            </motion.p>
          </motion.div>
        </div>

        <div className="w-full px-5 sm:px-8 md:px-16 pb-8 md:pb-10 z-20">
          <motion.div
            initial={reduce ? false : { scaleX: 0, opacity: 0 }}
            whileInView={reduce ? {} : { scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.9 }}
            transition={{ duration: 0.7, ease: easePremium }}
            className="origin-left h-px bg-slate-100 w-full mb-6 md:mb-8"
          />

          <motion.div
            variants={stagger(0.05)}
            initial={reduce ? false : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: true, amount: 0.9 }}
            className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm font-normal space-y-6 md:space-y-0"
          >
            <motion.div variants={item} className="text-center md:text-left">
              Made with ❤️ by Mayur K.
            </motion.div>

            <motion.div
              variants={item}
              className="flex items-center justify-center space-x-8"
            >
              <motion.a
                href="#"
                whileHover={reduce ? {} : { y: -2, scale: 1.04 }}
                transition={{ duration: 0.25, ease: easePremium }}
                className="hover:text-slate-600 transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>

              <motion.a
                href="#"
                whileHover={reduce ? {} : { y: -2, scale: 1.04 }}
                transition={{ duration: 0.25, ease: easePremium }}
                className="hover:text-slate-600 transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#"
                whileHover={reduce ? {} : { y: -2, scale: 1.04 }}
                transition={{ duration: 0.25, ease: easePremium }}
                className="hover:text-slate-600 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
            </motion.div>

            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-6"
            >
              <a
                href="#"
                className="hover:text-slate-600 transition-colors duration-200"
              >
                Privacy & Cookie Policy
              </a>
              <span className="opacity-70">Astratto © 2025</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
