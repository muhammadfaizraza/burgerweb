import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Loader = () => {
  const option = {
    initial: {
      opacity: 0.4,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      opacity: 1,
      ease: "linear",
      repeat: "infinite",
      repeatType: "reverse",
    },
  };
  return (
    <section className="Loader ">
      <IoFastFoodOutline />

      <div>
        <motion.p {...option}>Your Order is Loading... </motion.p>
      </div>
    </section>
  );
};

export default Loader;
