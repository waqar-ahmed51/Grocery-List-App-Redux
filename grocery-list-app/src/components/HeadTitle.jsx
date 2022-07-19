import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 70%;
  padding: 20px 0px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadTitle = () => {
  return (
    <Wrapper>
      <h1>GROCERY LIST APP</h1>
    </Wrapper>
  );
};

export default HeadTitle;
