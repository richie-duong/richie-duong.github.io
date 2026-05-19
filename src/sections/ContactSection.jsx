import { useState } from "react";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSuccessMessage("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setSuccessMessage("Failed to send message.");
    }

    setIsSending(false);
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
              Contact Me
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              Let’s
              <span className="text-cyan-400"> Connect </span>& Collaborate.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
              I’m currently seeking internship, co-op, and junior development
              opportunities. Feel free to reach out for potential
              collaborations, opportunities, or to learn more about my work and
              experience!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:duon0065@algonquinlive.com"
                className="
                  flex
                  items-center
                  gap-5
                  text-lg
                  text-gray-300
                  hover:text-cyan-400
                  transition
                "
              >
                <FaEnvelope className="text-cyan-400 text-2xl" />
                duon0065@algonquinlive.com
              </a>

              <a
                href="https://github.com/richie-duong"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-5
                  text-lg
                  text-gray-300
                  hover:text-cyan-400
                  transition
                "
              >
                <FaGithub className="text-cyan-400 text-2xl" />
                My GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/richard-duong-b371271a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-5
                  text-lg
                  text-gray-300
                  hover:text-cyan-400
                  transition
                "
              >
                <FaLinkedin className="text-cyan-400 text-2xl" />
                My LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              bg-white/5
              border
              border-cyan-400/10
              rounded-3xl
              p-10
              backdrop-blur-md
            "
          >
            <div className="mb-6">
              <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3">
                Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="
                  w-full
                  bg-[#070B14]
                  border
                  border-cyan-400/10
                  rounded-2xl
                  px-5
                  py-4
                  text-white
                  outline-none
                  focus:border-cyan-400
                  transition
                "
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="
                  w-full
                  bg-[#070B14]
                  border
                  border-cyan-400/10
                  rounded-2xl
                  px-5
                  py-4
                  text-white
                  outline-none
                  focus:border-cyan-400
                  transition
                "
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm uppercase tracking-widest text-gray-400 mb-3">
                Message
              </label>

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message goes here. Ask or inquire about anything!"
                required
                className="
                  w-full
                  bg-[#070B14]
                  border
                  border-cyan-400/10
                  rounded-2xl
                  px-5
                  py-4
                  text-white
                  outline-none
                  focus:border-cyan-400
                  transition
                  resize-none
                "
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="
                w-full
                bg-cyan-400
                text-black
                py-4
                rounded-2xl
                font-semibold
                hover:scale-[1.02]
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {successMessage && (
              <p className="mt-6 text-center text-cyan-400">{successMessage}</p>
            )}
          </motion.form>
        </div>

        <div className="border-t border-cyan-400/10 mt-24 pt-10 text-center">
          <p className="text-gray-500">
            © 2026 Richard Duong. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
