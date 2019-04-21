
import React from "react"
import { Global, css } from '@emotion/core'


const BaseStyles = () => (
  <Global
  styles={css`
@import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700,900');
  html, body {
    margin: 0px;
    padding: 0;
    font-family: Maven Pro, Helvetica Neue, sans-serif;
  }

  `}
/>
)

export default BaseStyles
