import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from '@emotion/styled'
import {css} from '@emotion/core'
import Logo from '../images/bruner-logo.svg'
import LogoColor from '../images/bruner-logo-color.svg'

import NavigationData from '../data/navigation'
import Bp from '../styles/breakpoints'


const ContainerWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 20px;
  top: 0;
  z-index: 10;
  width: 100%;
  position: relative;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavLinkStyles = styled.div`
  margin-left: 30px;

  ${Bp.medium} {
    display: block;
  }
`

const FlexMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${Bp.medium} {
    width: 100%;
    justify-content: space-between;
    transition: all linear .2s;

    ${NavLinkStyles} {
      display: none;
      &.active {
      margin-top: 15px;
      position: fixed;
      display: block;
      right: 0;
      top: 60px;
      width: 100%;
      text-align: right;
      padding: 14px;
      background: linear-gradient(125deg, #00103a 0%, #3e5f77 100%);

        a {
          color: white;
          margin: 10px 0;

          &:hover {
            color: #5f91ff;
          }
        }
      }
    }


  }
`

const HamburgerStyles = styled.div`
  display: none;
  ${Bp.medium} {
    display: block;
    cursor: pointer;

    .bar1, .bar2, .bar3 {
      width: 35px;
      height: 5px;
      background-color:  ${props =>
      props.scrolled ? '#3e5f77' : 'white'};
      margin: 6px 0;
      transition: 0.4s;
    }

    &.change .bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }
    &.change .bar2 {opacity: 0;}
    &.change .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }
`

const HeaderStyles = styled.header`
      width: 100%;
      display: flex;
      justify-content: center;
      position: fixed;
      height: 80px;
      z-index: 11;
      transition: .51s;
      background-color: ${props =>
      props.scrolled ? 'white' : 'transparent'};
`



class Header extends React.Component {
  state = {
    scrolled: false,
  }

  componentDidMount() {
    console.log(window.scrollY)
    window.addEventListener('scroll', this.listenToScroll);
  }

  componentDidUpdate() {
    if(window.scrollY === 21) {
      this.listenToScroll();
    }

  }

   handleClick = e => {
    e.preventDefault()
    e.currentTarget.classList.toggle('change')
    document.querySelector('.navLinks').classList.toggle('active');
  }

  listenToScroll = (e) => {

   let scrolled = window.scrollY;

    scrolled > 20 ?
    this.setState({
      scrolled: true
    }) :
    this.setState({
      scrolled: false
    })
  }



  render() {
    let navColor =  this.state.scrolled ? '#009FE3' : 'white';


    const NavLink = styled(Link)`
      margin-left: 15px;
        color: ${navColor};
        text-decoration: none;
        transition: .2s;

        &:hover {
          color: #009FE3;
        }

        ${Bp.medium} {
          display: inherit;
        }
      `

        const NavLinks = props => (
          <NavLinkStyles className="navLinks">
          {NavigationData.map((item, index) => {
            return (
              <NavLink
              key={index}
              to={item.to}>
                {item.name}
              </NavLink>
            )
          })}
          </NavLinkStyles>
        )
    return (
      <HeaderStyles scrolled={this.state.scrolled} onScroll={() =>{
        console.log('scrolled')
      }}>
      <ContainerWrapper>
        <Flex>
          <FlexMobile>
            <Link to="/">
            <img src={this.state.scrolled ? LogoColor : Logo} alt="Main logo" />
            </Link>
            <NavLinks/>

            <HamburgerStyles
             onClick={(e)=>this.handleClick(e)}
             scrolled={this.state.scrolled}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </HamburgerStyles>

          </FlexMobile>


          <NavLink
            css={css`
            ${Bp.medium} {
              display: none;
            }
            font-size: 24px;`}
          to="/">Call Now 1.888.888.8888</NavLink>
        </Flex>
      </ContainerWrapper>
    </HeaderStyles>
    );
  }
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
