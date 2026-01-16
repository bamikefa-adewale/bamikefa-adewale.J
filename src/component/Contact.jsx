import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMail } from "react-icons/ai";
import { TbPhoneCalling } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { FaArrowRight, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef(null);
  const YOUR_ACCESS_KEY_HERE = "9ca7c09f-f797-43bd-840f-99ec162e9e82";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        e.target.reset(); // Reset form fields
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Check your internet connection.");
    }
  };

  return (
    <section
      id="contact"
      className="text-white flex flex-col justify-center items-center gap-10 lg:mt-[50px] my-20 lg:mx-[170px] mx-5"
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start py-10">
          {/* Left Side - Contact Info */}
          <motion.div
            className="flex flex-col gap-8 w-full"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div>
              <h2 className="font-extrabold text-[35px] sm:text-[45px] md:text-[65px] text-transparent bg-gradient-to-r from-pink-700 to-purple-300 bg-clip-text mb-4">
                Let's Connect
              </h2>
              <p className="text-[#d8d8d8] text-base sm:text-lg leading-7 sm:leading-8 max-w-lg">
                I'm always open to discussing new opportunities, technical challenges, or potential collaborations. 
                Whether you need backend expertise, system design consultation, or full-stack development, 
                let's build something great together.
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-4">
              <motion.a
                href="mailto:bamikefaadewale@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-primary/50 hover:bg-gray-900 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <AiOutlineMail className="text-2xl text-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white text-base sm:text-lg">bamikefaadewale@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+2348166176457"
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-primary/50 hover:bg-gray-900 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <TbPhoneCalling className="text-2xl text-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white text-base sm:text-lg">+234 816 617 6457</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/50 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="p-2 rounded-lg bg-primary/20">
                  <MdLocationOn className="text-2xl text-primary" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white text-base sm:text-lg"> Nigeria</p>
          </div>
              </motion.div>
        </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-4">
              <motion.a
                href="https://www.linkedin.com/in/bamikefa-adewale/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-gray-400 hover:text-primary transition-colors" />
              </motion.a>
              <motion.a
                href="https://github.com/bamikefa-adewale"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <FaGithub className="text-xl text-gray-400 hover:text-primary transition-colors" />
              </motion.a>
              <motion.a
                href="https://x.com/KING_Bamkem001"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-900/50 border border-gray-700 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Twitter"
              >
                <FaTwitter className="text-xl text-gray-400 hover:text-primary transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full bg-gray-900/30 p-6 sm:p-8 rounded-xl border border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
        >
          <input type="hidden" name="access_key" value={YOUR_ACCESS_KEY_HERE} />

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[#d8d8d8] text-sm sm:text-base font-medium">
            Your Name
          </label>
          <input
                id="name"
                className="w-full h-[50px] sm:h-[55px] px-4 py-3 rounded-lg bg-[#1a1a1f] border border-gray-700 text-white text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            type="text"
            name="name"
                placeholder="John Doe"
            required
                aria-required="true"
          />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[#d8d8d8] text-sm sm:text-base font-medium">
            Your Email
          </label>
          <input
                id="email"
                className="w-full h-[50px] sm:h-[55px] px-4 py-3 rounded-lg bg-[#1a1a1f] border border-gray-700 text-white text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            type="email"
            name="email"
                placeholder="john.doe@example.com"
            required
                aria-required="true"
          />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[#d8d8d8] text-sm sm:text-base font-medium">
                Your Message
          </label>
          <textarea
                id="message"
                className="w-full h-[140px] sm:h-[160px] px-4 py-3 rounded-lg bg-[#1a1a1f] border border-gray-700 text-white text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
            name="message"
                placeholder="Tell me about your project or opportunity..."
                rows={6}
            required
                aria-required="true"
          />
            </div>

            <motion.button
            type="submit"
              className="flex items-center justify-center gap-2 px-8 py-4 text-white rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 mt-2 font-medium"
              aria-label="Submit contact form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message <FaArrowRight />
            </motion.button>
          </motion.form>
      </div>
      </motion.div>
    </section>
  );
};

export default Contact;
