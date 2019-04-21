import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from '@emotion/styled'
import SpaceImage from '../images/stars.jpg'
import { css } from '@emotion/core'
import PackageCards from '../components/packageCard'

const ContainerWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const H1 = styled.h1`
  font-size: 60px;
  font-weight: 100;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
  <div
  css={css`
     background-image: url(${SpaceImage});
     background-size: cover;
     background-repeat: no-repeat;
     min-height: 500px;
     position: relative;
     color: white;
  `}>

  <ContainerWrapper css={css`
    padding-top: 90px;
    text-align: center;`}>
      <H1>Discover Brüner Satellite <br/> Internet Bundles</H1>
      <p>Jimmy B is here to make the world a better place, one connection at a time. </p>
      <div css={css`
        margin-top: 50px;
      `}>
        <input type='tel'
        placeholder="Enter Zip"
        css={css`
        height: 45px;
        border-radius: 5px 0px 0px 5px;
        padding-left: 15px;
        font-size: 16px;
        border: none;
        `}/>
        <button
        css={css`
            border: none;
            height: 47px;
            background-color: #009fe3;
            border-radius: 0px 5px 5px 0px;
            color: white;
            font-size: 16px;
            font-weight: 100;
            padding: 0px 35px;
        `}
        >
        Connect with the bruner
        </button>
      </div>

  </ContainerWrapper>

</div>

    <ContainerWrapper>

      <H1 css={css`text-align: center;`}>Brüner’s Best Plans:</H1>

      <div>
      <PackageCards />
      </div>

    </ContainerWrapper>


  </Layout>
)

export default IndexPage
