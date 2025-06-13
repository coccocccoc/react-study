// 컴포넌트 만들기

// 개발자가 페이지만 만들면 자동으로 라우트..
// 파일 기반 라우트
// 폴더가 URL 주소가 됨

import React from 'react'

const About = () => {
  return (
    <>
      <h1>/app/sub/about/page.js</h1>
      <a href='/'>/app/page.js</a>
    </>
  )
}

export default About