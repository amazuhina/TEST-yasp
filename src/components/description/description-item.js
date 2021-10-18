import React from 'react';
import styled from 'styled-components';
import {ColorBlock} from './color-block';



const DescriptionItemStl = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
`


const DescriptionTitleStl = styled.p`
  display: block;
  margin: 0;
`



export const DescriptionItem = ({color, title}) => {

  return (
    <DescriptionItemStl>
      <ColorBlock color={color}/>
      <DescriptionTitleStl>{title}</DescriptionTitleStl>
    </DescriptionItemStl>
  )
}
