import React from "react";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";

const Container = styled.div`
  background-color: #6a146f;
  width: 70%;
  padding: 20px 0px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TotalItems = () => {
  return (
    <Container>
      <h1>test</h1>
      <Badge badgeContent={4} color="primary"></Badge>
    </Container>
  );
};

export default TotalItems;
