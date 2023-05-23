import { motion } from "framer-motion";
import react from "react";
import { Link } from "react-router-dom";
import me from "../../assets/ceo.jpeg";
import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/actions/user";
import Loader from "../layout/Loader";

const Profile = () => {
  const { loading, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const options = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    animate: {
      y: "0",
      opacity: 1,
    },
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  console.log(user, "hahah");
  return (
    <section className="Profile">
      {loading === false ? (
        <main>
          <motion.img src={me} alt="user" {...options} />

          <motion.h5 {...options} transition={{ delay: 0.5 }}>
            Faiz Raza
          </motion.h5>
          <motion.div {...options} transition={{ delay: 0.6 }}>
            <Link
              to="/admin/dashboard"
              style={{
                borderRadius: "0px",
                backgroundColor: "rgb(40,40,40)",
              }}
            >
              {" "}
              <MdDashboard /> Dashboard
            </Link>
          </motion.div>
          <motion.div
            initial={{
              x: "100vw",
              opacity: 0,
            }}
            animate={{
              x: "0",
              opacity: 1,
            }}
          >
            <Link to="/myorders">Orders</Link>
          </motion.div>

          <motion.button
            onClick={handleLogout}
            initial={{
              x: "100vw",
              opacity: 0,
            }}
            animate={{
              x: "0",
              opacity: 1,
            }}
            translate={{
              delay: 0.4,
            }}
          >
            LogOut
          </motion.button>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};
export default Profile;
