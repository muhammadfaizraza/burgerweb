import React from "react";
import burger1 from "../../assets/burger2.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CartIem = ({ value, title, img, increament, decreament }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decreament}>-</button>
      <input readOnly value={value} type="number"></input>

      <button onClick={increament}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const dispatch = useDispatch();
  const {
    cartItems: {
      cheeseBurger: { quantity: cheeseBurger },
      vegCheeseBurger: { quantity: vegCheeseBurger },
      burgerWithFries: { quantity: burgerWithFries },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
    shippingInfo,
  } = useSelector((state) => state.cart);

  const increament = (Item) => {
    switch (Item) {
      case 1:
        dispatch({ type: "cheeseBurgerIncreament" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "vegCheeseBurgerIncreament" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "burgerwithFriesIncreament" });
        dispatch({ type: "calculatePrice" });
        break;
      default:
        dispatch({ type: "cheeseBurgerIncreament" });
        dispatch({ type: "calculatePrice" });
    }
  };

  const decreament = (Item) => {
    switch (Item) {
      case 1:
        if (cheeseBurger === 0) return;
        dispatch({ type: "cheeseBurgerDecreament" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        if (vegCheeseBurger === 0) return;
        dispatch({ type: "vegCheeseBurgerDecreament" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if (burgerWithFries === 0) return;
        dispatch({ type: "burgerwithFriesDecreament" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };
  return (
    <section className="cart">
      <main>
        <CartIem
          title={"cheese Burger"}
          increament={() => increament(1)}
          decreament={() => decreament(1)}
          img={burger1}
          value={cheeseBurger}
        />
        <CartIem
          title={"cheese Burger with French Fries"}
          increament={() => increament(2)}
          decreament={() => decreament(2)}
          img={burger1}
          value={vegCheeseBurger}
        />
        <CartIem
          title={"Zinger Burger "}
          increament={() => increament(3)}
          decreament={() => decreament(3)}
          img={burger1}
          value={burgerWithFries}
        />

        <article>
          <div>
            <h4>Sub Total </h4>
            <p>Rs:{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>Rs:{tax / 100}</p>
          </div>
          <div>
            <h4>Shipping</h4>
            <p>Rs:{shippingCharges}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>Rs:{total}</p>
          </div>
          <Link to="/shipping">Checkout </Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
