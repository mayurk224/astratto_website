import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const easePremium = [0.16, 1, 0.3, 1];

const cardV = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easePremium },
  },
};

const ProjectCard = ({ img, alt, tag, title, desc }) => {
  const reduce = useReducedMotion();

  return (
    <motion.article
      variants={cardV}
      whileHover={
        reduce
          ? {}
          : {
              y: -8,
              transition: { duration: 0.35, ease: easePremium },
            }
      }
      className="group cursor-pointer"
    >
      {/* Media */}
      <div className="relative overflow-hidden rounded-4xl aspect-4/3 w-full">
        {/* Image zoom */}
        <motion.img
          src={img}
          alt={alt}
          className="object-cover w-full h-full will-change-transform"
          loading="lazy"
          decoding="async"
          whileHover={reduce ? {} : { scale: 1.06 }}
          transition={{ duration: 0.9, ease: easePremium }}
        />

        {/* Premium overlay */}
        {!reduce && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: easePremium }}
            className="pointer-events-none absolute inset-0"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-fuchsia-900/20 via-transparent to-black/10" />
          </motion.div>
        )}

        {/* Top right icon */}
        <motion.div
          className="absolute top-6 right-6 bg-white/95 backdrop-blur-md w-15 h-15 rounded-full flex items-center justify-center shadow-sm border border-black/5"
          whileHover={reduce ? {} : { scale: 1.07, rotate: 45 }}
          transition={{ duration: 0.28, ease: easePremium }}
        >
          <ArrowUpRight className="w-6 h-6 text-gray-900" />
          <span className="pointer-events-none absolute inset-0 rounded-full ring-0 ring-fuchsia-400/30 transition-all duration-300 group-hover:ring-4" />
        </motion.div>

        {/* Tag */}
        <motion.div
          className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-black/5"
          whileHover={reduce ? {} : { y: -2, scale: 1.02 }}
          transition={{ duration: 0.35, ease: easePremium }}
        >
          <span className="text-sm font-medium text-gray-900 block">{tag}</span>
        </motion.div>
      </div>

      {/* Text */}
      <div className="mt-8 space-y-3">
        <motion.h3
          initial={false}
          whileHover={reduce ? {} : { x: 2 }}
          transition={{ duration: 0.35, ease: easePremium }}
          className="text-3xl font-medium tracking-tight text-fuchsia-500 group-hover:text-fuchsia-600 transition-colors"
        >
          {title}
        </motion.h3>
        <p className="text-lg text-gray-500 leading-relaxed max-w-md">{desc}</p>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
