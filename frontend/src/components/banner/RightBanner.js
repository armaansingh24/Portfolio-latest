import React from 'react'
import { bannerImg } from "../../assets/index";
import { motion } from "framer-motion";

const RightBanner = () => {
  return (
    <motion.div className="w-full lgl:w-1/2 flex justify-center items-center relative" 
      initial={{ opacity: 0,x:100 }}
      animate={{ opacity: 1,x:0, transition: { duration: 1 } }}>
      <img
        // className="w-[300px] h-[400px] lgl:w-[450px] lgl:h-[600px] z-10"
        className="w-[300px] h-[300px] lgl:w-[500px] lgl:h-[500px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </motion.div>
  );
}

export default RightBanner