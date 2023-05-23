import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {
    cheeseBurger: {
      quantity: 0,
      price: 200,
    },
    vegCheeseBurger: { price: 500, quantity: 0 },
    burgerWithFries: { price: 1800, quantity: 0 },
  },
  subTotal: 0,
  tax: 0,
  shippingCharges: 200,
  total: 0,
  shippingInfo: {},
};

export const cartReducer = createReducer(initialState, {
  cheeseBurgerIncreament: (state) => {
    state.cartItems.cheeseBurger.quantity += 1;
  },
  vegCheeseBurgerIncreament: (state) => {
    state.cartItems.vegCheeseBurger.quantity += 1;
  },
  burgerwithFriesIncreament: (state) => {
    state.cartItems.burgerWithFries.quantity += 1;
  },
  cheeseBurgerDecreament: (state) => {
    state.cartItems.cheeseBurger.quantity -= 1;
  },
  vegCheeseBurgerDecreament: (state) => {
    state.cartItems.vegCheeseBurger.quantity -= 1;
  },
  burgerwithFriesDecreament: (state) => {
    state.cartItems.burgerWithFries.quantity -= 1;
  },
  calculatePrice: (state) => {
    state.subTotal =
      state.cartItems.cheeseBurger.price *
        state.cartItems.cheeseBurger.quantity +
      state.cartItems.vegCheeseBurger.price *
        state.cartItems.vegCheeseBurger.quantity +
      state.cartItems.burgerWithFries.price *
        state.cartItems.burgerWithFries.quantity;

    state.tax = (state.subTotal * 18) / 100;
    state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
    state.total = state.subTotal + state.tax + state.shippingCharges;
  },
  emptyState: (state) => {
    state.cartItems = {
      cheeseBurger: {
        quantity: 0,
        price: 200,
      },
      vegCheeseBurger: {
        quantity: 0,
        price: 500,
      },
      burgerWithFries: {
        quantity: 0,
        price: 1800,
      },
    };
    state.subTotal = 0;
    state.total = 0;
    state.shippingCharges = 0;
    state.taxPrice = 0;
  },
  addSippinginfo: (state, action) => {
    state.shippingInfo = {
      hNo: action.payload.hNo,
      country: action.payload.country,
      phoneNo: action.payload.phoneNo,
      pinCode: action.payload.pinCode,
      state: action.payload.state,
      city: action.payload.city,
    };
  },
});
