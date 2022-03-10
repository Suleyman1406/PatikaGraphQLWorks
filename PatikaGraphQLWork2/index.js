const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground} =require('apollo-server-core');
const nanoId = require('nano-id');
const { data :db } = require('./data');

const typeDefs = gql`
 
  type Event {
    id: ID!
    title: String!
    desc: String!
    date: String!
    from: String!
    to:   String!
    location_id: ID!
    location: Location!
    user_id: ID!
    user: User!
    participants: [Participant!]
  }
  type Location{
    id: ID!
    name: String!
    desc: String!
    lat: Float!
    lng: Float!
  }
  type User{
    id: ID!
    username: String!
    email: String!
    events: [Event!]!
  }
  type Participant{
    id: ID!
    user_id: ID!
    event_id: ID!
  }
  input AddUserInput{
    username: String!
    email: String!
  }

  input UpdateUserInput{
    username: String
    email: String
  }

  input AddEventInput{
    title: String!
    desc: String!
    date: String!
    from: String!
    to: String!
    location_id: ID!
    user_id: ID!
  }
  input UpdateEventInput{
    title: String
    desc: String
    date: String
    from: String
    to: String
    location_id: ID
    user_id: ID
  }


  input AddLocationInput{
    name: String!
    desc: String!
    lat: Float!
    lng: Float!
  }
  input UpdateLocationInput{
    name: String
    desc: String
    lat: Float
    lng: Float
  }

  input AddParticipantInput{
    user_id: ID!
    event_id: ID!
  }
  input UpdateParticipantInput{
    user_id: ID
    event_id: ID
  }
  

  type Query {
    #Event
    events: [Event!]
    event(id:ID!): Event!

    #Location
    locations: [Location!]
    location(id:ID!): Location!

    #User
    users: [User!]
    user(id:ID!): User!

    #Participant
    participants: [Participant!]
    participant(id:ID!): Participant!
    
  }
  type Mutation{
    #User
    addUser(data : AddUserInput!):User!,
    updateUser(id:ID! ,data: UpdateUserInput!):User!,
    deleteUser(id:ID!):User!,
    deleteAllUsers:[User!],

    #Event
    addEvent(data: AddEventInput!):Event!,
    updateEvent(id:ID! ,data: UpdateEventInput!):Event!,
    deleteEvent(id:ID!):Event!,
    deleteAllEvents:[Event!],

    #Location
    addLocation(data: AddLocationInput!):Location!,
    updateLocation(id:ID! ,data: UpdateLocationInput!):Location!,
    deleteLocation(id:ID!):Location!,
    deleteAllLocations:[Location!],

    #Participant
    addParticipant(data: AddParticipantInput!):Participant!,
    updateParticipant(id:ID! ,data: UpdateParticipantInput!):Participant!,
    deleteParticipant(id:ID!):Participant!,
    deleteAllParticipants:[Participant!],
  }
`;
const resolvers = {
    Query: {
        //Event
        events: () => db.events,
        event: (_,args)=>db.events.find(e=>e.id==args.id),

        //Location
        locations: ()=> db.locations,
        location: (_,args)=>db.locations.find(l=>args.id==l.id),
        
        //User
        users: ()=> db.users,
        user: (_,args)=>db.users.find(u=>u.id==args.id),

        //Participant
        participants: ()=>db.participants,
        participant: (_,args)=>db.participants.find(p=>p.id==args.id),
    },
    Mutation:{
        //User
        addUser:(_,{data})=>{
            const user={id: nanoId(),...data}
            db.users.push(user)
            return user;
        },
        updateUser:(_,{id,data})=>{
            const index=db.users.findIndex(i=>i.id==id)
            db.users[index]={
                ...db.users[index],
                ...data
            }
            return db.users[index];
        },
        deleteUser:(_,{id})=>{
            const index=db.users.findIndex(i=>i.id==id)
            const item=db.users[index];
            db.users.splice(index,1);
            return item;
        },
        deleteAllUsers:()=>{
            const temp=[...db.users]
            db.users.splice(0,temp.length);
            return temp;
          },

        //Event
        addEvent:(_,{data})=>{
            const event={id: nanoId(),...data}
            db.events.push(event)
            return event;
        },
        updateEvent:(_,{id,data})=>{
            const index=db.events.findIndex(i=>i.id==id)
            db.events[index]={
                ...db.events[index],
                ...data
            }
            return db.events[index];
        },
        deleteEvent:(_,{id})=>{
            const index=db.events.findIndex(i=>i.id==id)
            const item=db.events[index];
            db.events.splice(index,1);
            return item;
        },
        deleteAllEvents:()=>{
          const temp=[...db.events]
          db.events.splice(0,temp.length);
          return temp;
        },


        //Location
        addLocation:(_,{data})=>{
            const location={id: nanoId(),...data}
            db.locations.push(location)
            return location;
        },
        updateLocation:(_,{id,data})=>{
            const index=db.locations.findIndex(i=>i.id==id)
            db.locations[index]={
                ...db.locations[index],
                ...data
            }
            return db.locations[index];
        },
        deleteLocation:(_,{id})=>{
          const index=db.locations.findIndex(i=>i.id==id)
          const item=db.locations[index];
          db.locations.splice(index,1);
          return item;
        },
        deleteAllLocations:()=>{
          const temp=[...db.locations]
          db.locations.splice(0,temp.length);
          return temp;
        },


        //Participant
        addParticipant:(_,{data})=>{
            const participant={id: nanoId(),...data}
            db.participants.push(participant)
            return participant;
        },
        updateParticipant:(_,{id,data})=>{
            const index=db.participants.findIndex(i=>i.id==id)
            db.participants[index]={
                ...db.participants[index],
                ...data
            }
            return db.participants[index];
        },
        deleteParticipant:(_,{id})=>{
          const index=db.participants.findIndex(i=>i.id==id)
          const item=db.participants[index];
          db.participants.splice(index,1);
          return item;
        },
        deleteAllParticipants:()=>{
          const temp=[...db.participants]
          db.participants.splice(0,temp.length);
          return temp;
        },
    }
    ,
    User:{
        events:(parent)=>db.events.filter(e=>parent.id==e.user_id)
    },
    Event:{
        user:(parent)=>db.users.find(u=>u.id==parent.user_id),
        location:(parent)=>db.locations.find(l=>l.id==parent.location_id),
        participants:(parent)=>db.participants.filter(p=>p.event_id==parent.id)
    }
  };


  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground({})
    ]
    });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});