// import logo from './logo.svg';
// import './App.css';

import React from "react";


function App() {
  // HTML 코드 작성하기

  // 1. 자바 스크립트의 함수를 사용하여 HTML 태그 생성
  // 태그의 종류, props, 내용
  let element1 = React.createElement("div", null, "Hello");

  // 2. react의 jsx 문법을 사용하여 HTML 태그 생성
  // jsx 문법을 사용하면 내부적으로 createElement 함수가 호출되어 결과가 같음
  let element2 = <div>Hello</div>;

  return (
    // 생성한 태그를 화면에 추가
    // jsx 안에서 변수를 사용할 때는 {} 중괄호 사용
    <div className="App">
      {element1}
      {element2}
    </div>
  );
}

export default App;
