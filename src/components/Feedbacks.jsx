import { motion } from "framer-motion";
import React from "react";

import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// AchievementCard Component
const AchievementCard = ({ index, title, organization, date, description }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="relative bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full text-center mx-auto group"
  >
    {/* Subtle Shiny Border Effect */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-md"></div>
    <div className="relative z-10">
      <p className="text-blue-400 font-black text-[48px]">"</p>
      <div className="mt-1">
        <h3 className="text-purple-400 font-bold text-[20px]">{title}</h3>
        <p className="text-green-300 text-[14px] mt-1">
          {organization} • {date}
        </p>
        <p className="text-white tracking-wider text-[16px] mt-4">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

// Achievements Component
const Achievements = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I've accomplished</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>
      <div className="-mt-20 pb-14 flex flex-wrap justify-center gap-7">
        {achievements.map((achievement, index) => (
          <AchievementCard key={index} index={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
