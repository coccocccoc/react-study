'use client' // 이 파일은 프론트엔드 파일임을 명시
import React, { useEffect, useState } from 'react'

// 이전에 만든 API를 연동하여, 가져온 데이터를 화면에 출력!

const Fetch = () => {

  const [data, setData] = useState({name:null})

  // API를 호출할 때 사용하는 자바스크립트의 함수
  // API를 호출하고 응답 받은 데이터를 화면에 출력
  // 첫번째 THEN 에서는 result에 response 메시지가 들어옴
  // json() 함수를 사용하여 메시지 안에 있는 바디데이터만 추출
  // 두번째 THEN에서는 앞에서 전달한 바디데이터를 출력

  // 잘못된 API 호출 방식
  // Fetch 컴포넌트 실행 ->  api 호출 -> state update -> 다시 Fetch 컴포넌트 실행 => 무한 루프 발생

  // useEffect: 컴포넌트가 생성될 때, 코드를 실행하는 도구
  // 타이머, API 같은 비동기 함수를 호출할 때 사용
  // 첫번째 인자: 실행할 함수
  // 두번째 인자: 실행 주기 (ex: 빈 배열은 컴포넌트가 생성될 때 한번만 실행)
  // useEffect를 사용하여 컴포넌트가 생성될 때 한번만 API를 호출
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + 'api/hello')
      .then(result => result.json())
      .then(json => {
        setData(json)
    })
  }, [])



  return (
    <>
      <h1>/app/sub/fetch/page.js</h1>
      <a href='/'>/app/page.js</a>
      {/* state 출력 */}
      <p>{data.name}</p>
    </>
  )
}

export default Fetch