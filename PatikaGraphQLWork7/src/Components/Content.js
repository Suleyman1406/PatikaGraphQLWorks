import { useQuery, gql } from "@apollo/client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import { useFilter } from "../Context/FilterContext";
const Container = styled.div`
  width: 75%;
  box-sizing: border-box;
  float: left;
  display: inline;
  padding: 20px;
  font-family: "Bitter", serif;
  @media only screen and (max-width: 1000px) {
    width: 65%;
  }
  @media only screen and (max-width: 700px) {
    width: 55%;
  }
  @media only screen and (max-width: 500px) {
    width: 50%;
  }
`;

const CharCard = styled.div`
  display: inline-block;
  margin: 20px;
  background-color: rgba(220, 220, 220, 0.2);
  padding: 20px 15px;
  border-radius: 5px;
  box-sizing: border-box;
  color: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  width: 17%;
  height: fit-content;
  margin-bottom: 5px;
  margin-top: 5px;
  height: fit-content;
  @media only screen and (max-width: 2000px) {
    width: 20%;
  }
  @media only screen and (max-width: 1700px) {
    width: 21%;
  }
  @media only screen and (max-width: 1500px) {
    width: 25%;
  }
  @media only screen and (max-width: 1200px) {
    width: 40%;
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 900px) {
    width: 80%;
  }
  @media only screen and (max-width: 700px) {
    width: 95%;
  }
`;
const CharImage = styled.img`
  width: 90%;
  display: flex;
  justify-self: center;
  margin: auto;
`;

const CharSpecies = styled.h3`
  text-align: start;
  margin-left: 15px;
  font-size: 18px;
  opacity: 0.8;
  display: inline-block;
`;

const CharName = styled.h3`
  margin: 0;
  margin-left: 15px;
  font-weight: 700;
  display: block;
  font-size: 18px;
`;

const CharStatus = styled.h4`
  display: inline-block;
  font-size: 16px;
  display: inline-block;
  margin: 0;
  margin-left: 5px;
`;

const CharLocation = styled.h4`
  margin: 0;
  font-size: 14px;
  margin-left: 15px;
  display: block;
  font-weight: 400;
`;

const CardContainer = styled.div`
  margin: 0;
  margin-left: 100px;
  @media only screen and (max-width: 1000px) {
    margin-left: 50px;
  }
  @media only screen and (max-width: 700px) {
    margin-left: 20px;
  }
  @media only screen and (max-width: 700px) {
    margin-left: 5px;
  }
`;

const PaginationContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const GET_CHARACTERS = gql`
  query getCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        name
        status
        image
        species
        gender
        location {
          name
        }
      }
      info {
        count
      }
    }
  }
`;

const Content = () => {
  const [page, setPage] = useState(1);
  const { gender, specie, search } = useFilter();

  useEffect(() => {
    setPage(1);
  }, [gender, specie, search]);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
      filter: {
        gender,
        species: specie,
        name: search,
      },
    },
  });
  if (loading) return <Container>Loading...</Container>;
  if (error) return <Container>{error.message}</Container>;
  console.log(data.characters.results);

  return (
    <Container>
      <CardContainer>
        {data.characters.results.map((char) => {
          return (
            <CharCard>
              <CharImage src={char.image} />
              <CharName>{char.name}</CharName>
              <CharSpecies>
                {char.species}
                <CharStatus>({char.status})</CharStatus>
              </CharSpecies>

              <CharLocation>{char.location.name}</CharLocation>
            </CharCard>
          );
        })}
      </CardContainer>
      <PaginationContainer>
        <Pagination
          size="default"
          defaultCurrent={page}
          onChange={(e) => setPage(e)}
          defaultPageSize={20}
          total={data.characters.info.count}
          showSizeChanger={false}
        />
      </PaginationContainer>
    </Container>
  );
};

export default Content;
