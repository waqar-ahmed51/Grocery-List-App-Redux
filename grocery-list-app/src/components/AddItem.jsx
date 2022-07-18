import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: red;
  width: 70%;
  padding: 10px 0px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddButton = styled.button`
  flex: 2;
  font-size: 40px;
  padding: 20px;
`;

const InputItem = styled.input`
  flex: 6;
  margin: 0 20px;
`;

const AddItem = () => {
  return (
    <Container>
      <InputItem />
      <AddButton>Add</AddButton>
    </Container>
  );
};

export default AddItem;
