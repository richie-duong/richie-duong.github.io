import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaFigma,
  FaGithub,
  FaJava,
  FaPython,
  FaPhp,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiDotnet,
  SiExpress,
  SiJest,
  SiJunit5,
  SiDjango,
  SiSharp,
  SiGnubash,
  SiCanva,
} from "react-icons/si";

import { 
    TbBrandAdobeIllustrator,
    TbBrandAdobePhotoshop,
    TbBrandAdobeIndesign ,
} from "react-icons/tb";


const programmingLanguages = [
  {
    icon: <SiJavascript />,
    name: "JavaScript",
  },
  {
    icon: <SiSharp />,
    name: "C#",
  },
  {
    icon: <FaJava />,
    name: "Java",
  },
  {
    icon: <FaPython />,
    name: "Python",
  },
  {
    icon: <FaPhp />,
    name: "PHP",
  },
  {
    icon: <FaDatabase />,
    name: "SQL",
  },
  {
    icon: <FaHtml5 />,
    name: "HTML5",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
  },
  {
    icon: <SiGnubash />,
    name: "Bash",
  },
];

const frameworksLibraries = [
  {
    icon: <FaReact />,
    name: "React",
  },
  {
    icon: <FaNodeJs />,
    name: "Node.js",
  },
  {
    icon: <SiExpress />,
    name: "Express",
  },
  {
    icon: <SiDotnet />,
    name: "ASP.NET",
  },
  {
    icon: <FaBootstrap />,
    name: "Bootstrap",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
  },
  {
    icon: <SiJest />,
    name: "Jest",
  },
  {
    icon: <SiJunit5 />,
    name: "JUnit",
  },
  {
    icon: <SiDjango />,
    name: "Django",
  },
  {
    icon: <FaFigma />,
    name: "Figma",
  },
  {
    icon: <FaGithub />,
    name: "GitHub",
  },
];

const designTools = [
  {
    icon: <TbBrandAdobePhotoshop />,
    name: "Photoshop",
  },
  {
    icon: <TbBrandAdobeIllustrator />,
    name: "Illustrator",
  },
  {
    icon: <TbBrandAdobeIndesign />,
    name: "InDesign",
  },
  {
    icon: <SiCanva />,
    name: "Canva",
  },
];

function TechCard({ icon, name }) {
  return (
    <div
      className="
        group
        bg-white/5
        border
        border-cyan-400/10
        rounded-3xl
        p-6
        flex
        flex-col
        items-center
        justify-center
        gap-4
        backdrop-blur-md
        hover:border-cyan-400/40
        hover:-translate-y-2
        transition
        duration-300
      "
    >
      <div className="text-5xl text-gray-300 group-hover:text-cyan-400 transition">
        {icon}
      </div>

      <p className="uppercase tracking-widest text-xs text-gray-400 group-hover:text-white transition text-center">
        {name}
      </p>
    </div>
  );
}

export default function TechnicalSkills() {
  return (
    <section id="skills" className="py-28 px-6 lg:px-12 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            Skills & Technologies
          </p>

          <h2 className="text-5xl font-bold">Technical Skills</h2>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-semibold">Programming Languages</h3>

            <div className="flex-1 h-px bg-cyan-400/20" />
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {programmingLanguages.map((tech, index) => (
              <TechCard key={index} icon={tech.icon} name={tech.name} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-semibold">Frameworks & Libraries</h3>

            <div className="flex-1 h-px bg-cyan-400/20" />
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {frameworksLibraries.map((tech, index) => (
              <TechCard key={index} icon={tech.icon} name={tech.name} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-semibold">Design Tools</h3>

            <div className="flex-1 h-px bg-cyan-400/20" />
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {designTools.map((tool, index) => (
              <TechCard key={index} icon={tool.icon} name={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
