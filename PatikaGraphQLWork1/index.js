const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground} =require('apollo-server-core');
const { data } = require('./data');

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
`;
const resolvers = {
    Query: {
        //Event
        events: () => data.events,
        event: (parent,args)=>data.events.find(e=>e.id==args.id),

        //Location
        locations: ()=> data.locations,
        location: (_,args)=>data.locations.find(l=>args.id==l.id),
        
        //User
        users: ()=> data.users,
        user: (_,args)=>data.users.find(u=>u.id==args.id),

        //Participant
        participants: ()=>data.participants,
        participant: (_,args)=>data.participants.find(p=>p.id==args.id),
    },
    User:{
        events:(parent)=>data.events.filter(e=>parent.id==e.user_id)
    },
    Event:{
        user:(parent)=>data.users.find(u=>u.id==parent.user_id),
        location:(parent)=>data.locations.find(l=>l.id==parent.location_id),
        participants:(parent)=>data.participants.filter(p=>p.event_id==parent.id)
    }
  };


  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground({

        })
    ]
    });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});