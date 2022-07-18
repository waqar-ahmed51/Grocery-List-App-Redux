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
const Text = styled.div`
  flex: 1;
  padding-left: 20px;
  background-color: blue;
  display: flex;
  font-size: 20px;
`;
const CartNumber = styled.div`
  background-color: green;
  padding-right: 20px;
  display: flex;
  justify-content: end;
  flex: 1;
`;

const TotalItems = () => {
  return (
    <Container>
      <Text>Total Items to be purchsed from market</Text>
      <CartNumber>
        <Badge badgeContent={4} color="primary">
          <ReorderIcon color="action" />
        </Badge>
      </CartNumber>
    </Container>
  );
};

export default TotalItems;
