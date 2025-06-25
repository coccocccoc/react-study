// 레이아웃 만들기
// 헤더와 컨텐츠를 가지고 있는 화면

import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

// 레이아웃 꾸미기
// styled component를 사용해서 css 쓰기

// styled component로 div 태그 생성
const LayoutDiv = styled.div`
  background-color: #e9ecef
`

// div 태그를 LayoutDiv 컴포넌트로 교체
const Layout = () => {
  // Outlet: 하위 라우트에 의해 내용이 결정됨
  // ex) /login => <Outlet></Outlet> 자리에 'Login...' 이 들어옴
  return (
    <LayoutDiv>
      {/* 링크를 클릭하면 콘텐츠 화면이 바뀜 */}
      {/* 로그인 화면... 회원가입 화면... 게시물 목록... */}
      <Header></Header>
      <Outlet></Outlet> {/* 콘텐츠 자리 */}
    </LayoutDiv>
  )
}

export default Layout