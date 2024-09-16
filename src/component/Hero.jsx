import { HERO_CONTENT } from "../constants";
import profile from "../assets/Uhe1.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    setPosition({
      x: (x - 0.5) * 20, // Menyesuaikan multiplier untuk efek yang diinginkan
      y: (y - 0.5) * 20, // Menyesuaikan multiplier untuk efek yang diinginkan
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="pb-4 lg:pb-8">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            {/* Animasi hover untuk nama */}
            <motion.h1
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.1 }} // Tambahkan efek hover zoom in
              style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            >
              Ujang Herlan
            </motion.h1>

            {/* Animasi hover untuk role */}
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.1 }} // Tambahkan efek hover zoom in
              style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            >
              Front End Developer
            </motion.span>

            {/* Animasi hover untuk deskripsi */}
            <motion.p
              className="my-2 max-w-xl font-light py-6 tracking-tighter text-justify text-base md:text-lg lg:text-x"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            {/* Animasi hover untuk gambar profil */}
            <motion.img
              src={profile}
              alt="Ujang Herlan"
              className="rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.1 }} // Tambahkan efek hover zoom in
              style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
