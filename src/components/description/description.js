import React from 'react';
import styled from 'styled-components';
import {DescriptionItem} from './description-item';



const DescriptionStl = styled.div`
  display: flex;
`



export const Description = () => {

  return (
    <DescriptionStl>
      <DescriptionItem color={'#4AB6E8'} title={'Клиентская часть'}/>
      <DescriptionItem color={'#AA6FAC'} title={'Серверная часть'}/>
      <DescriptionItem color={'#E85498'} title={'База данных'}/>
    </DescriptionStl>
  )
}

