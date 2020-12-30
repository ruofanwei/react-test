import React from "react";
import styled from "styled-components";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Photo = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;
const PhotoIsGray = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  filter: grayscale(100%);
`;
const OrderStatus = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 10px 0 10px;
`;
const ProductName = styled.div`
  color: #555555;
  padding: 0 10px 0 10px;
`;
const Status = styled.div`
  color: green;
`;
const StatusIsComplete = styled.div`
  color: #555555;
`;
const SendTime = styled.div`
  color: black;
`;
const OrderInfo = styled.div`
  width: 100%;
`;
function CardInfo({ order }) {
  return (
    <>
      <Wrapper class="card-body">
        {order.status.code === 1 || order.status.code === 2 ? (
          <Photo src={order.logo}></Photo>
        ) : (
          <PhotoIsGray src={order.logo}></PhotoIsGray>
        )}
        <OrderInfo>
          <OrderStatus>
            {order.status.code === 1 || order.status.code === 2 ? (
              <Status>{order.status.type}</Status>
            ) : (
              <StatusIsComplete>{order.status.type}</StatusIsComplete>
            )}
            <SendTime>預計出貨：{order.date}</SendTime>
          </OrderStatus>
          <ProductName>{order.name}</ProductName>
        </OrderInfo>
        <FontAwesomeIcon icon={faAngleRight} />
      </Wrapper>
    </>
  );
}

export default CardInfo;
