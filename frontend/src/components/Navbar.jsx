import React from "react";
import { Github, Linkedin, LogIn, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = { duration: 1.5, ease: [0.6, 0.01, -0.05, 0.9], delay: 1 };

const Navbar = () => {
  return (
    <>
      <div className="fixed w-[100vw] top-0 left-0 px-2 z-50">
        <div className="flex justify-between p-3 px-4 m-auto max-w-2xl mt-3 rounded-full bg-white bg-opacity-10 backdrop-blur-lg">
          <Link to={"/"}>
            <div className="flex w-fit items-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 100, 0] }}
                transition={{ ...transition }}
                className="w-6 h-6 bg-white rounded-full relative inline-block right-6 cursor-pointer"
              ></motion.div>
            </div>
          </Link>

          <div className="flex gap-4">
            <Link
              to={"/admin-login"}
              className="hover:scale-110 transition-all cursor-pointer"
            >
              <LogIn strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
