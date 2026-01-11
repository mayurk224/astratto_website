import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const easePremium = [0.16, 1, 0.3, 1];

const sectionV = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easePremium },
  },
};

const headerWrapV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const headerItemV = {
  hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: easePremium },
  },
};

const gridV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const ProjectSection = () => {
  const reduce = useReducedMotion();

  const projectsLeft = [
    {
      img: "/pexels-photo-6157698.jpeg",
      alt: "Lighthouse 3D Illustration",
      tag: "2D Animation",
      title: "The Lighthouse",
      desc: "Adding a new dimension to projects through thoughtfully designed 2D animations",
    },
    {
      img: "/pexels-photo-8828312.jpeg",
      alt: "Compass 3D Illustration",
      tag: "Motion Graphics",
      title: "Navigating Possibilities",
      desc: "Motion graphics breathe life into the project, blending direction and creativity",
    },
  ];

  const projectsRight = [
    {
      img: "/pexels-photo-1740175.jpeg",
      alt: "House 3D Illustration",
      tag: "Visual Identity",
      title: "Snowscape Haven",
      desc: "Crafting a visual identity that mirrors the serenity and allure of a winter sanctuary",
    },
    {
      img: "/pexels-photo-34411122.jpeg",
      alt: "Window 3D Illustration",
      tag: "3D Animation",
      title: "Nocturnal Symphony",
      desc: "Through 3D artistry, we orchestrate an animated ode to the evening, a dance of shadows and dreams",
    },
  ];

  return (
    <div className="p-10">
      <motion.section
        variants={sectionV}
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div
          variants={headerWrapV}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8"
        >
          <motion.h2
            variants={headerItemV}
            className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900"
          >
            Recent Projects
          </motion.h2>

          <motion.p
            variants={headerItemV}
            className="text-lg text-gray-500 max-w-sm leading-relaxed md:text-right"
          >
            Step into the world of our most recent projects, a showcase of our
            unwavering commitment to progressive design.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={gridV}
          initial={reduce ? false : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
        >
          {/* Left Column */}
          <div className="flex flex-col gap-16">
            {projectsLeft.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-16 md:pt-32">
            {projectsRight.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ProjectSection;
