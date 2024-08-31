import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiCodechef, SiCodeforces, SiLeetcode, SiHackerrank, SiGithub } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "Web Developer.",
      "Backend Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Armaan Singh</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm font-bodyFont leading-6 tracking-wide">
          I have a strong foundation in software development and am actively engaged in creating robust software solutions. My expertise in the MERN stack enables me to contribute effectively to the development of innovative software systems. With a meticulous approach to problem-solving and a passion for building efficient applications, I excel in the fast-paced world of software development. My experience has sharpened my communication and collaboration skills, allowing me to work seamlessly within multidisciplinary teams to deliver high-quality software. I am committed to continuous learning and growth, eager to further enhance my skills and make a meaningful impact in the field of software development.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-sm uppercase font-titleFont mb-4">
            Find me in
          </h2>
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
        <div>
          <h2 className="text-sm uppercase font-titleFont mb-4">
            My Coding Profiles
          </h2>
          <div className="flex gap-4">
            <a href='https://www.codechef.com/users/armaan_singh24#_%3D_' rel="noreferrer" target='_blank' className="bannerIcon">
              <SiCodechef />
            </a>
            <a href='https://codeforces.com/profile/armaan_singh24' rel="noreferrer" target='_blank' className="bannerIcon">
              <SiCodeforces />
            </a>
            <a href='https://leetcode.com/u/armaansingh24/' rel="noreferrer" target='_blank' className="bannerIcon">
              <SiLeetcode />
            </a>
            <a href='https://www.hackerrank.com/profile/_armaan_singh24' rel="noreferrer" target='_blank' className="bannerIcon">
              <SiHackerrank />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner