import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../../src/assets/Burger1.jpg";
import burger2 from "../../../src/assets/burger2.jpg";
import burger3 from "../../../src/assets/burger3.png";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const Menu = () => {
  const dispatch = useDispatch();
  const addToCartHandler = (itemNum, Name) => {
    switch (itemNum) {
      case 1:
        dispatch({ type: "cheeseBurgerIncreament" });
        toast.success(`your ${Name} Added to Cart`);
        break;

      case 2:
        dispatch({ type: "vegCheeseBurgerIncreament" });
        toast.success(`your ${Name} Added to Cart`);
        break;

      case 3:
        dispatch({ type: "burgerwithFriesIncreament" });
        toast.success(`your ${Name} Added to Cart`);
        break;
    }
  };

  return (
    <section id="menu">
      <h1>Menu</h1>

      <div>
        <MenuCard
          ItemNum={1}
          BurgerSrc={burger1}
          price={600}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.2}
        />
        <MenuCard
          ItemNum={1}
          BurgerSrc={burger2}
          price={800}
          title="Zinger Burger"
          handler={addToCartHandler}
          delay={0.6}
        />
        <MenuCard
          ItemNum={1}
          BurgerSrc={burger3}
          price={900}
          title="Crunch Burger"
          handler={addToCartHandler}
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Menu;
