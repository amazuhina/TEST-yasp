import React, {useEffect, useState} from 'react';
import styled from 'styled-components';



const NormStl = styled.div`
  width: 80px;
  border-radius: 10px;
  background-image: linear-gradient(-45deg, rgba(0, 0, 0, 0) 49.9%, #4AB6E8 49.9%, #4AB6E8 60%, rgba(0, 0, 0, 0) 60% ), linear-gradient(-45deg, #4AB6E8 10%, rgba(0, 0, 0, 0) 10% );
  background-size: 10px 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content:center;
`


const NormValueStl = styled.div`
  height: 24px;
  width: 24px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content:center;
  font-size: 14px;
  color: #898290;
  font-weight: 700;
`



export const Norm = () => {

  const [normValue, setNormValue] = useState(null)

  useEffect(()=> {
    fetch('https://rcslabs.ru/ttrp1.json')
      .then(res => res.json())
      .then(res => {
        setNormValue(res.norm)
      })
      .catch(errorMessage => {
        console.log(errorMessage.error)
      })
  }, [])

  const heightValue = normValue * 2 +'px';

  return (
    <NormStl style={{height:heightValue}}>
      <NormValueStl>
        {normValue}
      </NormValueStl>
    </NormStl>
  )
}

