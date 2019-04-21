import React from 'react';
import PackageData from '../data/packages.js'
import styled from '@emotion/styled'
import { css } from "@emotion/core"

console.log(PackageData)

const PackageCard = styled.div`
  border: solid tomato 1px;
  flex: 1;
  margin: 1px;
  padding: 10px;
  min-width: 200px;
  max-width: 350px;
`

const PackageCards = () => (
  <div css={css`
    display: flex;
    flex-wrap: wrap;
  `}>
    {PackageData.map((item, index) => {
      console.log(item);
      const {name, price, priceCents,  priceDisc,  details } = item;
      return (
      <PackageCard key={index}>
        <div css={css`
          height: 100%;
        `}>
        <p css={css`
            font-size: 12px;
            font-weight: 600;
            color: #009FE3;
            `}>
          {name}
        </p>
        <div css={css`
          font-size: 36px;
          margin-top: -10px;
          position: relative;
          display: flex;
        `}>
          {price}
          <p css={css`

            font-size: 18px;
            top: 7px;
            margin-top: 7px;
          `}>{priceCents}</p>
          <p css={css`
             font-weight: 100;
             font-size: 24px;
             right: 0;
             margin-top: 8px;
          `}>/</p>
          <p css={css`
          font-size: 18px;
          `}>mo</p>
        </div>


        <p css={css`
          color: #8B8F95;
          font-size: 12px;
          margin-top: -10px;
        `}>{priceDisc}</p>
        {Object.values(details).map((a, indx) => {
          let {icon, text, subText} = a;

         return (
         <div key={indx}>
            <div css={css`
              display: flex;
            `}>
              <img src={icon} alt=''/>
              <div css={css`
                display: flex;
                flex-direction: column;
                margin-left: 8px;
              `}>
                <p css={css`
                  color: #009FE3;
                  margin-bottom: 0;
                  font-size: 14px;
                `}>{text}</p>
                <p css={css`
                  margin-top: 0;
                  color: #8B8F95;
                  font-size: 10px;
                `}>{subText}</p>
              </div>

            </div>

          </div>
         )
        })}

        <div css={css`
        font-size: 14px;
        background-color: #009FE3;
        cursor: pointer;
        padding: 10px;
        border-radius: 0px 0px 8px 8px;
        span {
          color: white;
        }
        `}>
        <span>Order the {name}</span>
        <span>1.888.888.8888</span>
        </div>
        </div>

      </PackageCard>
      )
    })}
  </div>
);


export default PackageCards;