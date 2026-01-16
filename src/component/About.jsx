import { motion } from "framer-motion";
import CustomTitle from "../ui/CustomTitle";
import { skills } from "../constant/Skills";

const About = () => {
  const profile =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1741016876/Bamtech_blusza.jpg";

  return (
    <motion.section
      id="about"
      className="text-white flex flex-col justify-center items-center gap-12 lg:mt-[50px] my-10 lg:mx-[170px] mx-3"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <CustomTitle title="About me" />
      </motion.div>

      {/* Main Content Grid */}
      <div className="w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-purple-300 rounded-2xl blur-xl opacity-50"></div>
              <motion.div
                className="relative p-2 bg-gradient-to-r from-pink-700 to-purple-300 rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profile}
                  alt="Adewale Bamikefa - Software Developer"
                  className="w-full max-w-md rounded-xl object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="space-y-4">
              <p className="text-base sm:text-lg leading-7 text-gray-300">

                Software Developer with strong frontend sensibility and production-level
                backend experience, building scalable web applications with <span className="text-primary font-semibold">NestJS</span>,
                <span className="text-primary font-semibold"> PostgreSQL</span>, and <span className="text-primary font-semibold">TypeORM</span>.
                Experienced in designing and implementing RESTful APIs, managing relational data models,
                and ensuring reliable communication between client and server.
              </p>
              <p className="text-base sm:text-lg leading-7 text-gray-300">
                Proficient in HTML, CSS, and modern JavaScript frameworks, with a focus on
                clean architecture, maintainable codebases, and user-centered interfaces.
                Comfortable owning features end-to-end from system design to deployment while
                collaborating closely with cross-functional teams to deliver performant,
                real-world products.
              </p>

            </div>

            {/* Skills Progress Bars */}
            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                Core Skills
              </h3>
              <div className="flex flex-col gap-4">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base font-medium text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500">{skill.width}</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: skill.width }}
                        transition={{ duration: 1, delay: 0.7 + i * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Expertise Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            "Backend Architecture & System Design",
            "Real-Time Systems & Event-Driven Architecture",
            "Production Deployment & DevOps",
          ].map((text, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center p-6 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
            >
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text mb-3">
                +
              </div>
              <p className="font-medium text-sm sm:text-base text-center text-gray-300">
                {text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
