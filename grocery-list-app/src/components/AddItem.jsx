import React from "react";
import styled from "styled-components";
import { addItem } from "../actions/action";
import { useDispatch } from "react-redux";

const Container = styled.div`
  /* background-color: red; */
  width: 70%;
  padding: 20px 0px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
`;

const AddButton = styled.button`
  flex: 2;
  font-size: 25px;
  padding: 5px 0px;
  margin-right: 20px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
  }
`;

const InputItem = styled.input`
  flex: 6;
  margin: 0 20px;
  font-size: 25px;
`;

const AddItem = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <InputItem />
      <AddButton onClick={() => dispatch(addItem())}>ADD</AddButton>
    </Container>
  );
};

export default AddItem;
