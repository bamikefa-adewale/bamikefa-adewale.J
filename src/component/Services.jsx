import { useState } from "react";
import { motion } from "framer-motion";
import CustomTitle from "../ui/CustomTitle";
import { expertise_data } from "../constant/Services";

const Services = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <motion.section
      id="expertise"
      className="text-white flex flex-col justify-center items-center gap-10 lg:mt-[50px] my-10 lg:mx-[170px] mx-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <CustomTitle title="Core Expertise" />
      <p className="text-gray-300 text-center text-lg max-w-3xl mb-8">
        Production-level experience building scalable backend systems, real-time applications,
        and financial-grade platforms with a focus on reliability, performance, and maintainability.
      </p>
      <div className="container px-5 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {expertise_data.map((data, i) => {
          const isExpanded = expanded[i];

          return (
            <motion.div
              key={i}
              className="flex flex-col justify-start gap-4 p-6 border-2 border-gray-700 rounded-xl transition-all duration-300 ease-in-out bg-gray-900/50 hover:border-primary/50 hover:bg-gray-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{data.icon}</span>
                <h2 className="text-xl font-semibold text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                  {data.category}
                </h2>
              </div>

              <ul className="text-gray-300 text-sm leading-6 space-y-2">
                {data.highlights.slice(0, isExpanded ? data.highlights.length : 2).map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {data.highlights.length > 2 && (
                <button
                  onClick={() => toggleExpand(i)}
                  className="text-sm text-primary hover:text-secondary transition-colors mt-2 text-left"
                >
                  {isExpanded ? "Show Less" : `+${data.highlights.length - 2} more`}
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Services;
