import React from 'react';
import styled from 'styled-components';
import {Chart} from './chart/chart';
import {Description} from './description/description';



const ContainerStl = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
`



export const Container = () => {

  return (
    <ContainerStl>
      <Chart/>
      <Description/>
    </ContainerStl>
  )
}

