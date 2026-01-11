import { CheckCheck, WandSparkles } from "lucide-react";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Magnetic } from "../components/Magnetic";

const easePremium = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

const fadeUpBlur = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: easePremium },
  },
};

const word = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: easePremium },
  },
};

const imageIn = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(14px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: easePremium },
  },
};

const badge = {
  hidden: { opacity: 0, x: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: easePremium },
  },
};

const HeroSection = () => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="relative"
    >
      <div className="flex items-center justify-center flex-col h-[85vh] relative overflow-hidden">
        {/* subtle cinematic overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0  from-transparent via-transparent to-black/5" />
        </div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUpBlur}
          className="text-2xl font-semibold text-gray-400 mb-8"
        >
          Ignite the Spark of Inspiration
        </motion.p>

        {/* Heading area */}
        <div className="flex items-center justify-center flex-col text-center text-8xl font-semibold mb-6">
          {/* Heading 1 words */}
          <motion.h1 className="tracking-wider leading-snug">
            <motion.span variants={word} className="inline-block mr-4">
              Unleash
            </motion.span>
            <motion.span variants={word} className="inline-block">
              Your
            </motion.span>
          </motion.h1>

          {/* Brand row */}
          <motion.div
            variants={fadeUpBlur}
            className="flex items-center justify-center gap-5 z-20 mt-6"
          >
            <span>Brand</span>

            {/* Logo */}
            <motion.div
              className="rounded-full p-1 h-30 w-30 shrink-0 will-change-transform"
              initial={{
                opacity: 0,
                scale: 0.9,
                rotate: 12,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 1.05, ease: easePremium, delay: 0.35 }}
            >
              <motion.img
                src="/heroLogo.svg"
                alt="Brand Logo"
                className="object-cover h-full w-full"
                animate={reduce ? {} : { rotate: 360 }}
                transition={
                  reduce
                    ? {}
                    : {
                        duration: 26,
                        ease: "linear",
                        repeat: Infinity,
                        delay: 1.6,
                      }
                }
              />
            </motion.div>

            <span>With Our</span>
          </motion.div>

          {/* Secondary heading */}
          <motion.h1
            variants={fadeUpBlur}
            className="text-8xl font-semibold tracking-wider leading-snug mt-6"
          >
            Magic Design
          </motion.h1>
        </div>

        {/* Left Image */}
        <motion.div
          variants={imageIn}
          className="absolute top-10 left-10 w-80 h-96 bg-gray-900/50 -rotate-12 rounded-b-full overflow-hidden will-change-transform"
          animate={reduce ? {} : { y: [0, 10, 0], x: [0, -6, 0] }}
          transition={
            reduce
              ? {}
              : {
                  duration: 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1.9,
                }
          }
        >
          <img
            src="/heroLeft.png"
            alt="Design inspiration left"
            className="object-cover rotate-12 h-full w-full scale-125"
          />
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={imageIn}
          className="absolute bottom-10 right-10 w-80 h-96 bg-gray-900/50 rotate-12 rounded-t-full overflow-hidden will-change-transform"
          animate={reduce ? {} : { y: [0, -10, 0], x: [0, 6, 0] }}
          transition={
            reduce
              ? {}
              : {
                  duration: 11,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: 1.9,
                }
          }
        >
          <img
            src="https://images.pexels.com/photos/10643964/pexels-photo-10643964.jpeg"
            alt="Design inspiration right"
            className="object-cover -rotate-12 h-full w-full scale-125"
          />
        </motion.div>

        {/* CTA + Wand */}
        <Magnetic>
          <motion.div
            variants={fadeUpBlur}
            className="absolute bottom-10 left-10 flex gap-3 items-center font-semibold"
          >
            <motion.button
              whileHover={
                reduce
                  ? {}
                  : {
                      y: -2,
                      scale: 1.02,
                      boxShadow: "0 12px 40px rgba(217, 119, 6, 0.25)",
                    }
              }
              whileTap={reduce ? {} : { scale: 0.97 }}
              transition={{ duration: 0.25, ease: easePremium }}
              className="border border-amber-600 rounded-full px-5 py-2 hover:bg-amber-600/10 transition-colors duration-300"
            >
              Create Magic
            </motion.button>

            <motion.div
              whileHover={
                reduce
                  ? {}
                  : {
                      scale: 1.06,
                      rotate: 6,
                      boxShadow: "0 16px 50px rgba(168, 85, 247, 0.35)",
                    }
              }
              whileTap={reduce ? {} : { scale: 0.96 }}
              transition={{ duration: 0.25, ease: easePremium }}
              animate={reduce ? {} : { y: [0, -6, 0] }}
              className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-700 text-white cursor-pointer will-change-transform"
            >
              <WandSparkles />
            </motion.div>
          </motion.div>
        </Magnetic>

        {/* Badges */}
        <motion.div
          className="absolute top-10 right-10 flex flex-col gap-2 items-end text-sm"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.12, delayChildren: 0.45 },
            },
          }}
        >
          {["For designers and creators", "Unlock your creativity"].map(
            (text, idx) => (
              <motion.div
                key={idx}
                variants={badge}
                whileHover={reduce ? {} : { y: -2, scale: 1.02 }}
                transition={{ duration: 0.25, ease: easePremium }}
                animate={reduce ? {} : { y: [0, -4, 0] }}
                className="badge rounded-full px-2 py-1 bg-purple-700 text-white cursor-pointer will-change-transform"
                style={{
                  transitionDelay: `${idx * 120}ms`,
                }}
              >
                <p className="flex items-center gap-2">
                  {text} <CheckCheck className="w-4 h-4" />
                </p>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
