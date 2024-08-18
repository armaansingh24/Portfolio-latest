import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { InView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ProjectsCard = ({ title, des, src, show, projectLive, projectGithub }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0, transition: { duration: 0.5 } } : {}}
          className="w-full p-4 xl:px-12 xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
        >
          <div className="w-full overflow-hidden rounded-lg">
            <img
              className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
              src={src}
              alt={title}
            />
          </div>
          <div className="w-full mt-5 flex flex-col gap-6">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base uppercase text-designColor font-normal">
                  {title}
                </h3>
                {show && (
                  <div className="flex gap-2">
                    <a href={projectGithub} target='_blank' rel="noreferrer" className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <BsGithub  />
                    </a>
                    <a href={projectLive} target='_blank'  rel="noreferrer" className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                      <FaGlobe />
                    </a>
                  </div>
                )}
              </div>
              <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
                {des}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default ProjectsCard;
