import React from 'react';
import PackageData from '../data/packages.js'
import styled from '@emotion/styled'
import { css } from "@emotion/core"
import Colors from '../styles/colors'
import Bp from '../styles/breakpoints'

const Name = styled.p`
      font-size: 12px;
      font-weight: 600;
      color: ${Colors.primary};
      transition: colors .2s;
`

const PackageButton = styled.div`
        font-size: 14px;
        background-color: ${Colors.primary};
        cursor: pointer;
        padding: 10px;
        border-radius: 0px 0px 8px 8px;
        span {
          color: white;
        }
        transition: background-color .2s;
`

const PackageCard = styled.div`
  flex: 1;
  margin: 1px;
  padding: 10px;
  transition: .2s;
  border-right: solid ${Colors.lightgray} 1px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 340px;
  justify-content: space-between;
  width: 100%;


  &:nth-of-type(4) {
    border: none;
  }

  &:hover {
    /* color: ${Colors.primary}; */
    box-shadow: 0px 0px 11px -3px grey;
    border: solid transparent 1px;

    ${Name} {
      color: ${Colors.secondary};
    }

    ${PackageButton} {
      background-color: ${Colors.secondary};
    }

  }
`
const PriceContainer = styled.div`
    font-size: 36px;
    margin-top: -10px;
    font-weight: 100;
    position: relative;
    display: flex;
`

const PriceCents = styled.p`
        font-size: 18px;
        top: 7px;
        margin-top: 16px;
`

const PriceSlash = styled.p`
    font-weight: 100;
    font-size: 24px;
    right: 0;
    margin-top: 16px;
`

const PriceMo = styled.p`
    font-size: 18px;
    margin-top: 16px;
`

const PriceDisc = styled.p`
          color: ${Colors.gray};
          font-size: 12px;
          margin-top: -15px;
          padding-bottom: 2px;
    `

const Flex = styled.div`
  display: flex;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));

    ${Bp.medium} {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }

    ${Bp.small} {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
`


const CardText = styled.p`
               margin-bottom: 0;
               padding-bottom: 0;

               font-size: 14px;
`

const CardSubText = styled.p`
            margin-top: 0;
            color: ${Colors.gray};
            font-size: 10px;
            margin-bottom: 5px;
            padding-bottom: 0;
            line-height: 14px;

`

const PackageCards = () => (
  <Grid>
    {PackageData.map((item, index) => {

      const {name, price, priceCents,  priceDisc,  details } = item;
      return (
      <PackageCard color="teal" key={index}>
      <div>
      <Name>
          {name}
        </Name>
        <PriceContainer>
          {price}
          <PriceCents>{priceCents}</PriceCents>
          <PriceSlash>/</PriceSlash>
          <PriceMo>mo</PriceMo>
        </PriceContainer>
        <PriceDisc>{priceDisc}</PriceDisc>
        {Object.values(details).map((a, indx) => {
          let {icon, text, subText} = a;
          return (
          <div key={indx}>
              <Flex>
                <img src={icon} alt=''/>
                <Flex css={css`flex-direction: column; margin-left: 8px;`}>
                  <CardText>{text}</CardText>
                  <CardSubText>{subText}</CardSubText>
                </Flex>

              </Flex>

            </div>
          )
        })}
      </div>



        <PackageButton>
        <span>Order the {name}</span>
        <span>1.888.888.8888</span>
        </PackageButton>


      </PackageCard>
      )
    })}
  </Grid>
);


export default PackageCards;