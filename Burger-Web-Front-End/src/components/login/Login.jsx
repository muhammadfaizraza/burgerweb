import { motion } from "framer-motion";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { server } from "../../Redux/store";

const Login = () => {
  const handleLogin = () => {
    window.open(`${server}/googlelogin`, "_self");
  };
  return (
    <section className="login">
      <motion.button
        onClick={handleLogin}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      >
        Login With Google
        <FcGoogle />
      </motion.button>
    </section>
  );
};

export default Login;
