import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";


const Education = ({ educationData }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-0 w-full flex flex-col gap-20 justify-center items-center">
          {educationData.map((edu, index) => (
            <ResumeCard
              key={index}
              title={edu.title}
              subTitle={edu.subTitle}
              result={edu.result}
              des={edu.des}
              lastChild={edu.lastChild}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
