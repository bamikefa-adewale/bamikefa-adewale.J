import { motion } from "framer-motion";
import CustomTitle from "../ui/CustomTitle";
import { skills } from "../constant/Skills";

const About = () => {
  const profile =
    "https://res.cloudinary.com/dbrub0d6r/image/upload/v1741016876/Bamtech_blusza.jpg";

  return (
    <motion.section
      id="about"
      className="text-white flex flex-col justify-center items-center gap-10 lg:mt-[50px] my-10 lg:mx-[170px] mx-3"
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

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 items-center my-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-cover rounded-sm p-2 bg-gradient-to-r from-pink-700 to-purple-300"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={profile} 
            alt="Adewale Bamikefa - Software Developer" 
            className="w-full rounded" 
            loading="lazy"
          />
        </motion.div>

        <motion.section className="col-span-1 md:col-span-2 flex flex-col gap-10">
          <motion.div
            className="text-base sm:text-lg md:text-xl font-light flex flex-col gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p>
              Software Developer with strong frontend sensibility and production-level
              backend experience, building scalable web applications with NestJS,
              PostgreSQL, and TypeORM. Experienced in designing and implementing
              RESTful APIs, managing relational data models, and ensuring reliable
              communication between client and server.
            </p>
            <p>
              Proficient in HTML, CSS, and modern JavaScript frameworks, with a focus on
              clean architecture, maintainable codebases, and user-centered interfaces.
              Comfortable owning features end-to-end from system design to deployment while
              collaborating closely with cross-functional teams to deliver performant,
              real-world products.
            </p>
            <p>
              Currently working as a Backend Engineer at FirstFounders' INC, where I build
              real-time systems, optimize database performance, and implement secure
              authentication flows for high-traffic applications.
            </p>
          </motion.div>

          <motion.div className="flex flex-col text-white gap-4 cursor-pointer">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                className="flex flex-col sm:flex-row gap-4 items-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <p className="text-lg sm:text-xl md:text-2xl font-medium min-w-[100px] sm:min-w-[150px]">
                  {skill.name}
                </p>
                <hr
                  style={{ width: skill.width }}
                  className="w-full h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row w-full justify-between items-center gap-10 mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        {[
          "Backend Architecture & System Design",
          "Real-Time Systems & Event-Driven Architecture",
          "Production Deployment & DevOps",
        ].map((text, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
          >
            <h1 className="text-3xl sm:text-[40px] font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
              +
            </h1>
            <p className="font-medium text-lg sm:text-2xl text-center uppercase">
              {text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default About;
