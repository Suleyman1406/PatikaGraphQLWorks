import React, { useState } from "react";
import styled from "styled-components";
import { useFilter } from "../Context/FilterContext";
import Checkbox from "./Checbox";

const Container = styled.div`
  width: 25%;
  height: 100vh;
  display: inline;
  box-sizing: border-box;
  float: left;
  padding: 20px 25px;
  font-family: "Bitter", serif;
  background-color: whitesmoke;
  @media only screen and (max-width: 1000px) {
    width: 35%;
  }
  @media only screen and (max-width: 700px) {
    width: 45%;
  }
  @media only screen and (max-width: 500px) {
    width: 50%;
  }
`;
const Header = styled.h2`
  margin: 5px 15px;
  display: inline-block;
  font-size: 30px;
  padding: 0;
  @media only screen and (max-width: 700px) {
    margin: 5px -5px;
  }
`;

const FilterContainer = styled.div`
  padding: 0px 25px;
  margin-left: 40px;
  @media only screen and (max-width: 1400px) {
    margin-left: 20px;
  }
  @media only screen and (max-width: 700px) {
    margin-left: 0;
    padding: 0px 5px;
  }
`;
const FilterHead = styled.h3`
  font-size: 18px;
`;
const FilterItem = styled.div`
  padding: 3px;
  margin-left: 20px;
  margin-bottom: 5px;
  cursor: pointer;

  @media only screen and (max-width: 700px) {
    margin-left: -10px;
  }
`;
const FilterLabel = styled.p`
  display: inline-block;
  margin: 0 0 0 20px;
  padding: 0;
  font-size: 18px;
`;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const genderArr = ["male", "female", "unknown", "genderless"];
const speciesArr = [
  "human",
  "alien",
  "humanoid",
  "animal",
  "robot",
  "crononberg",
  "mytholog",
  "disease",
  "poopybutthole",
  "unknown",
];

const Filter = () => {
  const { gender, setGender, specie, setSpecie, location, setLocation } =
    useFilter();

  const genderChangeHandler = (item) => {
    if (gender === item) setGender("");
    else setGender(item);
  };

  const speciesChangeHandler = (item) => {
    if (specie === item) setSpecie("");
    else setSpecie(item);
  };
  return (
    <Container>
      <Header>Filters</Header>

      <FilterContainer>
        <FilterHead>Gender</FilterHead>
        {genderArr.map((item, i) => (
          <FilterItem key={i}>
            <Checkbox
              checked={gender === item}
              onChange={() => genderChangeHandler(item)}
            />
            <FilterLabel>{capitalize(item)}</FilterLabel>
          </FilterItem>
        ))}
        <FilterHead>Species</FilterHead>
        {speciesArr.map((item, i) => (
          <FilterItem key={i}>
            <Checkbox
              checked={specie === item}
              onChange={() => speciesChangeHandler(item)}
            />
            <FilterLabel>{capitalize(item)}</FilterLabel>
          </FilterItem>
        ))}
      </FilterContainer>
    </Container>
  );
};

export default Filter;
