import { RiReactjsLine } from "react-icons/ri";
import { SiCsharp, SiMongodb, SiFirebase, SiHtml5, SiCss3, SiPowerbi, SiPython } from "react-icons/si"; // Import SiPython
import { DiNodejsSmall } from "react-icons/di";
import { FaAndroid, FaMapMarkerAlt, FaDatabase, FaCoffee } from "react-icons/fa";
import { AiOutlineApi } from "react-icons/ai";
import { motion } from "framer-motion";

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
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">
        Technologies
      </motion.h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
        
        {/* React */}
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-300" />
        </motion.div>

        {/* C# */}
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCsharp className="text-7xl text-purple-700" />
        </motion.div>

        {/* MongoDB */}
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        {/* Firebase */}
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFirebase className="text-7xl text-orange-500" />
        </motion.div>

        {/* Node.js */}
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiNodejsSmall className="text-7xl text-green-600" />
        </motion.div>

        {/* Android */}
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAndroid className="text-7xl text-green-700" />
        </motion.div>

        {/* Map Marker */}
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaMapMarkerAlt className="text-7xl text-red-500" />
        </motion.div>

        {/* Database */}
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDatabase className="text-7xl text-teal-500" />
        </motion.div>

        {/* API */}
        <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <AiOutlineApi className="text-7xl text-purple-500" />
        </motion.div>

        {/* Java */}
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCoffee className="text-7xl text-red-600" /> {/* Java */}
        </motion.div>

        {/* HTML5 */}
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiHtml5 className="text-7xl text-orange-600" /> {/* HTML5 */}
        </motion.div>

        {/* CSS3 */}
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-blue-600" /> {/* CSS3 */}
        </motion.div>

        {/* Power BI */}
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPowerbi className="text-7xl text-yellow-500" /> {/* Power BI */}
        </motion.div>

        {/* Python */}
        <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPython className="text-7xl text-blue-500" /> {/* Python */}
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;
