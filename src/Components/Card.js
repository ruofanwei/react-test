import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import useOrder from "../hook/orderHook";
import { getOrder } from "../Redux/slice/orderSlice.js";
import CardInfo from "./CardInfo";
const Container = styled.div`
  max-width: 21rem;
  margin: 50px auto 20px auto;
`;
const Top = styled.div`
  background-color: #f5f4f4;
  padding: 10px;
`;
const TopTitle = styled.div`
  border-left: 4px solid green;
  padding-left: 10px;
`;

function Card() {
  const dispatch = useDispatch();
  const { orders } = useOrder();
  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);

  return (
    <>
      <Container class="card border-light mb-3">
        <Top class="card-header ">
          <TopTitle>進行中</TopTitle>
        </Top>
        {orders &&
          orders
            .filter((order) => {
              return order.status.code === 1 || order.status.code === 2;
            })
            .sort((a, b) => {
              return new Date(b.date).getTime() - new Date(a.date).getTime();
            })
            .map((order) => <CardInfo order={order} />)}
        <Top class="card-header ">
          <TopTitle>已完成</TopTitle>
        </Top>

        {orders &&
          orders
            .filter((order) => {
              return order.status.code === 3 || order.status.code === 4;
            })
            .sort((a, b) => {
              return new Date(b.date).getTime() - new Date(a.date).getTime();
            })
            .map((order) => <CardInfo order={order} />)}
      </Container>
    </>
  );
}

export default Card;
