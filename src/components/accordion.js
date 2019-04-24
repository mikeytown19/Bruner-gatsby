import React from 'react'
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
    background-color: ${Colors.primary};
    cursor: pointer;
    padding: 15px;
  }

  p {
    padding: 15px;
    display: none;
  }


`
const Plus = <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>

const Minus = <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg>;

class Accordion extends React.Component {
  state = {
    opened: false
  }
  render() {

    return (
      FaqData.map((item, index) => {
        console.log(Minus.props)
        return (
          <Container key={index}>
            <div>
            <h5>{item.title}</h5>
            {!this.state.opened ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg> :
             <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg> }
            </div>
            <p>{item.answer}</p>
          </Container>
        )
      })
    )
  }

}

export default Accordion;