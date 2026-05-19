import { motion } from "framer-motion";

import webbannerproject from "../assets/designs/webbannerproject.jpg";
import velouraeditorialposter from "../assets/designs/velouraeditorialposter.png";
import velourabranding from "../assets/designs/velourabranding.png";
import velouramockup from "../assets/designs/velouramockup.png";
import wireframing from "../assets/designs/highfidelitywireframe.png";
import wireframing2 from "../assets/designs/wireframe2.png";
import wireframing3 from "../assets/designs/wireframe3.png";
import ikeabanner from "../assets/designs/ikeabanner.png";
import daimcake from "../assets/designs/DAIMCAKE.png";

const designs = [
  {
    title: "Low Fidelity Wireframe",
    category: "UI / UX",

    image: wireframing2,
  },

  {
    title: "High Fidelity Wireframe",
    category: "UI / UX",

    image: wireframing3,
  },

  {
    title: "Membership Poster",
    category: "Branding",

    image: ikeabanner,
  },

  {
    title: "Product / Campaign Banner",
    category: "Branding",

    image: webbannerproject,
  },

    {
    title: "Prototyping",
    category: "UI / UX",

    image: wireframing,
  },

  {
    title: "Editorial Poster",
    category: "Branding",

    image: velouraeditorialposter,
  },
  

  {
    title: "Product Mockup",
    category: "Branding",

    image: velouramockup,
  },

  {
    title: "Typeface and Icons",
    category: "Branding",

    image: velourabranding,
  },
  {
    title: "Table Tent",
    category: "Branding",

    image: daimcake,
  },
];

export default function DesignShowcaseSection() {
  return (
    <section id="designs" className="py-28 px-6 lg:px-12 bg-[#070B14]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            VISUAL COMMUNICATIONS
          </p>

          <h2 className="text-5xl font-bold mb-6">Designs Showcase</h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A collection of branding, UI/UX, and digital design projects focused
            on creating visually engaging and impactful experiences.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {designs.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-cyan-400/10
                group
                break-inside-avoid
                bg-white/5
              "
            >
              <img
                src={design.image}
                alt={design.title}
                className="
                  w-full
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-500
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/90
                  via-black/20
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-300
                  flex
                  items-end
                  p-8
                "
              >
                <div>
                  <p className="uppercase tracking-[0.2em] text-cyan-400 text-xs mb-3">
                    {design.category}
                  </p>

                  <h3 className="text-2xl font-semibold">{design.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
