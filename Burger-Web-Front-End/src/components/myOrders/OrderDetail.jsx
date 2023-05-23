import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../Redux/actions/order";
import { useParams } from "react-router-dom";
import Loader from "../layout/Loader";

const OrderDetail = () => {
  const { order, loading } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const params = useParams();
  console.log(order, "aya");

  useEffect(() => {
    dispatch(getOrderDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <section className="orderDetail">
      {loading === false && order !== undefined ? (
        <main>
          <h1>Order Details</h1>

          <div>
            <h1>Shipping</h1>
            <p>
              <b>Address</b>
              {order.shippingInfo.hNo} {order.shippingInfo.city}{" "}
              {order.shippingInfo.state} {order.shippingInfo.country}
            </p>
          </div>
          <div>
            <h1>Contact</h1>
            {/* <p>
    <b>Name</b>
    {"Faiz Raza"}
  </p> */}
            <p>
              <b>Phone</b>
              {order.shippingInfo.phoneNo}
            </p>
          </div>
          <div>
            <h1>Order Status</h1>
            <p>
              <b>Status</b>
              {order.orderStatus}
            </p>
            <p>
              <b>Placed At</b>
              {order.createdAt.split("T")[0]}
            </p>
            <p>
              <b>Delivered At</b>
              {order.deliveredAt ? order.deliveredAt.split("T")[0] : <></>}
            </p>
          </div>

          <div>
            <h1>Payment</h1>

            <p>
              <b>Payment Method</b>
              {order.paymentMethod}{" "}
            </p>
            <p>
              <b>Payment Reference</b>
              {order.paymentMethod === "COD" ? "cash" : <></>}{" "}
            </p>
            <p>
              <b>Paid At</b>
              {"After shipment"}
            </p>
          </div>

          <div>
            <h1>Amount</h1>
            <p>
              <b>Items Total</b>
              {order.itemsPrice}
            </p>
            <p>
              <b>Shipping Charges</b>
              {order.shippingCharges}
            </p>
            <p>
              <b>Tax</b>
              {order.taxPrice}
            </p>
            <p>
              <b>Total Amount</b>
              {order.taxPrice + order.shippingCharges + order.itemsPrice}
            </p>
          </div>
          <article>
            <h1>Ordered Items</h1>

            <div>
              <h1>Cheese Burger</h1>

              <div>
                <span>{order.orderItems.cheeseBurger.quantity}</span> X
                <span>{order.orderItems.cheeseBurger.price}</span>
              </div>
            </div>
            <div>
              <h1>Veg Cheese Burger</h1>

              <div>
                <span>{order.orderItems.vegCheeseBurger.quantity}</span> X
                <span>{order.orderItems.vegCheeseBurger.price}</span>
              </div>
            </div>

            <div>
              <h1> Burger Fries</h1>

              <div>
                <span>{order.orderItems.burgerWithFries.quantity}</span> X
                <span>{order.orderItems.burgerWithFries.price}</span>
              </div>
            </div>
            <div>
              <h4
                style={{
                  fontWeight: 800,
                }}
              >
                Sub Total
              </h4>
              <div
                style={{
                  fontWeight: 800,
                }}
              >
                {order.totalAmount} Rs
              </div>
            </div>
          </article>
        </main>
      ) : (
        <>
          <Loader />{" "}
        </>
      )}
    </section>
  );
};

export default OrderDetail;
