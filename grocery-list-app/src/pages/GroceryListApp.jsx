import React from "react";
import styled from "styled-components";
import HeadTitle from "../components/HeadTitle";
import TotalItems from "../components/TotalItems";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
`;

const GroceryListApp = () => {
  return (
    <Container>
      <HeadTitle />
      <TotalItems />
    </Container>
  );
};

export default GroceryListApp;
