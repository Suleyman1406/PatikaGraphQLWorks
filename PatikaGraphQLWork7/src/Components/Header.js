import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { useFilter } from "../Context/FilterContext";
const Container = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(/images/rm_bg.jpg);
  text-align: center;
  position: relative;
  background-position-x: center;
`;
const H1 = styled.h1`
  position: absolute;
  color: white;
  width: 100%;
  font-size: 42px;
  font-weight: 500;
  left: 50%;
  font-family: "Shadows Into Light", cursive;
  top: 65%;
  transform: translate(-50%, -50%);
  transition: 0.2s all;
  @media only screen and (max-width: 1400px) {
    font-size: 38px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 35px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 32px;
  }
`;
const SearchInputCont = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  left: 50%;
  top: 85%;
  transform: translate(-50%, -50%);
`;
const SearchInput = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  border: 2px solid #fadb14;
  font-size: 16px;
  font-family: "Bitter", serif;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: 0.2s all;
  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  &:focus {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    outline: none;
  }
`;

const Connective = styled.div`
  width: 40%;
  margin: auto;
  position: relative;
  @media only screen and (max-width: 1400px) {
    width: 55%;
  }
  @media only screen and (max-width: 900px) {
    width: 70%;
  }
  @media only screen and (max-width: 600px) {
    width: 85%;
    transform: translateX(-20px);
  }
`;

const SearchIcon = styled(BsSearch)`
  position: absolute;
  font-size: 25px;
  top: 15px;
  right: 10px;
  transition: 0.2s all;
  &:hover {
    opacity: 0.6;
  }
`;

const Header = () => {
  const { search, setSearch } = useFilter();

  return (
    <Container>
      <H1>Wubba Lubba Dub Dub.</H1>
      <SearchInputCont>
        <Connective>
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Find with Name "
          />
          <SearchIcon />
        </Connective>
      </SearchInputCont>
    </Container>
  );
};

export default Header;
