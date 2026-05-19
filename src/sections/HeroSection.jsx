import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaFigma, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiDotnet } from "react-icons/si";

import Richard from "../assets/Richard.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-28 pb-20 lg:pt-0 lg:pb-0 bg-[#070B14] flex items-center relative overflow-hidden">
      {" "}
      <div className="absolute top-[-200px] right-[-150px] w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] left-[-150px] w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Aspiring E-Solutions Specialist
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Hello there, I'm
            <span className="text-cyan-400"> Richard </span>
            Duong.
          </h1>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed mb-10">
            I design and develop modern web applications, digital experiences,
            and visual branding solutions that help businesses establish a
            strong online presence.
          </p>

          <div className="flex flex-wrap gap-5">
            <a href="#projects" className="hover:text-cyan-400 transition">
              <button className="bg-cyan-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
                View Projects
              </button>
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              <button className="border border-cyan-400 px-8 py-4 rounded-full hover:bg-cyan-400 hover:text-black transition">
                Contact Me
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              className="
                relative
                w-[320px]
                h-[420px]
                rounded-3xl
                overflow-hidden
                border
                border-cyan-400/20
                bg-white/5
                backdrop-blur-md
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 z-10" />

              <img
                src={Richard}
                alt="Richard Duong"
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            <div
              className="
                absolute
                -bottom-6
                -right-6
                bg-cyan-400
                text-black
                px-6
                py-3
                rounded-2xl
                font-bold
                shadow-2xl
              "
            >
              Developer + Designer
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
