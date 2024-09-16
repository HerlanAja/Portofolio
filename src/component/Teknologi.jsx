import { RiReactjsLine } from "react-icons/ri";
import { DiJava, DiPython } from "react-icons/di";
import { SiNextdotjs, SiFlutter } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion'; // Import framer-motion

const Teknologi = () => {
  const hoverAnimation = {
    whileHover: {
      scale: 1.2, // Membesarkan ikon saat di-hover
    },
    transition: {
      type: "spring", // Gerakan elastis untuk animasi
      stiffness: 300, // Kekakuan gerakan
    },
  };

  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Teknologi</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* Ikon ReactJS */}
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" {...hoverAnimation}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Ikon Java */}
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" {...hoverAnimation}>
          <DiJava className="text-7xl text-orange-500" />
        </motion.div>

        {/* Ikon Python */}
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" {...hoverAnimation}>
          <DiPython className="text-7xl text-yellow-400" />
        </motion.div>

        {/* Ikon NextJS */}
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" {...hoverAnimation}>
          <SiNextdotjs className="text-7xl text-white" />
        </motion.div>

        {/* Ikon Flutter */}
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" {...hoverAnimation}>
          <SiFlutter className="text-7xl text-blue-400" />
        </motion.div>

        {/* Ikon NodeJS */}
        <motion.div className="rounded-2xl border-4 border-neutral-800 p-4" {...hoverAnimation}>
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Teknologi;
