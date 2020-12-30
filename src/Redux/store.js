import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./slice/orderSlice";

export default configureStore({
  reducer: {
    order: orderReducer,
  },
});
