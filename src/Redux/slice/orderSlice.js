import { createSlice } from "@reduxjs/toolkit";
import { getOrder as getOrderAPI } from "../../WebAPI";
export const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: {},
  },
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { setOrder, setCode } = orderSlice.actions;

export const getOrder = () => (dispatch) => {
  return getOrderAPI().then((res) => {
    dispatch(setOrder(res));
    return res;
  });
};

export const selectOrder = (state) => state.order.order;
export default orderSlice.reducer;
