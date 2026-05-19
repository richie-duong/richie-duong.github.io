import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#070B14] py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
            About Me
          </p>

          <h2 className="text-5xl font-bold mb-8 leading-tight">
            I aim to build creative
            <span className="text-cyan-400"> solutions </span>
            for anything!
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Hi, I’m Richard — a web development student currently attending
            Algonquin College in the Web Development & Internet Applications
            program, with an expected graduation date of May 2027.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I’m passionate about full-stack web development and creating modern,
            user-focused digital experiences. I enjoy building responsive web
            applications, designing intuitive interfaces, and developing
            solutions that combine functionality with clean design.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            Alongside development, I also have experience in graphic design,
            including branding, social media graphics, promotional materials,
            and UI/UX design. I’m always looking to improve my skills through
            personal projects, collaboration, and continuous learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          <div className="bg-white/5 border border-cyan-400/10 rounded-3xl p-8 backdrop-blur-md hover:border-cyan-400/40 transition">
            <h3 className="text-5xl font-bold text-cyan-400 mb-4">3+</h3>

            <p className="text-gray-300 uppercase tracking-widest text-sm">
              Projects In Progress
            </p>
          </div>

          <div className="bg-white/5 border border-cyan-400/10 rounded-3xl p-8 backdrop-blur-md hover:border-cyan-400/40 transition">
            <h3 className="text-5xl font-bold text-cyan-400 mb-4">Full</h3>

            <p className="text-gray-300 uppercase tracking-widest text-sm">
              Stack Development
            </p>
          </div>

          <div className="bg-white/5 border border-cyan-400/10 rounded-3xl p-8 backdrop-blur-md hover:border-cyan-400/40 transition">
            <h3 className="text-5xl font-bold text-cyan-400 mb-4">UI / UX</h3>

            <p className="text-gray-300 uppercase tracking-widest text-sm">
              Design Focused
            </p>
          </div>

          <div className="bg-white/5 border border-cyan-400/10 rounded-3xl p-8 backdrop-blur-md hover:border-cyan-400/40 transition">
            <h3 className="text-5xl font-bold text-cyan-400 mb-4">Creative</h3>

            <p className="text-gray-300 uppercase tracking-widest text-sm">
              Digital Solutions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
