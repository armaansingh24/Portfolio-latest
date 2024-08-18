import React from 'react'
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Armaan Singh</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I specialize in MERN stack development, building efficient software solutions and thriving in collaborative, fast-paced environments.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 7717359993</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sarmaan20720@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href='https://github.com/armaansingh24' target='_blank' rel="noreferrer" className="bannerIcon">
            <SiGithub />
          </a>
          <a href='https://x.com/armaan_singh241' target='_blank' rel="noreferrer" className="bannerIcon">
            <FaTwitter />
          </a>
          <a href='https://www.linkedin.com/in/sarmaan241/' target='_blank' rel="noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft