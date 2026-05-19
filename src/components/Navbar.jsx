import { useState } from "react";
import logo from "../assets/logo.svg";

import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#070B14]/80 backdrop-blur-md border-b border-cyan-400/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#home">
            <img src={logo} alt="Richard Logo" className="h-12 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#designs" className="hover:text-cyan-400 transition">
              Designs
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-5 text-xl">
              <a
                href="https://github.com/richie-duong"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/richard-duong-b371271a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="
              md:hidden
              pb-6
              flex
              flex-col
              gap-6
              text-sm
              uppercase
              tracking-widest
            "
          >
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="#designs"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Designs
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>

            <div className="flex items-center gap-6 text-2xl pt-4">
              <a
                href="https://github.com/richie-duong"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/richard-duong-b371271a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
