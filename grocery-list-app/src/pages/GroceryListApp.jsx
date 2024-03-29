import React from "react";
import styled from "styled-components";
import HeadTitle from "../components/HeadTitle";
import TotalItems from "../components/TotalItems";
import AddItem from "../components/AddItem";
import ListItem from "../components/ListItem";
import { useSelector } from "react-redux";

const Container = styled.div`
  /* background-color: yellowgreen; */
  background-image: url("https://images.ctfassets.net/g4kjd861vrk6/9vC41c4j44e54w7FzNbtm/6a9b54762e51604a8225356d57a65f78/shutterstock_1090783400.jpg?q=80");
  background-color: #cccccc;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;
`;
const NoItem = styled.div`
  font-size: 20px;
  margin: 10px;
  color: #484747;
`;

const GroceryListApp = () => {
  const groceryItem = useSelector((state) => state.groceryItem);
  // console.log("Grocery Items", groceryItem);
  //SNo for products
  let Sno = 0;
  return (
    <Container>
      <Wrapper>
        <HeadTitle />
        <TotalItems />
        <AddItem />
        {groceryItem.map((item) =>
          // Getting only items which have purchase true
          !item.purchased ? (
            <ListItem
              key={item.id}
              itemTitle={item.itemTitle}
              id={item.id}
              Sno={++Sno}
            />
          ) : (
            console.log("")
          )
        )}
        {groceryItem.length === 0 ? (
          <NoItem>No Items in the Grocery List!</NoItem>
        ) : (
          console.log("")
        )}
      </Wrapper>
    </Container>
  );
};

export default GroceryListApp;
