import React from "react";
import styled from "styled-components";
import Card from "./Card";
const Title = styled.p`
  margin: 0 auto;
  font-size: 36px;
`;

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Title class="navbar-brand">Demo</Title>
      </nav>
      <Card />
    </>
  );
}

export default App;
