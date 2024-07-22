import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const tagColors = {
  green: "bg-green-600",
  sky: "bg-sky-600",
  // Add more colors as needed
};

const Card = ({ data, containerRef }) => {
  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.2 }}
      dragConstraints={containerRef}
      className="relative flex-shrink-0 w-60 h-[15rem] rounded-[40px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <FaFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 rounded-full flex items-center justify-center bg-zinc-600">
            {data.close ? <IoClose /> : <LuDownload size=".8em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              tagColors[data.tag.tagColor] || "bg-gray-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
