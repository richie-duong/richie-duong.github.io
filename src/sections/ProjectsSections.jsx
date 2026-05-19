import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import taskbasket from "../assets/taskbasket.png";
import jeoparty from "../assets/jeoparty.png"
import petpal from "../assets/petpal.png";

const projects = [
  {
    title: "Task Basket",
    category: "Full-Stack Web Application",

    status: "Completed",

    description:
      "A productivity-focused task management application featuring task organization, responsive design, and modern UI components.",

    technologies: ["React", "Node.js", "MongoDB", "Firebase"],

    github: "https://github.com/richie-duong/Task_Basket.git",
    demo: "#",

    image: taskbasket
  },

  {
    title: "JeoParty Game",
    category: "Interactive Full-Stack Application",

    status: "In Progress",

    description:
      "A full-stack trivia game inspired by Jeopardy featuring dynamic questions, score tracking, and interactive gameplay. The game is still in progress, but you may request to schedule a live demo.",

    technologies: ["React", "ASP.NET", "C#", "SQL"],

    github: "https://github.com/richie-duong/Jeoparty.git",
    demo: "",

    image: jeoparty,
  },

  {
    title: "PetPal",
    category: "Full-Stack Pet Management System",

    status: "In Progress",

    description:
      "A centralized pet care management web application that helps users organize feeding schedules, medications, vet appointments, and health records for multiple pets in one centralized platform.",

    technologies: ["React", "Express", "SQL", "Python"],

    github: "https://github.com/richie-duong/PetPal.git",
    demo: "",

    image: petpal,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6 lg:px-12 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold mb-6">Featured Projects</h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A selection of modern web applications and digital experiences
            showcasing full-stack development, UI/UX design, problem-solving
            skills, and practical solutions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                grid
                lg:grid-cols-2
                gap-10
                items-center
              "
            >
              <div
                className={`
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-cyan-400/10
                  group
                  ${index % 2 === 1 ? "lg:order-2" : ""}
                `}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition
                    duration-500
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-4 mb-4 flex-wrap">
                  <p className="uppercase tracking-[0.2em] text-cyan-400 text-sm">
                    {project.category}
                  </p>

                  <span
                    className={`
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      uppercase
                      tracking-wider
                      border

                      ${
                        project.status === "In Progress"
                          ? "bg-yellow-400/10 text-yellow-300 border-yellow-400/20"
                          : "bg-cyan-400/10 text-cyan-300 border-cyan-400/20"
                      }
                    `}
                  >
                    {project.status}
                  </span>
                </div>

                <h3 className="text-4xl font-bold mb-6">{project.title}</h3>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-white/5
                        border
                        border-cyan-400/10
                        text-sm
                        text-gray-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-5">
                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    className="
                      flex
                      items-center
                      gap-3
                      border
                      border-cyan-400
                      px-6
                      py-3
                      rounded-full
                      hover:bg-cyan-400
                      hover:text-black
                      transition
                    "
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  {project.status === "Completed" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="
                        flex
                        items-center
                        gap-3
                        bg-cyan-400
                        text-black
                        px-6
                        py-3
                        rounded-full
                        hover:scale-105
                        transition
                      "
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="
                        flex
                        items-center
                        gap-3
                        bg-yellow-400/10
                        text-yellow-300
                        border
                        border-yellow-400/20
                        px-6
                        py-3
                        rounded-full
                        cursor-not-allowed
                      "
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
