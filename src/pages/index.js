import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from '@emotion/styled'
import SpaceImage from '../images/stars.jpg'
import { css } from '@emotion/core'
import PackageCards from '../components/packageCard'
import legalData from '../data/legal'
import Legal from '../components/legal'
import SideBySide from '../components/sidebyside'
import Devices from '../images/devices.png'
import Colors from '../styles/colors'
import Satellite from '../images/satellite.png'

const FlexWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props =>
    props.spaceAround ? 'space-around' : 'initial'};
`

const LegalStyleContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
`
const BackgroundColor = styled.div`
    background-color: ${props =>
    props.bgColor ? props.bgColor : 'transparent'};
`


const ContainerWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  padding: ${props =>
  props.largePadding ? '80px 0' : '1.45rem 1.0875rem'};
  text-align:  ${props =>
    props.textCenter ? 'center' : 'initial'};
  max-width: ${props =>
  props.maxWidth ? props.maxWidth + 'px' : 'intital'};
`

const H1 = styled.h1`
  font-size: 48px;
  font-weight: 100;
  line-height: 50px;
`

const H3 = styled.h3`
  font-size: 32px;
  font-weight: 100;
  line-height: 30px;
  margin: 0;
`

const Background = styled.div`
     background-image: url(${SpaceImage});
     background-size: cover;
     background-repeat: no-repeat;
     min-height: 500px;
     position: relative;
     color: white;
`

const Input = styled.input`
        height: 45px;
        border-radius: 5px 0px 0px 5px;
        padding-left: 15px;
        font-size: 16px;
        border: none;`

const ZipButton = styled.button`
            border: none;
            height: 47px;
            background-color: #009fe3;
            border-radius: 0px 5px 5px 0px;
            color: white;
            font-size: 16px;
            font-weight: 100;
            padding: 0px 35px;
            cursor: pointer;
`


const BorderLeftBox = styled.div`
  border-left: ${Colors.primary} solid 1px;
  padding: 0px 10px;
  margin: 1px;
  flex: 1;
  min-width: 250px;


  h3 {
    color: ${Colors.primary};
  }

`

const Button = styled.button`
  background-color: ${Colors.white};
  margin-top: 20px;
  padding: 10px 25px;
  border: none;
  color: ${Colors.primary};
  border-radius: 5px;
  box-shadow: 0px 4px 14px -7px black;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 24px -4px black;
  }
`

const Banner = styled.div`
  max-width: 1000px;
  margin: auto;
  text-align: center;
  padding: 30px;
  color: ${Colors.white};
  position: relative;




  &:before {
    top: -13px;
    left: 50%;
    content: '';
    height: 30px;
    width: 30px;
    background-color: ${Colors.primary};
    position: absolute;
    transform: rotate(45deg);
  }
`

const CardContainer = styled.div`
  max-width: 350px;
  background-color: white;
  border-radius: 5px;
  margin-top: 10px;

  h3 {
    background-color: ${Colors.primary};
    margin-top: 0;
    padding: 15px;
    color: white;
    border-radius: 5px 5px 0 0;
  }

  p {
    padding: 5px 15px 15px;
  }
`

const Card = ({children}) =>  (
    <CardContainer>
      {children}
    </CardContainer>
)




const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  <Background>

  <ContainerWrapper css={css`padding-top: 90px; text-align: center;`}>
      <H1>Discover Brüner Satellite <br/> Internet Bundles</H1>
      <p>Jimmy B is here to make the world a better place, one connection at a time.</p>
      <div css={css`margin-top: 50px;`}>
        <Input type='tel' placeholder="Enter Zip" />
        <ZipButton>Connect with the bruner</ZipButton>
      </div>

  </ContainerWrapper>
</Background>

    <ContainerWrapper>
      <H1 css={css`text-align: center;`}>Brüner’s Best Plans:</H1>
      <PackageCards />
      <LegalStyleContainer>
        <Legal data={legalData} />
      </LegalStyleContainer>
    </ContainerWrapper>

   <BackgroundColor bgColor={Colors.white2}>
    <ContainerWrapper largePadding>
        <SideBySide imgSrc="devices.png">
          <h2>We’re Here to Brand Everything, Everywhere, Anytime</h2>
          <p>Flat screen tv? Wireless divice? Tablet? Laptop? We can put our brand image on all of them. We can do it whenever we want, but mostly you’ll see our logo on your screen when you’re experiencing technical difficulties. This way, you will associate  our brand with some of your most emotional moments. </p>
        </SideBySide>
      </ContainerWrapper>
   </BackgroundColor>

    <ContainerWrapper css={css`padding-bottom: 50px;`}>
      <H1 css={css`text-align: center;`}>It Is Possible to Pay Us More <br /> Money</H1>
      <FlexWrap>
        <BorderLeftBox>
          <H3>Easy Care</H3>
          <p>For only $5.99/mo, you can get priority customer support with annual dish relocation, free service calls, and a priority hotline which connects straight to Jimmy’s Pager – faster than a Led Zeppelin guitar solo.  Plus, you can add or cancel Easy Care at anytime. </p>
        </BorderLeftBox>
        <BorderLeftBox>
          <H3>Voice</H3>
          <p>The industry term for digital phone service is VoIP. We want to mention VoIP here a few times so that we sound legit and you will forefit your dollars to us. Voice is the only VoIP connection that doesn’t subtract from your internet data allowing more time for Strongbad emails and Battlestar Galactica chat rooms.</p>

        </BorderLeftBox>
        <BorderLeftBox>
          <H3>DIRECTV</H3>
          <p>If you can get Brüner at your home, you can get DIRECTV and vice versa. If you can get water in your home, you can quench your thirst and take baths. There is a hypothetical situation where you can take a bath, stream patriotic tunes, watch DIRECTV, and quench your thirst all at the same time.  </p>
        </BorderLeftBox>
      </FlexWrap>

    </ContainerWrapper>

    <BackgroundColor bgColor={Colors.primary}>
      <Banner>
        <H3>Get Connected with Bruner Dynamics Today.</H3>
        <Button> Call 1.888.888.8888</Button>
      </Banner>
    </BackgroundColor>


    <ContainerWrapper largePadding>
        <SideBySide imgSrc='satellite.png' reverse>
          <h2>We’re Here to Brand Everything, Everywhere, Anytime</h2>
          <p>Flat screen tv? Wireless divice? Tablet? Laptop? We can put our brand image on all of them. We can do it whenever we want, but mostly you’ll see our logo on your screen when you’re experiencing technical difficulties. This way, you will associate  our brand with some of your most emotional moments. </p>
        </SideBySide>
      </ContainerWrapper>

      <BackgroundColor bgColor={Colors.white3}>
        <ContainerWrapper textCenter maxWidth="750">
          <h2>Equipment</h2>
          <p css={css`max-width: 550px; margin: auto; margin-bottom: 30px;`}>When you sign up for Brüner Dynamics, we make it easy to get connected. We’ll send a professional technician named Ralph to install your new dish in an optimal location and set up your wifi router inside your home. </p>
          <FlexWrap spaceAround>
            <Card>
              <H3>Brüner Satellite Dish</H3>
              <p>To access Brüner you’ll need a Brüner Satellite Dish. Jimmy’s cousin Ralph will test for the best installation location and install the dish on your abode. He’ll probably stay for dinner.</p>

            </Card>
            <Card>
              <H3>Brüner Wi-Fi Modem</H3>
              <p>The Brüner WiFi Modem gives you wireless internet throughout your home. It also includes a Voice service adapter so we can listen and see if anything cool is happening at your place. </p>
            </Card>
          </FlexWrap>

        </ContainerWrapper>
      </BackgroundColor>


      <ContainerWrapper textCenter maxWidth="750">
      <h2>Brüner Dynamics FAQs</h2>



      </ContainerWrapper>


  </Layout>
)

export default IndexPage
