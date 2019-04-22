
import React from "react"
import { Global, css } from '@emotion/core'


const BaseStyles = () => (
  <Global
  styles={css`
@import url('https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700|Source+Sans+Pro:300,400,700');
  html, body {
    margin: 0px;
    padding: 0;
    font-family: Maven Pro, Helvetica Neue, sans-serif;
    box-sizing: border-box;
  }

  h2 {
    font-size: 36px;
    line-height: 38px;
    font-weight: 200;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
  `}
/>
)

export default BaseStyles
