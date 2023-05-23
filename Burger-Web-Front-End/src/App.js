import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer.jsx";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess.jsx";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile.jsx";
import MyOrders from "./components/myOrders/MyOrders";
import OrderDetail from "./components/myOrders/OrderDetail";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/myOrders/Orders";
import About from "./components/about/About";
import Notfound from "./components/layout/N0tfound";
import { ProtectedRoute } from "protected-route-react";

import "./style/header.scss";
import "./style/footer.scss";
import "./style/contact.scss";
import "./style/cart.scss";
import "./style/shipping.scss";
import "./style/confirmOrder.scss";
import "./style/paymentSuccess.scss";
import "./style/login.scss";
import "./style/app.scss";
import "./style/profile.scss";
import "./style/table.scss";
import "./style/Orderdetails.scss";
import "./style/dashboard.scss";
import "./style/about.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Redux/actions/user";
import { toast, Toaster } from "react-hot-toast";

function App() {
  const dispatch = useDispatch();
  const { error, message, user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    dispatch({
      type: "clearError",
    });
    if (message) {
      toast.success(message);
    }
    dispatch({
      type: "clearMessage",
    });
  }, [dispatch, error, message]);

  return (
    <div className="App">
      <Router>
        <Header isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />

          <Route
            path="/login"
            element={
              <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/me">
                <Login />
              </ProtectedRoute>
            }
          />

          <Route element={<ProtectedRoute isAuthenticated />}>
            <Route path="/me" element={<Profile User={user} />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/confirmorder" element={<ConfirmOrder />} />
            <Route path="/order/:id" element={<OrderDetail />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />

            <Route path="/myorders" element={<MyOrders />} />
          </Route>

          <Route
            element={
              <ProtectedRoute
                isAuthenticated
                isAdmin={user && user.role === "admin"}
                adminRoute={false}
              />
            }
          >
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/orders" element={<Orders />} />
          </Route>
          <Route path="*" element={<Notfound />} />
        </Routes>

        <Footer />
        <Toaster />
      </Router>
    </div>
  );
}

export default App;
