import React from 'react'
import styled from '@emotion/styled'
import Colors from '../styles/colors'

const LegalStyle = styled.p`
  font-size: 10px;
  color: ${Colors.gray};
  max-width: 700px;
  margin: 10px auto;
  line-height: 15px;
`

const Legal = ({data}) => {
  return data.map((item, index) => {
    return (
      <LegalStyle key={index}>{item}</ LegalStyle>
    )
  })
}

export default Legal