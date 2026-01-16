import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800 mt-20">
      <div className="mx-5 sm:mx-10 lg:mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand & Description */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-semibold mb-4">
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                Adew
              </span>
              <span className="text-white">ale</span>
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-6 max-w-md mb-6">
              Software Developer with production-level backend experience building scalable
              systems with NestJS, PostgreSQL, and TypeORM. Experienced in real-time systems,
              financial platforms, and event-driven architectures.
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a
                href="mailto:bamikefaadewale@gmail.com"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-primary" />
                <span>bamikefaadewale@gmail.com</span>
              </a>
              <a
                href="tel:+2348166176457"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <FaPhone className="text-primary" />
                <span>+234 816 617 6457</span>
              </a>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" />
                <span>Nigeria</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <button
                  onClick={() => scrollToSection("#home")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#expertise")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#my_work")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold text-lg mb-4">Connect</h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/bamikefa-adewale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl text-gray-400 hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/bamikefa-adewale/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl text-gray-400 hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  href="https://x.com/KING_Bamkem001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl text-gray-400 hover:text-primary transition-colors" />
                </motion.a>
              </div>

              <a
                href="/Bamikefa_Fullstack_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-sm text-white bg-gradient-to-r from-primary to-secondary rounded-lg hover:scale-105 transition-transform duration-300"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">
              © {currentYear} <span className="text-primary">Adewale Bamikefa</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <button
                onClick={() => scrollToSection("#home")}
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <span className="text-gray-600">•</span>
              <button
                onClick={() => scrollToSection("#contact")}
                className="hover:text-primary transition-colors"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
