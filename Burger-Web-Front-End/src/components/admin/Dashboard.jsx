import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, Tooltip, ArcElement, Legend } from "chart.js";
import Loader from "../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAdminstats } from "../../Redux/actions/admin";

ChartJs.register(Tooltip, ArcElement, Legend);

const Box = ({ title, value }) => (
  <div>
    <h3>{value} </h3>
    <p> {title} </p>
  </div>
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const { totalIncome, ordersCount, usersCount } = useSelector(
    (state) => state.admin
  );
  const loading = false;

  const data = {
    labels: ["preparing", "shipped", "Delivered"],
    datasets: [
      {
        label: "# of Orders",
        data: ordersCount
          ? [ordersCount.preparing, ordersCount.delivered, ordersCount.shipped]
          : [0, 0, 0],
        backgroundColor: [
          "rgba(159,63,176,0.1)",
          "rgba(78,63,176,0.2)",
          "rgba(156,0,60,0.3)",
        ],
        borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
      },
    ],
  };
  console.log(totalIncome, "aayas");
  useEffect(() => {
    dispatch(getAdminstats());
  }, [dispatch]);

  return (
    <section className="dashboard">
      {loading === false ? (
        <>
          <main>
            <article>
              <Box title="Users" value={usersCount} />
              <Box
                title="Orders"
                value={ordersCount ? ordersCount.total : <></>}
              />
              <Box title="Income" value={totalIncome} />
            </article>
            <section>
              <div>
                <Link to="/admin/orders">View Order</Link>
                <Link to="/admin/users">View Users</Link>
              </div>

              <aside>
                <Doughnut data={data} />
              </aside>
            </section>
          </main>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Dashboard;
