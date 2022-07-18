import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: yellowgreen;
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
