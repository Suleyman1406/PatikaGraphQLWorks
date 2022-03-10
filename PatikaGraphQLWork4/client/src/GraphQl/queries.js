import {   gql  } from "@apollo/client";

export const GET_EVENTS = gql`
  query getEvents{
      events{
        id
        title
        desc
        date
      }
    }
`;

export const GET_EVENT=gql`
  query getEvent($id: ID!) {
    event(id: $id) {
      id
      title
      desc
      date
      from
      to
      user {
        id
        username
        email
      }
    }
  }

`