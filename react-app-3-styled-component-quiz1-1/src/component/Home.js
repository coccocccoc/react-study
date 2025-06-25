// Home이라는 컴포넌트 함수 정의

import React from 'react'
import styled from 'styled-components'

// styled component 방식으로 div 태그 생성
const HomeDiv = styled.div`
  background-color: aliceblue;
  padding: 10px;
  margin-top: 5px;
`

const Home = () => {
  return (
    <HomeDiv>
      <h1>Home</h1>
      Home page...
    </HomeDiv>
  )
}

export default Home