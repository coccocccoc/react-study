// Contact라는 컴포넌트 함수 정의

import React from 'react'
import styled from 'styled-components'

const ContactDiv = styled.div`
  background-color: lightyellow;
  padding: 10px;
  margin-top: 5px;
`

const Contact = () => {
  return (
    <ContactDiv>
      <h1>Contact</h1>
      Contact page...
    </ContactDiv>
  )
}

export default Contact