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
import Colors from '../styles/colors'
import Wave from '../components/wave'
import Accordions from '../components/accordion'
import Footer from '../components/footer'
import Bp from '../styles/breakpoints'


const FlexWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props =>
    props.spaceAround ? 'space-around' : 'initial'};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(318px, 1fr));
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
  position: relative;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  padding: ${props => {
  if(props.largePadding) {
    return '50px 0'
  } else if(props.largePaddingFull) {
    return '50px 25px'
  }
  else {
   return  '1.45rem 1.0875rem'
  }
  }};
  text-align:  ${props =>
    props.textCenter ? 'center' : 'initial'};
  max-width: ${props =>
  props.maxWidth ? props.maxWidth  : 'intital'};
`

const H1 = styled.h1`
  font-weight: 500;
`


const H2 = styled.h2`
  font-weight: 300;
`
const H3 = styled.h3`
  font-weight: 300;
`

const H4 = styled.h4`
  font-weight: 300;
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
            height: 45px;
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

  ${Bp.medium} {
    border: none;

    h4 {
      border-bottom: ${Colors.primary} solid 2px;
    }
  }


  h4 {
    color: ${Colors.primary};
    margin-bottom: 10px;
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
  box-shadow: 0px 0px 8px -2px grey;

  h4 {
    background-color: ${Colors.primary};
    margin: 0;
    padding: 15px;
    color: white;
    border-radius: 5px 5px 0 0;

  }

  p {
    padding: 20px;
  }
`

const Card = ({children}) =>  (
    <CardContainer>
      {children}
    </CardContainer>
)


const SkyContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  background: linear-gradient(125deg, #00103a 0%, #3e5f77 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  height: 500px;

  ${ContainerWrapper} {
    width: 100%;
    position: absolute;
    padding-top: 0;
    color: white;
    text-align: center;

    ${Bp.medium} {
      padding-top: 75px;
    }
  }


  .sky-container {
  width: 100%;
  height: 100%;
  transform: rotate(-15deg);


}

.border {
  width: 100%;
  height: 100%;
  position: absolute;
  box-shadow: 0 0 3px 2px #d6d6d6;
  z-index: 100;
}

.star {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 2px;
  background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
  filter: drop-shadow(0 0 6px #699bff);
  animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
}

.star::before, .star::after {
  position: absolute;
  content: '';
  top: calc(50% - 1px);
  right: 0;
  height: 2px;
  background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0));
  border-radius: 100%;
  transform: translateX(50%) rotateZ(45deg);
  animation: shining 3000ms ease-in-out infinite;
}

.star::after {
  transform: translateX(50%) rotateZ(-45deg);
}

.star:nth-child(1) {
  top: calc(50% - 100px);
  left: calc(25% - 250px);
  animation-delay: 650ms;
}
.star:nth-child(1)::before, .star:nth-child(1)::after {
  animation-delay: 650ms;
}

.star:nth-child(2) {
  top: calc(50% + 50px);
  left: calc(50% - 800px);
  animation-delay: 150ms;
}
.star:nth-child(2)::before, .star:nth-child(2)::after {
  animation-delay: 150ms;
}

.star:nth-child(3) {
  top: calc(50%  + 20px);
  left: calc(50% + 200px);
  animation-delay: 1600ms;
}
.star:nth-child(3)::before, .star:nth-child(3)::after {
  animation-delay: 1600ms;
}

.star:nth-child(4) {
  top: calc(65% - 50px);
  left: calc(50% - 250px);
  animation-delay: 4700ms;
}
.star:nth-child(4)::before, .star:nth-child(4)::after {
  animation-delay: 4700ms;
}

.star:nth-child(5) {
  top: calc(50% - -190px);
  left: calc(50% + 400px);
  animation-delay: 2100ms;
}
.star:nth-child(5)::before, .star:nth-child(5)::after {
  animation-delay: 2100ms;
}




/* Animations */
@keyframes tail {
  0% {
    width: 0;
  }

  30% {
    width: 100px;
  }

  100% {
    width: 0;
  }
}

@keyframes shining {
  0% {
    width: 0;
  }
  50% {
    width: 30px;
  }
  100% {
    width: 0;
  }
}

@keyframes shooting {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(320px);
  }
}
`
const StarBackground = ({children}) => (
 <SkyContainer>
  <div className="sky-container">
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
    <div className="star"></div>
  </div>

  {children}
 </SkyContainer>

)






const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <StarBackground>

        <ContainerWrapper>
            <H1>Discover Brüner Satellite <br/> Internet Bundles</H1>
            <p css={css`color: white;`}>Jimmy B is here to make the world a better place, one connection at a time.</p>
            <div css={css`margin-top: 50px;`}>
              <Input type='tel' placeholder="Enter Zip" />
              <ZipButton>Connect with the bruner</ZipButton>
            </div>

        </ContainerWrapper>
    </StarBackground>

     <Wave />

    <ContainerWrapper largePadding>
      <H2 css={css`text-align: center;`}>Brüner’s Best Plans:</H2>
      <PackageCards />
      <LegalStyleContainer>
        <Legal data={legalData} />
      </LegalStyleContainer>
    </ContainerWrapper>


   <BackgroundColor bgColor={Colors.white2}>
    <ContainerWrapper largePadding>
        <SideBySide imgSrc="devices.png">
          <H2>We’re Here to Brand Everything, Everywhere, Anytime</H2>
          <p>Flat screen tv? Wireless divice? Tablet? Laptop? We can put our brand image on all of them. We can do it whenever we want, but mostly you’ll see our logo on your screen when you’re experiencing technical difficulties. This way, you will associate  our brand with some of your most emotional moments. </p>
        </SideBySide>
      </ContainerWrapper>
   </BackgroundColor>

    <ContainerWrapper largePadding>
      <H3 css={css`text-align: center; margin-bottom: 20px;`}>It Is Possible to Pay Us More Money</H3>
      <Grid>
        <BorderLeftBox>
          <H4>Easy Care</H4>
          <p>For only $5.99/mo, you can get priority customer support with annual dish relocation, free service calls, and a priority hotline which connects straight to Jimmy’s Pager – faster than a Led Zeppelin guitar solo.  Plus, you can add or cancel Easy Care at anytime. </p>
        </BorderLeftBox>
        <BorderLeftBox>
          <H4>Voice</H4>
          <p>The industry term for digital phone service is VoIP. We want to mention VoIP here a few times so that we sound legit and you will forefit your dollars to us. Voice is the only VoIP connection that doesn’t subtract from your internet data allowing more time for Strongbad emails and Battlestar Galactica chat rooms.</p>

        </BorderLeftBox>
        <BorderLeftBox>
          <H4>DIRECTV</H4>
          <p>If you can get Brüner at your home, you can get DIRECTV and vice versa. If you can get water in your home, you can quench your thirst and take baths. There is a hypothetical situation where you can take a bath, stream patriotic tunes, watch DIRECTV, and quench your thirst all at the same time.  </p>
        </BorderLeftBox>
      </Grid>

    </ContainerWrapper>

    <BackgroundColor bgColor={Colors.primary}>
      <Banner>
        <H3>Get Connected with Bruner Dynamics Today.</H3>
        <Button> Call 1.888.888.8888</Button>
      </Banner>
    </BackgroundColor>


    <ContainerWrapper largePadding>
        <SideBySide imgSrc='satellite.png' reverse>
          <H3>What is a Brüner?</H3>
          <p>You might as well ask what salt tastes like or how water feels. Until you’ve interacted with a Brüner first hand, you can only imagine how great you’ll feel. A warm handshake, a compliment, a rubix cube coaching session, or just a chat about your weekend will leave you feeling better about your self and the world in general. </p>
          <p>Brüner Dynamics is on course to change the world: </p>
          <ul>
            <li>98% of Americans have never hung out with Jimmy. That’s about to change. With satellite technology, you can hang with him all day, every day.</li>
            <li>You’ve probably seen our ambiguous guerilla marketing stickers plasterd at various locations from laptops to street lamps.</li>
          </ul>

        </SideBySide>
      </ContainerWrapper>

      <BackgroundColor bgColor={Colors.white3}>
        <ContainerWrapper textCenter maxWidth="750px" largePadding>
          <H3>Equipment</H3>
          <p css={css`max-width: 600px; margin: auto; margin-bottom: 30px;`}>When you sign up for Brüner Dynamics, we make it easy to get connected. We’ll send a professional technician named Ralph to install your new dish in an optimal location and set up your wifi router inside your home. </p>
          <FlexWrap spaceAround>
            <Card>
              <H4>Brüner Satellite Dish</H4>
              <p>To access Brüner you’ll need a Brüner Satellite Dish. Jimmy’s cousin Ralph will test for the best installation location and install the dish on your abode. He’ll probably stay for dinner.</p>
            </Card>
            <Card>
              <H4>Brüner Wi-Fi Modem</H4>
              <p>The Brüner WiFi Modem gives you wireless internet throughout your home. It also includes a Voice service adapter so we can listen and see if anything cool is happening at your place. </p>
            </Card>
          </FlexWrap>
        </ContainerWrapper>
      </BackgroundColor>



      <ContainerWrapper textCenter maxWidth="650px" largePaddingFull>
        <H3>Brüner Dynamics FAQs</H3>
        <Accordions />
      </ContainerWrapper>


      <Footer />


  </Layout>
)

export default IndexPage
