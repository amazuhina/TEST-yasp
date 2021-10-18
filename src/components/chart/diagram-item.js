import React from 'react';
import styled from 'styled-components';
import {Front} from './entity/front';
import {Back} from './entity/back';
import {Database} from './entity/database';



const DiagramItemStl = styled.div`
 display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 14px;
  justify-content: flex-end;
  font-weight: 700;
`



export const DiagramItem = ({data}) => {

const dataNumber = data

  return (
    <DiagramItemStl>
      <Front number={dataNumber.front}/>
      <Back number={dataNumber.back}/>
      <Database number={data.db}/>
    </DiagramItemStl>
  )
}

