import React from 'react'
import styled from '@emotion/styled'

import Image from './Image'

const StyleContinaer = styled.div`
display: flex;
flex-wrap: wrap;

  div {
    flex: 1;
  }
`




const SideBySide = ({children, imgSrc}) => {
  return (
    <StyleContinaer>
      <div>
      <Image src={imgSrc}/>
      </div>
      <div>
        {children}
      </div>
    </StyleContinaer>
  )
}

export default SideBySide