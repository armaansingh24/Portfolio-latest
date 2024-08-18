import React from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { technologies } from '../../assets/content/Technologies';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Tech Stack</h2>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {technologies.map((technology) => (
            <InView key={technology.id} triggerOnce>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  className="flex flex-col gap-4 justify-center items-center w-full border-2 border-bodyColor hover:border-designColor rounded-lg cursor-pointer"
                  style={{ transform: inView ? 'scale(1)' : 'scale(0.9)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } } : {}}
                  whileHover={{ scale: 1.1 }}
                  key={technology.id}
                >
                  <span>
                    <img
                      src={technology.icon}
                      className={`w-24 h-24 object-contain ${technology.name === "Jest" && "scale-[2]"}`}
                      alt={technology.name}
                    />
                  </span>
                  <span className="flex items-center gap-2 text-gray-400">
                    {technology.name}
                  </span>
                  <span className="text-gray-400">{technology.level}</span>
                </motion.div>
              )}
            </InView>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
