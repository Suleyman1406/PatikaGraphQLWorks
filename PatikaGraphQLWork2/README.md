# Get queries
```
query getUsers{
  users{
    id
    username
    email
  }
}
query getEvents{
  events{
    id
    title
    desc
    date
    from
    to
		user{
      id
      username
    }
    
  }
}

query getLocations{
  locations{
    id
    name 
    desc
    lat
    lng
  }
}

query getParticipant{
  participants{
    id
    user_id
    event_id
  }
}
```
# Mutation queries

``` 
# Write your query or mutation here
  mutation addUser{
    addUser(data:{username:"Ahmet",email:"ahmet@mail.ru"}){
      id
      username
    	email
    }
  }
  mutation addEvent{
    addEvent(data:{title:"sad",desc:"Wdsad",
      from:"asdsad",to:"asdas",location_id:2,user_id:2,date:"2022"}){
      title
      desc
      date
      from
      to
      location_id
      user_id
    }
  }
  mutation addLocation{
    addLocation(data:{name:"asdsad",lat:521,lng:515,desc:"sadasd"}){
      name
      desc
      lat
      lng
    }
  }
	
  mutation addParticipant{
    addParticipant(data:{user_id:2,event_id:2}){
      id
      user_id
      event_id
    }
  }
  
  mutation updateUser{
    updateUser(id:1,data:{username:"yeni isim"}){
      id
      username
      email
    }
  }
  
  mutation updateEvent{
    updateEvent(id:1,data:{desc:"degisti"}){
      id
      desc
      title
    }
  }
  
  mutation updateLocation{
    updateLocation(id:1,data:{lat:1222}){
      id
      lat
      
    }
  }
  
  mutation updateParticipant{
    updateParticipant(id:2,data:{user_id:2})
    {
      id
      user_id
    }
  }
  
  mutation deleteUser{
    deleteUser(id:1){
      id
      username
      email
    }
  }
  
   mutation deleteEvent{
    deleteEvent(id:1){
      id
      title
      desc
    }
  }
   mutation deleteLocation{
    deleteLocation(id:1){
      id
      lat
      lng
    }
  }
   mutation deleteParticipant{
    deleteParticipant(id:1){
      id
     	user_id
      event_id
    }
  }
  
  mutation deleteAllUsers{
    deleteAllUsers{
      id
      username
      email
    }
  }
  
  mutation deleteAllEvents{
    deleteAllEvents{
      id
      title
      desc
      
    }
  }
  
  mutation deleteAllLocations{
    deleteAllLocations{
      id
      desc
      lat
      lat
    }
  }
  
  mutation deleteAllParticipant{
    deleteAllParticipants{
      id
      user_id
      event_id
    }
  }