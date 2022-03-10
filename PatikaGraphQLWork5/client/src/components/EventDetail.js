import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { GET_EVENT } from '../GraphQl/queries';


const Container=styled.div`
    width: 80%;
    margin: 20px auto;
    background-color: rgba(220,220,220,0.2);
    border-radius: 10px;
    padding: 20px 35px 25px 35px;
`
const Header=styled.div`
    background-color: white;
    padding: 15px;
    border-radius: 10px;
`
const UserName=styled.h2`
    margin: 0;
    margin-left: 5px;
`

const Email=styled.h3`
    margin: 0;
    opacity: 0.7;
    font-size: 16px;
    margin-left: 8px;
    transform: translateY(-4px);
`
const EventSection=styled.div`
    margin-top: 15px;
    background-color: white;
    padding: 15px;
    border-radius: 10px;
`
const Title=styled.h2`
    margin: 0;
    margin-left: 5px;
`
const Date=styled.h3`
    margin: 0;
    margin-left: 8px;
    opacity: 0.7;
    transform: translateY(-4px);
`
const Desc=styled.p`
    padding: 20px;
`


const EventDetail = () => {
    const id=useParams().id.substring(1);
    const { loading, error, data } = useQuery(GET_EVENT,{variables:{id}});
    if(loading)return <div>loading...</div>
    if(error)return <div>{error.message}</div>
    const event=data.event;
    const user=event.user;

  return <Container>
      <Header>
          <h2 style={{margin:0}}>User:</h2>
        <UserName>{user.username}</UserName>
        <Email>{user.email}</Email>
      </Header>
      <EventSection>
          <h2 style={{margin:0}}>Event:</h2>
          <Title>{event.title}</Title>
          <Date>{event.date+" "+event.from+" "+event.to}</Date>
          <Desc>{event.desc}</Desc>
      </EventSection>
  </Container>;
};

export default EventDetail;
