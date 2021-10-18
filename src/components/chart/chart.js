import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {DifferenceValue} from './difference/difference-value';
import IconArrow from '../../attachments/arrow.svg';
import {DiagramItem} from './diagram-item';
import {Norm} from './entity/norm';



const ChartStl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  font-weight: 500;
`


const TitleStl = styled.h1`
  font-size: 22px;
  margin-bottom: 30px;
  color: #898290;
`


const BlockStl = styled.div`
  width: 500px;
  min-width: 300px;
  margin-bottom: 15px;
`


const SectionStl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
`


const DifferenceSectionStl = styled.div`
  width: calc(100% - 79px);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 20px;
`


const DifferenceSectionPartStl = styled.div`
  width: calc(50% - 19.5px);
  border-bottom: 1px solid #898290;
  display: flex;
  justify-content: center;
  position: relative;
`


const DiagramSectionStl = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`


const NormBlockStl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 15px 10px;
`


const ColumnStl = styled.div`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 450px;
  
`


const ColumnUpStl = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-grow: 1;  
`


const ColumnMiddleStl = styled.div`
  height: 10px;
  position: relative;
`


const ColumnDownStl = styled.div`
`


const LineStl = styled.div`
  width: 1px;
  background-color: #898290;
  height: auto;
  min-height: 30px;
`


const IconArrowMiddleStl = styled.img`
  position: absolute;
  right: 56.5px;
  top: -3px;
`


const IconArrowRightStl = styled.img`
  position: absolute;
  right: 36.5px;
  top: -3px;
`


const TextStl = styled.p`
  margin: 10px 0 0;
  text-align: center;
  color: #898290;
  font-size: 12px;
`




export const Chart = () => {

  const [data, setData] = useState(null)


  useEffect(()=> {
    fetch('https://rcslabs.ru/ttrp1.json')
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
      .catch(errorMessage => {
        console.log(errorMessage.error)
      })
  }, [])

  return (
    <ChartStl>
      {
        (data !== null)
          ? (
            <>
              <TitleStl>Количество пройденных тестов "{data.title}"</TitleStl>

                <SectionStl>
                  <BlockStl>
                    <DifferenceSectionStl>
                      <DifferenceSectionPartStl>
                        <DifferenceValue leftChart={data.dev} rightChart={data.test}/>
                      </DifferenceSectionPartStl>

                      <DifferenceSectionPartStl>
                        <DifferenceValue leftChart={data.test} rightChart={data.prod}/>
                      </DifferenceSectionPartStl>
                    </DifferenceSectionStl>


                    <DiagramSectionStl>

                      <ColumnStl>
                        <ColumnUpStl>
                          <LineStl/>
                        </ColumnUpStl>

                        <ColumnMiddleStl/>

                        <ColumnDownStl>
                          <DiagramItem
                            data={data.dev}
                          />
                        </ColumnDownStl>
                        <TextStl>dev</TextStl>
                      </ColumnStl>


                      <ColumnStl>
                        <ColumnUpStl>
                          <LineStl/>
                          <LineStl/>
                        </ColumnUpStl>

                        <ColumnMiddleStl>
                          <IconArrowMiddleStl src={IconArrow}/>
                        </ColumnMiddleStl>

                        <ColumnDownStl>
                          <DiagramItem
                            data={data.test}
                          />
                        </ColumnDownStl>
                        <TextStl>test</TextStl>
                      </ColumnStl>


                      <ColumnStl>
                        <ColumnUpStl>
                          <LineStl/>
                        </ColumnUpStl>

                        <ColumnMiddleStl>
                          <IconArrowRightStl src={IconArrow}/>
                        </ColumnMiddleStl>

                        <ColumnDownStl>
                          <DiagramItem
                            data={data.prod}
                          />
                        </ColumnDownStl>
                        <TextStl>prod</TextStl>
                      </ColumnStl>

                    </DiagramSectionStl>
                  </BlockStl>
                  <NormBlockStl>
                    <Norm/>
                    <TextStl>норматив</TextStl>
                  </NormBlockStl>

                </SectionStl>
            </>
          )
          : null
      }
    </ChartStl>
  )
}

