import React from 'react';
import styled from 'styled-components'

const Container=styled.div`
    border-bottom: 1px solid rgba(220,220,220,0.8);
    text-align: center;
    background-color: rgba(220,220,220,0.2);
`



const Header = ({title}) => {
  return <Container>
      <h1>{title}</h1>
  </Container>;
};

export default Header;
