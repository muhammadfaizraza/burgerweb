import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { GiArmoredBoomerang } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdminOrder, processOrder } from "../../Redux/actions/admin";
import { toast } from "react-hot-toast";

const Orders = () => {
  const dispatch = useDispatch();
  const { loading, orders, message, error } = useSelector(
    (state) => state.admin
  );

  const processHandler = (id) => {
    dispatch(processOrder(id));
  };

  useEffect(() => {
    dispatch(getAdminOrder());
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, error, message]);

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Status</th>
              <th>OrderQty</th>
              <th>Amount</th>

              <th>PaymentMethod</th>
              <th>User</th>
              <th>Action</th>
            </tr>
          </thead>
          {orders &&
            orders.map((i) => (
              <tbody key={i}>
                <tr>
                  <td> {i._id}</td>
                  <td> {i.orderStatus}</td>
                  <td>
                    {i.orderItems.vegCheeseBurger.quantity +
                      i.orderItems.cheeseBurger.quantity +
                      i.orderItems.burgerWithFries.quantity}{" "}
                  </td>
                  <td>{i.totalAmount} Rs </td>
                  <td> {i.paymentMethod}</td> <td>user name</td>
                  <td>
                    <Link to={`/order/${i._id}`}>
                      <AiOutlineEye />
                    </Link>
                    <button>
                      <GiArmoredBoomerang
                        onClick={() => processHandler(i._id)}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </main>
    </section>
  );
};

export default Orders;
