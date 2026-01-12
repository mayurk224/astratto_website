import React, { useRef, useState, useEffect } from "react";
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
  const cardContainerRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const services = [
    {
      title: "Motion\nGraphics",
      desc: "Creating dynamic visual content that brings stories to life through animation, bringing ideas into motion with engaging graphics and effects.",
      image: "/graphicsDesign.jpg",
    },
    {
      title: "Brand\nIdentity",
      desc: "Developing unique and memorable brand identities through comprehensive brand strategy, logo design, and visual identity systems.",
      image: "/brandImage.jpg",
    },
    {
      title: "UI/UX\nDesign",
      desc: "Designing user interfaces and experiences that are intuitive, accessible, and effective, focusing on creating digital products that resonate with users on a deeper level.",
      image: "/uiux.jpg",
    },
  ];

  const getScrollAmount = () => {
    const container = cardContainerRef.current;
    if (!container) return 320;

    const firstCard = container.querySelector("[data-service-card]");
    if (firstCard) return firstCard.clientWidth + 20; 
    return container.clientWidth * 0.85;
  };

  const scrollLeft = () => {
    if (!cardContainerRef.current) return;
    cardContainerRef.current.scrollBy({
      left: -getScrollAmount(),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    if (!cardContainerRef.current) return;
    cardContainerRef.current.scrollBy({
      left: getScrollAmount(),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = cardContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const firstCard = container.querySelector("[data-service-card]");
      const cardWidth = firstCard?.clientWidth || container.clientWidth;

      const index = Math.round(container.scrollLeft / (cardWidth + 20));
      setActiveSlide(Math.max(0, Math.min(index, services.length - 1)));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [services.length]);

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-4xl border border-gray-400 p-5 md:p-10"
    >
      <div className="serviceSection">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-5 md:gap-0">
          <motion.h1
            variants={headerVariants}
            custom={0}
            className="text-3xl md:text-4xl font-semibold"
          >
            Our Services
          </motion.h1>

          <motion.p
            variants={headerVariants}
            custom={0.1}
            className="text-gray-600 w-full md:w-lg"
          >
            Our team of experienced professionals is ready to help you bring
            your vision to life. Whether you need motion graphics, brand
            identity, or UI/UX design, we have the skills and expertise to
            deliver exceptional results.
          </motion.p>
        </div>

        <div className="space-y-4 md:space-y-2">
          <motion.div
            variants={cardsWrapVariants}
            ref={cardContainerRef}
            className="
    cardContainer flex gap-5
    overflow-x-auto xl:overflow-visible
    pb-2 xl:pb-0
    snap-x snap-mandatory
    [-ms-overflow-style:none] [scrollbar-width:none]
  "
          >
            <style>{`
    .cardContainer::-webkit-scrollbar { display: none; }
  `}</style>

            {services.map((s, idx) => (
              <div
                key={idx}
                data-service-card
                className="
        snap-start shrink-0
        min-w-70 sm:min-w-85 md:min-w-95
        xl:min-w-0
      "
              >
                <ServiceCard {...s} />
              </div>
            ))}
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex gap-3">
              <motion.button
                whileHover={
                  reduce
                    ? {}
                    : { scale: 1.05, backgroundColor: "#111827", color: "#fff" }
                }
                whileTap={reduce ? {} : { scale: 0.96 }}
                transition={{ duration: 0.25, ease: easePremium }}
                className="border border-gray-600 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
                onClick={scrollLeft}
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
                className="border border-gray-600 rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center"
                onClick={scrollRight}
              >
                <ArrowRight />
              </motion.button>
            </div>

            <div className="flex gap-1">
              {services.map((_, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    width: activeSlide === index ? 56 : 28,
                    opacity: activeSlide === index ? 1 : 0.45,
                  }}
                  transition={{ duration: 0.6, ease: easePremium }}
                  className="h-1 bg-gray-600 rounded-full cursor-pointer"
                  onClick={() => {
                    const container = cardContainerRef.current;
                    if (!container) return;

                    const firstCard = container.querySelector(
                      "[data-service-card]"
                    );
                    const cardWidth =
                      firstCard?.clientWidth || container.clientWidth;

                    container.scrollTo({
                      left: index * (cardWidth + 20),
                      behavior: "smooth",
                    });
                    setActiveSlide(index);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        whileInView={reduce ? {} : { opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: easePremium }}
        className="aboutSection flex items-center justify-center mt-10 md:mt-5 lg:py-10"
      >
        <div className="flex items-center justify-center flex-col mx-auto space-y-5">
          <motion.p
            initial={
              reduce ? false : { opacity: 0, y: 12, filter: "blur(6px)" }
            }
            whileInView={
              reduce ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: easePremium }}
            className="flex items-center text-base sm:text-lg text-gray-600 gap-1"
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

          <div className="text-center flex items-center text-3xl sm:text-4xl md:text-6xl flex-col space-y-3 px-2 md:px-0">
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
              className="flex gap-3 items-center justify-center flex-wrap"
            >
              <h1>
                <span className="text-purple-600">seamlessly</span> to craft
              </h1>

              <motion.img
                src="/heroLogo.svg"
                alt=""
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
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
