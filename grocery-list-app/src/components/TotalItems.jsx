import React from "react";
import styled from "styled-components";
import { Badge } from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 70%;
  padding: 10px 0px;
  height: 30px;
  display: flex;

  margin-top: 10px;
  border-bottom: 1px solid black;
`;
const Text = styled.div`
  flex: 1;
  padding-left: 20px;
  /* background-color: blue; */
  display: flex;
  font-size: 20px;
`;
const CartNumber = styled.div`
  /* background-color: green; */
  padding-right: 20px;
  display: flex;
  justify-content: end;
  flex: 1;
`;

const TotalItems = () => {
  const groceryItemReducer = useSelector((state) => state.groceryItemReducer);
  console.log("groceryItems", groceryItemReducer);
  return (
    <Container>
      <Text>Total Items to be purchsed from market</Text>
      <CartNumber>
        <Badge badgeContent={groceryItemReducer} color="primary">
          <ReorderIcon color="action" />
        </Badge>
      </CartNumber>
    </Container>
  );
};

export default TotalItems;
