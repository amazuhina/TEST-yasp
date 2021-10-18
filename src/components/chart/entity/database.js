import React from 'react';
import styled from 'styled-components';



const DatabaseStl = styled.div`
  background-color: #E85498;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15px;
  ${
          ({value}) => (value > 200) ? 'height: 100px;' : ('height: ' + value +'px;')
  }
`



export const Database = ({number}) => {

  const heightValue = (2 * number)

  return (
    <DatabaseStl value={heightValue}>
      {number}
    </DatabaseStl>
  )
}

