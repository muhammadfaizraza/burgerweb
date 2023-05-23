import { createReducer } from "@reduxjs/toolkit";

export const ContactReducer = createReducer(
  {},
  {
    createContactRequest: (state) => {
      state.loading = true;
    },
    createContactSuccess: (state, action) => {
      state.loading = false;
      state.messages = action.payload;
    },
    createContactFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearMessage: (state) => {
      state.messages = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  }
);
