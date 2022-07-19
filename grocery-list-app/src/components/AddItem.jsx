import React from "react";
import styled from "styled-components";
// import { addItem } from "../actions/action";
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
const MessgaeError = styled.div`
  color: red;
  margin-left: 20px;
  font-size: 15px;
  display: none;
`;
const AddItem = () => {
  const dispatch = useDispatch();

  //Handle Add Item
  const handleAddItem = (input) => {
    input = document.getElementById("inputTitle").value;
    if (input !== "") {
      dispatch({
        type: "itemAdded",
        payload: {
          itemTitle: input,
        },
      });
      document.getElementById("inputTitle").style.border = "1px solid black";
      document.getElementById("inputTitle").value = "";
      document.getElementById("error_msg").style.display = "none";
    } else {
      //Ask user to add item title
      document.getElementById("inputTitle").style.border = "2px solid red";
      document.getElementById("error_msg").style.display = "flex";
    }
  };

  return (
    <Container>
      <MessgaeError id="error_msg">Type Item Title</MessgaeError>
      <InputItem id="inputTitle" />
      <AddButton
        onClick={() =>
          handleAddItem(document.getElementById("inputTitle").value)
        }
      >
        ADD
      </AddButton>
    </Container>
  );
};

export default AddItem;
