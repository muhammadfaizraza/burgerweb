import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ ItemNum, BurgerSrc, price, title, delay = 0, handler }) => {
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div>Item {ItemNum}</div>
      <main>
        <img src={BurgerSrc} alt=""></img>

        <h3>{price}</h3>
        <p>{title}</p>

        <button onClick={() => handler(ItemNum, title)}>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
