import { BASE_URL } from "./unit";

// 取得訂單的資訊
export const getOrder = () => {
  return fetch(`${BASE_URL}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json());
};
