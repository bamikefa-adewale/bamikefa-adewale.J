import { useState } from "react";
import { motion } from "framer-motion";
import CustomTitle from "../ui/CustomTitle";
import { my_work } from "../constant/My_work";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";

const MyWork = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section
      id="my_work"
      className="text-white flex flex-col justify-center items-center gap-10 lg:mt-[50px] my-10 lg:mx-[170px] mx-5"
    >
      <CustomTitle title="Featured Projects" />
      <div className="container px-5 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        {my_work.map((project, work_no) => {
          const isExpanded = expandedIndex === work_no;
          return (
            <motion.div
              key={work_no}
              className="flex flex-col gap-4 p-6 border-2 border-gray-700 rounded-xl bg-gray-900/50 hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: work_no * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                  {project.work_name}
                </h2>
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors"
                  aria-label={`Visit ${project.work_name}`}
                >
                  <FaExternalLinkAlt />
                </a>
              </div>

              {project.work_img && (
                <img
                  src={project.work_img}
                  alt={project.work_name}
                  className="w-full h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  loading="lazy"
                />
              )}
              
              <p className="text-gray-300 text-base leading-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack?.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack?.length > 3 && (
                  <span className="px-3 py-1 text-xs text-gray-400">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>

              {project.keyFeatures && (
                <div>
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : work_no)}
                    className="text-sm text-primary hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <FaCode />
                    {isExpanded ? "Hide Details" : "View Key Features"}
                  </button>
                  
                  {isExpanded && (
                    <motion.ul
                      className="mt-3 space-y-2 text-sm text-gray-400"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {project.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              )}

              <a
                href={project.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-2 text-center text-white bg-gradient-to-r from-primary to-secondary rounded-full hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                View Project
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default MyWork;
