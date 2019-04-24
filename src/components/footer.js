import React from 'react'
import styled from '@emotion/styled'
import LogoColor from '../images/bruner-logo-color.svg'
import BgFooter from '../images/bgFooter.png'
import Colors from '../styles/colors'
import Bp from '../styles/breakpoints'


const Div = styled.div`
  h4 {
    font-weight: 300;
    margin: 0;
  }

  img {
    width: 200px;
    padding-bottom: 20px;
    border-bottom: ${Colors.green3} solid 1px;
    margin-bottom: 10px;
  }
  p {
    margin-top: 10px;
    font-size: 10px;
    color: ${Colors.gray}
  }
`

const FooterStyles = styled.footer`
  ${Div} {
    max-width: 1000px;
    margin: auto;
    padding: 0px 30px;
    margin-bottom: -200px;

    ${Bp.medium} {
      margin-bottom: -270px;
      padding: 0px 30px;
    }
  }
`


const FooterContainer = styled.div`
  background-image: url(${BgFooter});
  background-size: cover;
  height: 600px;
  background-repeat: no-repeat;


`

const Footer = () => (
<FooterStyles>
     <Div>
      <img src={LogoColor} alt="footer logo"/>
      <h4>Order Now</h4>
      <h4><strong>1.888.888.888</strong></h4>
      <p className='small'>© 2018. All rights reserved     Privacy Policy  |  Terms & Conditions</p>
    </Div>
    <FooterContainer>

  </FooterContainer>
</FooterStyles>
)

export default Footer;