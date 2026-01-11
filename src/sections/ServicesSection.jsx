import React from "react";
import ServiceCard from "../components/ServiceCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const easePremium = [0.16, 1, 0.3, 1];

const sectionVariants = {
  hidden: { opacity: 0, y: 22, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: easePremium },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay, ease: easePremium },
  }),
};

const cardsWrapVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const ServicesSection = () => {
  const reduce = useReducedMotion();

  const services = [
    {
      title: "Motion\nGraphics",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio mollitia iusto minima accusamus animi.",
      image: "/graphicsDesign.jpg",
    },
    {
      title: "Brand\nIdentity",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio mollitia iusto minima accusamus animi.",
      image: "/brandImage.jpg",
    },
    {
      title: "UI/UX\nDesign",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio mollitia iusto minima accusamus animi.",
      image: "/uiux.jpg",
    },
  ];

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-4xl border border-gray-400 p-10"
    >
      {/* ===================== SERVICES ===================== */}
      <div className="serviceSection">
        <div className="flex items-center justify-between mb-10">
          <motion.h1
            variants={headerVariants}
            custom={0}
            className="text-4xl font-semibold"
          >
            Our Services
          </motion.h1>

          <motion.p
            variants={headerVariants}
            custom={0.1}
            className="text-gray-600 w-md"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            mollitia iusto minima accusamus animi, accusantium ipsam eos
            excepturi nobis amet!
          </motion.p>
        </div>

        <div className="space-y-2">
          {/* cards */}
          <motion.div
            variants={cardsWrapVariants}
            className="cardContainer flex gap-5"
          >
            {services.map((s, idx) => (
              <ServiceCard key={idx} {...s} />
            ))}
          </motion.div>

          {/* controls + progress */}
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <motion.button
                whileHover={
                  reduce
                    ? {}
                    : { scale: 1.05, backgroundColor: "#111827", color: "#fff" }
                }
                whileTap={reduce ? {} : { scale: 0.96 }}
                transition={{ duration: 0.25, ease: easePremium }}
                className="border border-gray-600 rounded-full w-14 h-14 flex items-center justify-center"
              >
                <ArrowLeft />
              </motion.button>

              <motion.button
                whileHover={
                  reduce
                    ? {}
                    : { scale: 1.05, backgroundColor: "#111827", color: "#fff" }
                }
                whileTap={reduce ? {} : { scale: 0.96 }}
                transition={{ duration: 0.25, ease: easePremium }}
                className="border border-gray-600 rounded-full w-14 h-14 flex items-center justify-center"
              >
                <ArrowRight />
              </motion.button>
            </div>

            {/* progress indicators (animated UI-ready) */}
            <div className="flex gap-1">
              <motion.div
                initial={false}
                animate={{ width: 56, opacity: 1 }}
                transition={{ duration: 0.6, ease: easePremium }}
                className="h-1 bg-gray-600 rounded-full"
              />
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={false}
                  animate={{ width: 28, opacity: 0.45 }}
                  transition={{ duration: 0.6, ease: easePremium }}
                  className="h-1 bg-gray-600 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ===================== ABOUT ===================== */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        whileInView={reduce ? {} : { opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: easePremium }}
        className="aboutSection h-[60vh] flex items-center justify-center"
      >
        <div className="flex items-center justify-center flex-col mx-auto space-y-5">
          {/* label */}
          <motion.p
            initial={
              reduce ? false : { opacity: 0, y: 12, filter: "blur(6px)" }
            }
            whileInView={
              reduce ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: easePremium }}
            className="flex items-center text-lg text-gray-600 gap-1"
          >
            <motion.span
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={reduce ? {} : { scaleX: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.6, ease: easePremium }}
              className="origin-left border border-gray-600 w-6"
            />
            About Astratto
          </motion.p>

          {/* big typography (stagger lines) */}
          <div className="text-center flex items-center text-6xl flex-col space-y-3">
            <motion.h1
              initial={
                reduce ? false : { opacity: 0, y: 16, filter: "blur(8px)" }
              }
              whileInView={
                reduce ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: easePremium }}
            >
              Our <span className="text-gray-600">Visionary</span>{" "}
              <span className="text-orange-600">artisans</span> collaborate
            </motion.h1>

            <motion.div
              initial={
                reduce ? false : { opacity: 0, y: 16, filter: "blur(8px)" }
              }
              whileInView={
                reduce ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.08, ease: easePremium }}
              className="flex gap-3 items-center"
            >
              <h1>
                <span className="text-purple-600">seamlessly</span> to craft
              </h1>

              <motion.img
                src="/heroLogo.svg"
                alt=""
                className="w-14 h-14"
                initial={false}
                animate={reduce ? {} : { y: [0, -3, 0], rotate: [0, 1, 0] }}
                transition={
                  reduce
                    ? {}
                    : { duration: 3, ease: "easeInOut", repeat: Infinity }
                }
              />

              <h1>
                inspiring <span className="text-gray-600">experience</span>
              </h1>
            </motion.div>

            <motion.h1
              initial={
                reduce ? false : { opacity: 0, y: 16, filter: "blur(8px)" }
              }
              whileInView={
                reduce ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.16, ease: easePremium }}
            >
              <span className="text-orange-600">leaving</span> lasting{" "}
              <span className="text-gray-600">imprints</span> on{" "}
              <span className="text-purple-600">brands</span> <br /> and spaces.
            </motion.h1>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesSection;
