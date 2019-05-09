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
    ${NavLinkStyles} {
      display: none;
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
      background-color: white;
      margin: 6px 0;
      transition: 0.4s;
    }

    .change .bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }
    .change .bar2 {opacity: 0;}
    .change .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }
  }
`

const Hamburger = () => (
  <HamburgerStyles>
  <div className="bar1"></div>
  <div className="bar2"></div>
  <div className="bar3"></div>

  </HamburgerStyles>
)


class Header extends React.Component {
  state = {
    scrolled: false,
    clicked: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }


   handleClick = ({target}) => {
    console.log('clicked', target);
    target.classList.add('change')
  }

  listenToScroll = () => {
   let scrolled = window.scrollY;

    scrolled > 20 ?
    this.setState({
      theposition: scrolled,
      scrolled: true
    }) :
    this.setState({
      theposition: scrolled,
      scrolled: false
    })
  }



  render() {
    let bgColor =  this.state.scrolled ? 'white' : 'transperant';
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
          <NavLinkStyles>
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
      <header css={css`
      width: 100%;
      display: flex;
      justify-content: center;
      position: fixed;
      height: 80px;
      z-index: 11;
      transition: .51s;
      background-color: ${bgColor};
      `}>
      <ContainerWrapper>
        <Flex>
          <FlexMobile>
            <Link to="/">
            <img src={this.state.scrolled ? LogoColor : Logo} alt="Main logo" />
            </Link>

            <NavLinks/>
              <div onClick={(e) => {this.handleClick(e) }}>
            <Hamburger />
            </div>

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
    </header>
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
