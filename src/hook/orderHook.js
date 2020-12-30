import { useSelector } from "react-redux";

import { selectOrder } from "../Redux/slice/orderSlice";
export default function useOrder() {
  const orders = useSelector(selectOrder);

  return { orders };
}
