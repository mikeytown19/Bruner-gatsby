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

class Header extends React.Component {
  state = {
    scrolled: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
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
          <Flex>
            <Link to="/">
            <img src={this.state.scrolled ? LogoColor : Logo} alt="Main logo" />
            </Link>

            <NavLinks/>

          </Flex>

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
