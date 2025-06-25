// About이라는 컴포넌트 함수 정의

import React from 'react'
import styled from 'styled-components'

// div 컴포넌트 생성
const AboutDiv = styled.div`
  background-color: pink;
  padding: 10px;
  margin-top: 5px;
`

const About = () => {
  return (
    <AboutDiv>
      <h1>About</h1>
      About page...
    </AboutDiv>
  )
}

export default About