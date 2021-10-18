import React from 'react';
import styled from 'styled-components';
import arrowUp from '../../../attachments/arrow-up.svg';
import arrowDown from '../../../attachments/arrow-down.svg';



const DifferenceValueStl = styled.div`
  text-align: center;
  min-width: 48px;
  height: 24px;
  border-radius: 50px;  
  color: #fff;
  position: absolute;
  top: 8px;
  padding: 4px 5px 0;
  ${
    ({positiveNumber}) => {      
      if (positiveNumber === 0) {
        return 'background-color: #898290;';
      } else if (positiveNumber > 0) {
        return 'background-color: #00CC99;';
      } else {
        return 'background-color: #FC440F;';
      }
    }
  }
;  
`

const ImgArrowStl = styled.img`
  margin-right: 5px;
`



export const DifferenceValue = ({rightChart, leftChart}) => {

   const sum = (diagramsData) => {
    const arrMapped = Object.values(diagramsData)

    const sum = arrMapped.reduce((total, current) => total + current, 0)

    return sum
  }

  const difference =  sum(rightChart) - sum(leftChart)

   return (
    <DifferenceValueStl positiveNumber={difference}>
      <>
        {
          (() => {
          if (difference > 0) {
            return <ImgArrowStl src={arrowUp}/>
          } else if (difference < 0) {
            return <ImgArrowStl src={arrowDown}/>
          } else {
            return null
          }
        })()
        }
      </>
      {difference}
    </DifferenceValueStl>
  )
}
