import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16"> {/* Added border for consistency */}
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl" // Keeping the header size consistent
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center justify-between p-6 bg-transparent rounded-lg shadow-lg transition-transform transform hover:scale-105"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={project.image} 
              width={240} 
              height={240} 
              alt={project.title} 
              className="mb-4 rounded-lg shadow-md"
            />
            <h6 className="mb-2 font-semibold"> {/* Changed text size to match Experience */}
              {project.title}
            </h6>
            <p className="mb-4 text-neutral-400 text-sm"> {/* Adjusted text size to small */}
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800 transition-colors duration-200 hover:bg-purple-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
