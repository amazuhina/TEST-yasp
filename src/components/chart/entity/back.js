import React from 'react';
import styled from 'styled-components';



const BackStl = styled.div`
  background-color: #AA6FAC;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15px;
  ${
          ({value}) => (value > 200) ? 'height: 100px;' : ('height: ' + value +'px;')
  }
`



export const Back = ({number}) => {

  const heightValue = (2 * number);

  return (
    <BackStl value={heightValue}>
      {number}
    </BackStl>
  )
}

