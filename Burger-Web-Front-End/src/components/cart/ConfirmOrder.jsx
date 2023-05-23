import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../Redux/actions/order";
import { useNavigate } from "react-router-dom";

const ConfirmOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems, subTotal, tax, shippingCharges, shippingInfo, total } =
    useSelector((state) => state.cart);

  const { message, error } = useSelector((state) => state.order);

  const [paymentMethod, setpaymentMethod] = useState();
  const [isLoading, setisLoding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoding(true);
    if (paymentMethod === "COD") {
      dispatch(
        createOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          subTotal,
          tax,
          shippingCharges,
          total
        )
      );
    }
    setisLoding(false);
  };
  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      navigate("/paymentsuccess");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, message, navigate, error]);
  return (
    <section className="confirmOrder">
      <main>
        <h2>Confirm Order</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Cash On Delivery</label>
            <input
              type="radio"
              name="payment"
              onChange={() => setpaymentMethod("COD")}
              required
            />
          </div>

          <div>
            <label>other Payment Options is not available right Now</label>
          </div>
          <button type="submit" disabled={isLoading}>
            Place Your Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
