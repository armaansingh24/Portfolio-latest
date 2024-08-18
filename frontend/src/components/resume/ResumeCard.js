import React from 'react';
import { motion } from "framer-motion";
import { InView } from 'react-intersection-observer';

const ResumeCard = ({ title, subTitle, result, des, lastChild }) => {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          className='w-[80%] relative'
          initial={{ opacity: 0, top: 100 }}
          animate={inView ? { opacity: 1, top: 0, transition: { duration: 1 } } : {}}
        >
          <div className="h-1/3 group">
            <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-16 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
              <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                    {title}
                  </h3>
                  <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
                    {subTitle}
                  </p>
                </div>
                <div>
                  <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                    {result}
                  </p>
                </div>
              </div>
              <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
                {des}
              </p>
            </div>
          </div>
          {!lastChild && <hr className='rotate-90 w-20 bg-black absolute -bottom-10 left-[45%]' />}
        </motion.div>
      )}
    </InView>
  );
};

export default ResumeCard;
