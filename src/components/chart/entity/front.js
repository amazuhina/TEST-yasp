import React from 'react';
import styled from 'styled-components';



const FrontStl = styled.div`
  background-color: #4AB6E8;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15px;
  ${
          ({value}) => (value > 200) ? 'height: 100px;' : ('height: ' + value +'px;')
  }  
`



export const Front = ({number}) => {

  const heightValue = (2 * number);

  return (
    <FrontStl value={heightValue}>
      {number}
    </FrontStl>
  )
}

