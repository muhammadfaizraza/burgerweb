import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
  { orders: [], users: [] },
  {
    getDashboardRequest: (state) => {
      state.loading = true;
    },
    getDashboardSuccess: (state, action) => {
      state.loading = false;
      state.usersCount = action.payload.usersCount;
      state.ordersCount = action.payload.ordersCount;
      state.totalIncome = action.payload.totalIncome;
    },
    getDashboardFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAdminUsersRequest: (state) => {
      state.loading = true;
    },
    getAdminUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAdminUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    getAdminOrdersRequest: (state) => {
      state.loading = true;
    },
    getAdminOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    getAdminOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    processOrdersRequest: (state) => {
      state.loading = true;
    },
    processOrdersSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    processOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
