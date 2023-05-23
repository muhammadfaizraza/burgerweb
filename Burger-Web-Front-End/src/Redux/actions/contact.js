import { server } from "../store";
import axios from "axios";

export const createContact =
  ({ name, email, message }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "createContactRequest",
      });

      const { data } = await axios.post(
        `${server}/contact`,
        {
          name,
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },

        {
          withCredentials: true,
        }
      );

      dispatch({
        type: "createContactSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "createContactFail",
        payload: error.response.data.message,
      });
    }
  };
