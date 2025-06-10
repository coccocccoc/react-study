// Menu라는 컴포넌트 함수 정의

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'

// 세개의 링크를 감싸는 div 태그 생성
// styled component 방식으로 div 태그를 생성
const MenuDiv = styled.div`
  background-color: gainsboro;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;
`

const Menu = () => {
  return (
    <MenuDiv>
      {/* 링크 추가 */}
      {/* Link -> NavLink */}
      {/* NavLink: Link + 부가기능 */}
      {/* 링크를 클릭하면 클릭한 항목에 active class가 추가됨 */}
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </MenuDiv>
  )
}

export default Menu