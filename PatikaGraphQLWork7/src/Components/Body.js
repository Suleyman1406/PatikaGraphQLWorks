import React from "react";
import styled from "styled-components";
import Content from "./Content";
import Filter from "./Filter";

const Container = styled.div`
  width: 100%;
`;
const Body = () => {
  return (
    <Container>
      <Filter />
      <Content />
    </Container>
  );
};

export default Body;
