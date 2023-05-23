import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createContact } from "../../Redux/actions/contact";
import { toast } from "react-hot-toast";

const Contact = () => {
  const { messages, error } = useSelector((state) => state.contact);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = async () => {
    await dispatch(createContact(name, email, message));
  };

  useEffect(() => {
    if (messages) {
      toast.success(messages);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      navigate("/");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [dispatch, message, navigate, error]);

  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{
          x: "0",
          opacity: 1,
        }}
      >
        <motion.h2
          initial={{
            y: "-100vh",
            opacity: 0,
          }}
          animate={{
            y: "0",
            opacity: 1,
          }}
          transition={{
            delay: "0.4",
          }}
        >
          Contact Us
        </motion.h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          placeholder="Message..."
          cols="30"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" onClick={submit}>
          Send
        </button>
      </motion.form>
      {/* <motion.div className='FormBorder'>
  <motion.div>

    <img src={Burger} alt='burger'></img>
  </motion.div>
   </motion.div>    */}
    </section>
  );
};

export default Contact;
