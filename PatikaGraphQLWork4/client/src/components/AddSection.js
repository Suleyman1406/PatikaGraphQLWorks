import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import {GrAddCircle} from 'react-icons/gr'

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
`
const Input=styled.input`
    display: block;
    margin-top: 5px;
    margin-bottom: 25px;
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
const AddSection = () => {
  return <Container>
    <h2 style={{padding:'0',margin:'10px 0px 20px 0px'}}>Add Event</h2>
    <Label htmlFor='title'>Title</Label>
    <Input id='title' type='text' placeholder='Enter event title'/>
    
    <Label htmlFor='title'>Description</Label>
    <Input id='title' type='text' placeholder='Enter event description'/>
    
    <Label htmlFor='title'>Event Date</Label>
    <Input id='title' type='text' placeholder='Enter date in the format mm.dd.yyyy'/>

    <Button
            value="small"
            type="primary"
            loading={false}
            onClick={() => ''}
          >
            Add Event
          </Button>
  </Container>;
};

export default AddSection;
