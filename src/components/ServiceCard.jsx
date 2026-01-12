import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const easePremium = [0.16, 1, 0.3, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: easePremium },
  },
};

const ServiceCard = ({ title, desc, image }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={cardVariants}
      whileHover={
        reduce
          ? {}
          : {
              y: -6,
              scale: 1.01,
              boxShadow:
                "0px 20px 60px rgba(88, 28, 135, 0.18), 0px 6px 18px rgba(0,0,0,0.08)",
            }
      }
      transition={{ duration: 0.35, ease: easePremium }}
      className="
        group relative border border-purple-500/60
        w-87.5 md:w-90 lg:w-105
        rounded-3xl p-5 space-y-5 overflow-hidden bg-white
      "
    >
      {!reduce && (
        <div className="pointer-events-none absolute -inset-24 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100">
          <div className="h-full w-full bg-linear-to-r from-purple-500/25 via-fuchsia-500/15 to-transparent" />
        </div>
      )}

      <div className="relative flex items-center justify-between">
        <h1 className="text-2xl font-semibold leading-tight whitespace-pre-line">
          {title}
        </h1>

        <motion.button
          whileHover={reduce ? {} : { scale: 1.06 }}
          whileTap={reduce ? {} : { scale: 0.96 }}
          transition={{ duration: 0.25, ease: easePremium }}
          className="rounded-full w-14 h-14 flex items-center justify-center bg-purple-700 text-white shadow-md relative"
        >
          <motion.span
            whileHover={reduce ? {} : { rotate: 18, x: 1, y: -1 }}
            transition={{ duration: 0.25, ease: easePremium }}
          >
            <ArrowUpRight />
          </motion.span>

          <span className="pointer-events-none absolute inset-0 rounded-full ring-0 ring-purple-400/40 transition-all duration-300 group-hover:ring-4" />
        </motion.button>
      </div>

      <hr className="border border-purple-600/40" />

      <div className="relative flex flex-col space-y-5 overflow-hidden">
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          {desc}
        </p>

        <div className="relative overflow-hidden rounded-2xl">
          {!reduce && (
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-tr from-purple-600/15 via-transparent to-white/10" />
          )}

          <motion.img
            src={image}
            alt={title}
            className="w-full h-55 object-cover"
            loading="lazy"
            decoding="async"
            whileHover={reduce ? {} : { scale: 1.06 }}
            transition={{ duration: 0.7, ease: easePremium }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
