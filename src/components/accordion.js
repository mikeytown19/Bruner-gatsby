import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import FaqData from '../data/faq'
import Colors from '../styles/colors'




const Container = styled.div`
  background-color: ${Colors.white2};
  text-align: left;
  margin: 15px auto;

  h5 {
    color: white;
    font-size: 16px;
    margin: 0;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${Colors.primary};
    cursor: pointer;
    padding: 10px;
    position: relative;

    button {
      color: white;
      background: ${Colors.primary};
      width: 40px;
      height: 40px;
      border: 0;
      font-size: 1.5em;
      position: relative;
      cursor: pointer;

      &:focus {
           outline:none;
        }

      span {
        position: absolute;
        transition: .3s;
        background: white;
        border-radius: 2px;

        &:first-of-type {
          top: 25%;
          bottom: 25%;
          width: 10%;
          left: 45%;
        }

        &:last-of-type {
            left: 25%;
            right: 25%;
            height: 10%;
            top: 45%;
          }

      }
    }

   }


   p {
    display: none;
    padding: 15px;
   }

   &.active {
    p {
      display: flex;
    }

    button {
      span {
        transform: rotate(90deg);

        &:last-of-type {
          left: 50%;
          right: 50%;
        }
      }
    }
   }


`


function Accordion() {
  const [opened, toggleOpened] = useState(0);

 const handleClick = (e) => {
  if(opened);
    e.currentTarget.classList.toggle('active')
 }

  useEffect(() => {
  }, [opened]);

    return (
      FaqData.map((item, index) => {

        return (
          <Container key={index} onClick={(e)=> {
            opened ? toggleOpened(opened - 1) : toggleOpened(opened + 1);
            handleClick(e);
          }}>
            <div>
            <h5>{item.title}</h5>
            <button><span></span><span></span></button>
            </div>
            <p opened={opened}>{item.answer}</p>
          </Container>
        )
      })
    )


}

export default Accordion;