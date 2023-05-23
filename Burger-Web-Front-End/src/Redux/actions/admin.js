import axios from "axios";
import { server } from "../store";

export const getAdminstats = () => async (dispatch) => {
  try {
    dispatch({ type: "getDashboardRequest" });

    const { data } = await axios.get(`${server}/admin/stats`, {
      withCredentials: true,
    });
    dispatch({ type: "getDashboardSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getDashboardFail",
    });
  }
};

export const getAdminUser = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminUsersRequest" });

    const { data } = await axios.get(`${server}/admin/users`, {
      withCredentials: true,
    });
    dispatch({ type: "getAdminUsersSuccess", payload: data.users });
  } catch (error) {
    dispatch({
      type: "getAdminUsersFail",
      payload: error.response.data.message,
    });
  }
};

export const getAdminOrder = () => async (dispatch) => {
  try {
    dispatch({ type: "getAdminOrdersRequest" });

    const { data } = await axios.get(`${server}/admin/orders`, {
      withCredentials: true,
    });
    dispatch({ type: "getAdminOrdersSuccess", payload: data.orders });
  } catch (error) {
    dispatch({
      type: "getAdminOrdersFail",
      payload: error.response.data.message,
    });
  }
};

export const processOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: "processOrdersRequest" });

    const { data } = await axios.get(`${server}/admin/orders/${id}`, {
      withCredentials: true,
    });
    dispatch({ type: "processOrdersSuccess", payload: data.message });
  } catch (error) {
    dispatch({
      type: "processOrdersFail",
      payload: error.response.data.message,
    });
  }
};
