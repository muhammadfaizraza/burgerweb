import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyOrders } from "../../Redux/actions/order";
import Loader from "../layout/Loader";
import { toast } from "react-hot-toast";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];

  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    dispatch(getMyOrders());
  }, [error, dispatch]);

  return (
    <section className="tableClass">
      <main>
        {loading === true ? (
          <Loader />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Status</th>
                <th>OrderQty</th>
                <th>Amount</th>

                <th>PaymentMethod</th>
                <th>Action</th>
              </tr>
            </thead>
            {orders &&
              orders.map((i, ind) => (
                <tbody key={ind}>
                  <tr>
                    <td> {i._id}</td>
                    <td> {i.orderStatus}</td>
                    <td>
                      {i.orderItems.vegCheeseBurger.quantity +
                        i.orderItems.cheeseBurger.quantity +
                        i.orderItems.burgerWithFries.quantity}{" "}
                    </td>
                    <td>{i.totalAmount} Rs </td>
                    <td> {i.paymentMethod}</td>
                    <td>
                      <Link to={`/order/${i._id}`}>
                        <AiOutlineEye />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
        )}
      </main>
    </section>
  );
};

export default MyOrders;
