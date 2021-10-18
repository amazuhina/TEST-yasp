import React from 'react';
import styled from 'styled-components';



const ColorBlockStl = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  margin-right: 10px;  
  background: ${({color}) => color};
`



export const ColorBlock = ({color}) => {

  return (
    <ColorBlockStl color={color}/>
  )
}

