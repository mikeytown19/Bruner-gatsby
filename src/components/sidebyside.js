import React from 'react'
import styled from '@emotion/styled'
import Image from './Image'


const ImageContainer = styled.div`
  padding: 20px;
`
const ContentContainer = styled.div`
  padding: 0px 20px;
`
const StyleContinaer = styled.div`
display: flex;
flex-wrap: wrap;
  div {
    flex: 1;
  }
  flex-direction: ${props =>
  props.reverse ? 'row-reverse': 'row'};
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