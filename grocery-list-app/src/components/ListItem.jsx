import React from "react";
import styled from "styled-components";
import DoneIcon from "@mui/icons-material/Done";
// import { purchaseItem } from "../actions/action";
import { useDispatch } from "react-redux";

const Container = styled.div`
  /* background-color: #6a146f; */
  width: 70%;
  padding: 10px 0px;
  height: 30px;
  display: flex;
  border-bottom: 1px solid #a4a4a4;
  &:hover {
    background-color: #dedcdc;
  }
`;
const ItemText = styled.div`
  flex: 8;
  padding-left: 20px;
  /* background-color: blue; */
  display: flex;
  font-size: 20px;
`;
const ButtonPurchased = styled.button`
  /* background-color: green; */
  background-color: #4e4e4e;
  color: white;
  border: none;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  flex: 1;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }
`;

const Num = styled.div`
  font-size: 20px;
  margin-right: 20px;
`;

const ListItems = ({ itemTitle, id, Sno }) => {
  const dispatch = useDispatch();
  //Handle Purchase Item
  const handlePurchased = () => {
    dispatch({
      type: "itemPurchased",
      payload: {
        id: id,
      },
    });
  };

  return (
    <Container>
      <ItemText>
        <Num>{Sno}. </Num> {itemTitle}
      </ItemText>
      <ButtonPurchased onClick={() => handlePurchased()}>
        <DoneIcon />
      </ButtonPurchased>
    </Container>
  );
};

export default ListItems;
