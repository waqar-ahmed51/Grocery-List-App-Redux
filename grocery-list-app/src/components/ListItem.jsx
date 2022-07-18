import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";

const Container = styled.div`
  background-color: #6a146f;
  width: 70%;
  padding: 10px 0px;
  height: 30px;
  display: flex;
`;
const ItemText = styled.div`
  flex: 8;
  padding-left: 20px;
  background-color: blue;
  display: flex;
  font-size: 20px;
`;
const ButtonPurchased = styled.button`
  background-color: green;
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
`;

const ListItems = () => {
  return (
    <Container>
      <ItemText>Total Items to be purchsed from market</ItemText>
      <ButtonPurchased>Purchased</ButtonPurchased>
    </Container>
  );
};

export default ListItems;
