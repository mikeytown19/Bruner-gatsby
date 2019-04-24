
import React from "react"
import { Global, css } from '@emotion/core'
import Colors from '../styles/colors'
import BP from './breakpoints'


const BaseStyles = () => (
  <Global
  styles={css`
@import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway:100,300,400,600&');
  html, body {
    margin: 0px;
    padding: 0;
    font-family: Montserrat, Helvetica Neue, sans-serif;
    box-sizing: border-box;
    color: ${Colors.dark};
  }




h1,
h2,
h3 {
  padding-bottom: 14px;
  font-weight: 300;
  margin: 0;
}

p, ul, li, strong {
  font-family: Raleway;
  margin: 0;
  padding-bottom: 14px;
  font-weight: 400;
  color: ${Colors.dark};
}

h1 {
  font-size: 60px;

  line-height: 62px;

  ${BP.medium} {
    font-size: 50px;
    line-height: 52px;
  }

  ${BP.small} {
    font-size: 40px;
    line-height: 42px;
  }

}

h2 {
  font-size: 42px;
  line-height: 50px;

  ${BP.medium} {
    font-size: 42px;
    line-height: 44px;
  }

  ${BP.small} {
    font-size: 36px;
    line-height: 38px;
  }

}

h3 {
  font-size: 32px;
  line-height: 38px;

  ${BP.medium} {
    font-size: 32px;
    line-height: 36px;
  }

  ${BP.small} {
    font-size: 28px;
    line-height: 30px;
  }

}

h4 {

  font-size: 24px;
  line-height: 30px;

  &.heavy {
    font-weight: bold;
  }

  &.light {
    font-weight: 300;
  }
}

h5 {
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;

}

h6 {
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;

}

p {
  font-size: 16px;
  line-height: 24px;
}

a {
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;

}

button {
  &.btn {
    width: 230px;
    height: 50px;
    transition: .2s;
    border: 0;
    border-radius: 8px;
    background-color: ${Colors.white};
    color: ${Colors.primary};
    box-shadow: 0 3px 6px ${Colors.dark};


    &:hover {
      background-color: ${Colors.blue3};
      color: ${Colors.white};
      box-shadow: 0 6px 10px ${Colors.dark};
    }

  }
}
  `}
/>
)

export default BaseStyles
