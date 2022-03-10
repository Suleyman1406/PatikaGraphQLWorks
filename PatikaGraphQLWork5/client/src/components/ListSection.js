import React from 'react';
import styled from 'styled-components';
import { useQuery  } from "@apollo/client";
import { GET_EVENTS } from '../GraphQl/queries';
import { Link } from 'react-router-dom';

const Container=styled.div`
    width: 60%;
    height: 400px;
    margin:  auto;
`

const List=styled.div`
    width: 100%;
`

const ListItem=styled.div`
    width: 100%;
    position: relative;
    padding: 10px 20px;
    border:1px dashed rgba(220,220,220,0.8);
    border-radius: 5px;
    margin-top: 15px;
    color: black;
    background-color:rgba(220,220,220,0.2) ;
    transition: .2s all;
    &:hover{
        background-color:rgba(220,220,220,0.4) ;

    }
`

const ItemTitle=styled.h3`
    padding: 5px;
    margin: 0;
`

const ItemDesc=styled.p`
    padding: 0px 10px;
`

const ItemDate=styled.h4`
    position: absolute;
    top:5px;
    right: 15px;
`

const ListSection = () => {
    const { loading, error, data } = useQuery(GET_EVENTS);
    if(loading){
        return <div>loading...</div>
    }
    if(error)return <div>{error.message}</div>
  return <Container>
      <List>
          {data.events.map((e)=>
            <Link to={'/detail:'+e.id}  key={e.id}>
                <ListItem>
                    <ItemTitle>{e.title}</ItemTitle>
                    <ItemDesc>{e.desc.substring(0,200)+"..."}</ItemDesc>
                    <ItemDate>{e.date}</ItemDate>
                </ListItem>
            </Link>
          )}
          
      </List>
  </Container>;
};

export default ListSection;
