import profilePic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, delay: delay },
  },
});

const hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement to create 3D effect
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  // Effect to add mouse move listener
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const xRotation = (mousePosition.y - window.innerHeight / 2) / 20; // Adjust this value for intensity
  const yRotation = (mousePosition.x - window.innerWidth / 2) / 20; // Adjust this value for intensity

  return (
    <div className="relative border-b border-neutral-900 pb-10 lg:pb-16 lg:mb-36">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-center lg:text-left text-3xl lg:text-5xl font-thin tracking-tight text-neutral-100" // Reduced font size
            >
              Nhlakanipho Khumalo
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-xl lg:text-2xl tracking-wider font-medium" // Reduced font size
            >
              Junior Software Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-6 font-light text-neutral-300 leading-relaxed lg:leading-loose tracking-tight text-center lg:text-left"
            >
              I am a passionate full-stack developer dedicated to creating strong and scalable web and mobile applications. With three years of hands-on experience, I have developed a keen ability to build user-friendly solutions that meet diverse needs. I thrive on turning ideas into reality and enjoy collaborating with teams to achieve common goals. My goal is to use my skills to craft innovative applications that drive business growth and provide exceptional experiences for users.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-6 lg:mt-10"
            >
              
            </motion.div>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex justify-center"
          >
            <div
              className="relative perspective-1000" // Added perspective for 3D effect
              style={{
                transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`, // Apply rotation based on mouse position
                transition: 'transform 0.1s ease', // Smooth transition
              }}
            >
              <motion.img
                src={profilePic}
                width={350}
                height={350}
                alt="Nhlakanipho Khumalo"
                className="mb-6 border-4 border-neutral-800 shadow-lg rounded-lg glow-effect" // Added glow-effect class
                style={{
                  filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.5)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))',
                }} // Inline styles for glow effect
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default hero;
