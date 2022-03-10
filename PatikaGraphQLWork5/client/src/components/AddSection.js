import React, { useState } from 'react';
import styled,{css} from 'styled-components';
import { Button,Select,message } from 'antd';
import { empty, useMutation, useQuery } from '@apollo/client';
import { ADD_EVENT, GET_USERS } from '../GraphQl/queries';
const { Option } = Select;
const Container=styled.div`
    margin: 20px auto;
    width: 700px;
    background-color: rgba(220,220,220,0.2);
    padding:  30px 25px;
    border-radius: 5px;
`

const Label=styled.label`
    padding: 2px;
    font-weight: 600;
    display: block;
`
const inp=css`
    display: block;
    margin-top: 5px;
    margin-bottom: 10px;
    width: 99%;
    padding: 10px 8px;
    border:1px solid rgba(220,220,220,0.8);
    &:hover{
        border:1px solid rgba(192,192,192);
    }
    &:focus{
        outline: 2px solid rgba(220,220,220);
    }
`
const Input=styled.input`
    ${inp}
    
`
const DateInput=styled.input`
     ${inp}
    width: 45%;
    display: inline-block;
`
const TimeInput=styled.input`
     ${inp}
     width: 25%;
      margin-left: 12px;
     display: inline-block;

`
const AddSection = () => {
  const[title,setTitle]=useState('');
  const[desc,setDesc]=useState('');
  const[date,setDate]=useState('');
  const[startTime,setStartTime]=useState('')
  const[endTime,setEndTime]=useState('')
  const[user_id,setUserId]=useState(-1)
  const { loading, data } = useQuery(GET_USERS);
  const [addEvent, { data:addData, loading:addLoading }] = useMutation(ADD_EVENT);
  console.log();
  function handleChange(value) {
    setUserId(value)
  }
  const emptyStates=()=>{
    setTitle('');
    setDesc('');
    setDate('');
    setStartTime('');
    setEndTime('');
    setUserId(-1);
  }

  const handleClick=async()=>{
    if(!title || !desc || !date || !startTime || !endTime || user_id===-1){
      message.warning('It is mandatory to fill all of them.')
    }else{
      try{
      await addEvent({ variables: { data:{title,desc,date,from:startTime,to:endTime, user_id}} })
        message.success('Event Added')
        emptyStates();
      }catch(e){
        message.error(e.message)
      }
    }
   
    
  }

  return <Container>
    <h2 style={{padding:'0',margin:'0 0px 10px 0px'}}>Add Event</h2>

      <Label htmlFor='title'>Title</Label>
      <Input disabled={addLoading} value={title} onChange={(e)=>setTitle(e.target.value)} id='title' type='text' placeholder='Enter event title'/>
      
      <Label htmlFor='desc'>Description</Label>
      <Input disabled={addLoading} value={desc} onChange={(e)=>setDesc(e.target.value)} id='desc' type='text' placeholder='Enter event description'/>
      
      <Label  htmlFor='date'>Event Time</Label>
      <DateInput disabled={addLoading} value={date} onChange={(e)=>setDate(e.target.value)} id='date' type='text' placeholder='Enter date in the format yyyy.mm.dd'/>
      <TimeInput disabled={addLoading} value={startTime} onChange={(e)=>setStartTime(e.target.value)} type='text' placeholder='Enter start time'/>
      <TimeInput disabled={addLoading} value={endTime} onChange={(e)=>setEndTime(e.target.value)} type='text' placeholder='Enter end time'/>

      <Label  htmlFor='user'>User</Label>
      <Select  disabled={loading||addLoading} loading={loading} placeholder='Select user' id='user' style={{ width: '100%', marginBottom: 20 }} onChange={handleChange}>
        {data && data.users && data.users.map((u)=> <Option key={u.id} value={u.id}>{u.username}</Option>)}
      </Select>

      <Button
              value="small"
              type="primary"
              loading={addLoading}
              onClick={handleClick}
            >
              Add Event
        </Button>
  </Container>;
};

export default AddSection;
