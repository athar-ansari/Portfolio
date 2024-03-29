import React from "react";
import NavBar from "../NavBar/NavBar";
import CvButton from "./CvButton/CvButton";
import MobileNavBar from "../MobileNavBar/MobileNavBar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <NavBar />
      <div className="about h-screen flex gap-8 w-full items-center flex-grow bg-[#f5f5f5] text-slate-900  xs:flex xs:flex-col xs:gap-0 xs:h-dvh lg:h-dvh lg:overflow-hidden ">
        <motion.div
          className="ml-[17rem] relative flex justify-center items-center flex-col font-Geologica lg:ml-20 xs:flex-row xs:mb-2 xs:-ml-1 lg:mb-36"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-9xl leading-none text-center xs:text-[5.5rem] xs:leading-[70px] xs:mt-11">
            <h1 className="">AB</h1>
            <h1 className="">OU</h1>
          </div>

          <motion.h1
            className="text-9xl leading-none text-center font-Geologica bg-aboutme bg-clip-text text-transparent xs:leading-[100px]"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            T
          </motion.h1>

          <motion.div
            className="absolute bottom-[11px] right-[10px] text-[20px] font-bold bg-aboutme bg-clip-text text-transparent xs:right-5 xs:bottom-1"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            ME
          </motion.div>
        </motion.div>

        <motion.div
          className="info text-lg font-medium mt-10 mr-56 lg:mr-28 lg:text-sm lg:mb-36 xs:m-2 xs:mt-8 xs:p-4"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            Hello! <br /> I’m Athar Ansari, a tech enthusiast from Asansol, West
            Bengal. Currently, I’m pursuing my Bachelor’s degree in Information
            Technology from Asansol Engineering College.
            <br />
            Coding is my passion. I love to solve problems and explore new
            technologies. I’m always eager to dive into programming challenges
            and web development projects. Contributing to open-source is
            something I enjoy as it allows me to learn, grow, and give back to
            the community.
            <br />
            In this ever-evolving world of technology, I’m excited to learn,
            grow, and make a difference. Let’s code and create a better future
            together!
          </p>
          <CvButton />
        </motion.div>
      </div>

      {/* ======== MOBILE NAV-BAR ======== */}

      <div className="mobileNavBar  -mt-80 ml-48  hidden xs:block">
        <MobileNavBar />
      </div>
    </>
  );
};

export default About;
