import { RiReactjsLine } from "react-icons/ri";
import { SiCsharp, SiMongodb, SiFirebase } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { FaAndroid, FaMapMarkerAlt, FaDatabase } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});



const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView = {{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView = {{opacity: 1, x: 0}}
      initial={{opacity: 0, x: -100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-300" /> {/* React */}
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCsharp className="text-7xl text-purple-700" /> {/* C# */}
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" /> {/* MongoDB */}
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFirebase className="text-7xl text-orange-500" /> {/* Firebase */}
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiNodejsSmall className="text-7xl text-green-600" /> {/* Node.js */}
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAndroid className="text-7xl text-green-700" /> {/* Android */}
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaMapMarkerAlt className="text-7xl text-red-500" /> {/* Map Marker */}
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDatabase className="text-7xl text-teal-500" /> {/* Database */}
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <AiOutlineApi className="text-7xl text-purple-500" /> {/* API */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
