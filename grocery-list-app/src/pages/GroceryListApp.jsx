import React from "react";
import styled from "styled-components";
import HeadTitle from "../components/HeadTitle";
import TotalItem from "../components/TotalItem";

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
      <TotalItem />
    </Container>
  );
};

export default GroceryListApp;
