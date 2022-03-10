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
export const GET_USERS=gql`
query getUsers {
  users {
    id
    username
    email
    events {
      id
      desc
      date
    }
  }
}
`

export const ADD_EVENT=gql`
  mutation addEvent($data:AddEventInput!){
    addEvent(data:$data){
      id
    }
  }
`
