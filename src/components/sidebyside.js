import React from 'react'
import styled from '@emotion/styled'
import Image from './image'
import Bp from '../styles/breakpoints'



const ImageContainer = styled.div`
  padding: 20px;
  max-width: 450px;
  ${Bp.medium} {
    margin: auto;
    }

`
const ContentContainer = styled.div`
  padding: 0px 20px;
`
const StyleContinaer = styled.div`
display: flex;
flex-wrap: wrap;
  div {
    flex: 1;
    min-width: 400px;

  }
  flex-direction: ${props =>
  props.reverse ? 'row-reverse': 'row'};
  ${Bp.medium} {
    flex-wrap: wrap;
  }
`




const SideBySide = ({children, imgSrc, reverse}) => {

  return (
    <StyleContinaer reverse={reverse}>
      <ImageContainer>
        <Image src={imgSrc}/>
      </ImageContainer>
      <ContentContainer>
        {children}
      </ContentContainer>
    </StyleContinaer>
  )
}

export default SideBySide